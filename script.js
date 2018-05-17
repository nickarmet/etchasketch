let container = document.getElementsByClassName("container")[0];

let createDiv = () => {
	var verticalDivs = [];
	var horizontalDivs = [];
	for(let i = 1; i <= 16; ++i) {
		verticalDivs[i] = document.createElement("div");
		container.appendChild(verticalDivs[i]);
		horizontalDivs[i] = document.createElement("div");
	}
	console.log(container)
}

createDiv();