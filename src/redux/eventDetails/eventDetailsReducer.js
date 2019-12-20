import eventDetailsTypes from "./eventDetailsTypes";

const initialState = {
  eventDetails: {},
  isLoading: false,
  isError: false,
  isLoadedData: false
};

export default function eventDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case eventDetailsTypes.GET_EVENT_DETAILS_START:
      return { ...initialState, isLoading: true };
    case eventDetailsTypes.GET_EVENT_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadedData: true,
        eventDetails: action.payload.data
      };
    case eventDetailsTypes.GET_EVENT_DETAILS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
