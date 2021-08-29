import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import avatar1 from "../assets/images/avatars/avatar-1.png";
import avatar2 from "../assets/images/avatars/avatar-2.png";
import avatar3 from "../assets/images/avatars/avatar-3.png";
const Testimonials = () => {
  const Testimonials = [
    {
      name: "Chay Levell - MHK",
      Description:
        "The amount of effort that you put into the CMT & LAT project to complete it was tremendous. The energy levels and the sincerity which was displayed were exemplary. This has set up higher standards in front of our organization.",
      img: avatar1,
    },
    {
      name: "David Bertin - Honeywell",
      Description:
        "Thank you so much for the time spent to fix Quota Deployment tool after working hours. Very grateful for the help and support provided here with no notice. Thanks again.",
      img: avatar2,
    },
    {
      name: "Deb Mal - Honeywell",
      Description:
        "Contribution to setting up of the Digital Work Place (DWP) Platform through the coding, building and layout of pages amidst tight deadlines is highly commendable. The dedication, hunger for success and team work ethics showed by you stands as a testimony to the 12 behaviors of Honeywell and you have truly strived above and beyond to get the task accomplished within the mentioned time. Resources like you make Honeywell a truly successful company.",
      img: avatar3,
    },
  ];
  return (
    <div id="testimonials" className="testimonials">
      <h1>my happy clients</h1>
      <div className="container">
        <div className="testimonials-content">
          <TestimonialsCarousel data={Testimonials} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
