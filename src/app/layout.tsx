import type { Metadata } from "next";
import { Delius, Montserrat } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollContext from "./scroll-context/ScrollContext";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import "./globals.css";

// Optimized fonts with display swap
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

// Enhanced metadata for SEO
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
    "Tailwind CSS",
    "Framer Motion",
    "Web Developer",
    "Frontend Developer",
    "Portfolio Template",
    "Developer CV",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Devfolio | Modern Developer Portfolio",
    description:
      "A professional portfolio template for developers to showcase their work",
    url: "https://yourdomain.com",
    siteName: "Devfolio",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Devfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devfolio | Modern Developer Portfolio",
    description:
      "A professional portfolio template for developers to showcase their work",
    images: ["https://yourdomain.com/twitter-image.jpg"],
  },
  metadataBase: new URL("https://yourdomain.com"),
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <body
        className={`bg-white transition-colors dark:bg-black dark:text-white ${delius.variable} ${montserrat.variable} font-sans`}
      >
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
