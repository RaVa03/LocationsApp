import {Link} from 'react-router-dom'
import "./MainNavigation.css"
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';

export default function MainNavigation(){
    const favoritesCtx = useContext(FavoritesContext);
    return(
        <header className='header'>
            <nav>
                <ul><li><Link to="/">All Locations</Link> </li></ul>
                <ul><li><Link to="/favorites-locations">Favorites-locations  <span>
		                  {favoritesCtx.totalFavorites}
		                </span>
                        </Link>
                    </li>
                </ul>
                <ul><li><Link to="/new-location">New location</Link></li></ul>
            </nav>
        </header>
    )
}