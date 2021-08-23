import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Carousel } from "react-bootstrap";


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

export const DescriptionLab = () => {
    const classes = useStyles();


    return (
        <div >
            <div className="title-size">
                <hr />
                <h3 className={classes.letter}>Instalaciones</h3>
                <hr />
            </div>
            <div className="instalation-lab">
                <div className="container">

                    <Card className={classes.root} elevation={10}>
                        <div className="lab-chemistry">
                            <Carousel fade={true} controls={false}>
                                <Carousel.Item>
                                    <img
                                        className="lab-chemistry"
                                        src="https://i.ibb.co/0XbzDHK/Laboratorioquimica01.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="lab-chemistry"
                                        src="https://i.ibb.co/ctbRMzr/Laboratorioquimica02.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="lab-chemistry"
                                        src="https://i.ibb.co/ZJL6s4P/Laboratorioquimica03.jpg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="lab-chemistry"
                                        src="https://i.ibb.co/zX2N0f5/Laboratorioquimica04.jpg"
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
                                Laboratorio de quimica instalaciones
                            </Typography>
                            <Typography className={classes.letterRegular}>
                                El laboratorio de química hace referencia a la quimica y estudia compuestos, mezclas de sustancias
                                o elementos y es un lugar donde se comprueba la validez de los porincipios quimicos mediante la aplicacion
                                del método científico a través de experimentos generalmente planeados
                                y organizados para un grupo de estudiantes que participan activamente o como observadores
                                en la elaboracion de los mismos.
                            </Typography>
                        </CardContent>
                    </Card>

                </div>
            </div>

            <div className="lab-chemistry-movil">

                <Card elevation={10}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.letter}
                        >
                            Laboratorio de quimica instalaciones
                        </Typography>
                        <Typography className={classes.letterRegular}>
                            El laboratorio de química hace referencia a la quimica y estudia compuestos, mezclas de sustancias
                            o elementos y es un lugar donde se comprueba la validez de los porincipios quimicos mediante la aplicacion
                            del método científico a través de experimentos generalmente planeados
                            y organizados para un grupo de estudiantes que participan activamente o como observadores
                            en la elaboracion de los mismos.
                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}


export const InventorApplications = () => {
    return (
        <div>
            <div className="container animate__animated animate__fadeInLeft">
                <DescriptionLab />
            </div>

        </div>
    );
};
