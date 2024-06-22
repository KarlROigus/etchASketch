for (let i = 0; i < 6; i++) {
    const bigContainer = document.querySelector(".container");
    const oneRow = document.createElement("div");
    oneRow.className = "big";
    for (let i = 0; i < 6; i++) {
        const someDiv = document.createElement("div");
        someDiv.className = "small";
        oneRow.appendChild(someDiv);
    }

    bigContainer.appendChild(oneRow);
}








