const tipoSeguro = document.getElementById("tipoSeguro")
const textoValorTipoSeguro = document.getElementById("textoValorTipoSeguro")

tipoSeguro.addEventListener("change", valorTipoSeguro)
function valorTipoSeguro() {
    switch(tipoSeguro.value){
        case "básico":
            textoValorTipoSeguro.innerText = "Valor: $500"
            break;
        case "intermedio":
            textoValorTipoSeguro.innerText = "Valor: $1.000"
            break;
        case "premium":
            textoValorTipoSeguro.innerText = "Valor: $1.500"
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
    console.log(name, lastname, dni, email, phone, tipoSeguro)
    if (!!name && !!lastname && !!dni && !!email && !!phone && !!tipoSeguro.value) {
        alert("Formulario enviado!")
    }
}
