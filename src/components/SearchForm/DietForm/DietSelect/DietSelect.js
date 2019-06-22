import React from "react";
import PropTypes from "prop-types";

const DietSelect = ({ dietList, onSelect, selectedDiet }) => {
  const selectOptions = dietList.map((diet, i) => (
    <option key={i}>{diet}</option>
  ));
  return (
    <select
      onChange={onSelect}
      className="form-control"
      id="exampleFormControlSelect1"
      value={selectedDiet}
    >
      {selectOptions}
    </select>
  );
};

DietSelect.propTypes = {
  dietList: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedDiet: PropTypes.string
};

export default DietSelect;
