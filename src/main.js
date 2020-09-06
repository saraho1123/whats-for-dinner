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
// var form = document.querySelector(".footer");
// var recipeTypeInput = document.querySelector(".recipe-type");
// var recipeNameInput = document.querySelector(".recipe-name");
// var addNewButton = document.querySelector(".add-new");


// consider querySelectorAll for the radio buttons!
// will need quite a bit of refactoring!

letsCookButton.addEventListener('click', displaySuggestion);
side.addEventListener("click", sideSuggestion);
mainDish.addEventListener("click", mainDishSuggestion);
dessert.addEventListener("click", dessertSuggestion);
entireMeal.addEventListener("click", entireMealSuggestion);
clearButton.addEventListener("click", clearSuggestions);
// addRecipeButton.addEventListener("click", showForm);
// // recipeTypeInput.addEventListener("keyup", determineType);
// recipeNameInput.addEventListener("keyup", getUserName);
// addNewButton.addEventListener("click", displayNewUserIdea);
//

function getRandomFoods(array) {
  return Math.floor(Math.random() * array.length);
}

function displaySuggestion() {
  foodSuggestion.innerText = `${suggested}!`;
  hideCookpot();
  uncheckRadioButton();
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

// function showForm() {
//   // form.classList.remove("hidden");
// }
//
// function displayNewUserIdea() {
//
// }
//
// // function determineType(event) {
// //     console.log(recipeTypeInput.value)
// //   var foodData = ['side', 'main dish', 'dessert']
// //   for (var i = 0; i < foodData.length; i++) {
// //     if (recipeTypeInput.value === foodData[i]) {
// //       console.log(recipeTypeInput.value)
// //       console.log(foodData[i]);
// //     }
// //   }
//
//   // if (event.target === "side") {
//   //   // getUserName();
//   // } else if (event.)
// // }
//
// function getUserName() {
//   // var foodData = ['side', 'main dish', 'dessert']
//   // for (var i = 0; i < foodData.length; i++) {
//   //   if (recipeTypeInput.value === 'side') {
//   //     // console.log(recipeTypeInput.value)
//   //     // console.log(foodData[i]);)
//   //     sides.push(recipeNameInput.value);
//   //   }
//   // }
//   //     console.log(sides);
// }
