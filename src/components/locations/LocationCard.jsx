import React from "react";

import "./LocationCard.css";

const LocationCard = (props) => {
    return (
        
            // <a href={props.title} className="card-container">
        <div className="card-container">
            <div className="card-image">
                <img src={props.image}  content="crop"/>
            </div>
            <div className="card-details">
                <h1> {props.title} </h1>
                <p> {props.author} </p>
                <p> {props.description} </p>
            </div>
        </div>
        // </a>
    )
}

export default LocationCard;