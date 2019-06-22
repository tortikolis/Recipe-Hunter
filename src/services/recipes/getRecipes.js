import { RECIPES_URL } from "../../constants/endpoints";
import { APP_ID, APP_KEY } from "../../constants/credentials";
import Recipe from "../../entities/recipe/Recipe";
import findSelectedIngredients from "../../utils/findSelectedInredients";

const constructCurl = (diet, ingredients, calMin, calMax, resFrom, resTo) => {
  console.log(ingredients);
  const dietParam = diet ? `&diet=${diet}` : "";
  const caloriesParam = calMin && calMax ? `&calories=${calMin}-${calMax}` : "";
  const selectedIngredients = findSelectedIngredients(ingredients).join();

  return `${RECIPES_URL}?q=${selectedIngredients}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${resFrom}&to=${resTo}${dietParam}${caloriesParam}`;
};

export default (diet, ingredient, calMin, calMax, resFrom = 0, resTo = 100) => {
  const curl = constructCurl(diet, ingredient, calMin, calMax, resFrom, resTo);
  console.log(curl);
  return fetch(curl)
    .then(res => res.json())
    .then(res => {
      return res.hits.map((res, i) => {
        return new Recipe(i, res.recipe);
      });
    });
};
