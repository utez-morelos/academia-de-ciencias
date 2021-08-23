import React from "react";
import { Carousel } from "react-bootstrap";
import "../../styles/carousel.css";

export const CarouselProjects = () => {
  return (
    <div>
      <div className="container animate__animated animate__fadeInRight">
        <div className="contenido-projects">
          <div className="carousel-projects">
            <Carousel fade={true} controls={false}>
              <Carousel.Item>
                <img className="carousel" src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg" alt="First project" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="carousel" src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg" alt="Second project" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="carousel" src="https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_960_720.jpg" alt="Third project" />
              </Carousel.Item>

              <Carousel.Item>
                <img className="carousel" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg" alt="Four project" />
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
                src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198_960_720.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_960_720.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://cdn.pixabay.com/photo/2017/05/04/16/37/meeting-2284501_960_720.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carousel-movil-size"
                src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
