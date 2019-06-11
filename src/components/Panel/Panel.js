import React, { Component } from "react";
import "./panel.css";
import { connect } from "react-redux";
import { showSearchForm } from "../../store/actions/searchActions";
import classNames from "classnames";

class Panel extends Component {
  render() {
    const { isSearchFormActive } = this.props;

    const panelClassName = classNames({
      "search-open": isSearchFormActive,
      "search-closed": !isSearchFormActive
    });

    const startButton = !isSearchFormActive ? (
      <button onClick={this.props.onStartClick} className="start-serch-btn">
        Start Search
      </button>
    ) : null;

    return (
      <section id="panel" className={panelClassName}>
        <div className="panel-wrap">
          <div className="welcome-msg">
            <h1>Welcome!</h1>
            <p>
              Here you can find millions of recepies that you can serch by diet,
              ingredients or number of calories.
            </p>
            {startButton}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    isSearchFormActive: state.search.isSearchFormActive
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStartClick: () => dispatch(showSearchForm())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Panel);
