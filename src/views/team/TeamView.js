import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Grid, makeStyles } from "@material-ui/core";

import { getNextEvent } from "./../../redux/nextTeamEvents/nextTeamEventsAction";
import { getlastTeamEvents } from "./../../redux/lastTeamEvents/lastTeamEventsAction";
import { getTable } from "./../../redux/common/leagueTable/leagueTableAction";

import Events from "./../../components/events/Events";
import CardInfo from "./../../components/common/CardInfo";
import Stadium from "./../../components/stadium/Stadium";

function TeamView(props) {
  const { getNextEvent, getlastTeamEvents } = props;
  const { nextEvents } = props.nextTeamEvents;
  const { lastEvents } = props.lastTeamEvents;

  const classes = useStyles();

  useEffect(() => {
    getNextEvent(props.id);
    getlastTeamEvents(props.id);
  }, [props.id]);

  return (
    <>
      <div className={classes.mt}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <CardInfo details={props.details} fullHeight teamView />
          </Grid>
          <Grid item xs={12} md={6}>
            <Stadium details={props.details} />
          </Grid>
        </Grid>
      </div>
      <div className={`${classes.mt} ${classes.mb}`}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Events
              events={nextEvents}
              type="next"
              isLoadedData={props.nextTeamEvents.isLoadedData}
              quantity={5}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Events
              events={lastEvents}
              type="last"
              isLoadedData={props.lastTeamEvents.isLoadedData}
              quantity={5}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    nextTeamEvents: state.nextTeamEventsReducer,
    lastTeamEvents: state.lastTeamEventsReducer,
    leagueTable: state.leagueTableReducer
  };
};

export default connect(mapStateToProps, {
  getNextEvent,
  getlastTeamEvents,
  getTable
})(TeamView);

const useStyles = makeStyles({
  mt: {
    marginTop: "50px"
  },
  mb: {
    marginBottom: "25px"
  }
});
