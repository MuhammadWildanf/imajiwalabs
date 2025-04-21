"use client";

import Image from "next/image";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <div className="servcie2 pt100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading2">
              <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                <img src="assets/frontend/img/icons/span2.png" alt="" /> Our Service
              </span>
              <h2 className="title tg-element-title">Empower Your Business with Our Comprehensive IT Solutions</h2>
            </div>
          </div>
        </div>

        <div className="space30"></div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="" data-aos="zoom-in-up" data-aos-duration="700">
              <div className="servcie2-box">
                <div className="icon">
                  <img src="assets/frontend/img/icons/service2-icon1.png" alt="" />
                </div>
                <a href="service-details.html" className="arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <div className="heading2">
                  <h4>
                    <a href="service-details.html">Consulting Service</a>
                  </h4>
                  <div className="space16"></div>
                  <p>Strategic IT planning roadmap development Business process analysis and improvement for It solution & technology.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="" data-aos="zoom-in-up" data-aos-duration="900">
              <div className="servcie2-box active">
                <div className="icon">
                  <img src="assets/frontend/img/icons/service2-icon2.png" alt="" />
                </div>
                <a href="service-details.html" className="arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <div className="heading2">
                  <h4>
                    <a href="service-details.html">Software Development</a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    Mobile app development for iOS, Android, and cross-platform solutions & web <br />
                    application.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="" data-aos="zoom-in-up" data-aos-duration="600">
              <div className="servcie2-box">
                <div className="icon">
                  <img src="assets/frontend/img/icons/service2-icon3.png" alt="" />
                </div>
                <a href="service-details.html" className="arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <div className="heading2">
                  <h4>
                    <a href="service-details.html">Cloud Solution</a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service <br />
                    (SaaS)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="" data-aos="zoom-in-up" data-aos-duration="900">
              <div className="servcie2-box">
                <div className="icon">
                  <img src="assets/frontend/img/icons/service2-icon4.png" alt="" />
                </div>
                <a href="service-details.html" className="arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <div className="heading2">
                  <h4>
                    <a href="service-details.html">Cyber Security</a>
                  </h4>
                  <div className="space16"></div>
                  <p>Threat assessment and vulnerability analysis. Security strategy development and implementation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="" data-aos="zoom-in-up" data-aos-duration="1100">
              <div className="servcie2-box">
                <div className="icon">
                  <img src="assets/frontend/img/icons/service2-icon5.png" alt="" />
                </div>
                <a href="service-details.html" className="arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <div className="heading2">
                  <h4>
                    <a href="service-details.html">Data Analytics</a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    Data visualization and business intelligence solutions Predictive analytics and machine <br />
                    learning
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="" data-aos="zoom-in-up" data-aos-duration="700">
              <div className="servcie2-box">
                <div className="icon">
                  <img src="assets/frontend/img/icons/service2-icon6.png" alt="" />
                </div>
                <a href="service-details.html" className="arrow">
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <div className="heading2">
                  <h4>
                    <a href="service-details.html">Manage It Services</a>
                  </h4>
                  <div className="space16"></div>
                  <p>
                    Proactive IT monitoring and management Network infrastructure setup and <br />
                    maintenance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space40"></div>
        <div className="row">
          <div className="col-lg-12 text-center" data-aos="zoom-in-up" data-aos-duration="700">
            <a className="theme-btn2" href="/services">
              View All Services{" "}
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
  );
}

const services = [
  {
    icon: "/assets/frontend/img/icons/service2-icon1.png",
    title: "Consulting Service",
    description: "Strategic IT planning roadmap development Business process analysis and improvement for It solution & technology.",
    aosDuration: 700,
  },
  {
    icon: "/assets/frontend/img/icons/service2-icon2.png",
    title: "Software Development",
    description: "Mobile app development for iOS, Android, and cross-platform solutions & web <br /> application.",
    aosDuration: 900,
    active: true,
  },
  {
    icon: "/assets/frontend/img/icons/service2-icon3.png",
    title: "Cloud Solution",
    description: "Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service <br /> (SaaS)",
    aosDuration: 600,
  },
  {
    icon: "/assets/frontend/img/icons/service2-icon4.png",
    title: "Cyber Security",
    description: "Threat assessment and vulnerability analysis. Security strategy development and implementation",
    aosDuration: 900,
  },
  {
    icon: "/assets/frontend/img/icons/service2-icon5.png",
    title: "Data Analytics",
    description: "Data visualization and business intelligence solutions Predictive analytics and machine <br /> learning",
    aosDuration: 1100,
  },
  {
    icon: "/assets/frontend/img/icons/service2-icon6.png",
    title: "Manage It Services",
    description: "Proactive IT monitoring and management Network infrastructure setup and <br /> maintenance",
    aosDuration: 700,
  },
];
