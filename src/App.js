import { useState, useEffect } from "react";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from 'react-router'

import MainNavigation from "./components/layout/MainNavigation";

const App = () => {
  const [data, setData] = useState([])
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetch("/data.json")
    .then((res) => res.json())
    .then((json) => {
      const dataArray = []
    for(let i = 0; i < json.length; i++){
      dataArray.push({...json[i], favorite: false})
    }
      setData(dataArray)
    })
  }, [])

  const handleAddFavorites = (id) => {
    const foundItemIndex = data.indexOf(data.find((item) => item.id === id))
    console.log(foundItemIndex)
    const addingFavArray = []
    for(let i = 0; i < data.length; i++){
      if(i === foundItemIndex){
        addingFavArray.push({...data[i], favorite: !data[i].favorite})
      } else {
        addingFavArray.push(data[i])
      }
    }
    setData(addingFavArray)
    setFavorites(addingFavArray.filter((item) => item.favorite === true))
  }

  const handleAddMeetup = (newMeetup) => {
    setData([...data, { id: `m${data.length + 1}`, ...newMeetup}])
  } 

  return (
    <div data-test="app">
      <BrowserRouter>
        <MainNavigation favorites={favorites} />
          <Switch>
              <Route path="/favorites">  
                  <FavoritesPage favorites={favorites} handleAddFavorites={handleAddFavorites} />
              </Route>
              <Route path="/newpage">
                  <NewMeetupsPage handleAddMeetup={handleAddMeetup} />
              </Route>
              <Route path="/">
              <AllMeetupsPage data={data} handleAddFavorites={handleAddFavorites} />
              </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
