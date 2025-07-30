// filepath: frontend/src/components/Portfolio.js
import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/portfolio/")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="row">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="portfolio-box shadow">
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                />
                <div className="portfolio-info">
                  <div className="caption">
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
