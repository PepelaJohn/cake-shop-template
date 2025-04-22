import type { Metadata } from "next";
import "./globals.css";
import { webname } from "@/constants";

export const metadata: Metadata = {
  title: webname,
  description: "Handmade pastries and cakes for every occasion.",
  openGraph: {
    title: `${webname}`,
    description: "Handmade pastries for every occasion.",
    url: `https://yoursitedemo.netlify.app`,
    siteName: "webname",
    images: [
      {
        url: `https://yoursitedemo.netlify.app/logo.jpg`,
        width: 1200,
        height: 630,
        alt: `${webname} Preview`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${webname}`,
    description: "Handmade pastries for every occasion.",
    images: [`https://yoursitedemo.netlify.app/logo.jpg`],
  },
  icons: {
    icon: "/icon.png",
  },
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        {children}
      </body>
    </html>
  );
}
