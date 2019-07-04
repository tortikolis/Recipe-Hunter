import React from "react";
import { connect } from "react-redux";

const RecipePage = ({ recipesList, match }) => {
  const recipe = recipesList[match.params.id];

  return (
    <div>
      <h2>{recipe.label}</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    recipesList: state.recipes.recipeResults
  };
};

export default connect(
  mapStateToProps,
  null
)(RecipePage);
