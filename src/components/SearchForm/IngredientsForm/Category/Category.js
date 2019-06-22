import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox/Checkbox";
import "./category.css";

const Category = ({ ingredients, onChangeHandler, image }) => {
  const ingredientsList = ingredients.map((ingredient, i) => {
    return (
      <li key={i}>
        <Checkbox
          ingredient={ingredient.name}
          checked={ingredient.selected}
          onChangeHandler={onChangeHandler}
        />
      </li>
    );
  });

  return (
    <Fragment>
      <img src={image} className="ingredient-img" alt={ingredients.Category} />
      <ul className="ingredient-list">{ingredientsList}</ul>
    </Fragment>
  );
};

Category.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  image: PropTypes.string
};

export default Category;
