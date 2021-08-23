import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import "../styles/app.css";

const ButtonFloating = () => {
  return (
    <>
      <Link to="/">
        <button className="btn-floating">Principal</button>
      </Link>

      <Link to="/">
        <button className="btn-floating-movil">
          <HomeIcon />
        </button>
      </Link>
    </>
  );
};

export default ButtonFloating;
