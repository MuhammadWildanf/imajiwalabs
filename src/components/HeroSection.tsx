// components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type HeroSectionProps = {
  title: string;
  breadcrumb: BreadcrumbItem[];
};

const HeroSection = ({ title, breadcrumb }: HeroSectionProps) => {
  return (
    <div className="common-hero">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-lg-6 m-auto">
            <div className="main-heading">
              <h1>{title}</h1>
              <div className="space16"></div>
              <span className="span">
                <Image src="/assets/img/icons/span2.png" alt="breadcrumb icon" width={16} height={16} />{" "}
                {breadcrumb.map((item, index) => (
                  <span key={index}>
                    {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
                    {index < breadcrumb.length - 1 && (
                      <span className="arrow">
                        <i className="fa-regular fa-angle-right"></i>{" "}
                      </span>
                    )}
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
