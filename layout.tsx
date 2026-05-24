import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MTG Draft Cost Calculator",
  description: "Magic: The Gathering draft event planner"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body data-theme="dimir">{children}</body>
    </html>
  );
}
