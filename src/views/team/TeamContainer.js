import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

import { getTeamDetails } from "./../../redux/teamDetails/teamDetailsAction";

import TeamView from "./TeamView";
import NotFoundCard from "./../../components/common/NotFoundCard";

function TeamContainer(props) {
  const { getTeamDetails } = props;
  const id = props.match.params.team;
  const { details, isLoadedData, isLoading } = props.teamDetails;

  useEffect(() => {
    getTeamDetails(id);
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Grid container justify="center">
          <CircularProgress />
        </Grid>
      ) : isLoadedData ? (
        Array.isArray(details) ? (
          <TeamView id={id} details={details[0]} />
        ) : (
          <NotFoundCard text="nie ma takiego zespolu" mt="40px" />
        )
      ) : null}
    </>
  );
}

const mapStateToProps = state => {
  return {
    teamDetails: state.teamDetailsReducer
  };
};

export default connect(mapStateToProps, { getTeamDetails })(TeamContainer);
