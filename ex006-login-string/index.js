const nome = document.getElementById("nome");
const mySubmit = document.getElementById("mySubmit");
const text = document.getElementById("text");
const textGreen = document.getElementById("textGreen")

mySubmit.onclick = function() {
    const nomeInput = nome.value;
    const result = nomeInput.startsWith(" ");
    const resultEnd = nomeInput.endsWith(" ");

    if (result) {
        text.textContent = `O seu nome não pode começar com um espaço`
    }

    else if (resultEnd) {
        text.textContent = `O seu nome não pode terminar com um espaço`
    }

    else {
        textGreen.textContent = `Sua inscrição foi feita com sucesso`
    }
}