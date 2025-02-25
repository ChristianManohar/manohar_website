import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";


export const geistMono = Geist_Mono({
  weight: ["400", "400"],
  subsets: ["latin"],
  variable: "--font-geist_mono",
});

export const metadata: Metadata = {
  title: "Christian Manohar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
