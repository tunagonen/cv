import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "CV",
  description: "Tuna Gönen",
  icons: {
    icon: './favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">  
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
