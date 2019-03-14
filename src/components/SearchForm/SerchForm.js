import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import "./search-form.css";

import DietForm from "./DietForm/DietForm";

export class SerchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDiet: ""
    };
  }

  selectDiet = event => this.setState({ selectedDiet: event.target.value });

  static propTypes = {};

  render() {
    console.log(this.state.selectedDiet);
    return (
      <Fragment>
        <div className="search-form-wrap container">
          <DietForm onSelect={this.selectDiet} />
        </div>
      </Fragment>
    );
  }
}

export default SerchForm;
