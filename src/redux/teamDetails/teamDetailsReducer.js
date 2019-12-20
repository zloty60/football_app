import teamDetailsTypes from "./teamDetailsTypes";

const initialState = {
  details: {},
  isLoading: false,
  isError: false,
  isLoadedData: false
};

export default function leagueDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case teamDetailsTypes.GET_DETAILS_START:
      return { ...initialState, isLoading: true };
    case teamDetailsTypes.GET_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoadedData: true,
        details: action.payload.data
      };
    case teamDetailsTypes.GET_DETAILS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
