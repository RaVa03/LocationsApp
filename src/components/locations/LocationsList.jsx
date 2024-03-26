
import "./LocationList.css"

import LocationCard from "./LocationCard"

export default function LocationsList(props){

    return(
        <ul className="LocationsList">
            {
                props.locations.map((l) => (
                    <LocationCard 
                        id={l.id}
                        key={l.id}
                        title={l.title}
                        author={l.author}
                        image={l.image}
                        description={l.description}
                    />
                ))
            }
        </ul>
    )
}