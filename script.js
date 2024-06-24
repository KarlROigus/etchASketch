function makeRequestedGrid() {
    const gridSide = prompt("Enter the grid side length: ");
    if (gridSide < 0 || gridSide > 99) {
        alert("Please enter a number between 1 and 99");
        return;
    }
    const bigContainer = document.querySelector(".container");
    for (let i = 0; i < parseInt(gridSide); i++) {
        const oneRow = document.createElement("div");
        oneRow.className = "big";
        for (let i = 0; i < parseInt(gridSide); i++) {
            const someDiv = document.createElement("div");
            someDiv.className = "small";
            oneRow.appendChild(someDiv);
        }
        bigContainer.appendChild(oneRow);
    }
}

function makeColoringPossible() {
    const allDivs = document.querySelectorAll(".small");
    allDivs.forEach(element => {
        element.addEventListener("mouseover", () => {
            if (element) {
                element.style.backgroundColor = "black";
            }
        });
    });
}

makeRequestedGrid();
makeColoringPossible();


const button = document.querySelector(".button");
button.addEventListener("click", () => {
    const grid = document.querySelector(".container");
    grid.innerHTML = "";
    makeRequestedGrid();
    makeColoringPossible();
})