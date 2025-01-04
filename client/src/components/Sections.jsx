import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

const Sections = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="sections"
      >
        <Carousel.Item>
          <img
            className="d-block w-100 pics"
            src="./src/assets/laptop.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Laptop</h3>
            <p>
              Explore amazing deals in laptop. We have amazing collection on
              different brands with amazing specs.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pics"
            src="./src/assets/cam.jpeg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Camera</h3>
            <p>
              Interested in photography or vlogs. We have got all camera
              appliances
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pics"
            src="./src/assets/mob.jpeg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Mobile Phones</h3>
            <p>We have all major brand deals in our phones section.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 pics"
            src="./src/assets/tv.jpeg"
            alt="Fourth slide"
          />
          <Carousel.Caption>
            <h3>Television</h3>
            <p>All major TV brands available. Discover amazing deals.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Sections;
