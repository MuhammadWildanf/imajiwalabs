import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="hero2">
      <div className="container">
        <div className="row">
          {/* Kiri */}
          <div className="col-lg-6">
            <div className="main-heading">
              <span className="span" data-aos="zoom-in-right" data-aos-duration="700">
                <img src="/assets/frontend/img/icons/span2.png" alt="" />
                Vortrex
              </span>
              <h1 className="title tg-element-title">Empowering Your Digital Journey With TechXen</h1>
            </div>

            <div className="row _relative">
              <div className="col-lg-9">
                <div className="hero2-tags">
                  <ul>
                    <li>
                      <Link href="#">Software Development</Link>
                    </li>
                    <li>
                      <Link href="#">Cloud Solution</Link>
                    </li>
                    <li className="active">
                      <Link href="#">It Solution</Link>
                    </li>
                    <li>
                      <Link href="#">Data Analytics</Link>
                    </li>
                    <li>
                      <Link href="#">Technology</Link>
                    </li>
                    <li>
                      <Link href="#">Cyber Security</Link>
                    </li>
                    <li>
                      <Link href="#">Consulting Services</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="circle-shapes">
                  <div className="shape1 shape-animaiton4">
                    <img src="/assets/frontend/img/shapes/hero2-shape1.png" alt="" />
                  </div>
                  <div className="shape2">
                    <Link href="/service.html">
                      <img src="/assets/frontend/img/shapes/hero2-shape2.png" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan */}
          <div className="col-lg-6">
            <div className="hero2-main-imges">
              <div className="image1">
                <img src="/assets/frontend/img/hero/hero2-main-img1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {
        <div className="hero2-main-imge2">
          <img src="/assets/frontend/img/hero/hero2-main-img2.png" alt="" />
        </div>
      }
    </div>
  );
}
