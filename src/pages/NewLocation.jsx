import NewLocationForm from "../components/locations/NewLocationForm"
import "./NewLocation.css"
import { useNavigate } from 'react-router-dom'

export default function NewLocation(){
    const navigateTo=useNavigate();
    function addLocationHandler(locationData){
        fetch(
            //"https://locations-482dc-default-rtdb.firebaseio.com/locations.json",
            //^using Firebase
            "http://localhost:3000/new-location",
        {
            method: 'POST',
            body: JSON.stringify(locationData),//datele pe care le trimitem
            headers: {
                'Content-type': 'application/json'//evidentiem ca datele sunt de tip JSON
            }
        }
        ).then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(() => {
            navigateTo('/');
          })
          .catch(error => {
            console.error('Error:', error);
          });
        //original linnk: https://react-getting-started-674eb-default-rtdb.firebaseio.com/
        //adding locations makes a new collection
        //we have to add .json for firebase
        //in loc de fetch puteam sa facem si cu axios
        //fetch e by default metoda GET, ca sa o schimbam adaugam al doilea argument
    }
    
    return(
        <div className="NewLocationPage">
            <h1 className="pageTitle">New Location</h1>
           
            <NewLocationForm onAddLocation={addLocationHandler} />
        </div>
    )
}