"use client";

const Preloader = () => {
  return (
    <section>
      <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader ctn-preloader1">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="T" className="letters-loading">
                T
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="C" className="letters-loading">
                C
              </span>
              <span data-text-preloader="H" className="letters-loading">
                H
              </span>
              <span data-text-preloader="X" className="letters-loading">
                X
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
            </div>
          </div>
          <div className="loader-section-left loader-section section-left"></div>
          <div className="loader-section-right loader-section section-right"></div>
        </div>
      </div>
    </section>
  );
};

export default Preloader;
