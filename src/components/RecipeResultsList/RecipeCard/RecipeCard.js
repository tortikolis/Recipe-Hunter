import React from "react";
import PropTypes from "prop-types";
import "./recipe-card.css";

const RecipeCard = props => {
  return (
    <div className="recipe-card">
      <img src={props.image} alt="recipe image" className="recipe-image" />
      <h5 className="recipe-title">{props.title}</h5>
      <p>Diet: {props.diet}</p>
      <p>Calories per 100g: {props.calories}</p>
      <p>Preparation time: {props.time} min</p>
    </div>
  );
};

RecipeCard.propTypes = {};

export default RecipeCard;
