function valorTipoSeguro() {
    switch(document.getElementById("tipo").value){
        case "Basico":
            document.getElementById("value").innerHTML = "$ 500"
            break;
        case "Intermedio":
            document.getElementById("value").innerHTML = "$ 1.000"
            break;
        case "Premium":
            document.getElementById("value").innerHTML = "$ 1.500"
            break;
    }
}

function send() {
    var name = document.getElementById("name").value
    var lastname = document.getElementById("lastname").value
    var dni = document.getElementById("dni").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value
    var tipoSeguro = document.getElementById("tipo").value
    console.log(name, lastname, dni, email, phone, tipoSeguro)
    alert("Formulario enviado!")
}