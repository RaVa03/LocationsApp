import Card from '../ui/Card'
import { useState,useEffect } from 'react';
import "./EditLocationForm.css"
import Button from "../ui/Button";

export default function EditLocationForm(props){
   
    const [titleValue, setTitleValue]=useState("");
    const [imageValue, setImageValue]=useState("");
    const [authorValue, setAuthorValue]=useState("");
    const [descriptionValue, setDescriptionValue]=useState("");
    const [_idValue, set_idValue]=useState("");

    useEffect(() => {
        if (props.originalLocationData) {
            setTitleValue(props.originalLocationData.title || "");
            setImageValue(props.originalLocationData.image || "");
            setAuthorValue(props.originalLocationData.author || "");
            setDescriptionValue(props.originalLocationData.description || "");
            set_idValue(props.originalLocationData._id || "");
        }
    }, []);

    function submitHandler(event){
        event.preventDefault();
        const updatedLocationData ={
            title:titleValue,
            image:imageValue,
            author:authorValue,
            description:descriptionValue,
            _id:_idValue
        }
        props.onEditLocation(updatedLocationData )
    }
    return(
        <Card  backgroundColor= "#CAE2CC">
            {/* <form action={`/locations/${_idValue}?_method=PUT`} className='EditLocationForm' onSubmit={submitHandler} method="POST"> */}
            <form className='EditLocationForm' onSubmit={submitHandler}>
                <div className='divForm'>
                    <label htmlFor='title'> Location title</label>
                    <input value={titleValue} onChange={(event) => {setTitleValue(event.target.value); console.log(event.target.value);}} type="text" name="title" id="title"  required/>
                </div>
                <div className='divForm'>
                    <label htmlFor='image'> Location image</label>
                    <input  value={imageValue} onChange={(event) => {setImageValue(event.target.value); }} type="url" name="title" id="image" required/>
                </div>
                <div className='divForm'>
                    <label htmlFor='author'> Location author</label>
                    <input value={authorValue}  onChange={(event) => {setAuthorValue(event.target.value); }} type="text" name="author" id="author" required/>
                </div>
                <div className='divForm'>
                    <label htmlFor='description'> Location description</label>
                    <textarea  value={descriptionValue} onChange={(event) => {setDescriptionValue(event.target.value); }} id="description"  name="description" required rows="5" cols="20" maxLength="1000"></textarea>
                </div>
                <div className='buttonForm'>
                <Button color="white" text={"Edit location"} ></Button>
                </div>
            </form>
        </Card>
    )
}
