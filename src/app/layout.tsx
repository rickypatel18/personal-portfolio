import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollContext from "./scroll-context/ScrollContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Loading from "./Loading";
import { Delius, Montserrat } from "next/font/google";
import ScrollIndicator from "@/components/ScrollIndicator";

const delius = Delius({
  variable: "--font-delius",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Devfolio | Professional Developer Portfolio",
    template: "%s | Devfolio",
  },
  description:
    "Showcase your development projects with Devfolio - A modern portfolio built with Next.js, Tailwind CSS, and Framer Motion. Highlight your skills and experience effectively.",
  keywords: [
    "Developer Portfolio",
    "Next.js Portfolio",
    "React Developer",
    "Framer Motion",
    "Web Developer",
    "Frontend Developer",
    "Portfolio Template",
    "Developer CV",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`bg-white transition-colors dark:bg-black dark:text-white ${delius.variable} ${montserrat.variable} font-sans`}
      >
      <ScrollIndicator/>
        <Loading />
        <ThemeProvider>
          <ScrollContext>
            <Navbar />
            <main id="main-content" className="min-h-screen pt-24">
              {children}
            </main>
            <Footer />
            <ScrollToTopButton />
          </ScrollContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
