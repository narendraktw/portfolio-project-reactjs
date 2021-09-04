import React, { useState } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";

const Portfolio = () => {
  const [projectData, setProjectData] = useState({});
  const [open, setOpen] = useState(false);

  const projectDetails = [
    {
      name: "Letter Automation Tool (LAT)",
      startDate: "2021",
      description:
        "The Letter Automation Tool (LAT) will serve as MHK’s formal method of receiving delivery of a client’s letter templates inventory, the tool will also auto tag the imported documents and hyper-automate correspondence configuration.  This streamline approach will save time through the reduction of manual analysis and improve quality through the reduction of configuration errors.",
      technology: "ReactJs, Redux, ES6, HTML5, Material UI, Sass",
      demoLink: "",
      githubLink: "",
      client: "MHK CareProminence",
      images: [
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img1.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img2.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img3.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img4.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img5.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img6.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img7.jpg`,
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
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/CMT/img2.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/CMT/img3.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/CMT/img5.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/CMT/img6.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/CMT/img7.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/CMT/img8.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/CMT/img9.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/CMT/img10.jpg",
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
      client: "Honeywell CORP",
      images: [
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LPFES/img1.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LPFES/img2.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LPFES/img3.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LPFES/img4.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LPFES/img5.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LPFES/img6.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LPFES/img7.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LPFES/img8.jpg",
      ],
    },
    {
      name: "Learning Portal",
      startDate: "2018",
      description:
        "This portal is designed as a gateway to facilitate trainings on different platforms which can be accessed both on mobile and desktop devices. All data (Learning done by employees with different platforms) will be uploaded in this portal which generates auto reports, dashboard, and badges assignment.",
      technology:
        "SharePoint Online, SharePoint designer workflow, ReactJs, JEST, Enzyme, ES6, Highchart.js, HTML5, Bootstrap, CSS3",
      demoLink: "",
      githubLink: "",
      client: "Honeywell CORP",
      images: [
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img1.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img2.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img3.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img4.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img5.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img6.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img7.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img8.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img9.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img10.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img11.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LearningPortal/img12.jpg",
      ],
    },

    {
      name: "Quota Deployment Tool",
      startDate: "2017",
      description:
        "This tool is used to deploy yearly quota for Honeywell Process Solution business on different level.",
      technology:
        "SharePoint Online, SP Services, ReactJs, AgilePoint, ES6, HTML5, CSS3",
      demoLink: "",
      githubLink: "",
      client: "Honeywell CORP",
      images: [
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/QDT/img1.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/QDT/img2.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/QDT/img3.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/QDT/img4.jpg",
      ],
    },

    {
      name: "Digital Workspace(DWP)",
      startDate: "2016",
      description:
        "This is an internal site for all Honeywell employees to get all the services of Honeywell.",
      technology:
        "SharePoint online, JavaScript, jQuery, HTML5, Bootstrap, CSS3",
      demoLink: "",
      githubLink: "",
      client: "Honeywell CORP",
      images: [
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/DWP/img1.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/DWP/img2.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/DWP/img3.jpg",
      ],
    },

    {
      name: "HSM City",
      startDate: "2011",
      description:
        "The objective of this site is to provide the information about the products of Honeywell Scanning and Mobility business. This site is multilingual and more than sixty partners of Honeywell. I migrated from Sitecore to the .net, and we generated 2-million-dollar profit from this project.",
      technology: "Asp.net, JavaScript, jQuery, HTML5, CSS3",
      demoLink: "",
      githubLink: "",
      client: "Honeywell HSM",
      images: [
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/HSMCity/img1.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/HSMCity/img2.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/HSMCity/img3.jpg",
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
                    className="col-sm-12 col-md-6 col-lg-4"
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
                            // width="400"
                            // height="300"
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
                          <h6 className="project-title-settings">
                            {projects.name}
                          </h6>
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
