import React from "react";
import PropTypes from "prop-types";
import "./search-button.css";

const SearchButton = props => {
  return (
    <button className="search-button" onClick={props.getRecepies}>
      Search for recepies
    </button>
  );
};

SearchButton.propTypes = {
  getRecepies: PropTypes.func.isRequired
};

export default SearchButton;
