import React from "react";
import PropTypes from "prop-types";
import "./diet-form.css";
import dietList from "./data/dietList";
import DietSelect from "./DietSelect/DietSelect";

const DietForm = ({ onSelect, selectedDiet }) => {
  return (
    <div className="diet-form-wrap">
      <h5>Choose Your Diet:</h5>
      <DietSelect
        onSelect={onSelect}
        dietList={dietList}
        selectedDiet={selectedDiet}
      />
    </div>
  );
};

DietForm.propTypes = {
  onSelect: PropTypes.func.isRequired,
  selectedDiet: PropTypes.string
};

export default DietForm;
