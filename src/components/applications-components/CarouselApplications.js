import React from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/carousel.css";

export const CarouselApplications = () => {
  return (
    <div>
      <div className="container animate__animated animate__fadeInRight">
        <div className="contenido-application">
          <div className="carousel-application">
            <Carousel fade={true} controls={false}>
              <Carousel.Item>
                <img
                  className="carousel-application"
                  src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-application"
                  src="https://images.pexels.com/photos/971325/pexels-photo-971325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-application"
                  src="https://images.pexels.com/photos/177707/pexels-photo-177707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="carousel-application"
                  src="https://destinonegocio.com/wp-content/uploads/2016/05/aplicaciones-moviles.jpg"
                  alt="Four slide"
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
                  src="https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-movil-size"
                  src="https://images.pexels.com/photos/971325/pexels-photo-971325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-movil-size"
                  src="https://images.pexels.com/photos/177707/pexels-photo-177707.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="carousel-movil-size"
                  src="https://destinonegocio.com/wp-content/uploads/2016/05/aplicaciones-moviles.jpg"
                  alt="Four slide"
                />
              </Carousel.Item>G
          </Carousel>
        </div>
      </div>
    </div>
  );
};
