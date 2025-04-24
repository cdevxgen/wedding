import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Wedding Invitation",
  description: "Wedding app",
  icons: {
    icon: ['./wedding/Weedinglogo.png'],
    apple: [
      './wedding/Weedinglogo.png?v=4'
    ],
    shortcut: [
      './wedding/Weedinglogo.png'
    ]
  },
  metadataBase: new URL('https://chandan21.vercel.app'),
  category: 'demo',
  keywords: ["Service", "Trust", "Excellence"],
  authors: [{ name: "Chandan", url: "https://chandan21.vercel.app" }],
  creator: "Chandan HM",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
