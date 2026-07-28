import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { Analytics } from "@/components/layout/Analytics";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.abraham-immobilien.de"),
  title: {
    default: "Abraham Immobilien Berlin | Off-Market Immobilien",
    template: "%s | Abraham Immobilien Berlin",
  },
  description:
    "Diskreter Zugang zu Berliner Off-Market-Immobilien. Für Investoren, Eigentümer und Family Offices. Abraham Immobilien Advisors GmbH, Kurfürstendamm 15.",
  openGraph: {
    locale: "de_DE",
    type: "website",
    siteName: "Abraham Immobilien",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
