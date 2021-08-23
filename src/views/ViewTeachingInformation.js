import React from "react";
import Header from "../components/home-components/Header";
import ButtonFloating from "../components/ButtonFloating";
import { CarouselTeachingInformation } from "../components/teaching-information-components/CarouselTeachingInformation";
import { TableInformation } from "../components/teaching-information-components/TableInformation";
import "../styles/app.css";

export const ViewTeachingInformation = () => {
  return (
    <div className="header">
      <Header />
      <CarouselTeachingInformation />
      <TableInformation />
      <ButtonFloating  />
    </div>
  );
};
