import React from "react";
import logo from "../logo.png";
import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <Link smooth={true} to="home" className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo..." />
        </Link>
        {/* <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="logo..." />
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-90}
                className="nav-link"
                href="#"
              >
                about me
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                smooth={true}
                to="services"
                offset={-90}
                className="nav-link"
                href="#"
              >
                services
              </Link>
            </li> */}
            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                offset={-90}
                className="nav-link"
                href="#"
              >
                experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="portfolio"
                offset={-90}
                className="nav-link"
                href="#"
              >
                portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="testimonials"
                offset={-90}
                className="nav-link"
                href="#"
              >
                Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contacts"
                offset={-90}
                className="nav-link"
                href="#"
              >
                contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
