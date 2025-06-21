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

export const metadata = {
  title: "Encuestas Perfectapp",
  description: "Encuestas para evaluación de productos",
  icons: {
    icon: "/perfect-icon.png",
    apple: "/perfect-icon.png",
    shortcut: "/perfect-icon.png",
  },
  openGraph: {
    title: "Encuestas Perfectapp",
    description: "Encuestas para evaluación de productos",
    url: "https://encuestas.perfectapp.com",
    siteName: "Encuestas Perfectapp",
    images: [
      {
        url: "/perfect-icon.png",
        width: 120,
        height: 120,
        alt: "Logo de Perfectapp",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es_MX">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
