import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Tuncay - Full Stack Developer",
    template: "%s | Tuncay.dev",
  },
  description: "Full Stack Developer passionate about modern web technologies. Blog, projects, and more.",
  keywords: ["Next.js", "React", "TypeScript", "Web Development", "Full Stack"],
  authors: [{ name: "Tuncay" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tuncay.dev",
    siteName: "Tuncay.dev",
    title: "Tuncay - Full Stack Developer",
    description: "Full Stack Developer passionate about modern web technologies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuncay - Full Stack Developer",
    description: "Full Stack Developer passionate about modern web technologies.",
    creator: "@tuncay",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans antialiased bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
