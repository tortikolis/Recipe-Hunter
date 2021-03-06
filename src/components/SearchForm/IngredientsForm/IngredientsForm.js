import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  addIngredient,
  removeIngredient
} from "../../../store/actions/searchActions";
import Category from "./Category/Category";
import "./ingredients-form.css";

const IngredientsForm = ({ ingredients, onIngredientCheckChange }) => {
  const categoryList = ingredients.map((item, i) => {
    return (
      <li className="category" key={i}>
        <Category
          image={item.img}
          ingredients={item.ingredients}
          onChangeHandler={onIngredientCheckChange}
        />
      </li>
    );
  });

  return (
    <div className="ingredients-form-wrap">
      <h5 className="ing-title">Choose Ingredients:</h5>
      <ul className="category-list">{categoryList}</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ingredients: state.search.ingredients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIngredientCheckChange: event => {
      const ingredientChecked = event.target.checked;
      const ingredientName = event.target.name;

      ingredientChecked
        ? dispatch(addIngredient(ingredientName))
        : dispatch(removeIngredient(ingredientName));
    }
  };
};

IngredientsForm.propTypes = {
  onIngredientCheckChange: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsForm);
