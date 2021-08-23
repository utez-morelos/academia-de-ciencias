import React from "react";
import { Item01 } from "./VideosData";
import "../../../styles/material.css";

const VideosChemistry = () => {
  return (
    <div className="content-videos-chimestry animate__animated animate__fadeIn">
      <hr />
      <h3 className="content-videos-chimestry">Videos de química</h3>
      <hr />
      <div className="center-scroll">
        <div className="material-chimestry">
          <Item01 />
        </div>
      </div>
    </div>
  );
};

export default VideosChemistry;
