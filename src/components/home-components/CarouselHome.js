import React from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/carousel.css";

export const CarouselHome = () => {
  return (
    <div>
      <div className="container animate__animated animate__fadeInRight">
        <div className="contenido-home">
          <div className="carousel">
            <Carousel fade={true} controls={false}>
              <Carousel.Item>
                <img
                  className="carousel"
                  src="https://i.ibb.co/0QF2JWN/04.png"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel"
                  src="https://i.ibb.co/TWPjgkB/01.jpg"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel"
                  src="https://i.ibb.co/gmyNgXY/05.png"
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="carousel"
                  src="https://i.ibb.co/HqY1gXb/02.jpg"
                  alt="Four slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>

      <div className="carousel-movil-home animate__animated animate__fadeInRight">
        <div className="carousel-movil-size">
          <Carousel fade={true} controls={false} >
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://i.ibb.co/0QF2JWN/04.png"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://i.ibb.co/TWPjgkB/01.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://i.ibb.co/gmyNgXY/05.png"
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://i.ibb.co/HqY1gXb/02.jpg"
                alt="Four slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
