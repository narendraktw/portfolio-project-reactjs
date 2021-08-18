import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS

const TestimonialsCarousel = (props) => {
  const { data } = props;
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      {data.map((item, index) => (
        <div key={index}>
          <img src={item.img} alt={item.img} />
          <div className="myCarousel">
            <h3>{item.name}</h3>
            <p>{item.Description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default TestimonialsCarousel;
