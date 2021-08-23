import React from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/carousel.css";

export const CarouselTeachingMaterials = () => {
  return (
    <div>
      <div className="container animate__animated animate__fadeInRight">
        <div className="contenido-material">
          <div className="carousel-material">
            <Carousel fade={true} controls={false}>
              <Carousel.Item>
                <img
                  className="carousel-material"
                  src="https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-material"
                  src="https://images.pexels.com/photos/8539752/pexels-photo-8539752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260G"
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="carousel-material"
                  src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260G"
                  alt="Second slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="carousel-material"
                  src="https://images.pexels.com/photos/6238068/pexels-photo-6238068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260G"
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
                src="https://images.pexels.com/photos/6238050/pexels-photo-6238050.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://images.pexels.com/photos/8539752/pexels-photo-8539752.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260G"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260G"
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://images.pexels.com/photos/6238068/pexels-photo-6238068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260G"
                alt="Four slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
