import React from "react";
import { Link } from "react-scroll";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>M-504, Paramount Emotions, Greater Noida</p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+918800664196</a>
            </div>
            <div className="d-flex">
              <p>narendraktw@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link
                  smooth={true}
                  to="home"
                  className="nav-link-footer"
                  href="#"
                >
                  Home <span className="sr-only">(current)</span>
                </Link>

                <Link
                  smooth={true}
                  to="about"
                  offset={-110}
                  className="nav-link-footer"
                >
                  about me
                </Link>

                <Link
                  smooth={true}
                  to="services"
                  offset={-110}
                  className="nav-link-footer"
                  href="#"
                >
                  services
                </Link>
              </div>
              <div className="col">
                <Link
                  smooth={true}
                  to="experience"
                  offset={-110}
                  className="nav-link-footer"
                >
                  experience
                </Link>
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-110}
                  className="nav-link-footer"
                >
                  portfolio
                </Link>
                <Link
                  smooth={true}
                  to="contacts"
                  offset={-110}
                  className="nav-link-footer"
                >
                  contacts
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center buttonFix">
              <Button
                href="https://www.linkedin.com/in/narendra-bisht-864b0315/"
                target="_blank"
                style={{
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  width: "36px",
                  minWidth: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  alignItems: "center",
                  marginTop: "4px",
                }}
              >
                <LinkedInIcon
                  className="mx-3"
                  style={{ color: "#0e76a8", fontSize: 50 }}
                />
              </Button>
              <Button
                href="https://github.com/narendraktw"
                target="_blank"
                style={{
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  width: "36px",
                  minWidth: "36px",
                  height: "42px",
                  borderRadius: "16px",
                  alignItems: "center",
                }}
              >
                <GitHubIcon
                  className="mx-3"
                  style={{ color: "#4078c0", fontSize: 45 }}
                />
              </Button>
              <Button
                href="https://www.facebook.com/narendraktw/"
                target="_blank"
                style={{
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  width: "36px",
                  minWidth: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  alignItems: "center",
                  marginTop: "4px",
                }}
              >
                <FacebookIcon
                  className="mx-3"
                  style={{ color: "#4267B2", fontSize: 50 }}
                />
              </Button>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;| All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
