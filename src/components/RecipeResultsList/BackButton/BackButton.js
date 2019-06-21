import React from "react";
import PropTypes from "prop-types";
import "./Back-Button.css";

const BackButton = ({ onClickHandler }) => {
  return (
    <button className="back-button" onClick={onClickHandler}>
      Back To Search
    </button>
  );
};

BackButton.propTypes = {
  onClickHandler: PropTypes.func.isRequired
};

export default BackButton;
