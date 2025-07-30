import React from "react";

const Testimonials = () => (
  <section id="testimonials" className="testimonials position-relative">
    <div className="container">
      <div className="row align-items-center">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="testimonials__card">
                <p className="lh-lg">
                  <i className="fas fa-quote-left"></i>
                  We are committed to providing exceptional customer service and ensuring that our clients are satisfied with our work.
                  <div className="ratings p-1">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                  </div>
                </p>
              </div>
              <div className="testimonials__picture">
                <img src="/assets/images/testimonials/client-2.jpg" alt="client-2" className="rounded-circle img-fluid" />
              </div>
              <div className="testimonials__name">
                <h3>Joy Marete</h3>
                <p className="fw-light">Finance Manager</p>
              </div>
            </div>
            {/* Add more carousel items as needed */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;