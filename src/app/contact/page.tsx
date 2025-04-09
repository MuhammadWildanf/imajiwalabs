"use client";

import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export default function Contact() {
  return (
    <div>
      <HeroSection title="Contact Us" breadcrumb={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
      <div className="space100"></div>
      <div className="contact-page">
        <div className="container">
          <div className="row">
            {/* Kiri: Info Kontak */}
            <div className="col-lg-6">
              <div className="contact-boxs">
                <div className="heading2">
                  <h2>Contact Information</h2>
                  <div className="space16"></div>
                  <p>
                    We’ve grown up with the internet revolution, and we <br />
                    know how to deliver on its
                  </p>
                </div>

                <div className="contact-box d-flex">
                  <div className="icon me-3">
                    <Image src="/assets/img/icons/contact-page-icon1.png" alt="Phone Icon" width={40} height={40} />
                  </div>
                  <div className="heading">
                    <h5>Contact Us</h5>
                    <a href="tel:(124)555-6565" className="text">
                      (124) 555-6565
                    </a>
                  </div>
                </div>

                <div className="contact-box d-flex">
                  <div className="icon me-3">
                    <Image src="/assets/img/icons/contact-page-icon2.png" alt="Email Icon" width={40} height={40} />
                  </div>
                  <div className="heading">
                    <h5>Send Us a Mail</h5>
                    <a href="mailto:admin@techxen.org" className="text">
                      admin@techxen.org
                    </a>
                  </div>
                </div>

                <div className="contact-box d-flex">
                  <div className="icon me-3">
                    <Image src="/assets/img/icons/contact-page-icon3.png" alt="Location Icon" width={40} height={40} />
                  </div>
                  <div className="heading">
                    <h5>Office Location</h5>
                    <p className="text">
                      73 Bridge St Brooklyn Arakansas <br />
                      85032 United States, NY 10018
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kanan: Form Kontak */}
            <div className="col-lg-6">
              <div className="contact-form-details">
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="text" placeholder="First Name" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="text" placeholder="Last Name" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="email" placeholder="Email" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-input">
                        <input type="tel" placeholder="Phone" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input">
                        <input type="text" placeholder="Subject" className="form-control" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-input">
                        <textarea className="form-control" rows={5} placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 mt-3">
                      <button type="submit" className="theme-btn1 btn btn-primary">
                        Submit{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space100"></div>

      <div className="contact-map-page">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9537247353855!2d106.81620037688901!3d-6.269816361382386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f6c0ad133ec9%3A0x42adda6e2cb5bf93!2sIMAJIWA%20Creative%20House!5e0!3m2!1sid!2sid!4v1744210028087!5m2!1sid!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
