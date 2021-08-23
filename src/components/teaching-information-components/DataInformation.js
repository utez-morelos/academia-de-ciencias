import React from "react";
import Dialog from "@material-ui/core/Dialog";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import "../../styles/dataInformation.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 10,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    fontFamily: "Roboto Light",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "#00aa83",
    fontFamily: "Roboto Black",
  },
  header: {
    display: "flex",
    fontFamily: "Roboto Black",
    padding: 10,
  },
  name: {
    marginLeft: 10,
    marginTop: 8,
  },
}));

const DataInformation = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <img
        src="https://i.ibb.co/wRtSLxJ/mariacasas.png"
        className="btn-information"
        alt="María Magdalena Casas Saucedo"
        onClick={handleClickOpen}
      />
      <Dialog open={open} onClose={handleClose} disableBackdropClick>
        <div className="scroll">
          <Card className={classes.root}>
            <div className={classes.header}>
              <Avatar className={classes.avatar}>M</Avatar>
              <div className={classes.name}>María Magdalena Casas Saucedo</div>
            </div>
            <CardMedia
              className={classes.media}
              image="https://i.ibb.co/wRtSLxJ/mariacasas.pngg"
            />
            <CardContent>
              <div align="center" className="regular">
                Universidad Tecnológica Emiliano Zapata Profesora de la Academia
                de Ciencias
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <button id="close" className="regular" onClick={handleClose}>
                Cerrar
              </button>

              <button
                className={clsx(classes.expand)}
                id="btn-desplegue"
                onClick={handleExpandClick}
                aria-label="show more"
              >
                Información
              </button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <hr />
                <h6 className="letter">Nivel académico :</h6>
                <p className="regular">
                  Maestría en Ciencias Matemáticas (UNAM)
                </p>
                <hr />
                <h6 className="letter">Materias que imparte :</h6>
                <ul className="regular">
                  <li>Cálculo diferencial</li>
                  <li>Cáculo integral</li>
                  <li>Álgebra lineal</li>
                  <li>Funciones matemáticas</li>
                  <li>Estadística</li>
                  <li>Electricidad y magnetismo</li>
                </ul>
                <hr />
                <h6 className="letter">Pasatiempos :</h6>
                <p className="regular">
                  Principalmente disfruto de la danza árabe. También me gusta
                  confeccionar ropa.
                </p>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

const KarenBarreraComponent = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="letter">
      <img
        src="https://i.ibb.co/YXrmy94/20191024-093307-1.jpg"
        className="btn-information"
        alt="Karen Elizane Barrera Salgado"
        onClick={handleClickOpen}
      />

      <Dialog open={open} onClose={handleClose} disableBackdropClick>
        <div className="scroll">
          <Card className={classes.root}>
            <div className={classes.header}>
              <Avatar className={classes.avatar}>K</Avatar>
              <div className={classes.name}>Karen Elizane Barrera Salgado</div>
            </div>
            <CardMedia
              className={classes.media}
              image="https://i.ibb.co/YXrmy94/20191024-093307-1.jpg"
            />
            <CardContent>
              <div align="center" className="regular">
                Universidad Tecnológica Emiliano Zapata Profesora de la Academia
                de Ciencias
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <button id="close" className="regular" onClick={handleClose}>
                Cerrar
              </button>

              <button
                className={clsx(classes.expand)}
                id="btn-desplegue"
                onClick={handleExpandClick}
                aria-label="show more"
              >
                Información
              </button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <hr />
                <h6 className="letter">Nivel académico :</h6>
                <div className="regular">
                  Doctora en Ingenieria y Ciencias Aplicadas
                </div>
                <hr />
                <h6 className="letter">Materias que imparte :</h6>
                <ul className="regular">
                  <li>Química básica</li>
                  <li>Química inorgánica</li>
                  <li>Estadística descriptiva</li>
                  <li>Estadística aplicada a la administracion</li>
                  <li>Termodinámica y estructura</li>
                  <li>Propiedades de los materiales</li>
                </ul>
                <hr />
                <h6 className="letter">Pasatiempos :</h6>
                <div className="regular">
                  Principalmente disfruto de conocer lugares y escuchar música
                  instrumental.
                </div>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

