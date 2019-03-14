import React from "react";
import "./panel.css";

const Panel = () => (
  <section id="panel">
    <div className="panel-wrap">
      <div className="welcome-msg">
        <h1>Welcome!</h1>
        <p>
          Here you can find millions of recepies that you can serch by diet,
          ingredients or number of calories.
        </p>
        <button className="start-serch-btn">Start Serch</button>
      </div>
    </div>
  </section>
);

export default Panel;
