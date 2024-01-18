const someFunction = function () {
    console.log("hello I am Joe");
}

function saySomethingFunction () {
    console.log("hello trulus");
}

const button = document.querySelector(".btn");

console.log(button);

const handleClickTwo = function () {

}

button.addEventListener("click", handleClick);

function handleClick () {
    console.log("You clicked");
}

button.onclick = function () {
    console.log("omg you clicked me using onclick :3");

}

const myFirstNameInput = document.querySelector("#firstName");

const handleKeyPress= function (event) {
    console.log(this.value);
    console.log(event.target.value);
}

myFirstNameInput.addEventListener("keydown", handleKeyPress);

const theHoverBtn = document.querySelector(".pet-btn");

const handleMouseOver = function (event){
    console.log(event.target.dataset.animal);
}
theHoverBtn.addEventListener("mouseover", handleMouseOver)