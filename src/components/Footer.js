import React from "react";
import { Link } from "react-scroll";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

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
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"javascript:void(0)"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"javascript:void(0)"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>

              <LinkedinShareButton
                url={
                  "https://www.linkedin.com/in/narendra-bisht-%F0%9F%9F%A2-864b0315/"
                }
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
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