const MariluChavez = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="letter">
      <img
        src="https://i.ibb.co/mNNHhCQ/docente01.png"
        className="btn-information"
        alt="Marilu Chavez Castillo"
        onClick={handleClickOpen}
      />

      <Dialog open={open} onClose={handleClose} disableBackdropClick>
        <div className="scroll">
          <Card className={classes.root}>
            <div className={classes.header}>
              <Avatar className={classes.avatar}>M</Avatar>
              <div className={classes.name}>Marilu Chavez Castillo</div>
            </div>
            <CardMedia
              className={classes.media}
              image="https://i.ibb.co/mNNHhCQ/docente01.png"
            />
            <CardContent>
              <div align="center" className="regular">
                Docente desde el mes de Septiembre del año 2017
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <button id="close" className="regular" onClick={handleClose}>
                Cerrar
              </button>

              <button
                className={clsx(classes.expand)}
                id="btn-desplegue"
                onClick={handleExpandClick}
                aria-label="show more"
              >
                Información
              </button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <hr />
                <h6 className="letter">Nivel académico :</h6>
                <div className="regular">Doctorado</div>
                <hr />
                <h6 className="letter">Materias que imparte :</h6>
                <ul className="regular">
                  <li>Electricidad y Magnetismo</li>
                  <li>Estructura de los Materiales</li>
                  <li>Química Básica</li>
                  <li>Química Orgánica</li>
                  <li>Química Analítica</li>
                  <li>Matemáticas</li>
                  <li>Termodinámica</li>
                </ul>
                <hr />
                <h6 className="letter">Pasatiempos :</h6>
                <div className="regular">
                  Principalmente disfruto de escuchar música, ver series, hacer
                  yoga y leer artículos científicos.
                </div>
                <hr />
                <h6 className="letter">Actividades en la Academia :</h6>
                <div className="regular">
                  Responsable del área del Laboratorio( realizando actividades
                  de manejo de material del laboratorio, reactivis, equipos,
                  responsable de residuos peligrosos, atender el SGC Y SGA. )
                </div>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

const LuisRamirez = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="letter">
      <img
        src="https://i.ibb.co/Zm9DVNG/IMG-2470ss.jpg"
        className="btn-information"
        onClick={handleClickOpen}
        alt="Luis Daniel Ramírez Mendoza"
      />

      <Dialog open={open} onClose={handleClose} disableBackdropClick>
        <div className="scroll">
          <Card className={classes.root}>
            <div className={classes.header}>
              <Avatar className={classes.avatar}>L</Avatar>
              <div className={classes.name}>Luis Daniel Ramírez Mendoza</div>
            </div>
            <CardMedia
              className={classes.media}
              image="https://i.ibb.co/Zm9DVNG/IMG-2470ss.jpg"
            />
            <CardContent>
              <div align="center" className="regular">
                Docente desde el mes de Septiembre del año 2015
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <button id="close" className="regular" onClick={handleClose}>
                Cerrar
              </button>

              <button
                className={clsx(classes.expand)}
                id="btn-desplegue"
                onClick={handleExpandClick}
                aria-label="show more"
              >
                Información
              </button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <hr />
                <h6 className="letter">Nivel académico :</h6>
                <div className="regular">
                  Maestría en Ingeniería y Ciencias Aplicadas Ciicap-UAEM
                </div>
                <hr />
                <h6 className="letter">Materias que imparte :</h6>
                <ul className="regular">
                  <li>Cálculo diferencial</li>
                  <li>Probabilidad y Estadística</li>
                  <li>Cálculo Integral</li>
                  <li>Física</li>
                  <li>Álgebra Lineal</li>
                  <li>Matemáticas Financieras</li>
                  <li>Funciones Matemáticas</li>
                  <li>Estadistica para Negocios</li>
                </ul>
                <hr />
                <h6 className="letter">Pasatiempos :</h6>
                <div className="regular">
                  Principalmente disfruto de practicar piano y leer libros
                  (Ciencia, Historia, Filosofia, Teología)
                </div>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

