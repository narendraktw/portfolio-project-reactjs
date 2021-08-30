import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Portfolio = () => {
  const [projectData, setProjectData] = useState({});
  const [open, setOpen] = useState(false);

  const projectDetails = [
    {
      name: "Letter Automation Tool (LAT)",
      startDate: "2020",
      description:
        "The Letter Automation Tool (LAT) will serve as MHK’s formal method of receiving delivery of a client’s letter templates inventory, the tool will also auto tag the imported documents and hyper-automate correspondence configuration.  This streamline approach will save time through the reduction of manual analysis and improve quality through the reduction of configuration errors.",
      technology: "ReactJs, Redux, ES6, HTML5, Material UI, Sass",
      demoLink: "",
      githubLink: "",
      client: "MHK CareProminence",
      images: [
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img1.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img3.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img4.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img5.jpg`,
      ],
    },
    {
      name: "MHK Configuration Management Tool",
      startDate: "2020",
      description:
        "The purpose of the Configuration Management Tool (CMT) is to simplify the process of gathering business requirements, configuring, and implementing those requirements into individual MHK Care Prominence client solutions. The tool will allow MHK Care Prominence product team to define and build Solution specific, out of the Box (OOB) configuration settings, along with storing previous versions. The CMT Tool will allow access to MHK Care Prominence clients to enter their specific business requirements and make changes to the predefined settings that align with their business needs",
      technology: "ReactJs, Redux, ES6, HTML5, Material UI, Sass",
      demoLink: "",
      githubLink: "",
      client: "MHK CareProminence",
      images: [
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/CMT/img1.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img2.jpg",
      ],
    },
    {
      name: "Learning Plan for Every Seller",
      startDate: "2019",
      description:
        "This site is designed to check the Honeywell sales, customer marketing, and offering management team’s performance. It provides development actions against competencies, learning plan, progress against development actions for managers and employees in one place. Accessed on mobile and desktop both devices.",
      technology:
        "Asp.net, ReactJs, Redux, JEST, Enzyme, ES6, HTML5, Bootstrap, AWS SQL Database, Tableau 10.3, Wordsmith",
      demoLink: "",
      githubLink: "",
      client: "MHK CareProminence",
      images: [
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LPFES/img1.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LPFES/img2.jpg",
      ],
    },
  ];

  let detailsModalShow = (data) => {
    setOpen(true);
    setProjectData(data);
  };

  let detailsModalClose = () => setOpen(false);

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <h1 className="text-uppercase text-center py-5">portfolio</h1>
      <div className="container">
        <section id="portfolio">
          <div className="col-md-12 mx-auto">
            <div className="row mx-auto">
              {projectDetails?.map((projects, index) => {
                return (
                  <div
                    className="col-sm-12 col-md-6 col-lg-6"
                    key={projects.name}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="portfolio-item d-block">
                      <div
                        className="foto"
                        onClick={() => detailsModalShow(projects)}
                      >
                        <div>
                          <img
                            src={projects.images[0]}
                            alt="projectImages"
                            width="400"
                            height="300"
                            style={{
                              marginBottom: 0,
                              paddingBottom: 0,
                              position: "relative",
                              border: "1px solid #e9e9e9",
                            }}
                          />
                          <span className="project-date">
                            {projects.startDate}
                          </span>
                          <br />
                          <h5 className="project-title-settings">
                            {projects.name}
                          </h5>
                        </div>
                      </div>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {open && (
            <ProjectDetailsModal
              show={open}
              onHide={detailsModalClose}
              data={projectData}
            />
          )}
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
