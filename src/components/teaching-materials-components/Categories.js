import React, { useState } from "react";
import {
  Categoria01,
  Categoria02,
  Categoria03,
  Categoria04,
} from "./CategoriesData";
import VideosChemistry from "./chemistry/Videos";
import DownloadMaterialChemistry from "./chemistry/DownloadMaterial";
import ContentPhysical from "./physical/Videos";
import DownloadPhysical from "./physical/DownloadMaterial";
import "../../styles/categories.css";

export const Categories = () => {
  const [show, setShow] = useState(0);

  const changeChemistry = () => {
    setShow(1);
  };

  const changePhysical = () => {
    setShow(2);
  };

  const changeMathematics = () => {
    setShow(3);
  };

  const change04 = () => {
    setShow(4);
  };

  return (
    <div className="container animate__animated animate__fadeInLeft">
      <div className="content-categorie">
        <div className="center-cards">
          <div className="categorie">
            <Categoria01 changeChemistry={changeChemistry} />
          </div>

          <div className="categorie">
            <Categoria02 changePhysical={changePhysical} />
          </div>

          <div className="categorie">
            <Categoria03 changeMathematics={changeMathematics} />
          </div>

          <div className="categorie">
            <Categoria04 change04={change04} />
          </div>
        </div>

        {show === 1 ? (
          <div >
            <VideosChemistry />
            <DownloadMaterialChemistry />
          </div>
        ) : show === 2 ? (
          <div>
            <ContentPhysical />
            <DownloadPhysical />
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="content-categorie-movil animate__animated animate__fadeInLeft">
        <div className="center-cards-movil">
          <div className="categorie-movil">
            <Categoria01 changeChemistry={changeChemistry} />
          </div>

          <div className="categorie-movil">
            <Categoria02 changePhysical={changePhysical} />
          </div>

          <div className="categorie-movil">
            <Categoria03 changeMathematics={changeMathematics} />
          </div>

          <div className="categorie-movil">
            <Categoria04 change04={change04} />
          </div>
        </div>
        {show === 1 ? (
          <div>
            <VideosChemistry />
            <DownloadMaterialChemistry />
          </div>
        ) : show === 2 ? (
          <div>
            <ContentPhysical />
            <DownloadPhysical />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
