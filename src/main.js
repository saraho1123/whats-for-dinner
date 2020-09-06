var suggested;

var letsCookButton = document.querySelector(".lets-cook-button")
// var side = document.querySelector(".side");
// var mainDish = document.querySelector(".main-dish");
// var dessert = document.querySelector(".dessert");
// var entireMeal = document.querySelector(".entire-meal");
var radioButtons = document.querySelectorAll(".radio");

var cookpot = document.querySelector(".cookpot");
var foodSuggestion = document.querySelector(".food-suggestion");
var suggestion = document.querySelector(".suggestion");
var clearButton = document.querySelector(".clear-button");
var addRecipeButton = document.querySelector(".add-recipe-button");
var form = document.querySelector(".footer");
var recipeTypeInput = document.querySelector(".recipe-type");
var recipeNameInput = document.querySelector(".recipe-name");
var addNewButton = document.querySelector(".add-new");
var userMeal = document.querySelector(".user-meal");


// consider querySelectorAll for the radio buttons!
// will need quite a bit of refactoring!

letsCookButton.addEventListener("click", displaySuggestion);
clearButton.addEventListener("click", clearSuggestions);
addRecipeButton.addEventListener("click", showForm);
addNewButton.addEventListener("click", displayNewUserIdea);
userMeal.addEventListener("click", displayUserWholeMeal);



function getRandomFoods(array) {
  return Math.floor(Math.random() * array.length);
}

function displaySuggestion() {
  for (var i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked == true) {
      console.log(radioButtons[i])
      whichType();
      foodSuggestion.innerText = `${suggested}!`;
      hideCookpot();
      // uncheckRadioButton();
      // event.preventDefault();
    } else {
      foodSuggestion.innerText = "Please choose a\nfood type\nfrom the list.";
      hideCookpot();
    }
  }

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
var side = document.querySelector(".side");
var mainDish = document.querySelector(".main-dish");
var dessert = document.querySelector(".dessert");
var entireMeal = document.querySelector(".entire-meal");

function sideSuggestion() {
  suggested = sides[getRandomFoods(sides)];
  // foodSuggestion.innerText = `${suggested}!`;
}

function mainDishSuggestion() {
  suggested = mains[getRandomFoods(mains)];
  // foodSuggestion.innerText = `${suggested}!`;
  }

function dessertSuggestion() {
  suggested = desserts[getRandomFoods(desserts)];
  // foodSuggestion.innerText = `${suggested}!`;
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
  userSides.push(recipeNameInput.value);
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
  alert("This button randomly displays a Side, Main Dish, and Dessert that you have entered in the Recipe Name field.");
  var userMeal = new Meal(
    userSides[getRandomFoods(userSides)],
    userMains[getRandomFoods(userMains)],
    userDesserts[getRandomFoods(userDesserts)],
    )
    console.log(userMeal);
    suggested = `${userMeal.main} with a side of\n${userMeal.side} and\n${userMeal.dessert}`;
    displaySuggestion();
}

function alert() {

}