const NadiaOliveros = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="letter">
      <img
        src="https://i.ibb.co/JzdcwC1/docente01.png"
        className="btn-information"
        onClick={handleClickOpen}
        alt="Nadia Oyuki Oliveros Salgado"
      />

      <Dialog open={open} onClose={handleClose} disableBackdropClick>
        <div className="scroll">
          <Card className={classes.root}>
            <div className={classes.header}>
              <Avatar className={classes.avatar}>N</Avatar>
              <div className={classes.name}>Nadia Oyuki Oliveros Salgado</div>
            </div>
            <CardMedia
              className={classes.media}
              image="https://i.ibb.co/JzdcwC1/docente01.png"
            />
            <CardContent>
              <div align="center" className="regular">
                Ingreso en el año 2015 a la academia de ciencias
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <button id="close" className="regular" onClick={handleClose}>
                Cerrar
              </button>

              <button
                className={clsx(classes.expand)}
                id="btn-desplegue"
                onClick={handleExpandClick}
                aria-label="show more"
              >
                Información
              </button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <hr />
                <h6 className="letter">Nivel académico :</h6>
                <div className="regular">
                  Doctora en Ingeniería y ciencias aplicadas
                </div>
                <hr />
                <h6 className="letter">Materias que imparte :</h6>
                <ul className="regular">
                  <li>Química básica</li>
                  <li>Inorganica</li>
                  <li>Analítica</li>
                  <li>Matemáticas</li>
                  <li>Termodinámica</li>
                  <li>Estructura y propiedades de los materiales</li>
                </ul>
                <hr />
                <h6 className="letter">Pasatiempos :</h6>
                <div className="regular">
                  Principalmente disfruto de leer, viajar, tomar un buen café
                  con pancito y escuchar música.
                </div>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

const RamonRuiz = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="letter">
      <button
        className="btn-information"
        onClick={handleClickOpen}
      >Sin imagen</button>

      <Dialog open={open} onClose={handleClose} disableBackdropClick>
        <div className="scroll">
          <Card className={classes.root}>
            <div className={classes.header}>
              <Avatar className={classes.avatar}>R</Avatar>
              <div className={classes.name}>Ramón Cabello Ruiz</div>
            </div>
            <CardMedia className={classes.media} image="https://lh3.googleusercontent.com/proxy/QIUMIFKS4vuyxifpYQ6-3jViGZrlBsD4FKXyG83BpsN_fniV_3YI7SxMNmSp50k2-dTpy4I3Yio3EZ1sP1_TsOQ6-DLUIUSn1825qbq-zkc7ZQ" />
            <CardContent>
              <div align="center" className="regular">
                Ingreso en el año 2017 a la academia de ciencias
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <button id="close" className="regular" onClick={handleClose}>
                Cerrar
              </button>

              <button
                className={clsx(classes.expand)}
                id="btn-desplegue"
                onClick={handleExpandClick}
                aria-label="show more"
              >
                Información
              </button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <hr />
                <h6 className="letter">Nivel académico :</h6>
                <div className="regular">
                  Doctorado en ingeniería y ciencias aplicadas
                </div>
                <hr />
                <h6 className="letter">Materias que imparte :</h6>
                <ul className="regular">
                  <li>Electricidad y magnetismo</li>
                  <li>Termodinámica</li>
                  <li>Física</li>
                  <li>Álgebra lineal</li>
                  <li>Funciones matemáticas</li>
                  <li>Estadística descriptiva</li>
                </ul>
                <hr />
                <h6 className="letter">Pasatiempos :</h6>
                <div className="regular">
                  Principalmente disfruto de leer, estar con mi familia y jugar
                  videojuegos.
                </div>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

