import type { Metadata } from "next";
import { Poppins, Noto_Sans_KR, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medisian.vercel.app"),
  title: "MEDISIAN - CELL Management Service Organization",
  description:
    "메디시안은 전문적인 경영 프로세스를 바탕으로 클리닉 개원을 준비하시는 원장님들께 차별화된 병원 경영 지원(MSO) 서비스를 제공합니다.",
  openGraph: {
    title: "MEDISIAN - CELL Management Service Organization",
    description:
      "메디시안은 전문적인 경영 프로세스를 바탕으로 차별화된 병원 경영 지원(MSO) 서비스를 제공합니다.",
    images: ["/images/sns_img.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${poppins.variable} ${notoSansKR.variable} ${cinzel.variable} font-noto antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
