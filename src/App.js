import { useState, useEffect } from "react";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from 'react-router'

import MainNavigation from "./components/layout/MainNavigation";

const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("/data.json")
    .then((res) => res.json())
    .then((json) => setData(json) )
  }, [])


  const handleAddMeetup = (newMeetup) => {
    setData([...data, { id: `m${data.length + 1}`, ...newMeetup}])
  } 

  return (
    <div data-test="app">
      <BrowserRouter>
        <MainNavigation />
          <Switch>
              <Route path="/favorites">  
                  <FavoritesPage />
              </Route>
              <Route path="/newpage">
                  <NewMeetupsPage handleAddMeetup={handleAddMeetup} />
              </Route>
              <Route path="/">
              <AllMeetupsPage data={data}/>
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
