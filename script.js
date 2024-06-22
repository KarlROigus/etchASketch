function makeRequestedGrid() {
    const gridSide = prompt("Enter the grid side length: ");
    for (let i = 0; i < parseInt(gridSide); i++) {
        const bigContainer = document.querySelector(".container");
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


makeRequestedGrid();








