const type = document.getElementById("type")
const valor = document.getElementById("value")
const texto = "El valor estimado para el tipo de seguro seleccionado es de: $"

type.addEventListener("change", valorTipoSeguro)
function valorTipoSeguro() {
    switch(type.value){
        case "Básico":
            valor.innerText = texto + "500"
            break;
        case "Intermedio":
            valor.innerText = texto + "1.000"
            break;
        case "Premium":
            valor.innerText = texto + "1.500"
            break;
    }
}

document.getElementById("send").addEventListener("click", sendForm)
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
