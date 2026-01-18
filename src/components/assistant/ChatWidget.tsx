"use client";

import { useEffect, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { cn } from "@/lib/cn";
import { MessageCircle, X } from "lucide-react";

function messageToText(message: UIMessage) {
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text)
    .join("")
    .trim();
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const { messages, sendMessage, status, error, clearError } = useChat({
    transport: new DefaultChatTransport({ api: "/api/agent" }),
  });

  const isLoading = status === "submitted" || status === "streaming";

  async function onSubmit(e?: { preventDefault?: () => void }) {
    e?.preventDefault?.();
    const text = input.trim();
    if (!text || isLoading) return;
    clearError();
    setInput("");
    await sendMessage({ text });
  }

  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => {
      const el = document.getElementById("chat-input");
      el?.focus();
    }, 50);
    return () => clearTimeout(t);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 w-[min(92vw,380px)] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-zinc-950">
          <div className="flex items-center justify-between border-b border-black/5 px-4 py-3 dark:border-white/10">
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-black dark:text-white">
                Assistente
              </span>
              <span className="text-xs text-black/60 dark:text-white/60">
                Risposte rapide (beta)
              </span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-2 text-black/70 hover:bg-black/5 dark:text-white/70 dark:hover:bg-white/10"
              aria-label="Chiudi chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="max-h-[55vh] space-y-3 overflow-y-auto px-4 py-4">
            {messages.length === 0 && (
              <div className="w-fit max-w-[85%] rounded-2xl bg-black/5 px-4 py-2 text-sm leading-6 text-black dark:bg-white/10 dark:text-white">
                Ciao! Posso aiutarti a capire servizi, progetti e come contattare Diego. Cosa ti
                serve?
              </div>
            )}

            {messages.map((m) => {
              const text = messageToText(m);
              if (!text) return null;
              return (
                <div
                  key={m.id}
                  className={cn(
                    "w-fit max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-6",
                    m.role === "user"
                      ? "ml-auto bg-black text-white dark:bg-white dark:text-black"
                      : "bg-black/5 text-black dark:bg-white/10 dark:text-white"
                  )}
                >
                  {text}
                </div>
              );
            })}
            {error && (
              <div className="rounded-xl bg-red-500/10 px-3 py-2 text-xs text-red-600 dark:text-red-400">
                {String(error.message || error)}
              </div>
            )}
          </div>

          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-black/5 p-3 dark:border-white/10"
          >
            <input
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Scrivi un messaggio…"
              className="h-11 flex-1 rounded-xl border border-black/10 bg-white px-3 text-sm text-black outline-none ring-0 placeholder:text-black/40 focus:border-black/20 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:placeholder:text-white/40 dark:focus:border-white/20"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="h-11 rounded-xl bg-black px-4 text-sm font-medium text-white transition disabled:opacity-60 dark:bg-white dark:text-black"
            >
              {isLoading ? "…" : "Invia"}
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
        aria-label={open ? "Chiudi assistente" : "Apri assistente"}
      >
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline">AI</span>
      </button>
    </div>
  );
}
