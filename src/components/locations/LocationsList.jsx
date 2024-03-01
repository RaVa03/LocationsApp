import LocationItem from "./LocationItem"
import "./LocationList.css"

import LocationCard from "./LocationCard"

export default function LocationList(props){
    return(
        <ul className="AllLocations">
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
            {/* {props.locations.map((l) => (
                <LocationItem
                    id={l.id}
                    key={l.id}
                    title={l.title}
                    author={l.author}
                    image={l.image}
                    description={l.description}
                />
            ))} */}
        </ul>
    )
}