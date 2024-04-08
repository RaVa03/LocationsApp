import EditLocationForm from "../components/locations/EditLocationForm";
import "./EditLocation.css"
import { useNavigate , useLocation} from 'react-router-dom'
export default function EditLocation(){
    const navigateTo=useNavigate();
    const location = useLocation();
    const originalLocationData = location.state && location.state.locationData;
    function editLocationHandler(locationData){
        
       console.log("inside edit lcoation, id:",locationData._id)
        fetch(
            `http://localhost:3000/locations/${locationData._id}`,
        {
            method: 'PUT',
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
            navigateTo(`/locations/${locationData._id}`);
          })
          .catch(error => {
            console.error('Error:', error);
          });
    }

    return(
        <div className="EditLocationPage">
            <h1 className="pageTitle">Edit Location</h1> 
            <EditLocationForm originalLocationData={originalLocationData} onEditLocation={editLocationHandler} />
        </div>
    )
}
