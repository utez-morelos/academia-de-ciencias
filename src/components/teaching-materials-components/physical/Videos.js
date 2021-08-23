import React from "react";
import { Item01 } from "./VideosData";
import "../../../styles/material.css";

const ContentPhysical = () => {
  return (
    <div className="content-videos-physical animate__animated animate__fadeIn">
      <hr />
      <h3>Videos de fisíca</h3>
      <hr />
      <div className="center-scroll">
        <div className="material-physical">
          <Item01 />
        </div>
      </div>
    </div>
  );
};


export default ContentPhysical