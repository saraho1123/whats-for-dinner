var suggested;

function getRandomFoods(array) {
  return Math.floor(Math.random() * array.length);
}

function displaySuggestion() {
  var foodSuggestion = document.querySelector(".food-suggestion");
  whichType();
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
