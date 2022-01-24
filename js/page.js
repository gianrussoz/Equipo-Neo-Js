let usuario = prompt("Ingresa tu nombre de usuario: ");
    if (usuario == "gian" || usuario == "Gian" || usuario == "GIAN") {
        alert("¡Bienvenido " + usuario + "!");
    } else {
        do {
            alert("Usuario incorrecto, ingrese su nombre nuevamente.");
            usuario = prompt("Ingresa tu nombre de usuario: ");
        } while (usuario == "" || usuario == " " || usuario == null);
}

const propiedades = ["Casa en venta", "Departamento en alquiler"];
alert("Las propiedades disponibles son: ");
for (let i = 0; i < propiedades.length; i++){
    alert(propiedades[i]);
}