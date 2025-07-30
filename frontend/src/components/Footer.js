import React from "react";

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
          <div className="contact-box__icon">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-2" viewBox="0 0 24 24" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <line x1="18" y1="6" x2="18" y2="6.01" />
              <path d="M18 13l-3.5 -5a4 4 0 1 1 7 0l-3.5 5" />
              <polyline points="10.5 4.75 9 4 3 7 3 20 9 17 15 20 21 17 21 15" />
              <line x1="9" y1="4" x2="9" y2="17" />
              <line x1="15" y1="15" x2="15" y2="20" />
            </svg>
          </div>
          <div className="contact-box__info">
            <a href="https://www.google.com/maps/place/Karu, Nasarawa State,+Nigeria" target="_blank" rel="noopener noreferrer" className="contact-box__info--title">
              Karu, Nasarawa State, NIGERIA
            </a>
            <p className="contact-box__info--subtitle">NAS 10012, NG</p>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-sm" style={{ backgroundColor: "#212121" }}>
      <div className="container"></div>
    </div>
  </footer>
);

export default Footer;