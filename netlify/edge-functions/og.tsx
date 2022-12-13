import React from "https://esm.sh/react@18.2.0";
import { ImageResponse } from "https://deno.land/x/og_edge@0.0.2/mod.ts";

export default async function handler(req: Request) {
  const url = new URL(req.url);
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title");
  const InterBold = await fetch("https://fonts.cdnfonts.com/s/19795/Inter-Bold.woff").then((res) => res.arrayBuffer());
  const InterRegular = await fetch("https://fonts.cdnfonts.com/s/19795/Inter-Regular.woff").then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(90deg, #18181b, #3f3f46)",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "2rem",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            height: "80%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "72",
              color: "white",
              fontWeight: "700",
              flexWrap: "wrap",
              width: "100%",
              padding: "0 1.5rem",
            }}
          >
            {title}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "20%",
            display: "flex",
            padding: "2rem",
            alignItems: "center",
            justifyContent: "space-between",
            color: "#999",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: ".75rem",
            }}
          >
            <span
              style={{
                fontSize: "30",
                color: "#a1a1aa",
                marginLeft: "1rem",
                marginTop: "6px",
              }}
            >
              basicblog.lanceross.xyz
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "1rem",
                fontSize: "30",
              }}
            >
              <span
                style={{
                  color: "#a1a1aa",
                  marginRight: "1rem",
                }}
              >
                Lance Ross
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          data: InterRegular,
          name: "Inter",
          weight: 400,
          style: "normal",
        },
        {
          data: InterBold,
          name: "Inter",
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
