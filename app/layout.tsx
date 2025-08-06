import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yoga Studio Calculator",
  description: "Estimate profit, expenses, and revenue with this free yoga studio planner.",
  openGraph: {
    title: "Yoga Studio Calculator",
    description: "Built by ShadyPie — this smart calculator helps yoga entrepreneurs model their business.",
    url: "https://yoga-studio-calculator.vercel.app",
    siteName: "ShadyPie Tools",
    images: [
      {
        url: "https://yoga-studio-calculator.vercel.app/preview.png", // Add this image if you make one
        width: 1200,
        height: 630,
        alt: "Yoga Studio Calculator preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
