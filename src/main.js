var suggested;
var letsCookButton = document.querySelector(".lets-cook-button")
var side = document.querySelector(".side");
var mainDish = document.querySelector(".main-dish");
var dessert = document.querySelector(".dessert");
var entireMeal = document.querySelector(".entire-meal");
var cookpot = document.querySelector(".cookpot");
// var foodSuggestion = document.querySelector(".food-suggestion");
var suggestion = document.querySelector(".suggestion");
var clearButton = document.querySelector(".clear-button");
var addRecipeButton = document.querySelector(".add-recipe-button");
var recipeTypeInput = document.querySelector(".recipe-type");
var recipeNameInput = document.querySelector(".recipe-name");
var addNewButton = document.querySelector(".add-new");
var userMealButton = document.querySelector(".user-meal");
var htmlAlert = document.querySelector(".alert");

// consider querySelectorAll for the radio buttons!
// will need quite a bit of refactoring!
// NOTE: I tried this and couldn't get it to work!!

// I think want to put all my query selectors and event listeners in
// a seperate .js file!

letsCookButton.addEventListener("click", displaySuggestion);
clearButton.addEventListener("click", clearSuggestions);
addRecipeButton.addEventListener("click", showForm);
addNewButton.addEventListener("click", displayNewUserIdea);
userMealButton.addEventListener("click", displayUserWholeMeal);
userMealButton.addEventListener("mouseover", toggleAlert);
userMealButton.addEventListener("mouseleave", toggleAlert);

function getRandomFoods(array) {
  return Math.floor(Math.random() * array.length);
}

function displaySuggestion() {
  whichType();
  var foodSuggestion = document.querySelector(".food-suggestion");
  foodSuggestion.innerText = `${suggested}!`;
  hideCookpot();
  uncheckRadioButton();
}

function whichType() {
  if (side.checked) {
    sideSuggestion();
  } else if (mainDish.checked) {
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
  var form = document.querySelector(".footer");
  form.classList.toggle("hidden");
}

function displayNewUserIdea() {
  var userType = recipeTypeInput.value.toLowerCase();
  console.log(userType);
  if (userType === 'side') {
    newUserSide();
  } else if (userType === 'main') {
    newUserMainDish();
  } else if (userType === 'dessert') {
    newUserDessert();
  }
}

function newUserSide() {
  var newSide = recipeNameInput.value
  sides.push(newSide);
  userSides.push(newSide);
  suggested = userSides[userSides.length - 1];
  displaySuggestion();
}

function newUserMainDish() {
  userMains.push(recipeNameInput.value);
  suggested = userMains[userMains.length - 1];
  displaySuggestion();
}

function newUserDessert() {
  userDesserts.push(recipeNameInput.value);
  suggested = userDesserts[userDesserts.length - 1];
  displaySuggestion();
}

function displayUserWholeMeal() {
  var userMeal = new Meal(
    userSides[getRandomFoods(userSides)],
    userMains[getRandomFoods(userMains)],
    userDesserts[getRandomFoods(userDesserts)],
  )
  suggested = `${userMeal.main} with a side of\n${userMeal.side} and\n${userMeal.dessert}`;
  // if (userMeal.main.length === 0 && userMeal.side.length === 0 && userMeal.dessert.length === 0) {
  //   suggested = `Please choose a side, main dish and Dessert`;
  //   displaySuggestion();
  // } else {
    displaySuggestion();
  }
}

function toggleAlert() {
  htmlAlert.classList.toggle("hidden");
}
