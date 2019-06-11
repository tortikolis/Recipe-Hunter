import React from "react";
import PropTypes from "prop-types";

const DietSelect = props => {
  const selectOptions = props.dietList.map((diet, i) => (
    <option key={i}>{diet}</option>
  ));

  return (
    <select
      onChange={props.onSelect}
      className="form-control"
      id="exampleFormControlSelect1"
    >
      {selectOptions}
    </select>
  );
};

DietSelect.propTypes = {
  onSelect: PropTypes.func.isRequired,
  dietList: PropTypes.array.isRequired
};

export default DietSelect;
