const container = document.querySelector("#gridContainer")

for (i = 0; i < 256; i++) {
    const square = document.createElement("div")
    square.classList.add("square")
    container.appendChild(square)

}

function createGrid(numSquares) {

    container.innerHTML = "";

    const squareSize = 960 / numSquares - 2; 

    for (let i = 0; i < numSquares * numSquares; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${squareSize}px`; 
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}


function createNewGrid() {
    let numSquares = prompt("Enter the number of squares per side (maximum 100):");
    numSquares = parseInt(numSquares);

    if (isNaN(numSquares) || numSquares < 1 || numSquares > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    createGrid(numSquares);
}

