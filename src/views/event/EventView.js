import React from "react";
import { makeStyles } from "@material-ui/core";

import EventDetails from "./../../components/events/EventDetails";

export default function EventView({ eventDetails }) {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <EventDetails eventDetails={eventDetails} />
    </div>
  );
}

const useStyles = makeStyles({
  wrapper: {
    marginTop: "50px",
    maxWidth: "800px",
    marginLeft: "auto",
    marginRight: "auto"
  }
});
