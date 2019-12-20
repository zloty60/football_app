import lastLeagueEventTypes from "./lastLeagueEventTypes";

const initialState = {
  lastEvents: [],
  isLoading: false,
  isError: false,
  isLoadedData: false
};

export default function lastLeagueEventsReducer(state = initialState, action) {
  switch (action.type) {
    case lastLeagueEventTypes.GET_LEAGUE_LAST_EVENTS_START:
      return { ...initialState, isLoading: true };
    case lastLeagueEventTypes.GET_LEAGUE_LAST_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadedData: true,
        lastEvents: action.payload.data
      };
    case lastLeagueEventTypes.GET_LEAGUE_LAST_EVENTS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
