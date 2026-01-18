import { ImageResponse } from "next/og";
import { site } from "@/lib/seo";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #0a0a0a, #111827)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 56, fontWeight: 700, lineHeight: 1.1 }}>
          {site.name}
        </div>
        <div
          style={{
            marginTop: 18,
            fontSize: 28,
            opacity: 0.85,
            maxWidth: 900,
          }}
        >
          Portfolio, progetti e contatti — Next.js + SEO + AI.
        </div>
        <div style={{ marginTop: 42, fontSize: 18, opacity: 0.75 }}>
          {site.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    size
  );
}
