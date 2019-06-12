import React from "react";
import PropTypes from "prop-types";
import CaloriesInput from "./CaloriesInput/CaloriesInput";
import "./calories-form.css";

const CaloriesForm = props => {
  return (
    <div className="calories-form">
      <h5>Choose range of calories (per serving):</h5>
      <CaloriesInput
        inputRole="min"
        value={props.minCalories}
        onInputChange={props.onInputChange}
      />
      <CaloriesInput
        inputRole="max"
        value={props.maxCalories}
        onInputChange={props.onInputChange}
      />
    </div>
  );
};

CaloriesForm.propTypes = {
  minCalories: PropTypes.string,
  maxCalories: PropTypes.string
};

export default CaloriesForm;
