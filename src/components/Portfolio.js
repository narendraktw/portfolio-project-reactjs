import React from "react";
import netflix from "../assets/images/netflix.png";
import cityGuide from "../assets/images/city-guide-app.png";
import portfolio from "../assets/images/portfolio.png";
import taskManager from "../assets/images/task-manager.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {
  const projectDetails = [
    {
      name: "Letter Automation Tool (LAT)",
      description:
        "The Letter Automation Tool (LAT) will serve as MHK’s formal method of receiving delivery of a client’s letter templates inventory, the tool will also auto tag the imported documents and hyper-automate correspondence configuration.  This streamline approach will save time through the reduction of manual analysis and improve quality through the reduction of configuration errors.",
      technology: "ReactJs, Redux, ES6, HTML5, Material UI, Sass",
      demoLink: "",
      githubLink: "",
      client: "MHK CareProminence",
      images: [
        require("../assets/images/project/LAT/img1.jpg"),
        "../assets/images/project/LAT/img2.jpg",
        "../assets/images/project/LAT/img3.jpg",
        "../assets/images/project/LAT/img4.jpg",
        "../assets/images/project/LAT/img5.jpg",
      ],
    },
    {
      name: "MHK Care Prominence Configuration Management Tool",
      description:
        "The Letter Automation Tool (LAT) will serve as MHK’s formal method of receiving delivery of a client’s letter templates inventory, the tool will also auto tag the imported documents and hyper-automate correspondence configuration.  This streamline approach will save time through the reduction of manual analysis and improve quality through the reduction of configuration errors.",
      technology: "ReactJs, Redux, ES6, HTML5, Material UI, Sass",
      demoLink: "",
      githubLink: "",
      client: "MHK CareProminence",
      images: [
        "../assets/images/project/LAT/img1.jpg",
        "../assets/images/project/LAT/img2.jpg",
        "../assets/images/project/LAT/img3.jpg",
        "../assets/images/project/LAT/img4.jpg",
        "../assets/images/project/LAT/img5.jpg",
      ],
    },
  ];
  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={netflix}
          alt="Netflix Clone Project..."
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>GitHub:</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/8020Coding/netflix-project")
          }
        >
          https://github.com/8020Coding/netflix-project
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={cityGuide}
          alt="City Guide App Project..."
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>Demo:</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://city-guide-app-project.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://city-guide-app-project.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://github.com/8020Coding/city-guide-app",
              "_blank"
            )
          }
        >
          https://github.com/8020Coding/city-guide-app
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide App project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={portfolio}
          alt="Portfolio Project..."
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>Demo:</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() =>
            window.open(
              "https://portfolio-rea-and-material-ui.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://portfolio-rea-and-material-ui.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/8020Coding/portfilio", "_blank")
          }
        >
          https://github.com/8020Coding/portfilio
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Poftfolio React and Material UI project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img
          className="portfolio-image-popupbox"
          src={taskManager}
          alt="Task Manager React and Redux Project..."
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque
          illo est expedita quos adipisci suscipit unde itaque qui perferendis.
        </p>
        <b>Demo:</b>{" "}
        <a
          className="hyper-link"
          href
          onClick={() =>
            window.open(
              "https://react-redux-task-manager.herokuapp.com/",
              "_blank"
            )
          }
        >
          https://react-redux-task-manager.herokuapp.com/
        </a>
        <br />
        <b>GitHub:</b>{" "}
        <a
          href
          className="hyper-link"
          onClick={() =>
            window.open("https://github.com/8020Coding/task-manager", "_blank")
          }
        >
          https://github.com/8020Coding/task-manager
        </a>
      </>
    );
    PopupboxManager.open({ content });
  };

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task Manager React and Redux project.",
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <h1 className="text-uppercase text-center py-5">portfolio</h1>
      <div className="container">
        <div className="image-box-wrapper row justify-content-center">
          {projectDetails.map((item) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div
                  className="portfolio-image-box"
                  onClick={openPopupboxNetflix}
                >
                  <img
                    className="portfolio-image"
                    src={item.images[0]}
                    alt={item.name}
                  />
                  <div className="overflow"></div>
                  <FontAwesomeIcon
                    className="portfolio-icon"
                    icon={faSearchPlus}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  );
};

export default Portfolio;
