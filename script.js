let container = document.getElementsByClassName("container")[0];

let createGrid = (userChoice = 16) => {

	let columns = `repeat(${userChoice}, auto)`;
  	let rows = `repeat(${userChoice}, auto)`;
  	let totalSquares = userChoice * userChoice;

  	container.style.gridTemplateColumns = columns;
  	container.style.gridTemplateRows = rows;

  	for (let i = 0; i < totalSquares; i++) {
        let box = document.createElement('div');
        box.setAttribute('class', 'box');
        container.appendChild(box);
        box.style.border = '1px solid black';
    }

}

createGrid(prompt("How many squares per side?"));

let hoverSquare = document.querySelector(".container");

let hoverBox = () => {
    hoverSquare.addEventListener("mouseover", function(event) {
        if(event.target && event.target.nodeName === "DIV") {
            event.target.classList.toggle("hoverColor");
        }
    }, true);
}

function removeElementsByClass(){
    let elements = document.getElementsByClassName(".box");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

let removeChildren = () => {
    let parentContainer = document.getElementById("container");
    while(parentContainer.firstChild) {
        parentContainer.removeChild(parentContainer.firstChild);
    }
}

let reset = () => {
    removeChildren();
    createGrid(prompt("How many squares per side?"));
}

let button = document.querySelector(".reset");

button.addEventListener("click", reset);

hoverBox();

