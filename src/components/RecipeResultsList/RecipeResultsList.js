import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Loader from "./Loader/Loader";
import RecipeCard from "./RecipeCard/RecipeCard";
import BackButton from "./BackButton/BackButton";
import RecipeError from "./RecipeError/RecipeError";
import { showSearchForm } from "../../store/actions/searchActions";
import {
  setRecipes,
  clearRecipesErr
} from "../../store/actions/recipesActions";

import "./recipe-results-list.css";

const RecipeResultsList = ({
  recipes,
  isLoading,
  resetSearch,
  recipeError
}) => {
  const RecipeList =
    recipes !== null ? (
      <Fragment>
        <BackButton onClickHandler={resetSearch} />
        <ul className="recipe-list">
          {recipes.map(recipe => {
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
      </Fragment>
    ) : null;
  return (
    <div className="recipe-list-wrap">
      <Loader isActive={isLoading} />
      <RecipeError errorMsg={recipeError} backToSearch={resetSearch} />
      {RecipeList}
      <div id="edamam-badge" data-color="white" />
    </div>
  );
};

RecipeResultsList.propTypes = {
  recipes: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  resetSearch: PropTypes.func.isRequired,
  recipeError: PropTypes.string
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipeResults,
    isLoading: state.recipes.isLoading,
    recipeError: state.recipes.recipeErr
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetSearch: () => {
      dispatch(setRecipes(null));
      dispatch(showSearchForm());
      dispatch(clearRecipesErr());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeResultsList);
