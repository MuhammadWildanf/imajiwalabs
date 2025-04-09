"use client";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="footer2 _relative">
      <div className="container">
        <div className="row">
          {/* Logo dan deskripsi */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-footer-items footer-logo-area">
              <div className="footer-logo">
                <Link href="#">
                  <Image src="/assets/img/logo/header-logo2.png" alt="Footer Logo" width={150} height={40} />
                </Link>
              </div>
              <div className="space20"></div>
              <div className="heading2">
                <p>At TechXen IT Solutions, we're dedicated to delivering innovative technology solutions tailored to meet the unique needs of businesses like yours.</p>
              </div>
              <ul className="social-icon">
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Service We Offer */}
          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Service We Offer</h3>
              <ul className="menu-list">
                <li>
                  <Link href="#">Cloud Computing Solution</Link>
                </li>
                <li>
                  <Link href="#">Cybersecurity & Compliance</Link>
                </li>
                <li>
                  <Link href="#">Software Development</Link>
                </li>
                <li>
                  <Link href="#">It Consulting & Support</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Useful Links */}
          <div className="col-lg col-md-6 col-12">
            <div className="single-footer-items pl-5">
              <h3>Useful Links</h3>
              <ul className="menu-list">
                <li>
                  <Link href="/about.html">About Us</Link>
                </li>
                <li>
                  <Link href="/service.html">Our Services</Link>
                </li>
                <li>
                  <Link href="/blog.html">Blog & News</Link>
                </li>
                <li>
                  <Link href="/contact.html">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-6 col-12">
            <div className="single-footer-items">
              <h3>Contact Us</h3>

              <div className="contact-box">
                <div className="icon">
                  <Image src="/assets/img/icons/footer1-icon1.png" alt="Phone" width={30} height={30} />
                </div>
                <div className="pera">
                  <Link href="tel:0500222333">0500 222 333</Link>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <Image src="/assets/img/icons/footer1-icon2.png" alt="Phone" width={30} height={30} />
                </div>
                <div className="pera">
                  <Link href="tel:0356588547">03 5658 8547</Link>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <Image src="/assets/img/icons/footer1-icon3.png" alt="Email" width={30} height={30} />
                </div>
                <div className="pera">
                  <Link href="mailto:admin@techxen.org">admin@techxen.org</Link>
                </div>
              </div>

              <div className="contact-box">
                <div className="icon">
                  <Image src="/assets/img/icons/footer1-icon4.png" alt="Website" width={30} height={30} />
                </div>
                <div className="pera">
                  <Link href="https://www.techxen.org" target="_blank">
                    www.techxen.org
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space70"></div>
      </div>

      {/* Copyright Area */}
      <div className="copyright-area _relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="coppyright">
                <p>Copyright ©2024 TechXen. All Rights Reserved</p>
              </div>
            </div>
            <div className="col-md-7">
              <div className="coppyright right-area">
                <Link href="#">Terms & Conditions</Link>
                <Link href="#">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>

        <Link href="#" className="arrow-up">
          <i className="fa-solid fa-arrow-up"></i>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
