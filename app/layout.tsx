import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import FixedBanner from "@/components/layout/FixedBanner";
import Cushion from "@/components/layout/Cushion";
import Footer from "@/components/layout/Footer";

const myFont = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pre",
});

export const metadata: Metadata = {
  title: "HELLO썸카",
  description:
    "저신용으로 인한 중고차 구매가 힘드신가요? 파산/면책/회생/신용불량/한도 부족 ok",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          myFont.variable,
          "font-pre tracking-[-0.1rem] min-h-screen bg-background antialiased"
        )}
      >
        <Header />
        {children}
        <FixedBanner />
        <Footer />
        <Cushion />
      </body>
    </html>
  );
}
