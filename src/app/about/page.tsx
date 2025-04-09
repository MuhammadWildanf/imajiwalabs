"use client";
import CTA from "@/components/CTA";
import HeroSection from "@/components/HeroSection";

export default function About() {
  return (
    <div>
      <HeroSection title="About" breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <div className="space100"></div>
      <div className="about2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about2-images">
                <div className="image1">
                  <img src="assets/img/about/about2-img1.png" alt="" />
                </div>
                <div className="image2">
                  <img src="assets/img/about/about2-img2.png" alt="" />
                </div>
                <div className="image3">
                  <img src="assets/img/about/about2-img3.png" alt="" />
                </div>
                <div className="counter-box">
                  <h3>25</h3>
                  <p>
                    Years Of <br />
                    Experience
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="heading2">
                <span className="span">
                  <img src="assets/img/icons/span2.png" alt="" /> Our Service
                </span>
                <h2>Empower Your Business With Our Comprehensive IT Solutions</h2>
                <div className="space16"></div>
                <p>Welcome to TechXen, your premier destination for cutting-edge technology solutions and IT services. At TechXen, we are passionate about harnessing the power of technology to empower businesses a like.</p>

                <div className="space10"></div>

                <div className="porgress-line-all">
                  <div className="progress-line">
                    <h6>IT Consulting</h6>
                    <div id="progress1" data-init="true"></div>
                  </div>
                  <div className="progress-line">
                    <h6>Cyber Security</h6>
                    <div id="progress2" data-init="true"></div>
                  </div>
                </div>

                <div className="space30"></div>
                <div className="button">
                  <a className="theme-btn2" href="about.html">
                    Learn More <i className="fa-solid fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="solution pt100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="heading2">
                <span className="span">
                  <img src="assets/img/icons/span2.png" alt="" /> Our Mission
                </span>
                <h2>Innovating for Success: Our Technology Mission</h2>
                <div className="space16"></div>
                <p>
                  At TechXen, our mission is simple: to revolutionize the digital landscape by delivering top-notch technology solutions that drive growth, efficiency, and sustainability for our clients. We strive to be the trusted partner
                  that businesses can rely on to navigate the complexities of the digital world.
                </p>
                <div className="space16"></div>
                <p>
                  "At TechXen, our mission is to empower businesses through technology. We believe in harnessing the power of innovation to drive growth, efficiency, and sustainability for our clients. Through our tailored technology
                  solutions and unwavering commitment to excellence, we strive to be the catalyst for positive change in the digital landscape.
                </p>

                <div className="space30"></div>
                <div className="">
                  <a className="theme-btn2" href="service.html">
                    Discover More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="solution-images">
                <div className="image1">
                  <img src="assets/img/others/solution-img1.png" alt="" />
                </div>
                <div className="image2">
                  <img src="assets/img/others/solution-img2.png" alt="" />
                </div>
                <div className="image3">
                  <img src="assets/img/others/solution-img3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="solution about-solution pt100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="images">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="image">
                      <img src="assets/img/about/visiton-img1.png" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="space30"></div>
                    <div className="image">
                      <img src="assets/img/about/visiton-img2.png" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="space30"></div>
                    <div className="image">
                      <img src="assets/img/about/visiton-img3.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading2">
                <span className="span">
                  <img src="assets/img/icons/span2.png" alt="" /> Our Vision
                </span>
                <h2>Driving Innovation: Our Vision at TechXen</h2>
                <div className="space16"></div>
                <p>
                  At TechXen, our vision is to be the leading force driving digital transformation and innovation worldwide. We envision a future where businesses of all sizes have the tools and expertise they need to thrive in an
                  increasingly digital world.
                </p>

                <div className="item-box">
                  <div className="icon">
                    <div className="">
                      <img src="assets/img/icons/solution-iocn1.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3>
                      <a href="#">Network Infrastructure Solutions</a>
                    </h3>
                    <div className="space10"></div>
                    <p>
                      Build a reliable and secure network infrastructure that <br />
                      supports your business operations enables seamless
                    </p>
                  </div>
                </div>

                <div className="item-box">
                  <div className="icon">
                    <div className="">
                      <img src="assets/img/icons/solution-iocn2.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3>
                      <a href="#">Managed It Services</a>
                    </h3>
                    <div className="space10"></div>
                    <p>
                      Focus on your core business activities while we take <br />
                      care of your IT needs with our managed IT services.
                    </p>
                  </div>
                </div>

                <div className="space30"></div>
                <div className="">
                  <a className="theme-btn2" href="service.html">
                    Discover More{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="team2 sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <div className="heading2">
                <span className="span">
                  <img src="assets/img/icons/span2.png" alt="" /> Our Team
                </span>
                <h2>Meet With Our Expert Team</h2>
              </div>
            </div>
          </div>

          <div className="space30"></div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="team-box">
                <div className="image-area">
                  <div className="image">
                    <img src="assets/img/team/team2-img1.png" alt="" />
                  </div>
                  <div className="icon-area">
                    <ul>
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

                <div className="space30"></div>
                <div className="heading2">
                  <h4>
                    <a href="#">John Doe</a>
                  </h4>
                  <div className="space10"></div>
                  <p>CEO & Founder</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-box">
                <div className="image-area">
                  <div className="image">
                    <img src="assets/img/team/team2-img2.png" alt="" />
                  </div>
                  <div className="icon-area">
                    <ul>
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

                <div className="space30"></div>
                <div className="heading2">
                  <h4>
                    <a href="#">Jane Smith</a>
                  </h4>
                  <div className="space10"></div>
                  <p>Chef Technology Officer</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-box">
                <div className="image-area">
                  <div className="image">
                    <img src="assets/img/team/team2-img3.png" alt="" />
                  </div>
                  <div className="icon-area">
                    <ul>
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

                <div className="space30"></div>
                <div className="heading2">
                  <h4>
                    <a href="#">Sarah Thompson </a>
                  </h4>
                  <div className="space10"></div>
                  <p>Head of Project Management</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="team-box">
                <div className="image-area">
                  <div className="image">
                    <img src="assets/img/team/team2-img4.png" alt="" />
                  </div>
                  <div className="icon-area">
                    <ul>
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

                <div className="space30"></div>
                <div className="heading2">
                  <h4>
                    <a href="#">David Garcia</a>
                  </h4>
                  <div className="space10"></div>
                  <p>Lead Software Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
