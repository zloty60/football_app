import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

export default function CardTitle({ title }) {
  const classes = useStyles();
  return <Typography className={classes.text}>{title}</Typography>;
}

const useStyles = makeStyles({
  text: {
    padding: "16px",
    textTransform: "uppercase",
    fontWeight: "bold"
  }
});
