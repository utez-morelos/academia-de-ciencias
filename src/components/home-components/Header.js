import React from "react";
import UtezImage from "../../images/H_1-11_2.png";
import Blank from "../../images/TRANSPARENTE-12.png";

import "../../styles/header.css";

const Header = () => {
  return (
    <div className="animate__animated animate__fadeInLeft letter-header">
      <p></p>
      <div className="container">
        <div className="header-style">
          <p>
            <img src={UtezImage} className="header-style" alt="Utez" />
          </p>
        </div>

        <div className="header-info">
          <table className="table-one">
            <tbody>
              <tr className="tr-one">
                <td className="td-one">
                  &nbsp;
                  <a href="http://www.utez.edu.mx/index.php/">
                    <img src={Blank} className="blank-one" alt="Utez" />
                  </a>
                </td>

                <td className="td-two">
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <ul className="list-inline">
                            <li>
                              <a href="https://classroom.google.com/u/0/h">
                                Classroom
                              </a>
                            </li>
                          </ul>
                        </td>

                        <td>
                          <ul className="list-inline">
                            <li>
                              <a href="http://www.utez.edu.mx/index.php/transparencia-utez">
                                Transparencia
                              </a>
                            </li>
                          </ul>
                        </td>

                        <td>
                          <ul className="list-inline">
                            <li>
                              <a href="http://mail.google.com/a/utez.edu.mx">
                                Email
                              </a>
                            </li>
                          </ul>
                        </td>

                        <td>
                          <ul className="list-inline">
                            <li>
                              <a href="http://saemx117.trabajando.com/">
                                Trabajo
                              </a>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>

              <tr className="tr-two">
                <td className="td-three">
                  &nbsp;
                  <a href="http://www.utez.edu.mx/index.php/">
                    <img src={Blank} className="blank-two" alt="Utez" />
                  </a>
                </td>

                <td className="td-four">
                  <table className="table-two">
                    <tbody>
                      <tr>
                        <td>
                            <img
                              src={Blank}
                              className="twitter"
                              alt="Twitter"
                            />
                        </td>

                        <td>
                            <img
                              src={Blank}
                              className="youtube"
                              alt="Youtube"
                            />
                        </td>

                        <td>
                            <img
                              src={Blank}
                              className="facebook"
                              alt="Facebook"
                            />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="movil-main">
        <img src={UtezImage} alt="Logo-Utez" className="movil-logo" />
        

        <div className="table-one-movil">
          <a href="https://classroom.google.com/u/0/h" className="room">
            Classroom
          </a>
          <a href="http://www.utez.edu.mx/index.php/transparencia-utez">Transparencia</a>
          <a href="http://mail.google.com/a/utez.edu.mx">Email</a>
          <a href="http://saemx117.trabajando.com/">Trabajo</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
