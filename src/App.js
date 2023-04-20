// import { useState } from "react";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
// import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./utils/constants";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from 'react-router'

import MainNavigation from "./components/layout/MainNavigation";

function App() {

  return (
    <div data-test="app">
      <BrowserRouter>
        <MainNavigation />
          <Switch>
              <Route path="/favorites">  
                  <FavoritesPage />
              </Route>
              <Route path="/newpage">
                  <NewMeetupsPage />
              </Route>
              <Route path="/">
              <AllMeetupsPage/>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
