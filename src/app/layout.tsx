import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
    "DevGenius | Una web para hacer el trabajo de los desarrolladores más fácil aprovechando la inteligencia artificial.",
  description:
    "Una web para hacer el trabajo de los desarrolladores más fácil aprovechando la inteligencia artificial.",
  metadataBase: new URL("https://dev-genius-mdoo.vercel.app/"),
  keywords: [
    "DevGenius",
    "inteligencia artificial",
    "programadores",
    "nombres de variables",
    "explicar código",
    "paletas de colores",
    "Tailwind",
    "Next.js",
  ],
  applicationName: "DevGenius",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "DevGenius | IA para devs",
    description:
      "Genera nombres creativos, entiende código y crea paletas de color con IA.",
    url: "https://dev-genius-mdoo.vercel.app/",
    siteName: "DevGenius",
    locale: "es_ES",
    type: "website",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} dark antialiased min-h-screen flex flex-col`}
      >
        <header className="border-b p-4">
          <Header />
        </header>
        <main className="flex-1 p-6 sm:p-4 m-2">{children}</main>
        <footer className="border-t px-4 py-2">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
