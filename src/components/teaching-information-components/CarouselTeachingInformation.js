import React from "react";
import { Carousel } from "react-bootstrap";

import "../../styles/carousel.css";

export const CarouselTeachingInformation = () => {
  return (
    <div>
      <div className="container animate__animated animate__fadeInRight">
        <div className="contenido-teaching ">
          <div className="carousel-teaching">
            <Carousel fade={true} controls={false}>
              <Carousel.Item>
                <img
                  className="carousel-teaching"
                  src="https://www.redem.org/wp-content/uploads/2016/06/14470012433306.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-teaching"
                  src="https://img2.rtve.es/i/?w=1600&i=1499709938426.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="carousel-movil-home animate__animated animate__fadeInRight">
        <div className="carousel-movil-size">
          <Carousel fade={true} controls={false}>
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://www.redem.org/wp-content/uploads/2016/06/14470012433306.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://img2.rtve.es/i/?w=1600&i=1499709938426.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
