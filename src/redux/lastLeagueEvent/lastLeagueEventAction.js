import axios from "axios";

import lastLeagueEventsTypes from "./lastLeagueEventTypes";

export function getLastEvents(id) {
  return dispatch => {
    dispatch(getLastEventsStart());

    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php?id=${id}`
      )
      .then(response => dispatch(getLastEventsSucces(response.data.events)))
      .catch(error => dispatch(getLastEventsError(error)));
  };
}

export function getLastEventsStart() {
  return {
    type: lastLeagueEventsTypes.GET_LEAGUE_LAST_EVENTS_START
  };
}

export function getLastEventsSucces(data) {
  return {
    type: lastLeagueEventsTypes.GET_LEAGUE_LAST_EVENTS_SUCCESS,
    payload: {
      data
    }
  };
}

export function getLastEventsError(error) {
  return {
    type: lastLeagueEventsTypes.GET_LEAGUE_LAST_EVENTS_ERROR,
    payload: {
      error
    }
  };
}
