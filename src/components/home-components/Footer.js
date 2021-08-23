import React from "react";
import "../../styles/footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="container animate__animated animate__fadeInRight">
        <div className="more-footer">
          <div className="footer">
            <p className="p-jefe">Jefe de la Academia de Ciencias :</p>
            <p className="p-jefe-academic">Oscar Hilario Salinas Aviles</p>
            <p className="p-email-p">Correo electrónico :</p>
            <p className="p-email">oscarsalinas@utez.edu.mx</p>

            <p className="phone">Télefono :</p>
            <p className="p-phone">(777) 368 11 65 ext. 395</p>

            <p className="p-coordinador">
              Coordinador de la Academia de Ciencias :
            </p>
            <p className="p-name-coordinador">Juan Peralta Mójica</p>
            <p className="p-email-c">Correo electrónico :</p>
            <p className="p-email-j">Juanperalta@utez.edu.mx</p>
          </div>
        </div>
      </div>

      <div className="footer-movil animate__animated animate__fadeInRight">
        <div className="movil-footer-style-1">
          <p>Jefe de la Academia de Ciencias : Oscar Hilario Salinas Aviles </p>
        </div>
        <div className="movil-footer-style-2">
          <p>Correo electrónico : oscarsalinas@utez.edu.mx</p>
        </div>

        <div className="movil-footer-style-3">
          <p>Coordinador de la Academia de Ciencias : Juan Peralta Mójica</p>
        </div>

        <div className="movil-footer-style-4">
          <p>Correo electrónico : Juanperalta@utez.edu.mx</p>
        </div>

        <div className="movil-footer-style-5">
          <p>Télefono : (777) 368 11 65 ext. 395</p>
        </div>
      </div>
    </div>
  );
};
