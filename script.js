// Variables
const $container = document.querySelector(".container");
const $btn = document.getElementById("btn");
let count = 16;

let side = 100/count.toString() + "%";

for(let i = 1; i <= count*count; i++) {
    const $div = document.createElement("div");
    $div.className = "cell";
    $div.style.border = "0.25px solid #222";
    $div.style.width = side;
    $div.style.height = side;
    $container.appendChild($div);
    $div.addEventListener("mouseenter", () => {
        $div.style.backgroundColor = "black";
    });
}















//console.log(side);

