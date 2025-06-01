import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Playfair_Display, Source_Sans_3, Ubuntu, Montserrat } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "CV",
  description: "Tuna Gönen",
  icons: {
    icon: './favicon.ico'
  }
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
});

const ubuntuMono = Ubuntu({
  subsets:["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export {  montserrat,ubuntuMono,sourceSans,inter, playfair };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
