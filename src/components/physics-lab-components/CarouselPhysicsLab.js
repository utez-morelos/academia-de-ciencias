import React from "react";
import Bosque from "../../images/bosque.jpg";
import Lago from "../../images/lago.jpg";
import Pueblo from "../../images/pueblo.jpg";
import Back from "../../images/background.png";
import { Carousel } from "react-bootstrap";
import "../../styles/carousel.css";

export const CarouselPhysicsLab = () => {
  return (
    <div>
      <div className="container animate__animated animate__fadeInRight">
        <div className="contenido-physics">
          <div className="carousel-physics">
            <Carousel fade={true} controls={false}>
              <Carousel.Item>
                <img
                  className="carousel-physics"
                  src={Bosque}
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-physics"
                  src={Lago}
                  alt="Second slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-physics"
                  src={Pueblo}
                  alt="Third slide"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img className="carousel-physics" src={Back} alt="Four slide" />
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
                src={Bosque}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src={Bosque}
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
          </Carousel>
        </div>
      </div>
    </div>
  );
};
