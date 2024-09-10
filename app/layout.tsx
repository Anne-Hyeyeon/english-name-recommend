import { Metadata } from "next";
import "./globals.css";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
 title: "영어이름 추천 프로그램",
 description: "춘자가 추천해 주는 영어이름",
 openGraph: {
  type: "website",
  url: "https://localhost:3000",
  title: "영어이름",
  description: "추천해 줄게요.",
 },
 icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon-16x16.png",
  apple: "/apple-touch-icon.png",
 },
};
export default function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="ko" className="h-full">
   <body className="flex flex-col min-h-screen bg-gray-50 font-sans">
    <main className="flex-grow flex justify-center items-star t">
     <div className="w-full max-w-xl bg-white overflow-hidden">{children}</div>
    </main>
    <Footer />
   </body>
  </html>
 );
}
