import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import avatar1 from "../assets/images/avatars/avatar-1.png";
import avatar2 from "../assets/images/avatars/avatar-2.png";
import avatar3 from "../assets/images/avatars/avatar-3.png";
const Testimonials = () => {
  const Testimonials = [
    {
      name: "John Doe 1",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!",
      img: avatar1,
    },
    {
      name: "Peter Jofriet",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!",
      img: avatar2,
    },
    {
      name: "John Doe 3",
      Description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!",
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
