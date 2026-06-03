import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crystals Dry Cleaning & Laundromat | Wheat Ridge & Wellington, CO",
  description:
    "Self-service laundromats with 80 & 100 lb washers, wash & fold, organic dry cleaning and doorstep pickup & delivery. Serving the Colorado Front Range.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
