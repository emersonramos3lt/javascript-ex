let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // array

numbers.forEach(tabuada);
numbers.forEach(mostrar)

function tabuada(element, index, array) {
    array[index] = element * 5;
}

function mostrar(element) {
    console.log(element);
}