import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Njeri Portfolio",
  description: "portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex h-20 items-center justify-center w-screen fixed top-0 ">
          <nav className="flex">
            <ul className="flex gap-6">
              <Link href="/">
                <li className="px-4 border border-green-500 cursor-pointer rounded-md">Home</li>
              </Link>
              <Link href="/projects">
                <li className="px-4 border border-green-500 cursor-pointer rounded-md">Projects</li>
              </Link>
              <Link href="/contact">
                <li className="px-4 border border-green-500 cursor-pointer rounded-md">Contact</li>
              </Link>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
