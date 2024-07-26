// Define an array of recipes
const recipes = [
  {
    name: "Bakwan Sayur (Vegetable Fritters)",
    image: "https://pict.sindonews.net/dyn/732/pena/news/2021/09/18/185/544386/resep-bakwan-sayur-camilan-sore-teman-minum-teh-hpg.jpg",
    ingredients: ["carrot", "cabbage", "scallions", "all-purpose flour", "rice flour", "salt", "sugar", "white pepper"],
    steps: "Prepare your vegetables. Peel the carrot and cut it into julienned sticks. Slice the cabbage and spring onions. Mix all ingredients to form a batter. Heat oil in a pan. Scoop a spoonful of batter and drop it into the hot oil. Fry until golden brown."
  },
  {
    name: "Tahu Isi (Stuffed Tofu)",
    image: "https://pict.sindonews.net/dyn/732/pena/news/2021/09/18/185/544386/resep-bakwan-sayur-camilan-sore-teman-minum-teh-hpg.jpg",
    ingredients: ["tofu", "oil for frying", "cabbage", "carrot", "beansprouts", "spring onions", "plain flour", "rice flour", "shallot", "garlic", "ground pepper", "salt", "stock powder"],
    steps: "Prepare your vegetables. Peel the carrot and cut it into julienned sticks. Slice the cabbage and spring onions. Wash and rinse the beansprouts. Next, peel shallot and garlic, then pound them into a smooth paste. Then make the batter. Mix plain flour, rice flour, salt, ground pepper, and stock. Add water to the flour mix and stir until the batter is smooth. Add the vegetables to the batter and mix well. Cut tofu into small squares and make a hole in the center of each piece. Stuff the tofu pieces with the vegetable batter. Heat oil in a pan and deep fry the stuffed tofu until golden brown."
  },
  {
    name: "Pisang Goreng (Fried Bananas)",
    image: "https://pict.sindonews.net/dyn/732/pena/news/2021/09/18/185/544386/resep-bakwan-sayur-camilan-sore-teman-minum-teh-hpg.jpg",
    ingredients: ["bananas", "flour", "rice flour", "salt", "sugar", "vanilla", "baking powder", "water"],
    steps: "Mix flour, rice flour, salt, sugar, vanilla, and baking powder in a bowl. Add water and stir until the batter is smooth. Dip the bananas in the batter and fry in hot oil until golden brown."
  },
  {
    name: "Tempe Mendoan",
    image: "https://pict.sindonews.net/dyn/732/pena/news/2021/09/18/185/544386/resep-bakwan-sayur-camilan-sore-teman-minum-teh-hpg.jpg",
    ingredients: ["tempeh", "all-purpose flour", "rice flour", "garlic", "scallions", "coriander", "salt", "sugar", "water", "oil for frying"],
    steps: "Cut tempeh into thin slices. Mix all the spiced batter ingredients in a mixing bowl and stir it into a thick batter. It should resemble a slightly thicker pancake batter. Add some water (a tablespoon at a time), if you find the batter is too thick to stir. Dip each piece of tempeh into the batter, and coat entirely. Warm the oil in a frying pan, and put it on the stove until hot. Put each piece of coated tempeh into hot oil. Fry the tempeh until hardened and well done."
  },
  {
    name: "Cireng (Tapioca Fritters)",
    image: "https://pict.sindonews.net/dyn/732/pena/news/2021/09/18/185/544386/resep-bakwan-sayur-camilan-sore-teman-minum-teh-hpg.jpg",
    ingredients: ["Tapioca starch", "garlic", "scallions", "salt", "sugar", "vegetable powder", "water", "oil"],
    steps: "Mix tapioca starch, garlic, scallions, salt, sugar, and vegetable powder in a bowl. Add water and knead until dough forms. Shape the dough into small balls and fry in hot oil until crispy."
  }
];

// Get the button and recipe container elements
const getRecipeBtn = document.getElementById('getRecipeBtn');
const recipeContainer = document.getElementById('recipeContainer');

// Add an event listener to the button
getRecipeBtn.addEventListener('click', () => {
  // Get a random recipe
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];

  // Create the recipe details
  const recipeDetails = `
    <img src="${randomRecipe.image}">
    <h2>${randomRecipe.name}</h2>
    <h3>Ingredients</h3>
    <ul>${randomRecipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
    <h3>Steps</h3>
    <p>${randomRecipe.steps}</p>
  `;

  // Display the recipe details
  recipeContainer.innerHTML = recipeDetails;
});
