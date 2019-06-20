export default (arr, item, selected) => {
  return arr.map(category => {
    return {
      ...category,
      ingredients: category.ingredients.map(ingredient => {
        console.log(ingredient, item);
        if (ingredient.name === item) {
          return {
            name: ingredient.name,
            selected
          };
        }

        return ingredient;
      })
    };
  });
};
