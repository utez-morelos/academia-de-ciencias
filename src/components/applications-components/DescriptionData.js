import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import "../../styles/applications.css";

const useStyles = makeStyles({
  root: {
    width: 275,
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto Black",
  },
  text: {
    fontFamily: "Roboto Regular",
    overflow: "auto"
  }

});

export const Application01 = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button className="btn-descripcion" onClick={handleClickOpen}>
        <VisibilityIcon />
      </button>
      <Dialog open={open} onClose={handleClose} disableBackdropClick>
        <Card className={classes.root}>
          <CardContent>
            <div className={classes.title}>Calculadora digital</div>
            <div className={classes.text}>
              Es un sistema para que los profesores de la Academia de Ciencias
              puedan compartir a sus alumnos. En la aplicación se tiene acceso a
              diferentes calculadoras digitales que permiten resolver problemas
              sobre temas de aritmética y álgebra, como obtener los valores de
              X1 y X2 de la fórmula general, resolver la ley de Coulomb, Ley de
              Ohm y calcular la suma de lad resistencias en serie y en paralelo
            </div>
          </CardContent>
          <CardActions>
            <button className="btn-descripcion" onClick={handleClose}>Cerrar</button>
          </CardActions>
        </Card>
      </Dialog>
    </div>
  );
};

export const Application02 = () => {
  return <div></div>;
};
