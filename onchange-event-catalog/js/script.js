const dropdown = document.querySelector("#circles");
const circleContainer = document.querySelector(".circles-container")

dropdown.onchange = function (){
    circleContainer.innerHTML= "";
    for(let i = 1; i <= this.value; i++){
        circleContainer.innerHTML += `
        <div class="circle">${i}</div>
        `
    }
}
