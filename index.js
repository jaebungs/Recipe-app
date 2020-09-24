

const recipesContainer = document.querySelector('.recipes-container')
const recipeTitle = document.querySelector('#input-title')
const addBtn = document.querySelector('#add-recipe-btn')

let recipes = []

const createRecipes = () => {
    // const id = uuidv4()

    recipes.push({
        id: uuidv4(),
        title: '',
        image: '',
        ingredients: '',
        instruction: ''
    })
    saveRecipes()
}

const saveRecipes = () => {
    localStorage.setItem('recipes', JSON.stringify(recipes))
}

const removeRecipes = (id) => {
    const recipeIndex = recipes.findIndex((recipe) => recipe.id === id)
    if (recipeIndex > -1) {
        recipes.splice(recipeIndex, 1)
        saveRecipes()
    }
}

const generateRecipe = () => {
    const recipeEl = document.createElement('div')

    recipeEl.classList.add('recipe')
    recipeEl.textContent = 
    recipesContainer.appendChild(recipeEl)
}
