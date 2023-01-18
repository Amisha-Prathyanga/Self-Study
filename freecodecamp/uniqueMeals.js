function generateMeals(totalCalories, mealsPerDay, calorieOverflowLimit) {
  // Food items with their respective calories
  const foodItems = {
    "Food Item A": 239,
    "Food Item B": 130,
    "Food Item C": 155,
    "Food Item D": 200,
    "Food Item E": 20,
    "Food Item F": 500,
    "Food Item G": 100,
    "Food Item H": 50,
    "Food Item I": 10,
  };

  // Array to store the generated meals
  let meals = [];

  // Helper function to check if a meal is unique
  function isUniqueMeal(meal) {
    for (let i = 0; i < meals.length; i++) {
      if (meals[i].length !== meal.length) continue;
      let isSameMeal = true;
      for (let j = 0; j < meal.length; j++) {
        if (meals[i].indexOf(meal[j]) === -1) {
          isSameMeal = false;
          break;
        }
      }
      if (isSameMeal) return false;
    }
    return true;
  }

  // Helper function to generate a random meal
  function generateRandomMeal() {
    let meal = [];
    let totalMealCalories = 0;
    while (totalMealCalories <= totalCalories / mealsPerDay) {
      let foodItem =
        Object.keys(foodItems)[
          Math.floor(Math.random() * Object.keys(foodItems).length)
        ];
      if (
        totalMealCalories + foodItems[foodItem] <=
        totalCalories / mealsPerDay
      ) {
        meal.push(foodItem);
        totalMealCalories += foodItems[foodItem];
      }
    }
    return meal;
  }

  // Generate unique meals
  while (meals.length < mealsPerDay) {
    let meal = generateRandomMeal();
    if (isUniqueMeal(meal)) {
      meals.push(meal);
    }
  }
  let total = 0;
  meals.forEach((meal) => {
    meal.forEach((item) => {
      total += foodItems[item];
    });
  });
  if (total > totalCalories + calorieOverflowLimit)
    return "Meal plan cannot be generated for given inputs.";
  return meals;
}

console.log(generateMeals(1000, 2, 100));
