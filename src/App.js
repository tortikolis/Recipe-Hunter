import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import SearchAndResults from "./components/SearchAndResults/SearchAndResults";
import RecipePage from "./components/RecipePage/RecipePage";

const App = () => (
  <Fragment>
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={SearchAndResults} />
        <Route path="/recipe/:id" component={RecipePage} />
      </Switch>
    </Router>
  </Fragment>
);

export default App;
