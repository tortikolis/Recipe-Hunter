import React from "react";
import PropTypes from "prop-types";
import CaloriesInput from "./CaloriesInput/CaloriesInput";
import "./calories-form.css";

const CaloriesForm = ({ minCalories, maxCalories, onInputChange }) => {
  return (
    <div className="calories-form">
      <h5>Choose range of calories (per serving):</h5>
      <CaloriesInput
        inputRole="min"
        value={minCalories}
        onInputChange={onInputChange}
      />
      <CaloriesInput
        inputRole="max"
        value={maxCalories}
        onInputChange={onInputChange}
      />
    </div>
  );
};

CaloriesForm.propTypes = {
  minCalories: PropTypes.string,
  maxCalories: PropTypes.string,
  onInputChange: PropTypes.func.isRequired
};

export default CaloriesForm;
