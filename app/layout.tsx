import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agrosentinels Diagnostic Measuring System ",
  description: "We take care of your machines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        ></link>

        <link rel="icon" href="/as-logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/as-logo-small.png" />
      </head>
      <body className="bg-neutral-50">{children}</body>
    </html>
  );
}