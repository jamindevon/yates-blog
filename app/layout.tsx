import type { Metadata } from "next";
import "./globals.css";
import { MetaPixel } from "@/components/MetaPixel";

export const metadata: Metadata = {
  title: "Free Pre-Planning Guide | Yates Funeral Home",
  description: "Download your free funeral pre-planning guide and take control of your final arrangements. Relieve your family of difficult decisions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <MetaPixel />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
