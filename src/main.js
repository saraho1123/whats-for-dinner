var suggested;
var letsCookButton = document.querySelector(".lets-cook-button")
var side = document.querySelector(".side");
var mainDish = document.querySelector(".main-dish");
var dessert = document.querySelector(".dessert");
var entireMeal = document.querySelector(".entire-meal");
var cookpot = document.querySelector(".cookpot");
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
// a seperate .js file before I turn this in.

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
  var foodSuggestion = document.querySelector(".food-suggestion");
  whichType();
  console.log(suggested);
  if (suggested == undefined) {
    foodSuggestion.innerText = `Please choose a Side, Main Dish and Dessert, or Entire Meal from the list.`;
    hideCookpot();
    uncheckRadioButton();
  } else if (suggested === "") {
    foodSuggestion.innerText = `Please choose a Side, Main Dish and Dessert, or Entire Meal from the list.`;
    hideCookpot();
    uncheckRadioButton();
  } else {
      whichType();
      foodSuggestion.innerText = `${suggested}!`;
      hideCookpot();
      uncheckRadioButton();
    }
    suggested = "";
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
  if (userType === 'side') {
    newUserSide();
  } else if (userType === 'main') {
    newUserMainDish();
  } else if (userType === 'dessert') {
    newUserDessert();
  }
  resetNameForm();
}

function newUserSide() {
  var newSide = recipeNameInput.value
  sides.push(newSide);
  userSides.push(newSide);
  suggested = userSides[userSides.length - 1];
  displaySuggestion();
}

function newUserMainDish() {
  var newMain = recipeNameInput.value
  mains.push(newMain);
  userMains.push(newMain);
  suggested = userMains[userMains.length - 1];
  displaySuggestion();
}

function newUserDessert() {
  var newDesert = recipeNameInput.value
  desserts.push(newDesert);
  userDesserts.push(newDesert);
  suggested = userDesserts[userDesserts.length - 1];
  displaySuggestion();
}

function displayUserWholeMeal() {
  uncheckRadioButton();
  getUserRecipeName();
  if (suggested.includes(undefined)) {
    suggested = `Please enter a Side, Main Dish and Dessert in the form below`;
    displaySuggestion();
  } else {
    displaySuggestion();
  }
}

function getUserRecipeName() {
  var userMeal = new Meal(
    userSides[getRandomFoods(userSides)],
    userMains[getRandomFoods(userMains)],
    userDesserts[getRandomFoods(userDesserts)],
  )
  suggested = `${userMeal.main} with a side of\n${userMeal.side} and\n${userMeal.dessert}`;
}

function resetNameForm() {
  recipeNameInput.value = "";
}

function toggleAlert() {
  htmlAlert.classList.toggle("hidden");
}
