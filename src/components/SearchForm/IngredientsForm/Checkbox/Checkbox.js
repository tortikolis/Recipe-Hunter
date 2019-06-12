import React, { Fragment } from "react";

export default props => (
  <Fragment>
    <input
      type="checkbox"
      name={props.ingredient}
      value={props.ingredient}
      onChange={props.onChangeHandler}
    />
    {props.ingredient}
  </Fragment>
);
