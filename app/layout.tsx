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

const metadataBase = new URL("https://ar4.ng");

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "AR4 | Araoluwa Giwa-Osagie",
    template: "%s | AR4",
  },
  description:
    "Official website of Nigerian songstress AR4 (Araoluwa Giwa-Osagie). Music, film and the world behind IT'S NOT DAT DEEP. one man soldier.",
  keywords: [
    "AR4",
    "Araoluwa Giwa-Osagie",
    "Nigerian songstress",
    "IT'S NOT DAT DEEP",
    "denzl",
    "Nigerian music",
    "ar4oluwa",
  ],
  openGraph: {
    title: "AR4 | Araoluwa Giwa-Osagie",
    description:
      "one man soldier. The official digital home of Nigerian songstress AR4 and the world of IT'S NOT DAT DEEP.",
    url: "https://ar4.ng",
    siteName: "AR4",
    type: "website",
    locale: "en_NG",
    images: [
      {
        url: "/images/ar4/hate-me.jpg",
        width: 1440,
        height: 1919,
        alt: "AR4",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AR4 | Araoluwa Giwa-Osagie",
    description:
      "one man soldier. The official digital home of Nigerian songstress AR4 and the world of IT'S NOT DAT DEEP.",
    images: ["/images/ar4/hate-me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
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
      <body className="min-h-screen bg-[#08080a] text-[#F2F0EA] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "AR4",
              alternateName: "Araoluwa Giwa-Osagie",
              description:
                "Nigerian songstress and songwriter. Araoluwa Giwa-Osagie, known as AR4.",
              url: "https://ar4.ng",
              genre: ["Soul", "Afrobeats", "Alternative"],
              nationalLocation: { "@type": "Country", name: "Nigeria" },
              sameAs: [
                "https://www.instagram.com/ar4oluwa/",
                "https://audiomack.com/ar4oluwa",
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
