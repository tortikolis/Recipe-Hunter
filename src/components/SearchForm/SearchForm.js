import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  chooseDiet,
  setMinCalories,
  setMaxCalories
} from "../../store/actions/searchActions";
import DietForm from "./DietForm/DietForm";
import IngredientForm from "./IngredientsForm/IngredientsForm";
import CaloriesForm from "./CaloriesForm/CaloriesForm";

import "./search-form.css";

const SearchForm = props => {
  const form = (
    <div className="search-form-wrap container">
      <form>
        <DietForm onSelect={props.selectDiet} />
        <IngredientForm />
        <CaloriesForm
          minCalories={props.minCalories}
          maxCalories={props.maxCalories}
          onInputChange={props.setNumberOfCalories}
        />
      </form>
    </div>
  );

  return props.isActive ? form : null;
};

SearchForm.propTypes = {
  selectDiet: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    isActive: state.search.isSearchFormActive,
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
