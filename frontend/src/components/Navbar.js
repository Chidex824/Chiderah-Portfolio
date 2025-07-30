import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
    <div className="container">
      <a className="navbar-brand" href="#home">
        <img src="/assets/images/GSWL.png" alt="logo" style={{ width: 30, height: "auto" }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
          <li className="nav-item"><a className="nav-link" href="#testimonials">Testimonials</a></li>
          <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
          <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
        <button type="button" className="rounded-pill btn-rounded">
          <a href="tel:+2347082625455" style={{ color: "inherit", textDecoration: "none" }}>
            +234 7082625455 <span><i className="fas fa-phone-alt"></i></span>
          </a>
          <a href="https://wa.me/2347082625455" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none", marginLeft: 10 }}>
            <i className="fab fa-whatsapp"></i>
          </a>
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;