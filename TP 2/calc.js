const n1 = document.getElementById("number1")
const n2 = document.getElementById("number2")
const resultado = document.getElementById("resultado")

const suma = () => {
    if (!!n1.value && !!n2.value) {
        resultado.innerText = "El resultado es: " + (parseFloat(n1.value) + parseFloat(n2.value))
    }
}
document.getElementById("suma").addEventListener("click", suma)

const resta = () => {
    if (!!n1.value && !!n2.value) {
        resultado.innerText = "El resultado es: " + (parseFloat(n1.value) - parseFloat(n2.value))
    }
}
document.getElementById("resta").addEventListener("click", resta)


const multiplicacion = () => {
    if (!!n1.value && !!n2.value) {
        resultado.innerText = "El resultado es: " + (parseFloat(n1.value) * parseFloat(n2.value))
    }
}
document.getElementById("multiplicación").addEventListener("click", multiplicacion)

const division = () => {
    if (!!n1.value && !!n2.value && n2.value != 0) {
        resultado.innerText = "El resultado es: " + (parseFloat(n1.value) / parseFloat(n2.value))
    }
}
document.getElementById("división").addEventListener("click", division)