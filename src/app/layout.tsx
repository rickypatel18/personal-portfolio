import type { Metadata } from "next";
import { Roboto, Delius } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollContext from "./scroll-context/ScrollContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";

const roboto = Roboto({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  // Roboto Flex supports variable fonts, so we don't need to specify weight
});

const delius = Delius({
  variable: "--font-delius",
  subsets: ["latin"],
  weight: "400",
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
        className={`bg-white transition-colors dark:bg-black dark:text-white ${roboto.variable} ${delius.variable}`}
      >
        <ThemeProvider>
          <ScrollContext>
            <Navbar />
            <main className="min-h-screen pt-24">{children}</main>
            <Footer />
            <ScrollToTopButton /> 
          </ScrollContext>
        </ThemeProvider>
      </body>
    </html>
  );
}
