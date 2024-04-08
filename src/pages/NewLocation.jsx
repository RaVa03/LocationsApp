import NewLocationForm from "../components/locations/NewLocationForm"
import "./NewLocation.css"
import { useNavigate } from 'react-router-dom'

export default function NewLocation(){
    const navigateTo=useNavigate();
    function addLocationHandler(locationData){
        fetch(
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
    }

    return(
        <div className="NewLocationPage">
            <h1 className="pageTitle">New Location</h1>
           
            <NewLocationForm onAddLocation={addLocationHandler} />
        </div>
    )
}