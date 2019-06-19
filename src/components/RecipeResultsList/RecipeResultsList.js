import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Loader from "./Loader/Loader";
import RecipeCard from "./RecipeCard/RecipeCard";

import "./recipe-results-list.css";

const RecipeResultsList = props => {
  const RecipeList =
    props.recipes !== null ? (
      <ul className="recipe-list">
        {props.recipes.map(recipe => {
          const {
            label,
            image,
            totalTime,
            caloriesPer100,
            dietLabels
          } = recipe;
          return (
            <li key={recipe.id}>
              <RecipeCard
                title={label}
                image={image}
                calories={caloriesPer100}
                time={totalTime}
                diet={dietLabels.join()}
              />
            </li>
          );
        })}
      </ul>
    ) : null;

  return (
    <div>
      <Loader isActive={props.isLoading} />
      {RecipeList}
      <div id="edamam-badge" data-color="white" />
    </div>
  );
};

RecipeResultsList.propTypes = {};

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipeResults,
    isLoading: state.recipes.isLoading
  };
};

export default connect(
  mapStateToProps,
  null
)(RecipeResultsList);
