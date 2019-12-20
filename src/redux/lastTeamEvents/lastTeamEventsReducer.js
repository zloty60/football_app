import lastTeamEventsTypes from "./lastTeamEventsTypes";

const initialState = {
  lastEvents: {},
  isLoading: false,
  isError: false,
  isLoadedData: false
};

export default function lastTeamEventsReducer(state = initialState, action) {
  switch (action.type) {
    case lastTeamEventsTypes.GET_LAST_EVENT_START:
      return { ...initialState, isLoading: true };
    case lastTeamEventsTypes.GET_LAST_EVENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadedData: true,
        lastEvents: action.payload.data
      };
    case lastTeamEventsTypes.GET_LAST_EVENT_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
