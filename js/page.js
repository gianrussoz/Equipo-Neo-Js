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
propiedades.push("***Terrenos en construcción...***".toUpperCase());
alert("Las propiedades disponibles son: ");
propiedades.forEach(propiedades => alert(propiedades));
/* for (let i = 0; i < propiedades.length; i++){
    alert(propiedades[i]);
} */

const propiedad1 = {
    negocio: "venta",
    precio: 234900,
    ubicación: "Carapachay",
    condición: "amueblada"
}
alert("Casa en " + propiedad1.negocio + " ubicada en " + propiedad1.ubicación + ", su precio ronda los US$" + propiedad1.precio + " y está " + propiedad1.condición + " en todo su interior.");

const propiedad2 = {
    negocio: "alquiler",
    precio: 40000,
    expensas: 4000,
    ubicación: "Lisandro de La Torre",
    estado: "nuevo"
}
alert(`Departamento ${propiedad2.estado} en ${propiedad2.negocio}, ubicado a mts de la estación de ${propiedad2.ubicación}. Su precio ronda los ${propiedad2.precio}ARS + ${propiedad2.expensas} de expensas.`);