// components/CTA.tsx
"use client";

import { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Lakukan sesuatu dengan email, misal kirim ke API
    console.log("Subscribed email:", email);
    setEmail("");
  };

  return (
    <div className="cta2 pt100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading2">
              <h2 className="title tg-element-title">We're Committed To Businesses</h2>
              <div className="space16"></div>
              <p>At TechXen IT Solutions, we're dedicated to delivering innovative technology solutions tailored to meet the unique needs of businesses like yours.</p>

              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="subscribe-form">
                    <form onSubmit={handleSubmit}>
                      <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      <div className="button">
                        <button type="submit" className="theme-btn2">
                          Subscribe{" "}
                          <span className="arrow1">
                            <i className="fa-solid fa-arrow-right"></i>
                          </span>
                          <span className="arrow2">
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
      </div>
    </div>
  );
};

export default CTA;
