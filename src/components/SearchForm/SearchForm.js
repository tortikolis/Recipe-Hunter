import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { chooseDiet } from "../../store/actions/searchActions";
import DietForm from "./DietForm/DietForm";

import "./search-form.css";

const SearchForm = props => (
  <div className="search-form-wrap container">
    <DietForm onSelect={props.selectDiet} />
  </div>
);

SearchForm.propTypes = {
  selectDiet: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    selectDiet: event => {
      dispatch(chooseDiet(event.target.value));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);
