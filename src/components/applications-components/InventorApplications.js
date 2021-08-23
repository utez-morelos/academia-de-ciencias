import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Carousel } from "react-bootstrap";

import "../../styles/inventorApplications.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 940,
    height: 310,
    display: "flex",
  },
  tab: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  letter: {
    fontFamily: "Roboto Black",
  },
  letterRegular: {
    fontFamily: "Roboto Regular",
  },
  aplication: {
    width: 300,
  },
}));

const DescriptionInventor = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="desc-deskop">
        <Card className={classes.root} elevation={10}>
          <div className="carousel-appli">
            <Carousel fade={true} controls={false}>
              <Carousel.Item>
                <img
                  className="carousel-appli"
                  src="https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-appli"
                  src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt="First slide"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="carousel-appli"
                  src="https://dwkujuq9vpuly.cloudfront.net/news/wp-content/uploads/2017/06/windows-mobile-apps-590x356.jpg"
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.letter}
            >
              Aplicaciones
            </Typography>
            <Typography className={classes.letterRegular}>
              Las aplicaciones moviles tienen como objetivo facilitarnos en
              cualquier momento una tarea determinada o ayudarnos en operaciones
              y gestiones del dia a dia. Existen multitud de operaciones para
              diferentes fines; para el transporte publico, para leer noticias ,
              para comunicarte, para estar al dia en las redes sociales, para
              jugar etc. Existen grandes tiendas en internet que disponen de
              numerosas aplicaciones para los grandes sistemas actuales como
              son: Apple-iOS, Android y Windows.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <div className="desc-movil">
        <Card elevation={4} className={classes.letterRegular}>
          <CardContent>
            <h3 className={classes.letter}>Aplicaciones</h3>
            Las aplicaciones moviles tienen como objetivo facilitarnos en
            cualquier momento una tarea determinada o ayudarnos en operaciones y
            gestiones del dia a dia. Existen multitud de operaciones para
            diferentes fines; para el transporte publico, para leer noticias ,
            para comunicarte, para estar al dia en las redes sociales, para
            jugar etc. Existen grandes tiendas en internet que disponen de
            numerosas aplicaciones para los grandes sistemas actuales como son:
            Apple-iOS, Android y Windows.
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const InventorApplications = () => {
  return (
    <div>
      <div className="container animate__animated animate__fadeInLeft">
        <div className="content-inventor">
          <DescriptionInventor />
        </div>
      </div>

      <div className="application-movil animate__animated animate__fadeInLeft">
        <DescriptionInventor />
      </div>
    </div>
  );
};

export default InventorApplications;
