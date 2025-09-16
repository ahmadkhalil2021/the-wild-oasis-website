import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/__styles/globals.css";
import Header from "./_components/Header";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "The Wild Oasis",
  },
  description: "The Wild Oasis - Eco Cabins in the Austrian Alps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-900 text-primary-50 min-h-screen flex flex-col antialiased`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">
            {children}
            <SpeedInsights />
          </main>
        </div>
      </body>
    </html>
  );
}
