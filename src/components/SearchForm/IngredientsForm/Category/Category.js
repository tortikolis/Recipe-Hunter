import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Checkbox from "../Checkbox/Checkbox";
import "./category.css";

const Category = props => {
  const ingredientsList = props.ingredients.map((ingredient, i) => {
    return (
      <li key={i}>
        <Checkbox
          ingredient={ingredient.name}
          checked={ingredient.selected}
          onChangeHandler={props.onChangeHandler}
        />
      </li>
    );
  });

  return (
    <Fragment>
      <img
        src={props.image}
        className="ingredient-img"
        alt={props.ingredients.Category}
      />
      <ul className="ingredient-list">{ingredientsList}</ul>
    </Fragment>
  );
};

Category.propTypes = {
  ingredients: PropTypes.array.isRequired,
  onChangeHandler: PropTypes.func.isRequired
};

export default Category;
