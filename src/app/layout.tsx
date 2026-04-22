import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://tncy.dev'),
  title: {
    default: "Tuncay — Web & Mobile Developer",
    template: "%s · tncy.dev",
  },
  description: "Websitesi ve Mobil Uygulama geliştiriyorum.",
  keywords: ["Flutter", "Mobile Development"],
  authors: [{ name: "Tuncay" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tncy.dev",
    siteName: "tncy.dev",
    title: "Tuncay — Web & Mobile Developer",
    description: "Websitesi ve Mobil Uygulama geliştiriyorum.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuncay — Web & Mobile Developer",
    description: "Websitesi ve Mobil Uygulama geliştiriyorum.",
    creator: "@tuncay",
    images: [
      {
        url: "https://tncy.dev/profile.jpeg",
        alt: "Tuncay — Web & Mobile Developer",
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
    <html lang="tr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-stone-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 min-h-screen flex flex-col selection:bg-primary-500/30">
        <ThemeProvider>
          <LanguageProvider>
            <Navigation />
            <main className="flex-grow pt-16">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
