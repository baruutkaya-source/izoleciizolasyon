import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";
export const alt = "İzoleci İzolasyon - Sıvı İzolasyon Hizmetleri";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #006980, #00afd7, #40E0D0)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, marginBottom: 16 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 28, opacity: 0.9 }}>
          Profesyonel Sıvı İzolasyon Hizmetleri
        </div>
        <div style={{ fontSize: 20, marginTop: 24, opacity: 0.8 }}>
          İzmir · Çeşme · Aydın · Manisa | 20 Yıllık Tecrübe
        </div>
      </div>
    ),
    { ...size }
  );
}
