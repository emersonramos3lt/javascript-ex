const text = document.getElementById("text");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let age;

submit.onclick = function() {
    age = text.value
    if (age <= 2) {
        result.textContent = `Bebê 👶`;
    }

    else if (age <= 12) {
        result.textContent = `Criança 👦`
    }

    else if (age <= 17) {
        result.textContent = `Pré-adolescente 🧒`
    }

    else if (age <= 65) {
        result.textContent = `Adulto 🧑`
    }

    else if (age >= 65) {
        result.textContent = `Idoso 👴`
    }

    else {
        result.textContent = `Coloque um valor em válido.`
    }
}