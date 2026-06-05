import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'आचार्य आकाश शास्त्री - वैदिक ज्योतिष विशेषज्ञ | कुंडली, वास्तु, करियर परामर्श',
  description: 'आचार्य आकाश शास्त्री - 10+ वर्षों के अनुभव के साथ वैदिक ज्योतिष विशेषज्ञ। कुंडली विश्लेषण, कुंडली मिलान, वास्तु परामर्श, करियर मार्गदर्शन और पूजा अनुष्ठान के लिए संपर्क करें।',
  keywords: 'ज्योतिष, वैदिक ज्योतिष, कुंडली, राशिफल, जन्म पत्रिका, कुंडली मिलान, वास्तु, करियर, आचार्य आकाश शास्त्री',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#faf9f7',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hi" className={`${cormorant.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
