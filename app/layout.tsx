import React, { PropsWithChildren } from "react";
import Hedaer from "@/components/ui/header";
import "@/styles/globals.css"
import { K2D } from 'next/font/google'
import Footer from "@/components/ui/footer";

export const dynamic = "force-dynamic";

 
const k2d = K2D({
  weight: ['300','400','500','600','700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-k2d',
})

const meta = {
  title: "Office Zone",
  description: "Office Zone is a responsive website",
  icons: {
    icon: '/icon.png',
  },
};

export const metadata = {
  title: meta.title,
  description:meta.description,
};

const RootLayout = async ({ children }: PropsWithChildren) => {
  return (
 <html lang="en" className={`${k2d.variable}`}>
      <body className="bg-neutral-50 ]">
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
