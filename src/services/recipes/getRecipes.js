import { RECIPES_URL } from "../../constants/endpoints";
import { APP_ID, APP_KEY } from "../../constants/credentials";
import Recipe from "../../entities/recipe/Recipe";

const constructCurl = (diet, ingredient, calMin, calMax, resFrom, resTo) => {
  return `${RECIPES_URL}?q=${ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${resFrom}&to=${resTo}&diet=${diet}&calories=${calMin}-${calMax}`;
};

export default (diet, ingredient, calMin, calMax, resFrom = 0, resTo = 100) => {
  const curl = constructCurl(diet, ingredient, calMin, calMax, resFrom, resTo);

  return fetch(curl)
    .then(res => res.json())
    .then(res => {
      return res.hits.map((res, i) => {
        return new Recipe(i, res.recipe);
      });
    });
};
