import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Tuncay - Embedded Systems & IoT Developer",
    template: "%s | tncy.dev",
  },
  description: "Embedded Systems ve IoT Developer. ESP32, STM32, LoRa, Matter, Arduino projeleri ve blog yazıları.",
  keywords: ["ESP32", "STM32", "IoT", "Embedded Systems", "LoRa", "Matter", "Arduino", "Flutter", "Mobile Development"],
  authors: [{ name: "Tuncay" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tncy.dev",
    siteName: "tncy.dev",
    title: "Tuncay - Embedded Systems & IoT Developer",
    description: "Embedded Systems ve IoT Developer. ESP32, STM32, LoRa, Matter, Arduino projeleri ve blog yazıları.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuncay - Embedded Systems & IoT Developer",
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
      <body className="font-sans antialiased bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
        <ThemeProvider>
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <script dangerouslySetInnerHTML={{
          __html: `
            function copyToClipboard(button) {
              const code = decodeURIComponent(button.dataset.code);
              navigator.clipboard.writeText(code).then(() => {
                const originalText = button.textContent;
                button.textContent = 'Kopyalandı!';
                button.style.color = '#10b981';
                setTimeout(() => {
                  button.textContent = originalText;
                  button.style.color = '';
                }, 2000);
              }).catch(err => {
                console.error('Kopyalama hatası:', err);
                button.textContent = 'Hata!';
                setTimeout(() => {
                  button.textContent = 'Kopyala';
                }, 2000);
              });
            }
          `
        }} />
      </body>
    </html>
  );
}
