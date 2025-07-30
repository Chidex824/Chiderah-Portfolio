import React from "react";

const IntroSection = () => (
  <section id="home" className="intro-section">
    <div className="container">
      <div className="row align-items-center text-white">
        <div className="col-md-6 intros text-start">
          <h1 className="display-2">
            <span className="display-2--intro">Hey!, I'm Chiderah</span>
            <span className="display-2--description lh-base">
              A Full Stack Developer, <br />
              I build websites and web applications that are fast, secure and scalable.
            </span>
          </h1>
          <a href="#contact" className="rounded-pill btn-rounded">
            Get in Touch
            <span><i className="fas fa-arrow-right"></i></span>
          </a>
        </div>
        <div className="col-md-6 intros text-end">
          <div className="video-box">
            <img src="/assets/images/arts/intro-section-illustration.png" alt="video illustration" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;