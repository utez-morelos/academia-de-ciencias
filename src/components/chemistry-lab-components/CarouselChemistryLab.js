import React from "react";
import { Carousel } from "react-bootstrap";

import "../../styles/carousel.css";

export const CarouselChemistryLab = () => {
  return (
    <div>
      <div className="container animate__animated animate__fadeInRight">
        <div className="contenido-chemistry">
          <div className="carousel-chemistry">
            <Carousel fade={true} controls={false}>
              <Carousel.Item>
                <img
                  className="carousel-chemistry"
                  src="https://i.ibb.co/DkWCZvb/IMG-20210709-3.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-chemistry"
                  src="https://i.ibb.co/KFcg9Ft/IMG-20210709-1.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-chemistry"
                  src="https://i.ibb.co/XxnqCsk/IMG-20210709-4.jpg"
                  alt="First slide"
                />
              </Carousel.Item>{" "}
              <Carousel.Item>
                <img
                  className="carousel-chemistry"
                  src="https://i.ibb.co/QJ6Y2R4/IMG-20210709-15.jpg"
                  alt="First slide"
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
                src="https://i.ibb.co/DkWCZvb/IMG-20210709-3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>{" "}
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://i.ibb.co/KFcg9Ft/IMG-20210709-1.jpg"
                alt="Third slide"
              />
            </Carousel.Item>{" "}
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://i.ibb.co/XxnqCsk/IMG-20210709-4.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-chemistry"
                src="https://i.ibb.co/QJ6Y2R4/IMG-20210709-15.jpg"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
