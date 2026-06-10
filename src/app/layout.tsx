import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Archivo } from "next/font/google";



export const metadata: Metadata = {
  title: 'Crêpella – Sweet Moments, Fresh Taste | Témara Café',
  description: 'Experience the best crêpes, waffles, pancakes & café in Témara. Indulge in premium desserts, specialty coffee, and fresh juices at Crêpella. Visit us for a luxury cozy café atmosphere.',
  keywords: ["Crêpella, crepes Témara, waffles Témara, pancakes Témara, café Témara, coffee shop Témara, desserts Témara, luxury café, Moroccan cafe, sweet moments"],
  openGraph: {
    "title": "Crêpella – Sweet Moments, Fresh Taste | Témara Café",
    "description": "Experience the best crêpes, waffles, pancakes & café in Témara. Indulge in premium desserts, specialty coffee, and fresh juices at Crêpella.",
    "url": "https://www.crepella.com",
    "siteName": "Crêpella",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/bottom-half-view-berry-cake-white-oval-plate-red-shawl-grey-surface_140725-102508.jpg",
        "alt": "Crêpella cinematic desserts and coffee"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Crêpella – Sweet Moments, Fresh Taste | Témara Café",
    "description": "Experience the best crêpes, waffles, pancakes & café in Témara. Indulge in premium desserts, specialty coffee, and fresh juices at Crêpella.",
    "images": [
      "http://img.b2bpic.net/free-photo/bottom-half-view-berry-cake-white-oval-plate-red-shawl-grey-surface_140725-102508.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${archivo.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
