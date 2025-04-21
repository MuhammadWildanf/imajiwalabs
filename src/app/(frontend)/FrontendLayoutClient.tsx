'use client';
import "./globals.css";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from "@/components/frontend/Header";
import Footer from "@/components/frontend/Footer";
import Script from "next/script";
import BodyClassProvider from "@/components/BodyClassProvider";
import Preloader from "@/components/frontend/Preloader";

export default function FrontendLayoutClient({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        AOS.init({
            offset: 120,
            delay: 0,
            duration: 1000,
            easing: 'ease',
            once: true,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);

    return (
        <BodyClassProvider className="body comon-body tg-heading-subheading animation-style3">
            <div className="paginacontainer">
                <div className="progress-wrap progress-wrap2">
                    <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                    </svg>
                </div>
            </div>
            {/* <Preloader /> */}
            <Header />
            {children}
            <Footer />

            {/* External Scripts */}
            <Script src="/assets/frontend/js/jquery-3-7-1.min.js" strategy="beforeInteractive" />
            <Script src="/assets/frontend/js/bootstrap.min.js" strategy="beforeInteractive" />
            <Script src="/assets/frontend/js/owl.carousel.min.js" strategy="beforeInteractive" />
            <Script src="/assets/frontend/js/slick-slider.js" strategy="beforeInteractive" />
            <Script src="/assets/frontend/js/aos.js" strategy="afterInteractive" />
            <Script src="/assets/frontend/js/fontawesome.js" strategy="lazyOnload" />
            <Script src="/assets/frontend/js/jquery.countup.js" strategy="lazyOnload" />
            <Script src="/assets/frontend/js/mobile-menu.js" strategy="lazyOnload" />
            <Script src="/assets/frontend/js/jquery.magnific-popup.js" strategy="lazyOnload" />
            <Script src="/assets/frontend/js/gsap.min.js" strategy="lazyOnload" />
            <Script src="/assets/frontend/js/ScrollTrigger.min.js" strategy="lazyOnload" />
            <Script src="/assets/frontend/js/Splitetext.js" strategy="lazyOnload" />
            <Script src="/assets/frontend/js/text-animation.js" strategy="lazyOnload" />
            <Script src="/assets/frontend/js/SmoothScroll.js" strategy="lazyOnload" />
            <Script src="/assets/frontend/js/jquery.lineProgressbar.js" strategy="lazyOnload" />
            <Script src="/assets/frontend/js/ripple-btn.js" strategy="lazyOnload" />
            <Script
                src="/assets/frontend/js/main.js"
                strategy="afterInteractive"
                onLoad={() => {
                    console.log("✅ main.js loaded via Script tag");
                }}
            />

        </BodyClassProvider>
    );
}
