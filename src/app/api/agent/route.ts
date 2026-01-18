import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";
import { agentSystemPrompt, getModelName } from "@/lib/agent";

type Body = { messages?: unknown };

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 20;

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: Request) {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip") || "unknown";
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const entry = rateLimit.get(key);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) return false;
  entry.count += 1;
  return true;
}

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      {
        error:
          "AI non configurata. Imposta OPENAI_API_KEY in .env.local (vedi .env.example).",
      },
      { status: 501 }
    );
  }

  const ip = getClientIp(req);
  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Rate limit raggiunto. Riprova tra poco." },
      { status: 429 }
    );
  }

  const body = (await req.json().catch(() => ({}))) as Body;
  const rawMessages = Array.isArray(body.messages) ? (body.messages as unknown[]) : [];

  const looksLikeUiMessage = (m: unknown): m is UIMessage => {
    if (!m || typeof m !== "object") return false;
    const role = (m as { role?: unknown }).role;
    const parts = (m as { parts?: unknown }).parts;
    return (
      (role === "user" || role === "assistant" || role === "system") &&
      Array.isArray(parts)
    );
  };

  const uiMessages = rawMessages.filter(looksLikeUiMessage) as UIMessage[];
  const modelMessages = await convertToModelMessages(uiMessages, {
    ignoreIncompleteToolCalls: true,
  });

  const result = streamText({
    model: openai(getModelName()),
    system: agentSystemPrompt,
    messages: modelMessages,
    temperature: 0.3,
  });

  return result.toTextStreamResponse();
}
