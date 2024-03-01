import {Link} from 'react-router-dom'
import "./MainNavigation.css"
export default function MainNavigation(){
    return(
        <header className='header'>
            <nav>
                <ul><li><Link to="/">All Meetups</Link> </li></ul>
                <ul><li><Link to="/favorites-locations">Favorites-locations</Link> </li></ul>
                <ul><li><Link to="/id/details">Details</Link> </li></ul>
                <ul><li><Link to="/new-location">New location</Link></li></ul>
            </nav>
        </header>
    )
}