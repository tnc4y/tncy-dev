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
    default: "Tuncay - Web and Mobile Developer",
    template: "%s | tncy.dev",
  },
  description: "Websitesi ve Mobil Uygulama geliştiriyorum.",
  keywords: ["ESP32", "STM32", "IoT", "Embedded Systems", "LoRa", "Matter", "Arduino", "Flutter", "Mobile Development"],
  authors: [{ name: "Tuncay" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tncy.dev",
    siteName: "tncy.dev",
    title: "Tuncay - Web and Mobile Developer",
    description: "Embedded Systems ve IoT Developer. ESP32, STM32, LoRa, Matter, Arduino projeleri ve blog yazıları.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuncay - Web and Mobile Developer",
    description: "Embedded Systems ve IoT Developer. ESP32, STM32, LoRa, Matter, Arduino projeleri ve blog yazıları.",
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
