'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            {currentYear} © Attex - Coderthemes.com
          </div>
          <div className="col-md-6">
            <div className="text-md-end footer-links d-none d-md-block">
              <a href="javascript:void(0);">About</a>
              <a href="javascript:void(0);">Support</a>
              <a href="javascript:void(0);">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
