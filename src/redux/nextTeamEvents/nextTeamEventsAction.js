import axios from "axios";

import nextTeamEventsTypes from "./nextTeamEventsTypes";

export function getNextEvent(id) {
  return dispatch => {
    dispatch(getNextEventStart());

    axios
      .get(`https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=${id}`)
      .then(response => dispatch(getNextEventSucces(response.data.events)))
      .catch(error => dispatch(getNextEventError(error)));
  };
}

export function getNextEventStart() {
  return {
    type: nextTeamEventsTypes.GET_NEXT_EVENT_START
  };
}

export function getNextEventSucces(data) {
  return {
    type: nextTeamEventsTypes.GET_NEXT_EVENT_SUCCESS,
    payload: {
      data
    }
  };
}

export function getNextEventError(error) {
  return {
    type: nextTeamEventsTypes.GET_NEXT_EVENT_ERROR,
    payload: {
      error
    }
  };
}
