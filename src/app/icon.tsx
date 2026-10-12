import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #00afd7, #40E0D0)",
          borderRadius: 6,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M12 2C11.4 2 11 2.4 11 3V8.5H9C7.9 9.5 7 10.4 7 11.5V13.5C7 14 7.3 14.4 7.7 14.6L6 19.5C5.7 20.4 6.4 21.3 7.4 21.3H16.6C17.6 21.3 18.3 20.4 18 19.5L16.3 14.6C16.7 14.4 17 14 17 13.5V11.5C17 10.4 16.1 9.5 15 9.5H13V3C13 2.4 12.6 2 12 2Z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
