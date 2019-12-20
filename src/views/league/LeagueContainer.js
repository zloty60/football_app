import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

import { getLeague } from "../../redux/leagueDetails/leagueDetailsAction";

import LeagueView from "./LeagueView";
import NotFoundCard from "./../../components/common/NotFoundCard";

function LeagueContainer(props) {
  const { getLeague } = props;

  const id = props.match.params.league;
  const { details, isLoadedData, isLoading } = props.leagueDetails;

  useEffect(() => {
    getLeague(id);
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Grid container justify="center">
          <CircularProgress />
        </Grid>
      ) : isLoadedData ? (
        Array.isArray(details) ? (
          <LeagueView id={id} details={details[0]} />
        ) : (
          <NotFoundCard text="nie ma takiej ligi" mt="40px" />
        )
      ) : null}
    </>
  );
}

const mapStateToProps = state => {
  return {
    leagueDetails: state.leagueDetailsReducer
  };
};

export default connect(mapStateToProps, { getLeague })(LeagueContainer);
