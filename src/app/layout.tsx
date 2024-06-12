import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import type { Metadata } from 'next'
import { extractRouterConfig } from 'uploadthing/server'

import { ourFileRouter } from '@/app/api/uploadthing/core'
import ClientProvider from '@/providers/ClientProvider'

import './globals.css'

export const metadata: Metadata = {
  title: 'KawanData',
  description: 'Ecommerce Website To Get Leads Data',
  category: 'ecommerce',
  authors: { name: 'kawandata' },
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Skateboard',
    'Shoes',
    'Accessories',
    'Clothing',
  ],
  creator: 'KawanData',
  publisher: 'KawanData',
  openGraph: {
    title: 'KawanData',
    description: 'Ecommerce Website To Get Leads Data',
    url: 'https://kawandata.com',
    siteName: 'KawanData',
    images: 'https://kawandata.com/images/screenshoot.PNG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KawanData',
    description: 'Ecommerce Website To Get Leads Data',
    images: ['https://kawandata.com/images/screenshoot.PNG'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <ClientProvider>
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          {children}
        </ClientProvider>
      </body>
    </html>
  )
}
