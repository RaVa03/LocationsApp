import { useState, useEffect } from 'react';
import "./LocationDetails.css"
import { useNavigate,useParams } from 'react-router-dom';
import Button from '../components/ui/Button';
import {Link} from 'react-router-dom'
import DeleteLocation from '../components/locations/DeleteLocation';


export default function LocationDetails(){
    const [isLoading, setIsLoading] = useState(true);
	const [loadedDetails, setLoadedDetails] = useState([]);
    const {locationId} = useParams();//match.params.id; // Extract the ID from the URL params
    const navigateTo=useNavigate();
    console.log(locationId)
    useEffect(()=>{
        setIsLoading(true);
       // Check if locationId is defined before making the fetch request
       if (locationId) {
        //Match is provided by React Router if the component is rendered as part of a Route
        fetch(
           `http://localhost:3000/locations/${locationId}`,
           {headers: { 'Content-type': 'application/json'//evidentiem ca datele sunt de tip JSON
        }}
        ).then((response)=>{
            return response.json();
        })
        .then((data)=>{
            console.log(data)
            setIsLoading(false) 
            setLoadedDetails(data)     
        })
        .catch(error => {
            console.error('Error fetching details:', error);
            setIsLoading(false);
        });
       }
    }, [locationId])// Run useEffect whenever the ID in URL changes
    if (isLoading) {
        return (
          <section>
            <p>Loading...</p>
          </section>
        );
  }

    return(

        <div className="details-card-container">
           <div className="details-card-image">
               <img src={loadedDetails.image}  content="crop"/>
           </div>
           <div className="details-card-details">
               <div className="details-card-details-text">  <h1> {loadedDetails.title}  <span>#by {loadedDetails.author}</span> </h1>
               <div className="details-card-details-description"> <p> {loadedDetails.description} </p></div>
              
               </div>
               <div className="details-card-details-buttons">

                <Button color="white"  text={"Heart"}></Button>
                {/* <Link to={`/`}> <Button color="white" text={"See all locations"} ></Button></Link> */}
                {/* <Link to={`/favorites-locations`}> <Button color="white" text={"See favorites"} ></Button></Link> */}
                
                <Link to={`/locations/${loadedDetails._id}/edit`} state={{ locationData: loadedDetails }}> <Button color="white" text={"Edit"} ></Button></Link>
               
                {/* v1, don't work on first press */}
                {/* <Link to={`/locations/${loadedDetails._id}`} state={{ locationId: locationId }}> <DeleteLocation></DeleteLocation></Link> */}
                {/* //v2, ok but not good practice */}
                {/* <DeleteLocation locationId={locationId} /> */}

                {/* v3, params*/}
                <DeleteLocation/>

            </div>
                
           </div>
        </div>
    )
}
