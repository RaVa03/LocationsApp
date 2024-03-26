import { createContext, useEffect, useState } from 'react';

//my data is an array of objects!! (the cards)
function getInitialData() {
  const data = JSON.parse(localStorage.getItem("favs"));
  if (!data) {console.log("no data");return [];}
  {console.log(data); return data;}
}
//COMPONENT for creating context
const FavoritesContext = createContext({
  favorites: getInitialData(),
  totalFavorites: 0,
  addFavorite: (favoriteLocation) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {}
});

//COMPONNENT for providing the context in other places
export function FavoritesContextProvider(props) {

  //aici trebuie sa folosim local storage sau altceva ca sa se pastreze datele si dupa refresh, de ex
  const [userFavorites, setUserFavorites] = useState(getInitialData);

  //folosim useEffect deoarece dorim ca la fiecare schimbare la userFavorites sa fie actualizata lista
  //de favs randata
  useEffect(()=>{
    localStorage.setItem("favs",JSON.stringify(userFavorites))
  },[userFavorites])

  function addFavoriteHandler(favoriteMeetup) {
   
    setUserFavorites((prevUserFavorites) => {
      return [...prevUserFavorites,favoriteMeetup]
    });
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }
  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }
  //context holds the latest values for favorites
  //so , when userFavorites changes, context will be CHANGED TOO -> all componnets will be updated with "FavoritesContext.Provider value={context}"
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    //we point at the function, we don't execute it here
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
  return (
    // FavoritesContext.Provider - Provider is a build in component
    //trebuie sa faca wrap la toate componentele care ne intereseaza!!!! --: vexi main.jsx (sau index.jsx)
    <FavoritesContext.Provider value={context}>
    {/* when value change, all components that are listening will be updated too */}
      {props.children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext;
