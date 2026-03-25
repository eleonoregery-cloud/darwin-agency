import type { Metadata } from "next";
import { Anton, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: ["400"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Darwin Agency — Creative Thinking au service des marques",
  description:
    "Agence digitale dédiée à la performance depuis 23 ans. SEO, SEA, SMA, MEDIA, Analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${anton.variable} ${sourceSans.variable}`}>
      <body style={{ fontFamily: "var(--font-source-sans), sans-serif", margin: 0, padding: 0 }}>
        <Header />
        <main style={{ paddingTop: 68 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
