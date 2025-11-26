import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tncy.dev'),
  title: {
    default: "Tuncay - Web & Mobile Developer",
    template: "%s | tncy.dev",
  },
  description: "Websitesi ve Mobil Uygulama geliştiriyorum.",
  keywords: ["Flutter", "Mobile Development"],
  authors: [{ name: "Tuncay" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tncy.dev",
    siteName: "tncy.dev",
    title: "Tuncay - Web & Mobile Developer",
    description: "Websitesi ve Mobil Uygulama geliştiriyorum.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuncay - Web & Mobile Developer",
    description: "Websitesi ve Mobil Uygulama geliştiriyorum.",
    creator: "@tuncay",
    images: [
      {
        url: "https://tncy.dev/profile.jpeg",
        alt: "Tuncay - Web & Mobile Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={inter.variable}>
      <body className="font-sans antialiased bg-gray-50 dark:bg-gray-950 min-h-screen flex flex-col selection:bg-primary-500/30 selection:text-primary-900 dark:selection:text-primary-100">
        <ThemeProvider>
          <Navigation />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
