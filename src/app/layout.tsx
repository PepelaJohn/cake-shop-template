import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Winnie's Pastries",
  description: "Handmade pastries and cakes for every occasion",
  openGraph: {
    title: "Winnie's Pastries",
    description: "Handmade pastries for every occasion.",
    url: "https://winnies-pasteries-demo.netlify.app",
    siteName: "Winnie's Pastries",
    images: [
      {
        url: "https://winnies-pasteries-demo.netlify.app/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Winnie's Pastries Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Winnie's Pastries",
    description: "Handmade pastries for every occasion.",
    images: ["https://winnies-pasteries-demo.netlify.app/logo.jpg"],
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
