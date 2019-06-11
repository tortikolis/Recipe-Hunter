import React, { Fragment } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Panel from "./components/Panel/Panel";
import SearchForm from "./components/SearchForm/SearchForm";

const App = () => (
  <Fragment>
    <Header />
    <Panel />
    <SearchForm />
  </Fragment>
);

export default App;
