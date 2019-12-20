import nextLeagueEventsTypes from "./nextLeagueEventsTypes";

const initialState = {
  nextEvents: [],
  isLoading: false,
  isError: false,
  isLoadedData: false
};

export default function nextLeagueEventsReducer(state = initialState, action) {
  switch (action.type) {
    case nextLeagueEventsTypes.GET_EVENTS_START:
      return { ...initialState, isLoading: true };
    case nextLeagueEventsTypes.GET_EVENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadedData: true,
        nextEvents: action.payload.data
      };
    case nextLeagueEventsTypes.GET_EVENTS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
