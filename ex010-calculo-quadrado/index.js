function mySubmit() {
    const widthInput = document.getElementById("width");
    const heightInput = document.getElementById("height");
    const textResult = document.getElementById("text-result");

    class Square {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    getArea() {
        return this.width * this.height;
    }
    }

    const width = parseFloat(widthInput.value);
    const height = parseFloat(heightInput.value)

    if (width > 0 && height > 0) {
        const square = new Square(width, height);
        const area = square.getArea();
        textResult.textContent = `Área: ${area}`
    }

    else {
        textResult.textContent = "Valor inválido"
    }
}






/*
function mySubmit() {
    const widthInput = document.getElementById("width");
    const heightInput = document.getElementById("height");
    const textResult = document.getElementById("text-result");

   class Square {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }
    getArea() {
        return this.width * this.height;
    }
   }

   const width = parseFloat(widthInput.value);
   const height = parseFloat(heightInput.value);

  if(width > 0 && height > 0) {
    const square = new Square(width, height);
    const area = square.getArea();
    textResult.textContent = `Área: ${area}`
  }

  else {
    textResult.textContent = `Valor inválido`
  }
}
*/