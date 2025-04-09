import { services } from "@/app/data/services";
import HeroSection from "@/components/HeroSection";
import CTA from "@/components/CTA";
import { notFound } from "next/navigation";

type Params = {
  params: {
    slug: string;
  };
};

export default function ServiceDetailPage({ params }: Params) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <div>
      <HeroSection title={service.title} breadcrumb={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.title }]} />

      <div className="service-details-area-all sp">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 details-right-space">
              <div className="service-details-post">
                <article>
                  <div className="details-post-area">
                    <div className="image">
                      <img src="assets/img/service/service-details-img.png" alt="" />
                    </div>
                    <div className="space30"></div>
                    <div className="heading2">
                      <h2>Software Development</h2>
                      <div className="space16"></div>
                      <p>
                        Welcome to TechXen IT Solutions, your premier destination for comprehensive software development services tailored to meet your business needs. Our team of experienced developers is dedicated to delivering
                        high-quality, scalable, and innovative software solutions that drive business growth success.
                      </p>
                    </div>
                  </div>
                </article>

                <div className="space50"></div>

                <article>
                  <div className="details-post-area">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="heading2">
                          <h5>Our Approach</h5>
                          <div className="space16"></div>
                          <p>
                            At TechXen IT Solutions, we take a client-centric approach to software development, prioritizing your unique requirements and objectives. Our process begins with a thorough understanding of your business goals,
                            target audience, and technical specifications. We then collaborate closely with you at every stage of the development cycle to ensure that the final product exceeds your expectations.
                          </p>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="space30"></div>
                        <div className="heading2">
                          <h5>Custom Development</h5>
                          <div className="space20"></div>
                          <p>Our team specializes in developing custom software solutions tailored to address your specific business challenges. Whether you need a web application, mobile app, or enterprise</p>
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="space30"></div>
                        <div className="heading2">
                          <h5>Development Services</h5>
                          <div className="space20"></div>
                          <p>From initial concept and design to development, testing, and deployment, we offer comprehensive full-cycle development services to ensure a seamless and efficient development process.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>

                <div className="space50"></div>
                <article>
                  <div className="details-post-area">
                    <div className="heading2">
                      <h5>Our Approach</h5>
                      <div className="space16"></div>
                      <p>
                        At TechXen IT Solutions, we take a client-centric approach to software development, prioritizing your unique requirements and objectives. Our process begins with a thorough understanding of your business goals,
                        target audience, and technical specifications. We then collaborate closely with you at every stage of the development cycle to ensure that the final product exceeds your expectations.
                      </p>

                      <div className="space20"></div>
                      <ul className="expart-list">
                        <li>
                          <span className="check">
                            <i className="fa-solid fa-check"></i>
                          </span>{" "}
                          <span className="text">Frontend:</span> (HTML, CSS, JavaScript, React, Angular, Vue.js)
                        </li>
                        <li>
                          <span className="check">
                            <i className="fa-solid fa-check"></i>
                          </span>{" "}
                          <span className="text">Backend:</span> (Node.js, Python, Ruby on Rails, PHP, .NET)
                        </li>
                        <li>
                          <span className="check">
                            <i className="fa-solid fa-check"></i>
                          </span>{" "}
                          <span className="text">Database:</span> (MySQL, MongoDB, PostgreSQL, Oracle)
                        </li>
                        <li>
                          <span className="check">
                            <i className="fa-solid fa-check"></i>
                          </span>{" "}
                          <span className="text">Mobile:</span> (iOS (Swift), Android (Java, Kotlin), React Native)
                        </li>
                        <li>
                          <span className="check">
                            <i className="fa-solid fa-check"></i>
                          </span>{" "}
                          <span className="text">Cloud Platform:</span> (AWS, Azure, Google Cloud Platform)
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>

                <div className="space20"></div>

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="">
                      <div className="servcie2-box">
                        <div className="icon">
                          <img src="assets/img/icons/service2-icon5.png" alt="" />
                        </div>
                        <a href="#" className="arrow">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <div className="heading2">
                          <h4>
                            <a href="#">Data Analytics</a>
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

                  <div className="col-lg-6 col-md-6">
                    <div className="">
                      <div className="servcie2-box">
                        <div className="icon">
                          <img src="assets/img/icons/service2-icon6.png" alt="" />
                        </div>
                        <a href="#" className="arrow">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <div className="heading2">
                          <h4>
                            <a href="#">Manage It Services</a>
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

                <div className="space50"></div>

                <div className="faq-area-all">
                  <div className="heading2">
                    <h5>Frequently Asked Question</h5>
                  </div>
                  <div className="space20"></div>

                  <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          What does TechXen do?
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Yes, we'd be happy to provide references or case studies of past projects upon request. Our satisfied clients serve as a testament.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          How can TechXen help my business?
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Yes, we'd be happy to provide references or case studies of past projects upon request. Our satisfied clients serve as a testament.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          What industries does TechXen serve?
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Yes, we'd be happy to provide references or case studies of past projects upon request. Our satisfied clients serve as a testament.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                          How experienced is the team at TechXen?
                        </button>
                      </h2>
                      <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Yes, we'd be happy to provide references or case studies of past projects upon request. Our satisfied clients serve as a testament.</div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                          How long does it take to implement a solution from TechXen?
                        </button>
                      </h2>
                      <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Yes, we'd be happy to provide references or case studies of past projects upon request. Our satisfied clients serve as a testament.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar-box-area mb-40">
                <h3>Search by Keyword</h3>
                <div className="search">
                  <input type="text" placeholder="Type keyword here" />

                  <div className="button">
                    <button>
                      <i className="fa-regular fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Our Services</h3>
                <ul className="features-list">
                  <li>
                    <a href="#">
                      Software Development{" "}
                      <span>
                        <i className="fa-regular fa-angle-right"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Consulting Service{" "}
                      <span>
                        <i className="fa-regular fa-angle-right"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Cloud Solution{" "}
                      <span>
                        <i className="fa-regular fa-angle-right"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Cyber Security{" "}
                      <span>
                        <i className="fa-regular fa-angle-right"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Data Analytics{" "}
                      <span>
                        <i className="fa-regular fa-angle-right"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Manage It Services{" "}
                      <span>
                        <i className="fa-regular fa-angle-right"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Tags</h3>
                <ul className="tags">
                  <li>
                    <a href="#">Software Development</a>
                  </li>
                  <li>
                    <a href="#">Cloud </a>
                  </li>
                  <li>
                    <a href="#">It Solution</a>
                  </li>
                  <li>
                    <a href="#">Data Analytics Service</a>
                  </li>
                  <li>
                    <a href="#">Technology</a>
                  </li>
                  <li>
                    <a href="#">Custom Development</a>
                  </li>
                  <li>
                    <a href="#">Cyber Security</a>
                  </li>
                  <li>
                    <a href="#">Consulting Service</a>
                  </li>
                </ul>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Download Brochure</h3>
                <p>With a focus on excellence & commitment to exceeding expectations, our experienced team is here to empower Solution.</p>
                <div className="download-btns">
                  <a className="daownload1" href="#">
                    PDF Download <img src="assets/img/icons/download-img.png" alt="" />
                  </a>
                  <a className="daownload2" href="#">
                    DOC Download <img src="assets/img/icons/download-img.png" alt="" />
                  </a>
                </div>
              </div>

              <div className="sidebar-box-area sidebar-bg mb-40">
                <h3>Get A Free Quote</h3>
                <div className="contact-form">
                  <form action="#">
                    <div className="single-input">
                      <input type="text" placeholder="Your Name" />
                    </div>

                    <div className="single-input">
                      <input type="email" placeholder="Email Address" />
                    </div>

                    <div className="single-input">
                      <input type="number" placeholder="Phone Number" />
                    </div>

                    <div className="single-input">
                      <textarea placeholder="Your Message" cols="30" rows="3"></textarea>
                    </div>

                    <div className="button">
                      <button className="theme-btn2">
                        Learn More{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="servcie2 pb100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto text-center">
              <div className="heading2">
                <h2>More Services</h2>
              </div>
            </div>
          </div>

          <div className="space30"></div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="">
                <div className="servcie2-box">
                  <div className="icon">
                    <img src="assets/img/icons/service2-icon1.png" alt="" />
                  </div>
                  <a href="#" className="arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <div className="heading2">
                    <h4>
                      <a href="#">Consulting Service</a>
                    </h4>
                    <div className="space16"></div>
                    <p>Strategic IT planning roadmap development Business process analysis and improvement for It solution & technology.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="">
                <div className="servcie2-box">
                  <div className="icon">
                    <img src="assets/img/icons/service2-icon2.png" alt="" />
                  </div>
                  <a href="#" className="arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <div className="heading2">
                    <h4>
                      <a href="#">Software Development</a>
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
              <div className="">
                <div className="servcie2-box">
                  <div className="icon">
                    <img src="assets/img/icons/service2-icon3.png" alt="" />
                  </div>
                  <a href="#" className="arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </a>
                  <div className="heading2">
                    <h4>
                      <a href="#">Cloud Solution</a>
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
          </div>

          <div className="space40"></div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <a className="theme-btn2" href="#">
                View All Services{" "}
                <span>
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="space100"></div>

      <CTA />
    </div>
  );
}
