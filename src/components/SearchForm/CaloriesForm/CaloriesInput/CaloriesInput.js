import React from "react";

const CaloriesInput = props => {
  return (
    <input
      type="number"
      name={props.inputRole}
      placeholder={props.inputRole}
      className="calorie-input"
      value={props.value}
      onChange={props.onInputChange}
    />
  );
};

export default CaloriesInput;
