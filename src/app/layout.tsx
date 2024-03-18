import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "2024/07/07 神前式",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body style={{ margin: 0 }}>
        <div style={{ margin: 'auto'}}>
          {children}
        </div>
      </body>
    </html>
  );
}
