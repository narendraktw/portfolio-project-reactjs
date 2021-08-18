import React from "react";
import netflix from "../assets/images/netflix.png";

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
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img1.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img2.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img3.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img4.jpg`,
        `https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img5.jpg`,
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
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img1.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img2.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img3.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img4.jpg",
        "https://raw.githubusercontent.com/narendraktw/portfolio-project-reactjs/main/src/assets/images/project/LAT/img5.jpg",
      ],
    },
  ];
  console.log(process?.env?.SERVER_NAME);
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

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <h1 className="text-uppercase text-center py-5">portfolio</h1>
      <div className="container">
        <div className="image-box-wrapper row justify-content-center">
          {projectDetails.map((item, index) => {
            return (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
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
    </div>
  );
};

export default Portfolio;
