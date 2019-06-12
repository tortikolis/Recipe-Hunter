import React from "react";
import PropTypes from "prop-types";
import "./diet-form.css";
import dietList from "./data/dietList";
import DietSelect from "./DietSelect/DietSelect";

const DietForm = props => {
  return (
    <div className="diet-form-wrap">
      <h5>Choose Your Diet:</h5>
      <DietSelect onSelect={props.onSelect} dietList={dietList} />
    </div>
  );
};

DietForm.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default DietForm;
