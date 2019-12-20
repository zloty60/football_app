import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import MainView from "./views/MainView";
import LeagueContainer from "./views/league/LeagueContainer";
import TeamContainer from "./views/team/TeamContainer";
import EventContainer from "./views/event/EventContainer";
import ErrorView from "./views/ErrorView";

import Navbar from "./components/layout/Navbar";
import Main from "./components/layout/Main";

export default function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Main>
          <Switch>
            <Route exact path="/" component={MainView} />
            <Route exact path="/ligi/:league" component={LeagueContainer} />
            <Route exact path="/klub/:team" component={TeamContainer} />
            <Route exact path="/mecz/:event" component={EventContainer} />
            <Route component={ErrorView} />
          </Switch>
        </Main>
      </HashRouter>
    </>
  );
}
