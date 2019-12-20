import { combineReducers } from "redux";
import leagueDetailsReducer from "./leagueDetails/leagueDetailsReducer";
import leagueTableReducer from "./common/leagueTable/leagueTableReducer";
import nextLeagueEventsReducer from "./nextLeagueEvents/nextLeagueEventsReducer";
import teamDetailsReducer from "./teamDetails/teamDetailsReducer";
import nextTeamEventsReducer from "./nextTeamEvents/nextTeamEventsReducer";
import lastTeamEventsReducer from "./lastTeamEvents/lastTeamEventsReducer";
import eventDetailsReducer from "./eventDetails/eventDetailsReducer";
import lastLeagueEventsReducer from "./lastLeagueEvent/lastLeagueEventReducer";

export default combineReducers({
  leagueDetailsReducer,
  leagueTableReducer,
  nextLeagueEventsReducer,
  teamDetailsReducer,
  nextTeamEventsReducer,
  lastTeamEventsReducer,
  eventDetailsReducer,
  lastLeagueEventsReducer
});
