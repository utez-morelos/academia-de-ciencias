import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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
  },
  styleLetterLight: {
    fontFamily: "Roboto Light",
  },
});

const Item01 = () => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Video 1"
            height="140"
            image="https://847395.smushcdn.com/1790738/wp-content/uploads/2015/03/YouTube-logo-play-icon-1500x630.png?lossy=0&strip=1&webp=1"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.styleLetterBlack}
            >
              Video Quimíca 1
            </Typography>
            <div className="content-video-chimestry">
              Texto de prueba <br />
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <button className="btn-video">Ver video</button>
        </CardActions>
      </Card>
    </div>
  );
};


export { Item01 };
