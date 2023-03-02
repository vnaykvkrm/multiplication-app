const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
questionEl.textContent = `What is ${num1} multiplied by ${num2}?`;
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}
scoreEl.textContent = `Score: ${score}`
const correctAns = num1 * num2;
formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value // + in front pf the inputEl is for converting the user input value which is taken as a string to integer
    if (userAns === correctAns) {
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }

})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score)) // json.stringify is fro converting the value to string for storing it.
}