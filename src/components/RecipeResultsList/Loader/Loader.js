import React from "react";
import "./loader.css";
import PropTypes from "prop-types";

const Loader = props => {
  const loader = props.isActive ? (
    <div>
      <h4 className="loader-title">Getting your recipes..</h4>
      <div id="cooking">
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div className="bubble" />
        <div id="area">
          <div id="sides">
            <div id="pan" />
            <div id="handle" />
          </div>
          <div id="pancake">
            <div id="pastry" />
          </div>
        </div>
      </div>
    </div>
  ) : null;

  return loader;
};

Loader.propTypes = {
  isActive: PropTypes.bool.isRequired
};

export default Loader;
