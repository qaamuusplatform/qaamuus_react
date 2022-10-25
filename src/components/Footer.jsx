import React from 'react'

export default function Footer() {
  return (
    <footer className="footer -type-1 bg-dark-1 -green-links">
      <div className="container">
        <div className="footer-header">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="footer-header__logo">
                <img src="assets/img/footer/footer-logo.svg" alt="logo" />
              </div>
            </div>
            <div className="col-auto">
              <div className="footer-header-socials">
                <div className="footer-header-socials__title text-white">Follow us on social media</div>
                <div className="footer-header-socials__list">
                  <a href="#"><i className="icon-facebook" /></a>
                  <a href="#"><i className="icon-twitter" /></a>
                  <a href="#"><i className="icon-instagram" /></a>
                  <a href="#"><i className="icon-linkedin" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-30 border-top-light-15">
          <div className="row justify-between items-center y-gap-20">
            <div className="col-auto">
              <div className="d-flex items-center h-100 text-white">
                © 2022 Educrat. All Right Reserved.
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                <div>
                  <div className="d-flex x-gap-15 text-white">
                    <a href="help-center.html">Help</a>
                    <a href="terms.html">Privacy Policy</a>
                    <a href="terms.html">Cookie Notice</a>
                    <a href="terms.html">Security</a>
                    <a href="terms.html">Terms of Use</a>
                  </div>
                </div>
                <div>
                  <a href="#" className="button px-30 h-50 -dark-6 rounded-200 text-white">
                    <i className="icon-worldwide text-20 mr-15" /><span className="text-15">English</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
