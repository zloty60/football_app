import axios from "axios";

import eventDetailsTypes from "./eventDetailsTypes";

export function getEventDetails(id) {
  return dispatch => {
    dispatch(getEventDetailsStart());

    axios
      .get(`https://www.thesportsdb.com/api/v1/json/1/lookupevent.php?id=${id}`)
      .then(response => dispatch(getEventDetailsSucces(response.data.events)))
      .catch(error => dispatch(getEventDetailsError(error)));
  };
}

export function getEventDetailsStart() {
  return {
    type: eventDetailsTypes.GET_EVENT_DETAILS_START
  };
}

export function getEventDetailsSucces(data) {
  return {
    type: eventDetailsTypes.GET_EVENT_DETAILS_SUCCESS,
    payload: {
      data
    }
  };
}

export function getEventDetailsError(error) {
  return {
    type: eventDetailsTypes.GET_EVENT_DETAILS_ERROR,
    payload: {
      error
    }
  };
}
