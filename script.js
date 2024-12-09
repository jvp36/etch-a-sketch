// Variables
const $body = document.querySelector("body");
const $container = document.querySelector(".container");
const $btn = document.getElementById("btn");

const addSquares = () => {
    let count = parseInt(prompt("Number of squares per side: "));
    while (count < 2 || count > 100 || isNaN(count) === true) {
        count = prompt("You must enter an integer between 1 and 100. Number of squares per side: ");
    }
    let side = 100 / count.toString() + "%";
    for (let i = 1; i <= count * count; i++) {
        const $div = document.createElement("div");
        $div.className = "cell";
        //$div.style.border = "1px solid #222";
        $div.style.width = side;
        $div.style.height = side;
        $container.appendChild($div);
        $btn.removeEventListener("click", addSquares);
        $div.addEventListener("mouseenter", () => {
            $div.style.backgroundColor = hexColor();
        });       
    }
    const $reload = document.createElement("button");
    $reload.textContent = "Reload";
    $body.appendChild($reload);
    $reload.addEventListener("click", () => {
        location.reload();
    })
}

function hexColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}



$btn.addEventListener("click", addSquares);

















//console.log(side);

