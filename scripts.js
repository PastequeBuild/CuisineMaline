const recipes =  { //stored recipes data
    salad: {
        name: 'Salade', //also the main title
        banner: '', //source of a local image
        themeColor: 'green', //shortcut name is temporary, we will use '#XXXXXX' form.
        prepareTime: 10, //in minutes
        difficulty: 1, //from 1 to 3
        cost: 10, //in EUR
        ingredients: [''],
        steps: []
    },
    mojito: {
        name: 'Mojito',
        banner: '',
        themeColor: 'green',
        prepareTime: 0,
        difficulty: 1,
        cost: 0,
        ingredients: [''],
        steps: []
    },
    steakTartare: {
        name: 'Steak tartare',
        banner: '',
        themeColor: 'green',
        prepareTime: 0,
        difficulty: 1,
        cost: 0,
        ingredients: [''],
        steps: []
    },
    crepes: {
        name: 'Crêpes',
        banner: '',
        themeColor: 'yellow',
        prepareTime: 0,
        difficulty: 1,
        cost: 0,
        ingredients: [''],
        steps: []
    },
    ratatouille: {
        name: 'Ratatouille',
        banner: '',
        themeColor: 'red',
        prepareTime: 0,
        difficulty: 1,
        cost: 0,
        ingredients: [''],
        steps: []
    },
    sushis: {
        name: 'Sushis',
        banner: '',
        themeColor: 'white',
        prepareTime: 0,
        difficulty: 1,
        cost: 0,
        ingredients: [''],
        steps: []
    },
    chocolateFondant: {
        name: 'Fondant au chocolat',
        banner: '',
        themeColor: 'maroon',
        prepareTime: 0,
        difficulty: 1,
        cost: 0,
        ingredients: [''],
        steps: []
    }
}

const selectedRecipe = localStorage.getItem('selectedRecipe')
console.log('initialize', selectedRecipe, recipes)

function handleButtonsClickEvent() { //loaded from onload of index.html's body.
    Object.keys(recipes).forEach( recipe => {
        console.log(recipe)
        const buttonElt = document.getElementById(recipe) //we get the button
        buttonElt.onclick = () => { //we define the click event of our button
            localStorage.setItem('selectedRecipe', recipe)
            document.location.href = document.location.href.replace('index', 'recipe') //we go to recipe page
        }
    })
}

function generateRecipePage() { //loaded from onload of recipe.html's body.
    const mainTitleElt = document.getElementById('mainTitle')
    console.log('recipe index:', selectedRecipe)
    mainTitleElt.textContent = recipes[selectedRecipe].name
    const prepareTimeElt = document.getElementById('prepareTime')
    prepareTimeElt.textContent = recipes[selectedRecipe].prepareTime
    const difficultyElt = document.getElementById('difficulty')
    difficultyElt.textContent = recipes[selectedRecipe].difficulty
    const costElt = document.getElementById('cost')
    costElt.textContent = recipes[selectedRecipe].cost
}
