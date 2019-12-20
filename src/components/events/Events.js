import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  Hidden,
  makeStyles,
  Typography,
  CardContent
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

import CardTitle from "./../common/CardTitle";

export default function Events({ type, events, isLoadedData, quantity }) {
  const classes = useStyles();
  if (type === "next") {
    return (
      <Card>
        <CardTitle title="nastepne mecze" />
        <Divider />
        <List>
          {isLoadedData && Array.isArray(events) ? (
            events.map(event => (
              <ListItem key={event.idEvent} divider={true}>
                <ListItemText primary={event.strEvent} />
                <Hidden mdDown>
                  <ListItemText
                    className={classes.dateWrapper}
                    primary={
                      <Typography component="span" className={classes.date}>
                        {`${event.dateEvent} ${event.strTimeLocal}`}
                      </Typography>
                    }
                  />
                </Hidden>
              </ListItem>
            ))
          ) : (
            <EventsLoading quantity={quantity} />
          )}
        </List>
      </Card>
    );
  }

  if (type === "last") {
    return (
      <>
        <Card>
          <CardTitle title="ostatnie mecze" />
          <Divider />
          <List>
            {isLoadedData && Array.isArray(events) ? (
              events.map(event => (
                <ListItemLink
                  to={`/mecz/${event.idEvent}`}
                  key={event.idEvent}
                  divider={true}
                >
                  <ListItemText
                    className={classes.lastEvent}
                    primary={`${event.strHomeTeam} ${event.intHomeScore} : ${event.intAwayScore} ${event.strAwayTeam}`}
                  />
                  <Hidden mdDown>
                    <ListItemText
                      className={classes.dateWrapper}
                      primary={
                        <Typography component="span" className={classes.date}>
                          {event.strLeague}
                        </Typography>
                      }
                    />
                  </Hidden>
                </ListItemLink>
              ))
            ) : (
              <EventsLoading quantity={quantity} />
            )}
          </List>
        </Card>
      </>
    );
  }
}

Events.propTypes = {
  type: PropTypes.string.isRequired
};

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />;
}

const useStyles = makeStyles({
  date: {
    fontSize: "12px"
  },
  dateWrapper: {
    display: "flex",
    justifyContent: "flex-end"
  }
});

const EventsLoading = ({ quantity }) => {
  let table = [];
  for (let i = 0; i < quantity; i++) {
    table.push(
      <Skeleton key={i} variant="text" height={50} component={"li"} />
    );
  }
  return <CardContent>{table}</CardContent>;
};
