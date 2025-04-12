// src/app/layout.tsx
import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Geist 제거, Poppins만 사용
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome CSS 임포트

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], // Poppins 폰트 가중치 설정
  variable: "--font-poppins", // CSS 변수 설정
  subsets: ["latin"], // 사용할 서브셋
  display: "swap", // 폰트 로드 방식
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}