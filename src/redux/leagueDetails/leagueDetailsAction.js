import axios from "axios";

import leagueDetailsTypes from "./leagueDetailsTypes";

export function getLeague(id) {
  return dispatch => {
    dispatch(getLeagueStart());

    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`
      )
      .then(response => dispatch(getLeagueSucces(response.data.leagues)))
      .catch(error => dispatch(getLeagueError(error)));
  };
}

export function getLeagueStart() {
  return {
    type: leagueDetailsTypes.GET_LEAGUE_START
  };
}

export function getLeagueSucces(data) {
  return {
    type: leagueDetailsTypes.GET_LEAGUE_SUCCESS,
    payload: {
      data
    }
  };
}

export function getLeagueError(error) {
  return {
    type: leagueDetailsTypes.GET_LEAGUE_ERROR,
    payload: {
      error
    }
  };
}
