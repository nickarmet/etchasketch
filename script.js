let createDiv = () => {
	var verticalDivs = [];
	var horizontalDivs = [];
	for(let i = 1; i <= 16; ++i) {
		verticalDivs[i] = document.createElement("div");
		horizontalDivs[i] = document.createElement("div");
	}
}

createDiv();