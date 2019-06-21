import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Loader from "./Loader/Loader";
import RecipeCard from "./RecipeCard/RecipeCard";
import BackButton from "./BackButton/BackButton";
import { showSearchForm } from "../../store/actions/searchActions";
import { setRecipes } from "../../store/actions/recipesActions";

import "./recipe-results-list.css";

const RecipeResultsList = props => {
  const RecipeList =
    props.recipes !== null ? (
      <Fragment>
        <BackButton onClickHandler={props.resetSearch} />
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
      </Fragment>
    ) : null;

  return (
    <div className="recipe-list-wrap">
      <Loader isActive={props.isLoading} />
      {RecipeList}
      <div id="edamam-badge" data-color="white" />
    </div>
  );
};

RecipeResultsList.propTypes = {
  recipes: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  resetSearch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    recipes: state.recipes.recipeResults,
    isLoading: state.recipes.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetSearch: () => {
      dispatch(setRecipes(null));
      dispatch(showSearchForm());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecipeResultsList);
