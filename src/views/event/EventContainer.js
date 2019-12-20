import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

import { getEventDetails } from "./../../redux/eventDetails/eventDetailsAction";

import EventView from "./EventView";
import NotFoundCard from "./../../components/common/NotFoundCard";

function EventContainer(props) {
  const { getEventDetails } = props;
  const id = props.match.params.event;
  const { eventDetails, isLoadedData, isLoading } = props.eventDetails;

  useEffect(() => {
    getEventDetails(id);
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Grid container justify="center">
          <CircularProgress />
        </Grid>
      ) : isLoadedData ? (
        Array.isArray(eventDetails) ? (
          <EventView eventDetails={eventDetails[0]} />
        ) : (
          <NotFoundCard text="nie ma takiego wydarzenia" mt="40px" />
        )
      ) : null}
    </>
  );
}

const mapStateToProps = state => {
  return {
    eventDetails: state.eventDetailsReducer
  };
};

export default connect(mapStateToProps, { getEventDetails })(EventContainer);
