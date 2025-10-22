import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Particles } from "@/components";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "José Pereira | Full Stack Web Engineer",
  description: "José Pereira | Full Stack Web Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${inter.className} antialiased bg-neutral-900 text-slate-400`}
      >
        <Particles />
        {children}
      </body>
    </html>
  );
}
