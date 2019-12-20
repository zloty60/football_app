import axios from "axios";

import leagueTableTypes from "./leagueTableTypes";

export function getTable(id, season) {
  return dispatch => {
    dispatch(getTableStart());

    axios
      .get(
        `https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=${id}&s=${season}`
      )
      .then(response => dispatch(getTableSucces(response.data.table)))
      .catch(error => dispatch(getTableError(error)));
  };
}

export function getTableStart() {
  return {
    type: leagueTableTypes.GET_TABLE_START
  };
}

export function getTableSucces(data) {
  return {
    type: leagueTableTypes.GET_TABLE_SUCCESS,
    payload: {
      data
    }
  };
}

export function getTableError(error) {
  return {
    type: leagueTableTypes.GET_TABLE_ERROR,
    payload: {
      error
    }
  };
}
