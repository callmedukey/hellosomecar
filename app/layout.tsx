import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";
import Header from "@/components/layout/Header";
import FixedBanner from "@/components/layout/FixedBanner";
import Cushion from "@/components/layout/Cushion";
import Footer from "@/components/layout/Footer";
import FixedKakao from "@/components/layout/FixedKakao";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";

const myFont = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pre",
});

export const metadata: Metadata = {
  title: "HELLO썸카 중고차 전문기업",
  description:
    "저신용으로 인한 중고차 구매가 힘드신가요? 파산/면책/회생/신용불량/한도 부족 ok. 심사부터 출고까지 다이렉트! 한도 부족 타사 거절돼도 연체중이 아니고 소득증빙 가능하면 OK. 개인회생 파산면책 인가 후 신용 회복은 회복 후 납부 1회 이상 즉시 가능.",
  keywords: [
    "저신용중고차",
    "저신용중고차할부",
    "저신용중고차전액할부",
    "중고차",
    "마이드림카",
    "파산중고차",
    "회생중고차",
    "신용불량중고차",
    "신불자중고차",
    "중고차할부",
    "중고차전액할부",
  ],
  openGraph: {
    images: "https://hellosomecar.com/Banner1.webp",
    type: "website",
    url: `https://hellosomecar.com`,
    title: `썸카`,
    description: `저신용으로 인한 중고차 구매가 힘드신가요? 파산/면책/회생/신용불량/한도 부족 ok. 심사부터 출고까지 다이렉트! 한도 부족 타사 거절돼도 연체중이 아니고 소득증빙 가능하면 OK. 개인회생 파산면책 인가 후 신용 회복은 회복 후 납부 1회 이상 즉시 가능.`,
  },
  icons: { icon: "/favicon.ico" },
  other: {
    "naver-site-verification": "03b8ee3790d87c02578471f7a473fb5d5468f790",
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
        <FixedKakao />
        <GoogleAnalytics gaId="G-W6168CPBXB" />
        <Script
          id="smlog-script"
          dangerouslySetInnerHTML={{
            __html: `var hpt_info={'_account':'UHPT-28843', '_server': 'a28'};`,
          }}
        ></Script>
        <Script
          id="meta-script"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '8095756323861752');
fbq('track', 'PageView');
`,
          }}
        ></Script>
        <noscript>
          <img
            src="//a28.smlog.co.kr/smart_bda.php?_account=28843"
            style={{ display: "none", width: 0, height: 0 }}
          />
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=8095756323861752&ev=PageView&noscript=1"
          />
        </noscript>
        <Script src="//cdn.smlog.co.kr/core/smart.js" />
      </body>
    </html>
  );
}
