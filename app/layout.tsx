import type { Metadata, Viewport } from "next";
import {
  Bebas_Neue,
  DM_Mono,
  Instrument_Serif,
  Manrope,
} from "next/font/google";
import { ScrollToTop } from "@/components/ScrollToTop";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-body-family",
  subsets: ["latin"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif-family",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const metadataBase = new URL("https://reeplay.ng");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "REEPLAY: Official Website",
    template: "%s | REEPLAY",
  },
  description:
    "Official website of Nigerian rapper and songwriter Reeplay. Explore music, videos, live shows and the world of Raw Evolved Energy Playing Loud All Year.",
  keywords: [
    "Reeplay",
    "Nigerian rapper",
    "Anti World Gangstars",
    "Nigerian hip hop",
    "Raw Evolved Energy",
    "REEPLAY",
  ],
  openGraph: {
    title: "REEPLAY: Official Website",
    description:
      "Raw Evolved Energy Playing Loud All Year. Official website of Nigerian rapper and songwriter Reeplay.",
    url: "https://reeplay.ng",
    siteName: "REEPLAY",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages211/v4/31/ab/02/31ab0292-7d02-f62f-1ace-d2a85f1c0373/file_cropped.png/1400x1400bb.png",
        width: 1400,
        height: 1400,
        alt: "Reeplay",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REEPLAY: Official Website",
    description:
      "Raw Evolved Energy Playing Loud All Year. The official digital world of Nigerian rapper Reeplay.",
    images: [
      "https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages211/v4/31/ab/02/31ab0292-7d02-f62f-1ace-d2a85f1c0373/file_cropped.png/1400x1400bb.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${manrope.variable} ${instrumentSerif.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen bg-[#080808] text-[#F2F0EB] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Reeplay",
              alternateName: "REEPLAY",
              description:
                "Nigerian rapper and songwriter. Member of the Anti World Gangstars collective.",
              url: "https://reeplay.ng",
              genre: ["Nigerian Hip Hop", "Rap"],
              nationalLocation: { "@type": "Country", name: "Nigeria" },
              sameAs: [
                "https://www.instagram.com/reeplaysumtin/",
                "https://x.com/reeplaysumtin",
                "https://www.facebook.com/reeplaysumtin/",
                "https://www.youtube.com/channel/UCp7Ibj9RmtEn-mk0kVrUOvw",
                "https://soundcloud.com/reeplaysumtin",
                "https://open.spotify.com/artist/2UausQcu26M23zEr5rUODB",
              ],
            }),
          }}
        />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
