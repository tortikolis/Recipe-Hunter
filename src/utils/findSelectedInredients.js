export default ingredients => {
  const resultArr = [];
  ingredients.forEach(category => {
    category.ingredients.forEach(ingredient => {
      if (ingredient.selected) {
        resultArr.push(ingredient.name);
      }
    });
  });
  return resultArr;
};
