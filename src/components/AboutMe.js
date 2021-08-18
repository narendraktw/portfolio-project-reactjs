import React from "react";
import author from "../assets/images/myPic.png";
const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hello! I am Narendra Bisht. I have been developing web applications
            for over 10 years. I'm Full-Stack Web Developer. Technologies I use
            is MERN(MongoDB, Express, ReactJS and NodeJS). I create responsive
            websites that are displayed on all devices desktops and smartphones.
            Of course, before I begin developing any webapp, Landing Page,
            Business Website or E-commerce, I need to have a ready-made project
            layout (sketch). And I’m ready to do this for you, before we start
            developing your website, we will discuss all the details of your
            niche with you, I will conduct a survey of your competitors and make
            a list of their advantages and weaknesses. All this is necessary to
            give your customers something that your competitors do not provide,
            or to present it too, but better! After the website is finished and
            ready to deploy and sell a product or service. It is essential that
            your potential clients know about you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
