import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="container-lg text-center">
        <div className="row justify-content-space-between text-white p-3 footer-cont">
          <div className="col-md-3 col-lg-3 col-sm-3 col-12">
            <h6 className="fw-bold">ABOUT</h6>
            <p>-Introduction</p>
            <p>-Mission Version & rules</p> <br />
            <h6 className="fw-bold">BUSINESS</h6>
            <p>-Hotels</p>
            <p>-Entertainment</p> <br />
          </div>
          <div className="col-md-3 col-lg-3 col-sm-3 col-12">
            <h6 className="fw-bold">PARTNERS & AFILIATES</h6>
            <br />
            <h6 className="fw-bold">MEDIA CENTER</h6> <br />
          </div>
          <div className="col-md-3 col-lg-3 col-sm-3 col-12">
            <h6 className="fw-bold">ATAA CENTER</h6>
            <br />
            <h6 className="fw-bold">INVESTOR RELATIONS</h6>
            <p>-Announcements</p>
            <p>-Download Prospects</p>
          </div>
          <div className="col-md-3 col-lg-3 col-sm-3 col-12">
            <h6 className="fw-bold">CONTACT US</h6>

            <div className="social-links">
              <a href="https://www.facebook.com">
                <FaFacebookF />
              </a>
              <a href="https://www.facebook.com">
                <FaTwitter />
              </a>
              <a href="https://www.facebook.com">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Footer;