const Edvaart = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="letter">
      <img
        src="https://i.ibb.co/rtKqKHg/edvaart.png"
        className="btn-information"
        onClick={handleClickOpen}
        alt="Edvaart Sethaziz Jatirian Foltides"
      />

      <Dialog open={open} onClose={handleClose} disableBackdropClick>
        <div className="scroll">
          <Card className={classes.root}>
            <div className={classes.header}>
              <Avatar className={classes.avatar}>E</Avatar>
              <div className={classes.name}>
                Edvaart Sethaziz Jatirian Foltides
              </div>
            </div>
            <CardMedia
              className={classes.media}
              image="https://i.ibb.co/rtKqKHg/edvaart.png"
            />
            <CardContent>
              <div align="center" className="regular">
                Ingreso en el año 2017 a la Universidad Tecnológica Emiliano
                Zapata
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <button id="close" className="regular" onClick={handleClose}>
                Cerrar
              </button>

              <button
                className={clsx(classes.expand)}
                id="btn-desplegue"
                onClick={handleExpandClick}
                aria-label="show more"
              >
                Información
              </button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <hr />
                <h6 className="letter">Nivel académico :</h6>
                <div className="regular">
                  Doctorado en ingeniería y ciencias aplicadas con opción en
                  tecnología eléctrica
                </div>
                <hr />
                <h6 className="letter">Materias que imparte :</h6>
                <ul className="regular">
                  <li>Álgebra lineal</li>
                  <li>Funciones matemáticas</li>
                  <li>Probabilidad y estadística</li>
                  <li>Cálculo diferencial e integral</li>
                  <li>Electricidad y magnetismo</li>
                </ul>
                <hr />
                <h6 className="letter">Pasatiempos :</h6>
                <div className="regular">
                  Principalmente disfruto de leer sobre literatura, historia y
                  filosofia además de escucar podcast sobre temas cientifícos
                </div>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};


const OscarSalinas = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setExpanded(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="letter">
      <img
        src="https://i.ibb.co/0hxXNMh/image.png"
        className="btn-information"
        onClick={handleClickOpen}
        alt="Edvaart Sethaziz Jatirian Foltides"
      />

      <Dialog open={open} onClose={handleClose} disableBackdropClick>
        <div className="scroll">
          <Card className={classes.root}>
            <div className={classes.header}>
              <Avatar className={classes.avatar}>O</Avatar>
              <div className={classes.name}>
                Oscar Hilario Salinas Aviles
              </div>
            </div>
            <CardMedia
              className={classes.media}
              image="https://i.ibb.co/0hxXNMh/image.png"
            />
            <CardContent>
              <div align="center" className="regular">
                Docente en la UTEZ desde enero del 2003
              </div>
            </CardContent>
            <CardActions disableSpacing>
              <button id="close" className="regular" onClick={handleClose}>
                Cerrar
              </button>

              <button
                className={clsx(classes.expand)}
                id="btn-desplegue"
                onClick={handleExpandClick}
                aria-label="show more"
              >
                Información
              </button>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <hr />
                <h6 className="letter">Nivel académico :</h6>
                <div className="regular">
                  Doctorado en ingeniería, área energia
                </div>
                <hr />
                <h6 className="letter">Materias que imparte :</h6>
                <ul className="regular">
                  <li>Electrónica para Internet de las cosas</li>
                  <li>Aplicaciones para Internet de las cosas</li>
                  <li>Sistemas digitales</li>
                  <li>Cálculo diferencial e integral</li>
                  <li>ecuaciones diferenciales</li>
                  <li>entre otras...</li>
                </ul>
                <hr />
                <h6 className="letter">Pasatiempos :</h6>
                <div className="regular">
                  Principalmente disfruto de jugar fútbol, leer, pasear, ir al cine, practicar el silencio.
                </div>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

export {
  DataInformation,
  KarenBarreraComponent,
  MariluChavez,
  LuisRamirez,
  NadiaOliveros,
  RamonRuiz,
  Edvaart,
  OscarSalinas
};
