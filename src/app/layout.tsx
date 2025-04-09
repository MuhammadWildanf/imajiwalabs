import "./globals.css";

import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import Head from "next/head";

// Metadata untuk SEO
export const metadata: Metadata = {
  title: "TechXen Technology & IT Solution Template",
  description: "TechXen - Modern technology solutions for your business",
  icons: {
    icon: "/assets/img/logo/titile.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        {/* Meta tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TechXen Technology & IT Solution Template</title>
        <link rel="shortcut icon" href="/assets/img/logo/titile.png" type="image/x-icon" />
      </Head>
      <body className="body comon-body tg-heading-subheading animation-style3">
        <div className="paginacontainer">
          <div className="progress-wrap progress-wrap2">
            <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
              <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
            </svg>
          </div>
        </div>
        <Header />
        {children}
        <Footer />

        {/* Script Eksternal */}
        <Script src="/assets/js/jquery-3-7-1.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/aos.js" strategy="lazyOnload" />
        <Script src="/assets/js/fontawesome.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.countup.js" strategy="lazyOnload" />
        <Script src="/assets/js/mobile-menu.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.magnific-popup.js" strategy="lazyOnload" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/slick-slider.js" strategy="lazyOnload" />
        <Script src="/assets/js/gsap.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="/assets/js/Splitetext.js" strategy="lazyOnload" />
        <Script src="/assets/js/text-animation.js" strategy="lazyOnload" />
        <Script src="/assets/js/SmoothScroll.js" strategy="lazyOnload" />
        <Script src="/assets/js/jquery.lineProgressbar.js" strategy="lazyOnload" />
        <Script src="/assets/js/ripple-btn.js" strategy="lazyOnload" />
        <Script src="/assets/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
