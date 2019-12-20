import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Grid, makeStyles } from "@material-ui/core";
import ReactPlayer from "react-player";

import EventDetailsItem from "./EventDetailsItem";

export default function EventDetails({ eventDetails }) {
  const classes = useStyles();
  const {
    strHomeTeam,
    strAwayTeam,
    intHomeScore,
    intAwayScore,
    strHomeGoalDetails,
    strAwayGoalDetails,
    dateEventLocal,
    strAwayYellowCards,
    strHomeYellowCards,
    strHomeRedCards,
    strAwayRedCards,
    idHomeTeam,
    idAwayTeam,
    strVideo
  } = eventDetails;

  return (
    <>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <span>{dateEventLocal}</span>
          <Grid
            container
            justify="space-between"
            alignItems="center"
            className={classes.resultWrapper}
          >
            <Link to={`/klub/${idHomeTeam}`} className={classes.link}>
              {strHomeTeam}
            </Link>
            <span className={classes.result}>
              {intHomeScore} : {intAwayScore}
            </span>
            <Link to={`/klub/${idAwayTeam}`} className={classes.link}>
              {strAwayTeam}
            </Link>
          </Grid>
          <Grid container justify="space-between" wrap="nowrap">
            <Grid>
              <EventDetailsItem data={strHomeGoalDetails} txt="Bramka" />
            </Grid>
            <Grid>
              <EventDetailsItem
                side="right"
                data={strAwayGoalDetails}
                txt="Bramka"
              />
            </Grid>
          </Grid>
          <Grid container justify="space-between" wrap="nowrap">
            <Grid>
              <EventDetailsItem data={strHomeYellowCards} txt="Żółta kartka" />
            </Grid>
            <Grid>
              <EventDetailsItem
                side="right"
                data={strAwayYellowCards}
                txt="Żółta kartka"
              />
            </Grid>
          </Grid>
          <Grid container justify="space-between" wrap="nowrap">
            <Grid>
              <EventDetailsItem data={strHomeRedCards} txt="Czerwona kartka" />
            </Grid>
            <Grid>
              <EventDetailsItem
                side="right"
                data={strAwayRedCards}
                txt="Czerwona kartka"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {strVideo && (
        <ReactPlayer
          url={strVideo}
          width="100%"
          controls
          style={{ marginTop: "30px" }}
        />
      )}
    </>
  );
}

const useStyles = makeStyles({
  card: {
    overflowX: "auto"
  },
  cardContent: {
    padding: "24px 16px",
    width: "100%",
    boxSizing: "border-box"
  },
  resultWrapper: {
    fontSize: "18px",
    fontWeight: "bold"
  },
  result: {
    color: "#00897B",
    fontSize: "24px"
  },
  link: {
    color: "#000",
    "&:hover": {
      textDecoration: "underline"
    }
  }
});
