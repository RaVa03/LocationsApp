import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import LocationsList from '../components/locations/LocationsList';
import "./Favorites.css"

export default function Favorites(){
    const favoritesCtx = useContext(FavoritesContext);
    let content;
    if (favoritesCtx.totalFavorites === 0) {
      content = <p>You got no favorites yet. Start adding some?</p>;
    } else {
      content = <LocationsList locations={favoritesCtx.favorites} />;
    return(
        <div className="MainContainerFavs">
            {content}
        </div>
    )
    }
}