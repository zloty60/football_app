import React from "react";
import { Card, CardContent, makeStyles } from "@material-ui/core";

export default function NotFoundCard({ text, mt }) {
  const classes = useStyles();
  return (
    <Card className={classes.card} style={{ marginTop: mt }}>
      <CardContent>
        <p>{text}</p>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  card: {
    backgroundColor: "#D32F2F",
    color: "#ffffff",
    textTransform: "uppercase"
  }
});
