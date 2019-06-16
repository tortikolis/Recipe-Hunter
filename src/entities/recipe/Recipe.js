export default class Recipe {
  constructor(
    id,
    {
      uri,
      label,
      image,
      source,
      url,
      shareAs,
      dietLabels,
      helthLabels,
      cautions,
      ingredients,
      calories,
      totalWeight,
      totalTime,
      totalNutrients,
      totalDialy,
      digest
    }
  ) {
    this.id = id;
    this.uri = uri;
    this.label = label;
    this.image = image;
    this.source = source;
    this.url = url;
    this.shareAs = shareAs;
    this.dietLabels = dietLabels;
    this.helthLabels = helthLabels;
    this.cautions = cautions;
    this.ingredients = ingredients;
    this.calories = calories;
    this.totalWeight = totalWeight;
    this.totalTime = totalTime;
    this.totalNutrients = totalNutrients;
    this.totalDialy = totalDialy;
    this.digest = digest;
  }
}
