import fruitImg from "../../../../assets/images/apple.png";
import meatImg from "../../../../assets/images/meat.png";
import milkImg from "../../../../assets/images/milk.png";
import vegetablesImg from "../../../../assets/images/carrot.png";

const ingredientsData = [
  {
    category: "vegetables",
    img: vegetablesImg,
    ingredients: [
      "artichoke",
      "asparagus",
      "basil",
      "bean",
      "broccoli",
      "cabbage",
      "carrot",
      "cauliflower",
      "pepper",
      "celery",
      "corn",
      "eggplant",
      "garlic",
      "ginger",
      "kale",
      "leek ",
      "legume",
      "lettuce",
      "mushroom",
      "onion",
      "pea",
      "pumpkin",
      "spinach"
    ]
  },
  {
    category: "fruit",
    img: fruitImg,
    ingredients: [
      "apple",
      "appricot",
      "avocado",
      "banana",
      "blueberrie",
      "cherrie",
      "cucamber",
      "plum",
      "date",
      "lemon",
      "mango",
      "orange",
      "tomato",
      "nectarine",
      "pineapple",
      "raspberries",
      "strawberries",
      "watermelon"
    ]
  },
  {
    category: "meat",
    img: meatImg,
    ingredients: [
      "pork",
      "beef",
      "fish",
      "chicken",
      "duck",
      "lamb",
      "turkey",
      "veal"
    ]
  },
  {
    category: "dairy",
    img: milkImg,
    ingredients: [
      "butter",
      "yogurt",
      "milk",
      "cheese",
      "ice cream",
      "kefir",
      "sour cream"
    ]
  }
];

export default ingredientsData;
