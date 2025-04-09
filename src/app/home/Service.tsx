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
                <Image src="/assets/img/icons/span2.png" alt="" width={30} height={30} /> Our Service
              </span>
              <h2 className="title tg-element-title">Empower Your Business with Our Comprehensive IT Solutions</h2>
            </div>
          </div>
        </div>

        <div className="space30"></div>

        <div className="row">
          {services.map((service, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div data-aos="zoom-in-up" data-aos-duration={service.aosDuration}>
                <div className={`servcie2-box ${service.active ? "active" : ""}`}>
                  <div className="icon">
                    <Image src={service.icon} alt="" width={60} height={60} />
                  </div>
                  <Link href="/service-details" className="arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <div className="heading2">
                    <h4>
                      <Link href="/service-details">{service.title}</Link>
                    </h4>
                    <div className="space16"></div>
                    <p dangerouslySetInnerHTML={{ __html: service.description }} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space40"></div>
        <div className="row">
          <div className="col-lg-12 text-center" data-aos="zoom-in-up" data-aos-duration="700">
            <Link href="/service" className="theme-btn2">
              View All Services
              <span className="arrow1">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
              <span className="arrow2">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const services = [
  {
    icon: "/assets/img/icons/service2-icon1.png",
    title: "Consulting Service",
    description: "Strategic IT planning roadmap development Business process analysis and improvement for It solution & technology.",
    aosDuration: 700,
  },
  {
    icon: "/assets/img/icons/service2-icon2.png",
    title: "Software Development",
    description: "Mobile app development for iOS, Android, and cross-platform solutions & web <br /> application.",
    aosDuration: 900,
    active: true,
  },
  {
    icon: "/assets/img/icons/service2-icon3.png",
    title: "Cloud Solution",
    description: "Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service <br /> (SaaS)",
    aosDuration: 600,
  },
  {
    icon: "/assets/img/icons/service2-icon4.png",
    title: "Cyber Security",
    description: "Threat assessment and vulnerability analysis. Security strategy development and implementation",
    aosDuration: 900,
  },
  {
    icon: "/assets/img/icons/service2-icon5.png",
    title: "Data Analytics",
    description: "Data visualization and business intelligence solutions Predictive analytics and machine <br /> learning",
    aosDuration: 1100,
  },
  {
    icon: "/assets/img/icons/service2-icon6.png",
    title: "Manage It Services",
    description: "Proactive IT monitoring and management Network infrastructure setup and <br /> maintenance",
    aosDuration: 700,
  },
];
