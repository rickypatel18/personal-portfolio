import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollContext from "./scroll-context/ScrollContext";
import FooterNew from "@/components/FooterNew";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Devfolio | Portfolio Website using Next.js, Tailwind CSS, and Framer Motion",
  description:
    "Devfolio is a portfolio website for developers to showcase their projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <ScrollContext>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
          <FooterNew/>
          </ScrollContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
