import { RECEPIES_URL } from "../../constants/endpoints";
import { APP_ID, APP_KEY } from "../../constants/credentials";

const constructCurl = (diet, ingredient, calMin, calMax, resFrom, resTo) => {
  return `${RECEPIES_URL}?q=${ingredient}&app_id=${APP_ID}&app_key=${APP_KEY}&from=${resFrom}&to=${resTo}&diet=${diet}&calories=${calMin}-${calMax}`;
};

export default (diet, ingredient, calMin, calMax, resFrom = 0, resTo = 100) => {
  const curl = constructCurl(diet, ingredient, calMin, calMax, resFrom, resTo);

  return fetch(curl).then(res => res.json());
};
