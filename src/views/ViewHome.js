import React from "react";
import { CarouselHome } from "../components/home-components/CarouselHome";
import { Footer } from "../components/home-components/Footer";
import Header from "../components/home-components/Header";
import { MenuButtons } from "../components/home-components/MenuButtons";
import "../styles/app.css";

const ViewHome = () => {
  return (
        <div className="color-main">
        <Header />
        <CarouselHome />
        <MenuButtons />
        <Footer />
        </div>
  );
};

export default ViewHome;
