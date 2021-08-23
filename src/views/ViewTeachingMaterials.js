import React from "react";
import Header from "../components/home-components/Header";
import ButtonFloating from "../components/ButtonFloating";
import { CarouselTeachingMaterials } from "../components/teaching-materials-components/CarouselTeachingMaterials";
import "../styles/app.css";
import { Categories } from "../components/teaching-materials-components/Categories";

export const ViewTeachingMaterials = () => {
  return (
    <div className="color-main">
      <Header />
      <CarouselTeachingMaterials />
      <Categories />
      <ButtonFloating  />
    </div>
  );
};
