const container = document.querySelector(".main-container");
const inputForm = document.querySelector(".input");
let opacity = 100;

createGrid(100);


container.addEventListener("mouseover", (event) => {
    const element = event.target;
    if (!element.classList.contains("row") &&
        !element.classList.contains("main-container")) {
        applyRandomColor(element); // add bgcolorhere
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

function applyRandomColor (block) {
    const r = Math.floor(Math.random() * 250);
    const g = Math.floor(Math.random() * 250);
    const b = Math.floor(Math.random() * 250);
    const rgb = `rgb(${r}, ${g}, ${b})`;
    block.style.backgroundColor = rgb;
    block.style.opacity = opacity + "%";
    if (opacity < 10) {
        opacity = 100;
    }
    else {
        opacity -= 10;
    }
}


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
    listOfBlocks.forEach( element => element.style.backgroundColor = "white")
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



