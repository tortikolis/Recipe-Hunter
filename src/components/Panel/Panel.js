import React, { Component, Fragment } from "react";
import "./panel.css";
import { connect } from "react-redux";
import { showSearchForm } from "../../store/actions/searchActions";
import { shrinkPanel } from "../../store/actions/UIActions";
import classNames from "classnames";
import findSelectedIngredients from "../../utils/findSelectedInredients";

class Panel extends Component {
  render() {
    const {
      isPanelShrinked,
      onStartClick,
      searchResults,
      diet,
      ingredients,
      minCalories,
      maxCalories
    } = this.props;
    const selectedIngredients = findSelectedIngredients(ingredients).join();

    const panelClassName = classNames({
      "search-open": isPanelShrinked,
      "search-closed": !isPanelShrinked
    });

    const startButton = !isPanelShrinked ? (
      <button onClick={onStartClick} className="start-serch-btn">
        Start Search
      </button>
    ) : null;

    const title = searchResults ? "Search Results" : "Welcome";
    const paragraph = searchResults ? (
      <Fragment>
        <span className="search-category-panel">diet: {diet}</span>
        <span className="search-category-panel">
          ingredients: {selectedIngredients}
        </span>
        <span className="search-category-panel">
          calories: {minCalories} - {maxCalories}
        </span>
      </Fragment>
    ) : (
      "Here you can find millions of recepies that you can serch by diet, ingredients or number of calories."
    );

    return (
      <section id="panel" className={panelClassName}>
        <div className="panel-wrap">
          <div className="welcome-msg">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            {startButton}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    isPanelShrinked: state.UI.isPanelShrinked,
    searchResults: state.recipes.recipeResults,
    diet: state.search.selectedDiet,
    ingredients: state.search.ingredients,
    minCalories: state.search.minCalories,
    maxCalories: state.search.maxCalories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStartClick: () => {
      dispatch(shrinkPanel());
      dispatch(showSearchForm());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
