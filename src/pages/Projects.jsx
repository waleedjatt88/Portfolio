import React from 'react';

const Projects = () => (
  <section className="ftco-section ftco-project" id="projects-section">
    <div className="container">
      <div className="row justify-content-center pb-5">
        <div className="col-md-12 heading-section text-center ftco-animate">
          <h1 className="big big-2">Projects</h1>
          <h2 className="mb-4">Our Projects</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </div>
      </div>
      <div className="row">
        {[
          { size: "col-md-4", img: "project-4.jpg" },
          { size: "col-md-8", img: "project-5.jpg" },
          { size: "col-md-8", img: "project-1.jpg" },
          { size: "col-md-4", img: "project-2.jpg" },
          { size: "col-md-4", img: "project-3.jpg" },
          { size: "col-md-8", img: "project-6.jpg" },
        ].map((project, index) => (
          <div className={project.size} key={index}>
            <div
              className="project img ftco-animate d-flex justify-content-center align-items-center"
              style={{ backgroundImage: `url(https://via.placeholder.com/${project.size === 'col-md-4' ? '400x300' : '800x300'}?text=${project.img})` }}
            >
              <div className="overlay"></div>
              <div className="text text-center p-4">
                <h3><a href="#">Branding & Illustration Design</a></h3>
                <span>Web Design</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;