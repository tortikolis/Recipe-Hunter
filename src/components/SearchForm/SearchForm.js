import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  chooseDiet,
  setMinCalories,
  setMaxCalories
} from "../../store/actions/searchActions";
import { fetchRecepiesAction } from "../../store/actions/recepiesActions";
import DietForm from "./DietForm/DietForm";
import IngredientForm from "./IngredientsForm/IngredientsForm";
import CaloriesForm from "./CaloriesForm/CaloriesForm";
import SearchButton from "./SearchButton/SearchButton";

import "./search-form.css";

class SearchForm extends Component {
  fetchRecepies = () => {
    const {
      setRecepies,
      diet,
      ingredients,
      minCalories,
      maxCalories
    } = this.props;
    const ingredientsStr = ingredients.join();
    setRecepies(diet, ingredientsStr, minCalories, maxCalories);
  };

  render() {
    const form = (
      <div className="search-form-wrap container">
        <DietForm onSelect={this.props.selectDiet} />
        <IngredientForm />
        <CaloriesForm
          minCalories={this.props.minCalories}
          maxCalories={this.props.maxCalories}
          onInputChange={this.props.setNumberOfCalories}
        />
        <SearchButton getRecepies={this.fetchRecepies} />
      </div>
    );

    return this.props.isActive ? form : null;
  }
}

SearchForm.propTypes = {
  selectDiet: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isActive: state.search.isSearchFormActive,
    diet: state.search.selectedDiet,
    ingredients: state.search.selectedIngredients,
    minCalories: state.search.minCalories,
    maxCalories: state.search.maxCalories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectDiet: event => {
      dispatch(chooseDiet(event.target.value));
    },
    setNumberOfCalories: event => {
      const inputName = event.target.name;
      const inputValue = event.target.value;
      inputName === "min"
        ? dispatch(setMinCalories(inputValue))
        : dispatch(setMaxCalories(inputValue));
    },
    setRecepies: (diet, ingredients, minCal, maxCal) =>
      dispatch(fetchRecepiesAction(diet, ingredients, minCal, maxCal))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
