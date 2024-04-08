import Card from '../ui/Card'
import { useRef , useState} from 'react';
import "./NewLocationForm.css"
import Button from "../ui/Button";
export default function NewLocationForm(props){

    const [titleValue, setTitleValue]=useState("");
    const [imageValue, setImageValue]=useState("");
    const [authorValue, setAuthorValue]=useState("");
    const [descriptionValue, setDescriptionValue]=useState("");

    function submitHandler(event){
        event.preventDefault();
        const locationData={
            title:titleValue,
            image:imageValue,
            author:authorValue,
            description:descriptionValue,
        }
        console.log(locationData)
        props.onAddLocation(locationData)
    }
    return(
        <Card  backgroundColor= "#CAE2CC">
            <form className='NewLocationForm' onSubmit={submitHandler} method="POST">
                <div className='divForm'>
                    <label htmlFor='title'> Location title</label>
                    <input onChange={(event) => {setTitleValue(event.target.value); console.log(event.target.value);}} type="text" name="title" id="title" required/>
                </div>
                <div className='divForm'>
                    <label htmlFor='image'> Location image</label>
                    <input onChange={(event) => {setImageValue(event.target.value); }} type="url" name="title" id="image" required/>
                </div>
                <div className='divForm'>
                    <label htmlFor='author'> Location author</label>
                    <input  onChange={(event) => {setAuthorValue(event.target.value); }} type="text" name="author" id="author" required/>
                </div>
                <div className='divForm'>
                    <label htmlFor='description'> Location description</label>
                    <textarea  onChange={(event) => {setDescriptionValue(event.target.value); }} id="description"  name="description" required rows="5" cols="20" maxLength="1000"></textarea>
                </div>
                <div className='buttonForm'>
                <Button color="white" text={"Add location"} ></Button>
                </div>
            </form>
        </Card>
    )
}
