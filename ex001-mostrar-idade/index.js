document.getElementById("botao").onclick = function() {
    idade = document.getElementById("idade").value;
    document.getElementById("text").textContent = `Você tem ${idade} anos, acertei?`
}

document.getElementById("sim").onclick = function() {
    document.getElementById("texts").textContent = `Eba!!!`
}

document.getElementById("nao").onclick = function() {
    document.getElementById("textn").textContent = `Que pena! Vamos tentar de novo!`
}