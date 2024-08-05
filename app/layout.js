import './globals.css'
import { Inter } from 'next/font/google'
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Script from "next/script";
import clsx from 'clsx';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PhiHaber | En güncel haberler, en güncel yazılarla.',
  description: 'En güncel haberler, en güncel yazılarla.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3672603176096263" crossOrigin="anonymous"/>
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4Z6DRZ86G3"/>
    <Script id="google-analytics">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4Z6DRZ86G3');
        `}
    </Script>
      <body className={clsx(inter.className,"flex flex-col justify-between min-h-screen bg-[#f4f4f4]")}>
        <div>
          <Navbar/>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
