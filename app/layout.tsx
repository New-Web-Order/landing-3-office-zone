import React, { PropsWithChildren } from 'react';
import Hedaer from '@/components/ui/header';
import type { Metadata } from 'next';
import '@/styles/globals.css';
import { K2D } from 'next/font/google';
import Footer from '@/components/ui/footer';

export const dynamic = 'force-dynamic';

 
const k2d = K2D({
  weight: ['300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-k2d'
});

const meta = {
  title: 'Office Zone - Responsive Website Template',
  description: 'Discover Your Ideal Coworking Space',
  robots: 'follow, index',
  favicon: '/icon.png'
};


export async function generateMetadata(): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.description,
    referrer: 'origin-when-cross-origin',
    keywords: ['Technology', 'Investment', 'Companies', 'NEWWEBORDER'],
    authors: [{ name: 'NEW WEB ORDER', url: 'https://newweborder.co/' }],
    creator: 'New Web Order',
    publisher: 'New Web Order',
    robots: meta.robots,
    icons: { icon: meta.favicon },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      siteName: meta.title
    },
    twitter: {
      card: 'summary_large_image',
      site: '@New_Web_Order',
      creator: '@New_Web_Order',
      title: meta.title,
      description: meta.description
    }
  };
}

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
 <html lang='en' className={`${k2d.variable}`}>
      <body className=''>
        <Hedaer/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
};
export default RootLayout;
