import React from "react";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

export const DownloadData01 = () => {
  return (
    <a href="https://drive.google.com/uc?id=1h5mjyVOYHRu_KFTXej8ugFO3U-LjXC-s&export=download" >
      <button className="download-application">
         <CloudDownloadIcon />
      </button>
    </a>
  );
};
