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
  metadataBase: new URL("https://www.nikke.life"),
  title: "My First Site",
  description: "Next.js + TypeScript + Tailwind CSS 스타터 프로젝트입니다.",
  openGraph: {
    title: "My First Site",
    description: "Next.js + TypeScript + Tailwind CSS 스타터 프로젝트입니다.",
    url: "https://www.nikke.life",
    siteName: "My First Site",
    images: ["/favicon2.png"],
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    google: "h7EelifGzd4F9L-KVqTwDfJ5f-po73hwLs8knzhW9Kc",
    other: {
      "naver-site-verification": "66133a2916abb589b09b912bc9975383085ee456",
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
