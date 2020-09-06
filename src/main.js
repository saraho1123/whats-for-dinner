var suggested;

var letsCookButton = document.querySelector(".lets-cook-button")
var side = document.querySelector(".side");
var mainDish = document.querySelector(".main-dish");
var dessert = document.querySelector(".dessert");
var entireMeal = document.querySelector(".entire-meal");
var cookpot = document.querySelector(".cookpot");
var foodSuggestion = document.querySelector(".food-suggestion");
var suggestion = document.querySelector(".suggestion");
var clearButton = document.querySelector(".clear-button");
var addRecipeButton = document.querySelector(".add-recipe-button");
var form = document.querySelector(".footer");
var recipeTypeInput = document.querySelector(".recipe-type");
var recipeNameInput = document.querySelector(".recipe-name");
var addNewButton = document.querySelector(".add-new");


// consider querySelectorAll for the radio buttons!
// will need quite a bit of refactoring!

letsCookButton.addEventListener('click', displaySuggestion);
// side.addEventListener("click", sideSuggestion);
// mainDish.addEventListener("click", mainDishSuggestion);
// dessert.addEventListener("click", dessertSuggestion);
// entireMeal.addEventListener("click", entireMealSuggestion);
clearButton.addEventListener("click", clearSuggestions);
addRecipeButton.addEventListener("click", showForm);
// recipeTypeInput.addEventListener("keyup", determineType);
// recipeNameInput.addEventListener("keyup", getUserName);
addNewButton.addEventListener("click", displayNewUserIdea);

function getRandomFoods(array) {
  return Math.floor(Math.random() * array.length);
}

function displaySuggestion() {
  if (suggested == "undefined") {
    foodSuggestion.innerText = "Please choose a type from the list on the left."
  }
  whichType();
  foodSuggestion.innerText = `${suggested}!`;
  hideCookpot();
  uncheckRadioButton();
}

function whichType() {
  if (side.checked) {
    sideSuggestion();
  } else if (mainDish.checked) {
    console.log('works here??');
      mainDishSuggestion();
  } else if (dessert.checked) {
      dessertSuggestion();
  } else if (entireMeal.checked) {
      entireMealSuggestion();
  }
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
  var entireMeal = new Meal(
    sides[getRandomFoods(sides)],
    mains[getRandomFoods(mains)],
    desserts[getRandomFoods(desserts)],
  )
  suggested = `${entireMeal.main} with a side of\n${entireMeal.side} and\n${entireMeal.dessert}`;
  return suggested;
}

function hideCookpot() {
  suggestion.classList.remove("hidden");
  cookpot.classList.add("hidden");
}

function uncheckRadioButton() {
  side.checked = false;
  mainDish.checked = false;
  dessert.checked = false;
  entireMeal.checked = false;
}

function clearSuggestions() {
  suggestion.classList.add("hidden");
  cookpot.classList.remove("hidden");
}

function showForm() {
  form.classList.toggle("hidden");
}

function displayNewUserIdea() {
  var userIdea = recipeTypeInput.value.toLowerCase();
  if (userIdea === 'side') {
    newUserSide();
  } else if (userIdea === 'main dish') {
    newUserMainDish();
  } else if (userIdea === 'dessert') {
    newUserDessert();
  }
}

function newUserSide() {
  sides.push(recipeNameInput.value);
  suggested = sides[sides.length - 1];
  displaySuggestion();
}

function newUserMainDish() {
  mains.push(recipeNameInput.value);
  suggested = mains[mains.length - 1];
  displaySuggestion();
}

function newUserDessert() {
  desserts.push(recipeNameInput.value);
  suggested = desserts[desserts.length - 1];
  displaySuggestion();
}
