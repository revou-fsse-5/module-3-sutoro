# Random Recipe Finder
The project uses JavaScript to fetch a random recipe from TheMealDB API and dynamically display it on the web page. 

This has been deployed in GitHub -> [Random Recipe Finder](https://revou-fsse-5.github.io/module-3-sutoro/)



## Implemented Functionality
- **Button and Container**: The code first retrieves the button element with the ID getRecipeBtn and the container element with the ID recipeContainer from the HTML document.
- **Event Listener**: An event listener is added to the button, which triggers a function when the button is clicked.
- **Fetching the Recipe**: Inside the function, the code makes an asynchronous request to TheMealDB API using the fetch function. It then awaits the response and parses it as JSON.
- **Creating Recipe Details**: The retrieved recipe data is used to dynamically create an HTML structure containing the recipe image, name, ingredients list, and instructions.
- **Displaying the Recipe**: Finally, the generated HTML string is set as the inner HTML of the recipeContainer element, showcasing the recipe on the web page.
- **Error Handling**: The code includes error handling to gracefully handle potential issues during the API call. If an error occurs, it displays a user-friendly message in the recipe container.
## Screenshot
![screenshot](screenshot.png)


