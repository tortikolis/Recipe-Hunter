import React, { Fragment } from "react";

export default ({ ingredient, checked, onChangeHandler }) => {
  return (
    <Fragment>
      <input
        type="checkbox"
        name={ingredient}
        value={ingredient}
        onChange={onChangeHandler}
        checked={checked}
      />
      {ingredient}
    </Fragment>
  );
};
