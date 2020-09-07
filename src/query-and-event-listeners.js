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
var seeRecipesButton = document.querySelector(".asee-recipe-button");

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
seeRecipesButton.addEventListener("click", takeToAllRecipes);
