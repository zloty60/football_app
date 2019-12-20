import axios from "axios";

import lastTeamEventsTypes from "./lastTeamEventsTypes";

export function getlastTeamEvents(id) {
  return dispatch => {
    dispatch(getLastTeamEventsStart());

    axios
      .get(`https://www.thesportsdb.com/api/v1/json/1/eventslast.php?id=${id}`)
      .then(response =>
        dispatch(getLastTeamEventsSucces(response.data.results))
      )
      .catch(error => dispatch(getLastTeamEventsError(error)));
  };
}

export function getLastTeamEventsStart() {
  return {
    type: lastTeamEventsTypes.GET_LAST_EVENT_START
  };
}

export function getLastTeamEventsSucces(data) {
  return {
    type: lastTeamEventsTypes.GET_LAST_EVENT_SUCCESS,
    payload: {
      data
    }
  };
}

export function getLastTeamEventsError(error) {
  return {
    type: lastTeamEventsTypes.GET_LAST_EVENT_ERROR,
    payload: {
      error
    }
  };
}
