import Image from "next/image";

const About = () => {
  return (
    <div className="about2">
      <div className="container">
        <div className="row align-items-center">
          {/* Left image section */}
          <div className="col-lg-6">
            <div className="about2-images relative">
              <div className="image1 absolute z-10" data-aos="zoom-in-right" data-aos-duration="800">
                <Image src="/assets/img/about/about2-img1.png" alt="About Image 1" width={150} height={120} className="rounded shadow-lg" />
              </div>
              <div className="image2 reveal image-anime absolute z-0">
                <Image src="/assets/img/about/about2-img2.png" alt="About Image 2" width={300} height={300} className="rounded shadow-md" />
              </div>
              <div className="image3 absolute z-20" data-aos="zoom-in-left" data-aos-duration="900">
                <Image src="/assets/img/about/about2-img3.png" alt="About Image 3" width={150} height={120} className="rounded shadow" />
              </div>
              <div className="counter-box absolute bg-white p-4 rounded-lg shadow-xl text-center" data-aos="flip-left" data-aos-duration="700">
                <h3 className="text-4xl font-bold text-primary">25</h3>
                <p className="text-sm text-gray-700">
                  Years Of <br /> Experience
                </p>
              </div>
            </div>
          </div>

          {/* Right content section */}
          <div className="col-lg-6">
            <div className="heading2">
              <span className="span" data-aos="zoom-in-left" data-aos-duration="700">
                <Image src="/assets/img/icons/span2.png" alt="Span Icon" width={20} height={20} /> Our Service
              </span>
              <h2 className="title tg-element-title">Empower Your Business With Our Comprehensive IT Solutions</h2>
              <div className="space16" />
              <p data-aos="fade-up-left" data-aos-duration="700">
                Welcome to TechXen, your premier destination for cutting-edge technology solutions and IT services. At TechXen, we are passionate about harnessing the power of technology to empower businesses a like.
              </p>

              <div className="space10" />

              <div className="porgress-line-all" data-aos="fade-up-left" data-aos-duration="900">
                <div className="progress-line">
                  <h6>IT Consulting</h6>
                  <div id="progress1" data-init="true"></div>
                </div>
                <div className="progress-line">
                  <h6>Cyber Security</h6>
                  <div id="progress2" data-init="true"></div>
                </div>
              </div>

              <div className="space30" />
              <div className="button" data-aos="fade-up-left" data-aos-duration="800">
                <a className="theme-btn2" href="/about">
                  Learn More
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
  );
};

export default About;
