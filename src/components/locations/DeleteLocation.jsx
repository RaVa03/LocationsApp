import React from 'react';
import Button from '../ui/Button';
import { useNavigate ,useLocation} from 'react-router-dom'; // Import the useNavigate hook
import { useParams } from 'react-router-dom';
import LocationDetails from '../../pages/LocationDetails';
const DeleteLocation =  () => {
    //v2, with props
    // const DeleteLocation =  () => {
    
    //v1
    // const location = useLocation();
    // const locationId = location.state ? location.state.locationId : null;

    //v3, use Params
    const { locationId } = useParams();
    const navigateTo=useNavigate();
 
    const handleDelete =async () => {
        console.log("handle delete")
        const res = await fetch(`http://localhost:3000/locations/${locationId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to delete location with ID ${locationId}`);
            }
            console.log("test")
            return response.json();
        })
        .then(data => {
            console.log('Location deleted successfully',data);
            navigateTo(`/`)
        })
        .catch(error => {
            console.error('Error deleting location:', error);
        });
    };

    return (
        <Button color="white" text="Delete" onAction={handleDelete} />
    );
};

export default DeleteLocation;