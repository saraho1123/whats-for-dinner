var sides = [
'Miso Glazed Carrots',
 'Coleslaw',
 'Garden Salad',
 'Crisy Potatoes',
 'Sweet Potato Tots',
 'Coconut Rice',
 'Ceasar salad',
 'Shrimp Summer Rolls',
 'Garlic Butter Mushrooms',
 'Hush Puppies',
 'Isaac\'s Special'
]
var mains = [
  'Spaghetti and Meatballs',
  'Pineapple Chicken',
  'Shakshuka',
  'Thai Yellow Curry',
  'Bibimbap',
  'Chicken Parmesean',
  'Butternut Squash Soup',
  'BBQ Chicken Burgers',
  'Ramen',
  'Empanadas',
  'Chicken Fried Rice',
  'Sheet Pan Fajitas',
  'Margarita Pizza',
]
var desserts = [
  'Apple Pie',
  'Lemon Meringue Pie',
  'Black Forest Cake',
  'Banana Bread',
  'Peach Cobbler',
  'Cheesecake',
  'Funfetti Cake',
  'Baklava',
  'Flan',
  'Macarons',
  'Macaroons',
  'Chocolate Cupcakes',
  'Pavlova',
  'Pumpkin Pie',
  'Key Lime Pie',
  'Tart Tatin',
  'Croissants',
  'Eclairs',
]
var suggested;

var letsCookButton = document.querySelector(".lets-cook-button")
var side = document.querySelector(".side");
var mainDish = document.querySelector(".main-dish");
var dessert = document.querySelector(".dessert");
var entireMeal = document.querySelector(".entire-meal");
var foodSuggestion = document.querySelector(".food-suggestion");
var cookpot = document.querySelector(".cookpot");
var suggestion = document.querySelector(".suggestion");

letsCookButton.addEventListener('click', displaySuggestion);
side.addEventListener("click", sideSuggestion);
mainDish.addEventListener("click", mainDishSuggestion);
dessert.addEventListener("click", dessertSuggestion);
// entireMeal.addEventListener("click", entireMealSuggestion);

function getRandomFoods(array) {
  return Math.floor(Math.random() * array.length);
}

function displaySuggestion() {
  foodSuggestion.innerText = `${suggested}!`;
  toggleCookpot();
}

function sideSuggestion() {
  suggested = sides[getRandomFoods(sides)];
  }

function mainDishSuggestion() {
  suggested = sides[getRandomFoods(sides)];
  }

function dessertSuggestion() {
  suggested = sides[getRandomFoods(sides)];
  }

// function entireMealSuggestion() {
//   for (var i = 0; i < sides.length; i++) {
//     suggested = sides[i];
//   }
//   return suggested;
// }

function toggleCookpot() {
  suggestion.classList.remove("hidden");
  cookpot.classList.add("hidden");
}
