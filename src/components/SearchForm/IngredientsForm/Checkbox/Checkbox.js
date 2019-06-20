import React, { Fragment } from "react";

export default props => {
  //console.log(props.checked);
  return (
    <Fragment>
      <input
        type="checkbox"
        name={props.ingredient}
        value={props.ingredient}
        onChange={props.onChangeHandler}
        checked={props.checked}
      />
      {props.ingredient}
    </Fragment>
  );
};
