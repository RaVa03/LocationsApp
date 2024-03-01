import Card from '../ui/Card'
import { useRef , useState} from 'react';
import "./NewLocationForm.css"
export default function NewLocationForm(props){
    // const titleInputRef=useRef();
    // const imageInputRef=useRef();
    // const authorInputRef=useRef();
    // const descriptionInputRef=useRef();

    const [titleValue, setTitleValue]=useState("");
    const [imageValue, setImageValue]=useState("");
    const [authorValue, setAuthorValue]=useState("");
    const [descriptionValue, setDescriptionValue]=useState("");

    function submitHandler(event){
        event.preventDefault();
        // const enteredTitle=titleInputRef.current.value;
        // const enteredImage=imageInputRef.current.value;
        // const enteredAuthor=authorInputRef.current.value;
        // const enteredDescription=descriptionInputRef.current.value;

        // const locationData={
        //     title:enteredTitle,
        //     image:enteredImage,
        //     author:enteredAuthor,
        //     decription:enteredDescription,
        // }
        //v1 ^, cu useRef hook
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
        <Card>
            <form className='NewLocationForm' onSubmit={submitHandler}>
                <div>
                    <label htmlFor='title'> Location title</label>
                    <input onChange={(event) => {setTitleValue(event.target.value); console.log(event.target.value);}} type="text" name="title" id="title" required/>
                </div>
                <div>
                    <label htmlFor='image'> Location image</label>
                    {/* v1, cu ref hook, la fiecare camp trebuie adaugat ref */}
                    {/* <input ref={imageInputRef} type="url" name="title" id="image" required/> */}
                    <input onChange={(event) => {setImageValue(event.target.value); }} type="url" name="title" id="image" required/>
                </div>
                <div>
                    <label htmlFor='author'> Location author</label>
                    <input  onChange={(event) => {setAuthorValue(event.target.value); }} type="text" name="author" id="author" required/>
                </div>
                <div>
                    <label htmlFor='description'> Location author</label>
                    <textarea  onChange={(event) => {setDescriptionValue(event.target.value); }} id="description"  name="description" required rows="5" cols="20" maxLength="1000"></textarea>
                </div>
                <div>
                    <button>Add location</button>
                </div>
            </form>
        </Card>
    )
}