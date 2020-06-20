import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./services/routes";
import "./App.css";
import HomePage from "./pages/HomePage";
import ClubByCity from "./pages/ClubByCity";
import ActivitiesPage from "./pages/ActivitiesPage";
import Header from "./components/Header/Header"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        <Switch>
          <Route path={routes.HOME} exact component={HomePage} />
          <Route path={routes.CLUBS} component={ClubByCity} />
          <Route path={routes.ACTIVITIES} component={ActivitiesPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
