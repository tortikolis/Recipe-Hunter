import React, { Fragment } from "react";
import Panel from "../Panel/Panel";
import SearchForm from "../SearchForm/SearchForm";
import RecipeResultsList from "../RecipeResultsList/RecipeResultsList";

const SearchAndResults = () => {
  return (
    <Fragment>
      <Panel />
      <SearchForm />
      <RecipeResultsList />
    </Fragment>
  );
};

export default SearchAndResults;
