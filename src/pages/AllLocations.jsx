
import { useState, useEffect } from 'react';
import LocationList from "../components/locations/LocationsList"
import "./AllLocations.css"
export default function AllLocations(){
    const [isLoading, setIsLoading] = useState(true);
	const [loadedLocations, setLoadedLocations] = useState([]);
    useEffect(()=>{
        setIsLoading(true);
        fetch(
           // "https://locations-482dc-default-rtdb.firebaseio.com/locations.json"
           //^if using Firebase
           "http://localhost:3000",
           {headers: { 'Content-type': 'application/json'//evidentiem ca datele sunt de tip JSON
        }}
        ).then((response)=>{
            return response.json();
        })
        .then((data)=>{
            const locations =[];
            for(const key in data)
            {
                const location={
                    id:key,
                    ...data[key]
                }
                locations.push(location)
            } 
            setIsLoading(false) 
            setLoadedLocations(locations)     
        })
        .catch(error => {
            console.error('Error fetching locations:', error);
            setIsLoading(false);
        });
    
    },[])
    if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
  }
    return(
        <div className="MainContainer">
            <LocationList locations={loadedLocations}/>
        </div>
    )
}