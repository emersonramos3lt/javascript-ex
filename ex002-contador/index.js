const mais = document.getElementById("mais");
const reset = document.getElementById("reset");
const menos = document.getElementById("menos");
const contador = document.getElementById("contador");
let num = 0;

mais.onclick = function() {
    num++
    contador.textContent = num
}

reset.onclick = function() {
    num = 0
    contador.textContent = num
}

menos.onclick = function() {
    num--
    contador.textContent = num
}