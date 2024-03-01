import "./LocationItem.css"
import Card from '../ui/Card';
export default function LocationItem(props){
    return (
        <li className="Item">
            <Card>
                {/* <div className="ImageContainer"> */}
                <div className="Image"><img src={props.image} alt={props.title} /></div>
                <div className="Content">
                    <h3 className="Title">{props.title}</h3>
                    <p>-{props.author}</p>
                    <p>{props.description}</p>
                </div>
                <div className="DivButton">
                    <button className="FavButton">To favorites</button>
                </div>
                {/* <div className="ImageOverlay">
                    <h3 className="Title">{props.title}</h3>
                        <p>- {props.author}</p>
                        <p>{props.description}</p>
                    <div className="DivButton">
                        <button className="FavButton">To favorites</button>
                    </div>
                </div> */}
                {/* </div> */}
               
            </Card>
        </li>
    )
}