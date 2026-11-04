import type { Metadata, Viewport } from "next";
import { Caveat, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  variable: "--nf-serif",
  subsets: ["latin"],
  axes: ["opsz"],
  style: ["normal", "italic"],
});

const hand = Caveat({
  variable: "--nf-hand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Niranjan P N — Full Stack & ML Engineer",
  description:
    "Final-year AI & ML student building FastAPI + Next.js applications with explainable XGBoost models. Cognizant Hackathon finalist.",
  icons: { icon: "/image.jpg" },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${hand.variable}`}>{children}</body>
    </html>
  );
}
