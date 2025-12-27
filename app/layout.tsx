import type { Metadata } from "next";
import "./globals.css";
import { TranslationProvider } from "../i18n/TranslationProvider";

export const metadata: Metadata = {
  title: "Agrosentinels Diagnostic Measuring System",
  description: "We take care of your machines",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/decoration.png" sizes="any" />
        <link rel="apple-touch-icon" href="/decoration.png" />
      </head>

      <body className="bg-neutral-50">
        <TranslationProvider>{children}</TranslationProvider>
      </body>
    </html>
  );
}
