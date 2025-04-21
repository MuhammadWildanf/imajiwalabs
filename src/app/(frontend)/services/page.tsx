"use client";
import CTA from "@/components/frontend/CTA";
import HeroSection from "@/components/frontend/HeroSection";

const services = [
  {
    icon: "assets/frontend/img/icons/service2-icon1.png",
    title: "Consulting Service",
    slug: "consulting-service",
    description: "Strategic IT planning roadmap development Business process analysis and improvement for It solution & technology.",
  },
  {
    icon: "assets/frontend/img/icons/service2-icon2.png",
    title: "Software Development",
    slug: "software-development",
    description: "Mobile app development for iOS, Android, and cross-platform solutions & web application.",
  },
  {
    icon: "assets/frontend/img/icons/service2-icon3.png",
    title: "Cloud Solution",
    slug: "cloud-solution",
    description: "Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS)",
  },
  {
    icon: "assets/frontend/img/icons/service2-icon4.png",
    title: "Cyber Security",
    slug: "cyber-security",
    description: "Threat assessment and vulnerability analysis. Security strategy development and implementation",
  },
  {
    icon: "assets/frontend/img/icons/service2-icon5.png",
    title: "Data Analytics",
    slug: "data-analytics",
    description: "Data visualization and business intelligence solutions Predictive analytics and machine learning",
  },
  {
    icon: "assets/frontend/img/icons/service2-icon6.png",
    title: "Manage It Services",
    slug: "manage-it-services",
    description: "Proactive IT monitoring and management Network infrastructure setup and maintenance",
  },
  {
    icon: "assets/frontend/img/icons/service2-icon7.png",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    description: "Threat assessment and vulnerability analysis. Security strategy development and implementation",
  },
  {
    icon: "assets/frontend/img/icons/service2-icon8.png",
    title: "IT Infrastructure & Networking",
    slug: "it-infrastructure-networking",
    description: "Data visualization and business intelligence solutions Predictive analytics and machine learning",
  },
  {
    icon: "assets/frontend/img/icons/service2-icon9.png",
    title: "Custom Software Development",
    slug: "custom-software-development",
    description: "Proactive IT monitoring and management Network infrastructure setup and maintenance",
  },
];

export default function Service() {
  return (
    <div>
      <HeroSection title="Our Service" breadcrumb={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <div className="space100"></div>
      <div className="servcie2">
        <div className="container">
          <div className="row">
            {services.map((service, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="">
                  <div className="servcie2-box">
                    <div className="icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <a href={`/service/${service.slug}`} className="arrow">
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                    <div className="heading2">
                      <h4>
                        <a href={`/services/${service.slug}`}>{service.title}</a>
                      </h4>
                      <div className="space16"></div>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <CTA />
    </div>
  );
}
