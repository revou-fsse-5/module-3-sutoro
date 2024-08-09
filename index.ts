// Get the button and recipe container elements
const getRecipeBtn = document.getElementById('getRecipeBtn') as HTMLButtonElement;
const recipeContainer = document.getElementById('recipeContainer') as HTMLDivElement;

// Define the structure of the recipe data
interface Recipe {
  strMealThumb: string;
  strMeal: string;
  strInstructions: string;
  [key: string]: string | undefined;
}

// Add an event listener to the button
getRecipeBtn.addEventListener('click', async () => {
  try {
    // Fetch a random recipe from TheMealDB API
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    const randomRecipe: Recipe = data.meals[0];

    // Create the recipe details
    const recipeDetails = `
      <img class="recipe-image" src="${randomRecipe.strMealThumb}">
      <h2>${randomRecipe.strMeal}</h2>
      <h3>Ingredients</h3>
      <ul>${Object.keys(randomRecipe)
        .filter(key => key.startsWith('strIngredient') && randomRecipe[key])
        .map(key => {
          const measureKey = key.replace('strIngredient', 'strMeasure');
          return `<li>${randomRecipe[key]} - ${randomRecipe[measureKey]}</li>`;
        })
        .join('')}</ul>
      <h3>Steps</h3>
      <p>${randomRecipe.strInstructions}</p>
    `;

    // Display the recipe details
    recipeContainer.innerHTML = recipeDetails;
  } catch (error) {
    console.error('Error fetching the recipe:', error);
    recipeContainer.innerHTML = '<p>Sorry, something went wrong. Please try again later.</p>';
  }
});
