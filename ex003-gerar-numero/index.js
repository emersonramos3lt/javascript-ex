const botao = document.getElementById("botao");
const result = document.getElementById("result");
const max = 100;
const min = 1;
let number;

botao.onclick = function() {
    number = Math.floor(Math.random() * max) + min
    result.textContent = number
}