import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { chooseDiet } from "../../store/actions/searchActions";
import DietForm from "./DietForm/DietForm";
import IngredientForm from "./IngredientsForm/IngredientsForm";

import "./search-form.css";

const SearchForm = props => {
  const form = (
    <div className="search-form-wrap container">
      <form>
        <DietForm onSelect={props.selectDiet} />
        <IngredientForm />
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
    isActive: state.search.isSearchFormActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectDiet: event => {
      dispatch(chooseDiet(event.target.value));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
