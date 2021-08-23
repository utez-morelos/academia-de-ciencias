import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Academia.png";
import "../../styles/menuButtons.css";

export const MenuButtons = () => {
  return (
    <div>
      <div className="container animate__animated animate__fadeInLeft">
        <div className="more-content-button">
          <Link to="/informacion-docente">
            <button className="btn-menu staff">Personal docente</button>
          </Link>

          <div className="one-div">
            <Link to="/proyectos">
              <button className="btn-menu">Proyectos</button>
            </Link>

            <Link to="/laboratorio-quimica">
              <button className="btn-menu chemistry">
                Laboratorio química
              </button>
            </Link>
          </div>

          <div className="two-div">
              <button className="btn-disabled physical" disabled>Laboratorio física</button>

            <img className="image-logo" src={Logo} alt="Academia-ciencias" />

            <Link to="/actividades">
              <button className="btn-menu activitie">Actividades</button>
            </Link>
          </div>

          <div className="three-div">
            <Link to="/asesorias">
              <button className="btn-menu">Asesorías</button>
            </Link>

            <Link to="/aplicaciones">
              <button className="btn-menu applications">Aplicaciones</button>
            </Link>
          </div>

          <Link to="/material-didactico">
            <button className="btn-menu four-div">Material didáctico</button>
          </Link>
        </div>
      </div>

      {/*Menu del movil */}
      <div className="animate__animated animate__fadeInLeft">
        <div className="movil-menu not-scroll-menu">
          <div className="display-menu">
            <Link to="/informacion-docente">
              <button className="btn-movil">Personal docente</button>
            </Link>

            <Link to="/material-didactico">
              <button className="btn-movil">Material didáctico</button>
            </Link>
          </div>

          <div className="display-menu">
            <Link to="/laboratorio-quimica">
              <button className="btn-movil">Laboratorio química</button>
            </Link>

            <Link to="/laboratorio-fisica">
              <button className="btn-movil">Laboratorio física</button>
            </Link>
          </div>

          <div className="display-menu">
            <Link to="/actividades">
              <button className="btn-movil">Actividades</button>
            </Link>

            <Link to="/asesorias">
              <button className="btn-movil">Asesorías</button>
            </Link>
          </div>

          <div className="display-menu">
            <Link to="/aplicaciones">
              <button className="btn-movil">Aplicaciones</button>
            </Link>

            <Link to="/proyectos">
              <button className="btn-movil">Proyectos</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
