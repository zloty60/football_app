import axios from "axios";

import nextLeagueEventsTypes from "./nextLeagueEventsTypes";

export function getEvents(id) {
  return dispatch => {
    dispatch(getEventsStart());
    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/eventsnextleague.php?id=${id}`
      )
      .then(response => dispatch(getEventsSucces(response.data.events)))
      .catch(error => dispatch(getEventsError(error)));
  };
}

export function getEventsStart() {
  return {
    type: nextLeagueEventsTypes.GET_EVENTS_START
  };
}

export function getEventsSucces(data) {
  return {
    type: nextLeagueEventsTypes.GET_EVENTS_SUCCESS,
    payload: {
      data
    }
  };
}

export function getEventsError(error) {
  return {
    type: nextLeagueEventsTypes.GET_EVENTS_ERROR,
    payload: {
      error
    }
  };
}
