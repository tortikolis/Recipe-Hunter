import React from "react";
import PropTypes from "prop-types";
import "./recipe-error.css";

const RecipeError = ({ errorMsg, backToSearch }) => {
  const err = errorMsg ? (
    <div className="error-msg-recipes">
      <p>
        {errorMsg} Click <button onClick={backToSearch}>HERE</button> to try
        again
      </p>
    </div>
  ) : null;

  return err;
};

RecipeError.propTypes = {
  errorMsg: PropTypes.string,
  backToSearch: PropTypes.func.isRequired
};

export default RecipeError;
