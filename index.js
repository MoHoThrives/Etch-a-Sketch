

const mainDivWindow = document.querySelector("#window");
console.log(mainDivWindow.style.width);
const resizeButton = document.querySelector("#gridPixelize");

let spillInk = e => {
    e.target.style.backgroundColor = "blue";
};



function fillGrid(gridSize) {
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const boxI = document.createElement("div");
            let widthAndHeight = (1200/gridSize)-2;
            boxI.style.width = widthAndHeight.toString()+"px";
            boxI.style.height = widthAndHeight.toString()+"px";
            boxI.style.borderColor = "gray";
            boxI.style.borderWidth = "1px";
            boxI.style.borderStyle = "dotted";
            mainDivWindow.append(boxI);
            boxI.addEventListener("mouseover", spillInk)
        }
    }
}

fillGrid(16);
resizeButton.addEventListener("mousedown", function () {
    mainDivWindow.innerHTML = "";
    let numPixels = prompt("Please enter new grid width?");
    numPixels = parseInt(numPixels);
    fillGrid(numPixels);
});


