import React, { useState } from "react";

import "../App.css";
import "./HomeCards.css";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ImageAvatar from "./ImageAvatar.js";

function HomeCards() {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      display: "inline-block",
      flexGrow: 1,
      margin: 30,
      borderRadius: 10,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
  const [imgUrl] = useState("/images/Malcom.jpg");
  return (
    <>
      <div className="cards">
        <div className="cardGroup">
          <ImageAvatar src={imgUrl}></ImageAvatar>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                variant="h4"
                component="h2"
                color="textPrimary"
                gutterBottom
              >
                Malcom Teh
              </Typography>
              <Typography
                variant="h6"
                color="textPrimary"
                gutterBottom
              >
                Programmer
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More About Me!</Button>
            </CardActions>
          </Card>
        </div>
        <div className="cardGroup">
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                awea
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                awea
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="h2">
                awea
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
}

export default HomeCards;
