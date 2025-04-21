import Image from "next/image";

const About = () => {
  return (
    <div className="about2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about2-images">
              <div className="image1" data-aos="zoom-in-right" data-aos-duration="800">
                <img src="assets/frontend/img/about/about2-img1.png" alt="" />
              </div>
              <div className="image2 reveal image-anime">
                <img src="assets/frontend/img/about/about2-img2.png" alt="" />
              </div>
              <div className="image3" data-aos="zoom-in-left" data-aos-duration="900">
                <img src="assets/frontend/img/about/about2-img3.png" alt="" />
              </div>
              <div className="counter-box" data-aos="flip-left" data-aos-duration="700">
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
              <span className="span" data-aos="zoom-in-left" data-aos-duration="700"><img src="assets/frontend/img/icons/span2.png" alt="" /> Our Service</span>
              <h2 className="title tg-element-title">Empower Your Business With Our Comprehensive IT Solutions</h2>
              <div className="space16"></div>
              <p data-aos="fade-up-left" data-aos-duration="700">
                Welcome to TechXen, your premier destination for cutting-edge technology solutions and IT services. At TechXen, we are passionate about harnessing the power of technology to empower businesses a like.
              </p>

              <div className="space10"></div>

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

              <div className="space30"></div>
              <div className="button" data-aos="fade-up-left" data-aos-duration="800">
                <a className="theme-btn2" href="/about"
                >Learn More <span className="arrow1"><i className="fa-solid fa-arrow-right"></i></span><span className="arrow2"><i className="fa-solid fa-arrow-right"></i></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
