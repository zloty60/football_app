import axios from "axios";

import teamDetailsTypes from "./teamDetailsTypes";

export function getTeamDetails(id) {
  return dispatch => {
    dispatch(getTeamDetailsStart());

    axios
      .get(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`)
      .then(response => dispatch(getTeamDetailsSucces(response.data.teams)))
      .catch(error => dispatch(getTeamDetailsError(error)));
  };
}

export function getTeamDetailsStart() {
  return {
    type: teamDetailsTypes.GET_DETAILS_START
  };
}

export function getTeamDetailsSucces(data) {
  return {
    type: teamDetailsTypes.GET_DETAILS_SUCCESS,
    payload: {
      data
    }
  };
}

export function getTeamDetailsError(error) {
  return {
    type: teamDetailsTypes.GET_DETAILS_ERROR,
    payload: {
      error
    }
  };
}
