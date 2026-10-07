import type { Metadata } from "next";
import { Inter, League_Gothic } from "next/font/google";
import "./globals.css";

// Fonts: swap these two imports to change the brand fonts, then update
// --font-display / --font-sans in app/globals.css if you rename the variables.
const display = League_Gothic({
  subsets: ["latin"],
  variable: "--font-league-gothic",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Style Guide",
  description: "Design tokens and components, defined in globals.css with Tailwind CSS.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
