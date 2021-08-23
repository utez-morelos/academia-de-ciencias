import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    width: 900,
    height: 300,
    display: "flex",
  },
  scroll: {
    overflow: "auto",
  },
  styleLetterBlack: {
    fontFamily: "Roboto Black",
  },
  styleLetterLight: {
    fontFamily: "Roboto Light",
  },
});

const ProjectOne = () => {
  const classes = useStyles();

  return (
    <div className="projects animate__animated animate__fadeIn">
      <Card className={classes.root} elevation={4}>
        <img src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" width="400" alt="01" className="img-movil" />
        <CardContent className={classes.scroll}>
          <h3 className={classes.styleLetterBlack}>
            Sitio web para la Academia de ciencias
          </h3>
          <hr />
          <div className={classes.styleLetterLight}>
            Objetivo: Este proyecto se realizo para que la comunidad universitaria, pueda tener acceso
            a la informacion de actividades y aplicaciones de la academia de ciencias.
          </div>
          <hr />
          <div className={classes.styleLetterLight}>
            Herramientas de desarrollo: El sitio web fue desarrollado con el framework de React junto con
            el lenguaje Javascript.
          </div>
          <hr />
          <div className={classes.styleLetterLight}>
            Proyecto dirigio por: El Dr. Oscar Hilario Salinas Aviles
          </div>

        </CardContent>
      </Card>
    </div>
  );
};



export { ProjectOne };
