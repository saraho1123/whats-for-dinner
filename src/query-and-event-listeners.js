var letsCookButton = document.querySelector(".lets-cook-button")
var side = document.querySelector(".side");
var mainDish = document.querySelector(".main-dish");
var dessert = document.querySelector(".dessert");
var entireMeal = document.querySelector(".entire-meal");
var foodSuggestion = document.querySelector(".food-suggestion");
var cookpot = document.querySelector(".cookpot");
var suggestion = document.querySelector(".suggestion");
var clearButton = document.querySelector(".clear-button");
var addRecipeButton = document.querySelector(".add-recipe-button");
var recipeNameInput = document.querySelector(".recipe-name");
var addNewButton = document.querySelector(".add-new");
var userMealButton = document.querySelector(".user-meal");

letsCookButton.addEventListener("click", letsCook);
clearButton.addEventListener("click", clearSuggestions);
addRecipeButton.addEventListener("click", showForm);
addNewButton.addEventListener("click", displayNewUserIdea);
userMealButton.addEventListener("click", displayUserWholeMeal);
userMealButton.addEventListener("mouseover", toggleAlert);
userMealButton.addEventListener("mouseleave", toggleAlert);
