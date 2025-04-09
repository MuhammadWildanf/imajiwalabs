'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const MobileHeader = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-header d-block d-lg-none">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link href="/">
                  <Image src="/assets/img/logo/header-logo1.png" alt="Mobile Logo" width={150} height={50} />
                </Link>
              </div>
              <div className="mobile-nav-icon" onClick={toggleSidebar}>
                <i className="fa-duotone fa-bars-staggered"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMobileSidebarOpen && (
        <div className="mobile-sidebar d-block d-lg-none">
          <div className="logo-m">
            <Link href="/">
              <Image src="/assets/img/logo/header3-logo.png" alt="Mobile Sidebar Logo" width={150} height={50} />
            </Link>
          </div>
          <div className="menu-close" onClick={toggleSidebar}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="mobile-nav">
            <ul>
              <li className="has-dropdown">
                <Link href="#">Home</Link>
                <ul className="sub-menu">
                  <li><Link href="/index">Home 1</Link></li>
                  <li><Link href="/index2">Home 2</Link></li>
                  <li><Link href="/index3">Home 3</Link></li>
                </ul>
              </li>
              <li><Link href="/about">About Us</Link></li>
              <li className="has-dropdown">
                <Link href="#">Services</Link>
                <ul className="sub-menu">
                  <li><Link href="/service">Service</Link></li>
                  <li><Link href="/service-details-left">Service Left</Link></li>
                </ul>
              </li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Mobile Footer */}
          <div className="contact-infos">
            <h3>Contact Us</h3>
            <ul className="social-icon">
              <li><Link href="#"><i className="fa-brands fa-linkedin-in"></i></Link></li>
              <li><Link href="#"><i className="fa-brands fa-x-twitter"></i></Link></li>
              <li><Link href="#"><i className="fa-brands fa-youtube"></i></Link></li>
              <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileHeader;
