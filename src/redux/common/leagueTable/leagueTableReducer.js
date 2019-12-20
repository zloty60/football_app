import leagueTableTypes from "./leagueTableTypes";

const initialState = {
  table: [],
  isLoading: false,
  isError: false,
  isLoadedData: false
};

export default function leagueTableReducer(state = initialState, action) {
  switch (action.type) {
    case leagueTableTypes.GET_TABLE_START:
      return { ...initialState, isLoading: true };
    case leagueTableTypes.GET_TABLE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadedData: true,
        table: action.payload.data
      };
    case leagueTableTypes.GET_TABLE_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
