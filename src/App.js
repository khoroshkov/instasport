import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./services/routes";
import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import HomePage from "./pages/HomePage";
import ClubByCity from "./pages/ClubByCity";
import ActivitiesPage from "./pages/ActivitiesPage";
import Header from "./components/Header/Header"
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
        <Switch>
          <Route path={routes.HOME} exact component={HomePage} />
          <Route path={routes.CLUBS} component={ClubByCity} />
          <Route path={routes.ACTIVITIES} component={ActivitiesPage} />
          <Route path={routes.ABOUT} component={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
