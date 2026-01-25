import type { Metadata } from "next";
import {Inter_Tight, Instrument_Serif} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/ScrollAnimations"
import BackgroundMusic from "@/components/BackgroundMusicWrapper"
import { Analytics } from '@vercel/analytics/next';

const inter = Inter_Tight({
  weight: '400',
  style: 'normal',
  subsets: ['latin']
})

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-instrument-serif'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lakshyaworks.dev/'),
  title: 'Lakshya Paliwal',
  description: '',
  openGraph: {
    url: 'https://www.lakshyaworks.dev/',
    siteName: 'Lakshya Paliwal Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/open-graph.png',
      width: 1200,
      height: 630,
      alt: 'Lakshya Paliwal - Portfolio'
    }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@21lakshh",
    title: "Lakshya Paliwal",
    description: "I’m someone who loves exploring ideas through code, design, and whatever medium feels right that day. I spend most of my time building things that make life a bit simpler or spark curiosity, often blending structure with imagination.",
    images: [
      {
        url: "https://www.lakshyaworks.dev/open-graph.png",  // Image URL
        alt: "Lakshya Paliwal - Portfolio"                // (Optional) Alt text
      }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="tMCNs2fgM6voEHBd3JsySffMFSiUCQDEFEF1iYI3-ZQ" />
      </head>
      <body className={`${inter.className} ${instrumentSerif.variable}`} suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
            <div className="relative z-10">
              {children}
              <Analytics/>
            </div>
            <ScrollToTop />
            <BackgroundMusic />
        </ThemeProvider>
        <script
          src="https://script.refix.ai/script.min.js"
          type="text/javascript"
          data-refix-token="c9a48825-4062-464a-941d-c958ddf21a96"
          defer
        ></script>
      </body>
    </html>
  );
}
