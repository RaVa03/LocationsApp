import React from "react";
import { useContext } from 'react';
import {Link} from 'react-router-dom'
//hook that allows making a connection between this ocmponent and THE CONTEXT

import "./LocationCard.css";

import FavoritesContext from "../../store/favorites-context";
import Button from "../ui/Button";

const LocationCard = (props) => {
    const favoritesCtx = useContext(FavoritesContext); //conection is made by passing the CONTEXT OBJECT as the argument for useContext
    //so now we have acces to the FavoritesContext object through favoritesCtx
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id); //executing the function
    function toggleFavoriteStatusHandler() {
      if (itemIsFavorite) {
        favoritesCtx.removeFavorite(props.id);
        //cand se executa, in FavoritesContextProvider se face update si la userFavorites, si deci update la toate componentele copil
      } else {
        favoritesCtx.addFavorite({
          //cand se executa, in FavoritesContextProvider se face update si la userFavorites, si deci update la toate componentele copil
          _id: props._id,
          id: props.id,
          title: props.title,
          description: props.description,
          image: props.image,
          author: props.author,
        });
      }
    }
    const objectId=props._id;
    return (
        <div className="card-container">
            <div className="card-image">
                <img src={props.image}  content="crop"/>
            </div>
            <div className="card-details">
                <div className="card-details-text">  <h1> {props.title}  <span>#by {props.author}</span> </h1>
                </div>
                <div className="card-details-buttons">
                <Button color="white" text={itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'} onAction={toggleFavoriteStatusHandler}></Button>
                 <Link to={`/locations/${objectId}`}> <Button color="white" text={"Details"} ></Button></Link>
                </div>   
            </div>
        </div>
    )
}

export default LocationCard;