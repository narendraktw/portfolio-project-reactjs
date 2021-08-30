import React from "react";
import { Modal } from "react-bootstrap";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";

import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

const ProjectDetailsModal = (props) => {
  const { data } = props;

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4> */}

        <div className="col-md-12">
          <div className="col-md-12 mx-auto" style={{ paddingBottom: "50px" }}>
            <AwesomeSlider
              cssModule={[AwesomeSliderStyles]}
              animation="scaleOutAnimation"
              className="slider-image"
            >
              {data.images.map((elem, i) => {
                return <div key={i} data-src={elem} />;
              })}
            </AwesomeSlider>
          </div>
          <div className="col-md-12 mx-auto">
            <h3 style={{ padding: "5px 5px 0 5px" }}>
              {data.title}
              {data.url ? (
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-href"
                >
                  <i
                    className="fas fa-external-link-alt"
                    style={{ marginLeft: "10px" }}
                  ></i>
                </a>
              ) : null}
            </h3>
            <p className="modal-description">
              <b>
                <h6>Project Description:</h6>
              </b>
              {data.description}

              <b>
                <h6 style={{ paddingTop: "10px" }}>Technologies:</h6>
              </b>
              {data.technology}
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProjectDetailsModal;
