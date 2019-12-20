import nextTeamEventsTypes from "./nextTeamEventsTypes";

const initialState = {
  nextEvents: [],
  isLoading: false,
  isError: false,
  isLoadedData: false
};

export default function nextTeamEventsReducer(state = initialState, action) {
  switch (action.type) {
    case nextTeamEventsTypes.GET_NEXT_EVENT_START:
      return { ...initialState, isLoading: true };
    case nextTeamEventsTypes.GET_NEXT_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadedData: true,
        nextEvents: action.payload.data
      };
    case nextTeamEventsTypes.GET_NEXT_EVENT_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
