import React from "react";
import PropTypes from "prop-types";
import "./diet-form.css";
import dietList from "./data/dietList";

const DietForm = props => (
  <div className="diet-form-wrap">
    <h5>Choose Your Diet:</h5>
    <select
      onChange={props.onSelect}
      className="form-control"
      id="exampleFormControlSelect1"
    >
      {dietList.map((diet, i) => (
        <option key={i}>{diet}</option>
      ))}
    </select>
    <br />
    <button className="btn btn-success">NEXT</button>
  </div>
);

DietForm.propTypes = {
  onSelect: PropTypes.func.isRequired
};

export default DietForm;
