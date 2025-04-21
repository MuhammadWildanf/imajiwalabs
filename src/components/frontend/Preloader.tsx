"use client";

const Preloader = () => {
  return (
    <section>
      <div id="preloader">
        <div id="ctn-preloader" className="ctn-preloader ctn-preloader1">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="V" className="letters-loading">
                V
              </span>
              <span data-text-preloader="O" className="letters-loading">
                O
              </span>
              <span data-text-preloader="R" className="letters-loading">
                R
              </span>
              <span data-text-preloader="T" className="letters-loading">
                T
              </span>
              <span data-text-preloader="R" className="letters-loading">
                R
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="X" className="letters-loading">
                X
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
