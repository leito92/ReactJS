const type = document.getElementById("type")
const value = document.getElementById("value")
const text = "El valor estimado para el tipo de seguro seleccionado es de: $"

type.addEventListener("change", valorTipoSeguro)
function valorTipoSeguro() {
    switch(document.getElementById("type").value){
        case "Básico":
            value.innerText = text + "500"
            break;
        case "Intermedio":
            value.innerText = text + "1.000"
            break;
        case "Premium":
            value.innerText = text + "1.500"
            break;
    }
}