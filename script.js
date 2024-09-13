function generateRecipe(event) {
  event.preventDefault();

  new Typewriter('#recipe', {
    strings: 'Your recipe is being generated. Please wait a moment. 🧑🏻‍🍳',
    autoStart: true,
    delay: 40,
    cursor: ' 🇹🇭',
  });
}

let recipeFormElement = document.querySelector('#recipe-form');
recipeFormElement.addEventListener('submit', generateRecipe);


