import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles, Grid, useMediaQuery } from "@material-ui/core";

import { getTable } from "../../redux/common/leagueTable/leagueTableAction";
import { getEvents } from "../../redux/nextLeagueEvents/nextLeagueEventsAction";
import { getLastEvents } from "../../redux/lastLeagueEvent/lastLeagueEventAction";

import LeagueTable from "./../../components/leagueTable/LeagueTable";
import CardInfo from "./../../components/common/CardInfo";
import Events from "./../../components/events/Events";

function LeagueView(props) {
  const { getTable, getEvents, getLastEvents, id } = props;

  const { table, isLoadedData } = props.leagueTable;
  const { nextEvents } = props.nextLeagueEvents;
  const { lastEvents } = props.lastLeagueEvents;
  const classes = useStyles();
  const breakPoint = useMediaQuery("(min-width:960px)");

  useEffect(() => {
    getTable(id, "1920");
    getEvents(id);
    getLastEvents(id);
  }, [id]);
  return (
    <>
      <Grid container spacing={breakPoint ? 5 : 0}>
        <Grid item xs={12} md={6}>
          <div className={classes.mt}>
            <CardInfo details={props.details} />
          </div>
          <div className={`${classes.mt}  ${classes.mb}`}>
            <Events
              events={lastEvents}
              quantity={15}
              type="last"
              isLoadedData={props.lastLeagueEvents.isLoadedData}
            />
          </div>
          <div className={classes.mt}>
            <Events
              events={nextEvents}
              quantity={15}
              type="next"
              isLoadedData={props.nextLeagueEvents.isLoadedData}
            />
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.mt}>
            <LeagueTable table={table} isLoadedData={isLoadedData} />
          </div>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = state => {
  return {
    leagueTable: state.leagueTableReducer,
    nextLeagueEvents: state.nextLeagueEventsReducer,
    lastLeagueEvents: state.lastLeagueEventsReducer
  };
};

export default connect(mapStateToProps, { getTable, getEvents, getLastEvents })(
  LeagueView
);

const useStyles = makeStyles({
  mt: {
    marginTop: "50px"
  },
  mb: {
    marginBottom: "25px"
  }
});
