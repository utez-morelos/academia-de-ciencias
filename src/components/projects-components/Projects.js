import React, { useState } from "react";
import { ProjectOne } from "./ProjectsData";
import "../../styles/projects.css";

export const Projects = () => {
  // Primero proyecto
  const [projects, setProjects] = useState(0);

  const projectOne = () => {
    setProjects(1);
  };

  // Segundo proyecto

  return (
    <div className="container animate__animated animate__fadeInLeft" >
      <div className="content-projects">
        <div className="content-card">
        <img className="btn-card" onClick={projectOne} src="https://i.ibb.co/yQ5W913/sitio-web-2.jpgs" alt="proyecto 1" />
          <img className="btn-card" onClick={projectOne} src="https://www.conmasfuturo.com/wp-content/uploads/2014/04/Android-App-Inventor-600x417.jpg" alt="proyecto 1" />
          <img className="btn-card" onClick={projectOne} src="https://www.cygnismedia.com/images/web-app-development-guidlines/cros-img.png" alt="proyecto 1" />

        </div>

        {projects === 1 ? (
          <div >
            <ProjectOne />
          </div>
        ) : ""}
      </div>
    </div>
  );
};
