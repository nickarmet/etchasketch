let container = document.getElementsByClassName("container")[0];
let userChoice = prompt("How many squares per side?");

let createDivs = (userChoice) => {
	// let verticalDivs = [];
	// let horizontalDivs = [];


	let gridRows = `gridTemplateRows: repeat(${userChoice}, auto)`;
	let gridColumns = `gridTemplateColumns: repeat(${userChoice}, 1fr)`;

	

	container.style.gridTemplateRows = 'repeat(userChoice, auto);'
	
	container.style.gridTemplateColumns = 'repeat(userChoice, auto);'

	console.log(container)
}

createDivs();

let hoverSquare = document.querySelectorAll("square");

let hoverColor = (event) => {
	hoverSquare.setAttribute("style", "color:blue;");
}

hoverSquare.addEventListener("mouseover", hoverColor());

