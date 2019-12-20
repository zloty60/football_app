import React from "react";
import {
  Card,
  CardContent,
  Divider,
  CardMedia,
  Typography,
  makeStyles
} from "@material-ui/core";

import CardTitle from "./../../components/common/CardTitle";

export default function Stadium({ details }) {
  const classes = useStyles();

  return (
    <Card>
      <CardTitle title="Stadion" />
      <Divider />
      <CardContent>
        {details.strStadiumThumb ? (
          <CardMedia
            component="img"
            alt={`Stadion ${details.strStadium}`}
            height="140"
            image={details.strStadiumThumb}
            title={`Stadion ${details.strStadium}`}
            className={classes.cardMedia}
          />
        ) : (
          <div className={classes.noPicture}>Brak zdjęcia</div>
        )}

        <Typography className={classes.stadiumName} gutterBottom>
          {details.strStadium}
        </Typography>
        <Typography>Adress: {details.strStadiumLocation}</Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles({
  stadiumName: {
    marginTop: "14px"
  },
  cardMedia: {
    backgroundColor: "#f3f3f3"
  },
  noPicture: {
    backgroundColor: "#f3f3f3",
    height: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "26px"
  }
});
