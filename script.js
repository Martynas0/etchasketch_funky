const container = document.querySelector(".main-container");
const inputForm = document.querySelector(".input");

createGrid(100);

container.addEventListener("mouseover", (event) => {
    const element = event.target;
    if (!element.classList.contains("row") &&
        !element.classList.contains("main-container")) {
        element.classList.add("marked");
    }
})

inputForm.addEventListener("click", (event) => {
    let inputValue = Number(document.querySelector(".input input").value);
    if (event.target.id === "change-size-button") {
        if (inputValue !== "NaN" && inputValue > 0 && inputValue <= 200) {
            removeGrid();
            createGrid(inputValue);
        }
        else {
            alert("You must enter a number from 1 to 200 !");
        }
    }
    if (event.target.id === "clear") {
        clearGrid();
    }    
})

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = createRow();
        fillRow(row, size);     
    }
}

function removeGrid () {
    const listOfRows = document.querySelectorAll(".row");
    listOfRows.forEach( element => element.remove() );
}

function clearGrid () {
    const listOfBlocks = document.querySelectorAll(".block");
    listOfBlocks.forEach( element => element.classList.remove("marked"))
}



function createRow() {
    const row = document.createElement("div");
    row.classList.add("row");
    container.appendChild(row);
    return row;
}

function fillRow (row, size) {
    for (let i = 0; i < size; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        row.appendChild(block);
    }
}



