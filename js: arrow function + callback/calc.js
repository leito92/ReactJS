const n1 = document.getElementById("number1");
const n2 = document.getElementById("number2");
const resultado = document.getElementById("resultado");

const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

function calculator(num1, num2, op) {
    return op(num1, num2);
};
document.getElementById("suma").addEventListener("click", () => {
    if (!!n1.value && !!n2.value) {
        resultado.innerText = "El resultado es: " + calculator(parseFloat(n1.value), parseFloat(n2.value), suma);
    }
});
document.getElementById("resta").addEventListener("click", () => {
    if (!!n1.value && !!n2.value) {
        resultado.innerText = "El resultado es: " + calculator(parseFloat(n1.value), parseFloat(n2.value), resta);
    }
});
document.getElementById("multiplicación").addEventListener("click", () => {
    if (!!n1.value && !!n2.value) {
        resultado.innerText = "El resultado es: " + calculator(parseFloat(n1.value), parseFloat(n2.value), multiplicacion);
    }
});
document.getElementById("división").addEventListener("click", () => {
    if (!!n1.value && !!n2.value && n2.value != 0) {
        resultado.innerText = "El resultado es: " + calculator(parseFloat(n1.value), parseFloat(n2.value), division);
    }
});