var suggested;

var letsCookButton = document.querySelector(".lets-cook-button")
var side = document.querySelector(".side");
var mainDish = document.querySelector(".main-dish");
var dessert = document.querySelector(".dessert");
var entireMeal = document.querySelector(".entire-meal");
var cookpot = document.querySelector(".cookpot");
var foodSuggestion = document.querySelector(".food-suggestion");
// var sideForMeal = document.querySelector(".side-for-meal");
// var mainForMeal = document.querySelector(".main-for-meal");
// var dessertForMeal = document.querySelector(".dessert-for-meal");
var suggestion = document.querySelector(".suggestion");

letsCookButton.addEventListener('click', displaySuggestion);
side.addEventListener("click", sideSuggestion);
mainDish.addEventListener("click", mainDishSuggestion);
dessert.addEventListener("click", dessertSuggestion);
entireMeal.addEventListener("click", entireMealSuggestion);

function getRandomFoods(array) {
  return Math.floor(Math.random() * array.length);
}

function displaySuggestion() {
  foodSuggestion.innerText = `${suggested}!`;
  console.log(suggested);
  toggleCookpot();
}

function sideSuggestion() {
  suggested = sides[getRandomFoods(sides)];
  }

function mainDishSuggestion() {
  suggested = mains[getRandomFoods(mains)];
  }

function dessertSuggestion() {
  suggested = desserts[getRandomFoods(desserts)];
  }

function displaySuggestion() {
  foodSuggestion.innerText = `${suggested}!`;
  console.log(suggested);
  toggleCookpot();
}

function entireMealSuggestion() {
  var entireMeal = new Meal(
    sides[getRandomFoods(sides)],
    mains[getRandomFoods(mains)],
    desserts[getRandomFoods(desserts)],
  )
  suggested = `${entireMeal.side}\n${entireMeal.main}\n${entireMeal.dessert}`;
  return suggested;
}

function toggleCookpot() {
  suggestion.classList.remove("hidden");
  cookpot.classList.add("hidden");
}
