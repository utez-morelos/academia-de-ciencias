import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../../styles/activities.css"

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

export const Activitie01 = () => {
    const classes = useStyles();


    return (
        <div className="animate__animated animate__fadeInRight">
            <div className="activite-web">
                <div className="container">
                    <Card className={classes.root} elevation={10}>
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                className={classes.letter}
                            >
                                Actividad 1
                            </Typography>
                            <Typography className={classes.letterRegular}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit purus inceptos odio, ante accumsan per semper nascetur fusce felis potenti metus dapibus curae, enim sociosqu vivamus tincidunt curabitur habitant quis auctor montes. Fermentum duis scelerisque platea cubilia dictum convallis per dignissim sollicitudin justo, velit vitae auctor ante nisl in sed quam nibh, mollis cras tellus vestibulum pretium tincidunt tristique congue tempor. Torquent elementum arcu mattis dui at maecenas rhoncus nostra pellentesque velit, nunc eleifend volutpat commodo ad a nulla urna massa magna, facilisi ligula malesuada metus fermentum sociis non vel pharetra.
                            </Typography>
                        </CardContent>
                        <img src="https://cdn.euroinnova.edu.es/img/subidasEditor/1-1624276646.webp" width="400" alt="activitie01" />
                    </Card>
                </div>
            </div>

            <div className="activitie-movil">

                <Card elevation={10}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.letter}
                        >
                            Actividad 1
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


export const Activitie02 = () => {
    const classes = useStyles();


    return (
        <div className="animate__animated animate__fadeInLeft">
            <div className="activite-web">
                <div className="container">
                    <Card className={classes.root} elevation={10}>
                        <img src="https://novologistica.com/wp-content/uploads/2018/04/asstra3.jpg" width="400" alt="activitie01" />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                                className={classes.letter}
                            >
                                Actividad 2
                            </Typography>
                            <Typography className={classes.letterRegular}>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit purus inceptos odio, ante accumsan per semper nascetur fusce felis potenti metus dapibus curae, enim sociosqu vivamus tincidunt curabitur habitant quis auctor montes. Fermentum duis scelerisque platea cubilia dictum convallis per dignissim sollicitudin justo, velit vitae auctor ante nisl in sed quam nibh, mollis cras tellus vestibulum pretium tincidunt tristique congue tempor. Torquent elementum arcu mattis dui at maecenas rhoncus nostra pellentesque velit, nunc eleifend volutpat commodo ad a nulla urna massa magna, facilisi ligula malesuada metus fermentum sociis non vel pharetra.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="activitie-movil">

                <Card elevation={10}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className={classes.letter}
                        >
                            Actividad 2

                        </Typography>
                        <Typography className={classes.letterRegular}>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit purus inceptos odio, ante accumsan per semper nascetur fusce felis potenti metus dapibus curae, enim sociosqu vivamus tincidunt curabitur habitant quis auctor montes. Fermentum duis scelerisque platea cubilia dictum convallis per dignissim sollicitudin justo, velit vitae auctor ante nisl in sed quam nibh, mollis cras tellus vestibulum pretium tincidunt tristique congue tempor. Torquent elementum arcu mattis dui at maecenas rhoncus nostra pellentesque velit, nunc eleifend volutpat commodo ad a nulla urna massa magna, facilisi ligula malesuada metus fermentum sociis non vel pharetra.

                        </Typography>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}



export const Data01 = () => {
    return (
        <div>
            <div className="container">
                <Activitie01 />
                <Activitie02 />
            </div>

        </div>
    );
};
