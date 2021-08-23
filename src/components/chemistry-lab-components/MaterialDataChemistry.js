import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    styleLetterBlack: {
        fontFamily: "Roboto Black",
        whiteSpace: 'initial'
    },
    styleLetterLight: {
        fontFamily: "Roboto Light",
    },
    scroll: {
        overflowY: 'auto'
    }
});



export const Data01 = () => {
    const classes = useStyles();


    return (
        <div className="card-chemistry">
            <Card elevation={4}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="190"
                        image="https://i.ibb.co/KFcg9Ft/IMG-20210709-1.jpg"
                        alt="Imagen de quimica"
                    />
                    <CardContent className={classes.scroll}>
                        <p
                            className={classes.styleLetterBlack}
                        >
                            Material de vidrio y cristalera
                        </p>
                        <div className="description-card">
                            El material de vidrio que se tiene en el laboratorio de Química y
                            Nanotecnología se utiliza para llevar a cabo las prácticas de
                            laboratorio y las investigaciones que se realizan por el cuerpo
                            académico. Dentro de los principales materiales de vidrio y cristalería
                            como podemos apreciar en las imágenes son, Matraces Erlenmeyer,
                            embudos de separación, matraces bola de fondo plano, matraces
                            aforados de diferentes capacidades, vasos de precipitado, cápsulas
                            de porcelana, probetas, pipetas serológicas y volumétricas, tubos de
                            ensayo entre otros materiales.
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}


export const Data02 = () => {
    const classes = useStyles();

    return (
        <div className="card-chemistry">
            <Card elevation={4}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="190"
                        image="https://i.ibb.co/wQ0RZYQ/6.jpg"
                        alt="Imagen de quimica"
                    />
                    <CardContent className={classes.scroll}>
                        <p
                            className={classes.styleLetterBlack}
                        >
                            Balanza analitica
                        </p>
                        <div className="description-card">
                            Las balanzas analíticas son
                            instrumentos de medición
                            que se utilizan en el
                            laboratorio para medir
                            reactivos químicos sólidos.
                            Dichos equipos miden con
                            una precisión de 0.001g.
                            También es posible medir
                            reactivos líquidos utilizando
                            para ello vasos de
                            precipitado de vidrio
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}


export const Data03 = () => {
    const classes = useStyles();

    return (
        <div className="card-chemistry">
            <Card elevation={4}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="190"
                        image="https://i.ibb.co/k4VMbHx/ba-o-ultrasonico.png"
                        alt="Imagen de quimica"
                    />
                    <CardContent className={classes.scroll}>
                        <p
                            className={classes.styleLetterBlack}
                        >
                            Baños ultrasónicos
                        </p>
                        <div className="description-card">
                            El equipo de baño ultrasónico es un equipo que se utiliza en el laboratorio para
                            disolver muestras en estado sólido por medio de vibración electrónica.
                            Mediante esta vibración se pueden disolver muestras en estado sólido a
                            diferentes frecuencias de vibración. Se tienen dos equipos uno es marca
                            cole-parmer modelo 8891 y otro marca branson 3510.
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}


export const Data04 = () => {
    const classes = useStyles();

    return (
        <div className="card-chemistry">
            <Card elevation={4}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="190"
                        image="https://i.ibb.co/4RbHVTg/IMG-20210709-4.jpg"
                        alt="Imagen de quimica"
                    />
                    <CardContent className={classes.scroll}>
                        <p
                            className={classes.styleLetterBlack}
                        >
                            Centrifuga
                        </p>
                        <div className="description-card">
                            La centrífuga es un equipo que se utiliza en el
                            laboratorio para la separación de un sólido de un
                            líquido mediante la rotación de las muestras a
                            diferentes rpm (revoluciones por minuto). Cuando
                            esto sucede se puede apreciar la separación perfecta
                            del sólido del líquido en las muestras.
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export const Data05 = () => {
    const classes = useStyles();

    return (
        <div className="card-chemistry">
            <Card elevation={4}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="190"
                        image="https://i.ibb.co/k3Tmtzf/7.jpg"
                        alt="Imagen de quimica"
                    />
                    <CardContent className={classes.scroll}>
                        <p
                            className={classes.styleLetterBlack}
                        >
                            Espectrofotometro (uv-vis)
                        </p>
                        <div className="description-card">
                            El espectrofotómetro es un equipo
                            instrumental que mide la absorción de luz
                            de una muestra en un rango del espectro
                            electromagnético Ultravioleta-Visible. El
                            equipo es utilizado en el área de
                            investigación de la carrera de
                            Nanotecnología y es de los equipos más
                            empleados en la determinación de síntesis
                            de nanopartículas o en el desarrollo de
                            nuevos materiales.
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}


export const Data06 = () => {
    const classes = useStyles();

    return (
        <div className="card-chemistry">
            <Card elevation={4}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="190"
                        image="https://i.ibb.co/gDwL1CM/muflas.png"
                        alt="Imagen de quimica"
                    />
                    <CardContent className={classes.scroll}>
                        <p
                            className={classes.styleLetterBlack}
                        >
                            Muflas
                        </p>
                        <div className="description-card">
                            Las muflas son equipos de calentamiento
                            utilizados para determinaciones
                            gravimétricas, calcinación de muestras o
                            volatilización, secado de muestras entre
                            otros usos. Su rango de temperatura es
                            de 0-1000°C.
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export const Data07 = () => {
    const classes = useStyles();

    return (
        <div className="card-chemistry">
            <Card elevation={4}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="190"
                        image="https://i.ibb.co/KqzGYY2/11.jpg"
                        alt="Imagen de quimica"
                    />
                    <CardContent className={classes.scroll}>
                        <p
                            className={classes.styleLetterBlack}
                        >
                            Parrillas de calentamiento
                        </p>
                        <div className="description-card">
                            Las parrillas son equipos de calentamiento que se utilizan para llevar a cabo el calentamiento de
                            cualquier sustancia en la realización de prácticas de laboratorio de Química, Termodinámica,
                            Química Analítica, Química Orgánica. Son de los equipos básicos para llevar a cabo una reacción
                            química.
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export const Data08 = () => {
    const classes = useStyles();

    return (
        <div className="card-chemistry">
            <Card elevation={4}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="190"
                        image="https://i.ibb.co/Lv3qYzL/10.jpg"
                        alt="Imagen de quimica"
                    />
                    <CardContent className={classes.scroll}>
                        <p
                            className={classes.styleLetterBlack}
                        >
                            Campana de extraccion
                        </p>
                        <div className="description-card">
                            La campana de extracción es un equipo muy útil dentro
                            del laboratorio de química ya que consta de una
                            ventanilla de vidrio la cual sube y baja para que la
                            persona pueda mantenerse lejos de los vapores de
                            cualquier sustancia química. Asimismo, tiene un motor
                            de extracción para poder extraer al exterior todos los
                            vapores que se generen por una reacción química,
                            generación de gases tóxicos.
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export const Data09 = () => {
    const classes = useStyles();

    return (
        <div className="card-chemistry">
            <Card elevation={4}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="190"
                        image="https://i.ibb.co/zsVgMnb/horno-vacio.png"
                        alt="Imagen de quimica"
                    />
                    <CardContent className={classes.scroll}>
                        <p
                            className={classes.styleLetterBlack}
                        >
                            Horno de vacio
                        </p>
                        <div className="description-card">
                            Es un equipo utilizado para proyectos de
                            investigación en la carrera de Nanotecnología
                            y se usa para realizar el tratamiento térmico
                            de muestras a temperaturas que van desde la
                            temperatura ambiente hasta 1100°C.

                            Normalmente se utiliza para hacer
                            tratamientos térmicos de recristalización en
                            materiales semiconductores en una
                            atmósfera inerte.

                            El equipo cuenta con un sistema de bombeo
                            para hacer vacío. Cuenta con un sistema de
                            enfriamiento (chiller). El horno de vacío
                            cuenta con un sistema automático y
                            programable para las rampas de
                            calentamiento a través de una interfaz en una
                            computadora (Lap Top).
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    )
}

export const information = [{
    nombre: "material de vidrio y cristalera", componente: <Data01 />,
},
{
    nombre: "balanza analitica", componente: <Data02 />,
},
{
    nombre: "baños ultrasonicos", componente: <Data03 />,

},
{
    nombre: "centrifuga", componente: <Data04 />,

}, {
    nombre: "espectrofotometro", componente: <Data05 />,

}, {
    nombre: "muflas", componente: <Data06 />,

}, {
    nombre: "parrillas de calentamiento", componente: <Data07 />,

},
{
    nombre: "campana de extraccion", componente: <Data08 />,

}, {
    nombre: "horno vacio", componente: <Data09 />,

}]
