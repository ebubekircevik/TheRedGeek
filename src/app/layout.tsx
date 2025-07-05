import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/shared/components/Navbar";
import Footer from "@/shared/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheRedGeek - Tech Blog",
  description:
    "Technology, Programming & Innovation Blog. Discover the latest insights in software development, web technologies, and digital innovation.",
  keywords: [
    "technology",
    "programming",
    "web development",
    "software",
    "blog",
    "tech",
  ],
  authors: [{ name: "TheRedGeek" }],
  creator: "TheRedGeek",
  publisher: "TheRedGeek",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://theredgeek.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TheRedGeek - Tech Blog",
    description: "Technology, Programming & Innovation Blog",
    url: "https://theredgeek.com",
    siteName: "TheRedGeek",
    images: [
      {
        url: "/icon.svg",
        width: 32,
        height: 32,
        alt: "TheRedGeek Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TheRedGeek - Tech Blog",
    description: "Technology, Programming & Innovation Blog",
    images: ["/icon.svg"],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
