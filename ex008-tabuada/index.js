function mySubmit() {
    const number = document.getElementById("number").value;
    const text = document.getElementById("text")

    if (number) {
        let result = "";
        for (let i = 1; i <= 10; i++) {
            result += `${number} x ${i} = ${number * i}<br>`
        }
        text.innerHTML = result
    } else {
        text.textContent = `Digite um valor válido`
    }
}