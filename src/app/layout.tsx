
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsappButton";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IGTL",
  description: "Your Trusted Partner in BPO, KPO & Technology Solutions.",
  icons:{
    icon:"/icon.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 

  return (
    <html lang="en">

      <body className={`${inter.className} antialiased`}>
        <Navbar />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
