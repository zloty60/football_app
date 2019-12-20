import leagueDetailsTypes from "./leagueDetailsTypes";

const initialState = {
  details: {},
  isLoading: false,
  isError: false,
  isLoadedData: false
};

export default function leagueDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case leagueDetailsTypes.GET_LEAGUE_START:
      return { ...initialState, isLoading: true };
    case leagueDetailsTypes.GET_LEAGUE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadedData: true,
        details: action.payload.data
      };
    case leagueDetailsTypes.GET_LEAGUE_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
