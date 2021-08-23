import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
  styleLetterBlack: {
    fontFamily: "Roboto Black",
    whiteSpace: "initial"
  },
  styleLetterLight: {
    fontFamily: "Roboto Light",
  },
});

const Categoria01 = ({ changeChemistry }) => {
  const classes = useStyles();

  const show = () => {
    changeChemistry();
  };

  return (
    <div>
      <Card className={classes.root} elevation={4}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://images2.alphacoders.com/104/thumbbig-1048952.webp"
            alt="Imagen de quimica"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.styleLetterBlack}
            >
              Química
            </Typography>
            <div className="content-card">
              En esta categoria encontrarás todo lo relacionado con la Química.
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button className="btn-content" onClick={show}>
            Ver contenido
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

const Categoria02 = ({ changePhysical }) => {
  const classes = useStyles();

  const show = () => {
    changePhysical();
  };

  return (
    <div>
      <Card className={classes.root} elevation={4}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Imagen de fisica"
            height="140"
            image="https://images8.alphacoders.com/106/thumbbig-1065817.webp"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.styleLetterBlack}
            >
              Física
            </Typography>
            <div className="content-card">
              En esta categoria encontrarás todo lo relacionado con la Física.

            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button className="btn-content" onClick={show}>
            Ver contenido
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

const Categoria03 = ({ changeMathematics }) => {
  const classes = useStyles();

  const show = () => {
    changeMathematics();
  };

  return (
    <div>
      <Card className={classes.root} elevation={4}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://p4.wallpaperbetter.com/wallpaper/679/219/597/algebra-mathematics-blackboard-wallpaper-preview.jpg"
            alt="Imagen de matematicas"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.styleLetterBlack}
            >
              Matemáticas
            </Typography>
            <div className="content-card">
              En esta categoria encontrarás todo lo relacionado con las Matemáticas.

            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button className="btn-content" onClick={show}>
            Ver contenido
          </button>
        </CardActions>
      </Card>
    </div>
  );
};

const Categoria04 = () => {
  const classes = useStyles();

 
  return (
    <div>
      <Card className={classes.root} elevation={4}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="https://eltrochilero.com/wp-content/uploads/2021/05/MAESTROS.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.styleLetterBlack}
            >
              Artículos
            </Typography>
            <div className="content-card">
              Artículos de docentes de la academia de ciencias.
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/material-didactico/articulos-docentes">
            <button className="btn-content" >
              Ver contenido
            </button></Link>
        </CardActions>
      </Card>
    </div>
  );
};

export { Categoria01, Categoria02, Categoria03, Categoria04 };
