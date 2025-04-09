"use client";
import React from "react";
import Link from "next/link";

const menuLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
];

const Header = () => {
  return (
    <>
      {/* HEADER DESKTOP */}
      <header>
        <div className="header-area header-area2 header-area-all d-none d-lg-block" id="header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="d-flex justify-content-between align-items-center header-elements">
                  <div className="site-logo">
                    <Link href="/">
                      <img src="/assets/img/logo/header-logo2.png" alt="Logo" />
                    </Link>
                  </div>

                  <div className="main-menu-ex main-menu-ex1">
                    <ul className="d-flex gap-4 list-unstyled mb-0">
                      {menuLinks.map((menu, index) => (
                        <li key={index}>
                          <Link href={menu.href}>{menu.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="button">
                    <a className="theme-btn2" href="/contact">
                      Get A Quote{" "}
                      <span className="arrow1">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                      <span className="arrow2">
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE HEADER */}
      <div className="mobile-header mobile-header-main d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center mobile-header-elements">
              <div className="mobile-logo">
                <Link href="/">
                  <img src="/assets/img/logo/header-logo2.png" alt="Mobile Logo" />
                </Link>
              </div>
              <div className="mobile-nav-icon">
                <i className="fa-duotone fa-bars-staggered"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      <div className="mobile-sidebar d-block d-lg-none">
        <div className="logo-m">
          <Link href="/">
            <img src="/assets/img/logo/header-logo2.png" alt="Mobile Logo" />
          </Link>
        </div>
        <div className="menu-close">
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="mobile-nav">
          <ul className="list-unstyled">
            {menuLinks.map((menu, index) => (
              <li key={index}>
                <Link href={menu.href}>{menu.label}</Link>
              </li>
            ))}
          </ul>

          <div className="mobile-button">
            <Link className="theme-btn2 btn" href="/services">
              Learn More{" "}
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>

          <div className="single-footer-items mt-4">
            <h3>Contact Us</h3>

            <div className="contact-box d-flex align-items-center gap-2 my-2">
              <div className="icon">
                <img src="/assets/img/icons/footer1-icon1.png" alt="" />
              </div>
              <div className="pera">
                <a href="tel:0500222333">0500 222 333</a>
              </div>
            </div>

            <div className="contact-box d-flex align-items-center gap-2 my-2">
              <div className="icon">
                <img src="/assets/img/icons/footer1-icon2.png" alt="" />
              </div>
              <div className="pera">
                <a href="tel:0356588547">03 5658 8547</a>
              </div>
            </div>

            <div className="contact-box d-flex align-items-center gap-2 my-2">
              <div className="icon">
                <img src="/assets/img/icons/footer1-icon3.png" alt="" />
              </div>
              <div className="pera">
                <a href="mailto:admin@techxen.org">admin@techxen.org</a>
              </div>
            </div>

            <div className="contact-box d-flex align-items-center gap-2 my-2">
              <div className="icon">
                <img src="/assets/img/icons/footer1-icon4.png" alt="" />
              </div>
              <div className="pera">
                <a href="mailto:admin@techxen.org">www.techxen.org</a>
              </div>
            </div>
          </div>

          <div className="contact-infos mt-4">
            <h3>Our Location</h3>
            <ul className="social-icon list-unstyled d-flex gap-3">
              <li>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
