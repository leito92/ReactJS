const type = document.getElementById("type")
const value = document.getElementById("value")
const text = "El valor estimado para el tipo de seguro seleccionado es de: $"
const button = document.getElementById("send")

type.addEventListener("change", valorTipoSeguro)
function valorTipoSeguro() {
    switch(type.value){
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

button.addEventListener("click", sendForm)
function sendForm() {
    let name = document.getElementById("name").value
    let lastname = document.getElementById("lastname").value
    let dni = document.getElementById("dni").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    console.log(name, lastname, dni, email, phone, type)
    if (!!name && !!lastname && !!dni && !!email && !!phone && !!type.value) {
        alert("Formulario enviado!")
    }
}