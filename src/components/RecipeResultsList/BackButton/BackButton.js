import React from "react";
import "./Back-Button.css";

const BackButton = ({ onClickHandler }) => {
  return (
    <button className="back-button" onClick={onClickHandler}>
      Back To Search
    </button>
  );
};

export default BackButton;
