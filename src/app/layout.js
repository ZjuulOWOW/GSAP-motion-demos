import "./globals.scss";
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: "GSAP-motion demos",
  description: "GSAP-motion demos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
