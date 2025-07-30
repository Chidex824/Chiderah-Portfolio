import React from "react";

const Services = () => (
  <section id="services" className="services">
    <div className="container">
      <div className="row text-center">
        <h1 className="display-3 fw-bold">My Services</h1>
        <div className="heading-line mb-1"></div>
      </div>
      <div className="row pt-2 pb-2 mt-0 mb-3">
        <div className="col-md-6 border-right">
          <div className="bg-white p-3">
            <h2 className="fw-bold text-capitalize text-center">
              My Services Range From Initial Design To Deployment Anywhere Anytime
            </h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="bg-white p-4 text-start">
            <p className="fw-light">
              Web Development, Mobile App Development, UI/UX Design, Search Engine Optimization and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;