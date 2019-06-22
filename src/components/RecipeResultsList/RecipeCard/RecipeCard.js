import React from "react";
import PropTypes from "prop-types";
import "./recipe-card.css";

const RecipeCard = ({ image, title, diet, calories, time }) => {
  return (
    <div className="recipe-card">
      <img src={image} alt="recipe" className="recipe-image" />
      <h5 className="recipe-title">{title}</h5>
      <p>Diet: {diet}</p>
      <p>Calories per 100g: {calories}</p>
      <p>Preparation time: {time} min</p>
    </div>
  );
};

RecipeCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  diet: PropTypes.string,
  calories: PropTypes.number,
  time: PropTypes.number
};

export default RecipeCard;
