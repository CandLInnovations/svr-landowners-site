import type { Metadata } from "next";
import { Playfair_Display, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700", "900"],
  style: ["normal", "italic"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "SVR Community — Take Back Our Ranch",
  description:
    "Sierra Verde Ranch landowners: the management company costs us $141,050/year — 48% of all income. We can do better. Here's the plan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lora.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Nav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
