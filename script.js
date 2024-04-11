const checkboxAudio = new Audio("assets/sounds/glock.mp3");
const allIngredientesInput = document.querySelectorAll(".ingredients-input");
const ingredientsContainer = document.querySelector("#ingredients-container");
const startTimer = document.querySelector("#start-timer");

let recipes = []
let timerInSecs = 5;
let intervalId = null;

class Recipe {
    constructor(paramName, paramIngredients) {
        this.name = paramName;
        this.ingredients = paramIngredients;
    }
}

function _onLoad() {
    recipes.push(new Recipe('CoffeCake', ['Milk', 'Eggs', 'Coffee']))
    recipes.push(new Recipe('TeaCake', ['Water', 'Eggs', 'Tea']))
    writeRecipes(recipes);
}

function writeRecipes(recipes) {
    for (let i = 0; i < recipes.length; i++) {
        ingredientsContainer.innerHTML += `
        <p>${recipes[i].name}</p>
        <ul class="ingredients-ul">
        `;
        for (let j = 0; j < recipes[i].ingredients.length; j++) {
            ingredientsContainer.innerHTML += `
                <li>
                <label class="ingredients-label">
                <!-- <input class="ingredientes-input" type="checkbox"> -->
                ${recipes[i].ingredients[j]}
                </label>
                </li>
            `;
        };
        ingredientsContainer.innerHTML += `</ul>`;
    };
}

allIngredientesInput.forEach(i => {
    i.addEventListener("change", () => {
        if (i.checked) { checkboxAudio.play(); }
    });
});

const countdown = () => {
    if (timerInSecs <= 0) {
        resetTimer();
        alert("The Timer Timeout");
        return;
    }
    initiateOrStopTimer();
    timerInSecs -= 1;
    console.log(timerInSecs);
}

startTimer.addEventListener("click", initiateOrStopTimer);

function initiateOrStopTimer() {
    if (intervalId) {
        resetTimer();
        return;
    }
    intervalId = setInterval(countdown, 1000)
}

function resetTimer() {
    clearInterval(intervalId);
    intervalId = null;
}