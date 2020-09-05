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

function entireMealSuggestion() {
  var entireMeal = {
    side: sides[getRandomFoods(sides)],
    main: mains[getRandomFoods(mains)],
    dessert: desserts[getRandomFoods(desserts)],
  }
  suggested = enire
}

function toggleCookpot() {
  suggestion.classList.remove("hidden");
  cookpot.classList.add("hidden");
}
