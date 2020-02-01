const mainDivWindow = document.querySelector("#window");

let spillInk = e => {
    e.target.style.backgroundColor = "blue";
}

for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 16; col++) {
        const boxI = document.createElement("div");
        boxI.classList.add('grid-box');
        mainDivWindow.appendChild(boxI);
        boxI.addEventListener("mouseover", spillInk)
    }
}


