import React, { Fragment } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Panel from "./components/Panel/Panel";
import SearchForm from "./components/SearchForm/SearchForm";
import RecipeResultsList from "./components/RecipeResultsList/RecipeResultsList";

const App = () => (
  <Fragment>
    <Header />
    <Panel />
    <SearchForm />
    <RecipeResultsList />
  </Fragment>
);

export default App;
