/* function Entrada() {
    let usuario = prompt("Ingresa tu nombre de usuario: ");
    if (usuario == "gian" || usuario == "Gian" || usuario == "GIAN") {
        alert("¡Bienvenido " + usuario + "!");
    } else {
        do {
            alert("Usuario incorrecto, ingrese su nombre nuevamente.");
            usuario = prompt("Ingresa tu nombre de usuario: ");
        } while (usuario == "" || usuario == " " || usuario == null);
    }
}
Entrada();

const propiedades = ["Casa en venta", "Departamento en alquiler"];
propiedades.push("***Terrenos en construcción...***".toUpperCase());

alert("Las propiedades disponibles son: ");
propiedades.forEach(propiedades => alert(propiedades));

class Propiedades{
    constructor(negocio, precio, ubicacion) {
        this.negocio = negocio;
        this.precio = precio;
        this.ubicacion = ubicacion;
}
}
const casa = new Propiedades("venta", 234900, "Carapachay");
alert("Casa en " + casa.negocio + " ubicada en " + casa.ubicacion + ", su precio ronda los US$" + casa.precio);

const dpto = new Propiedades("alquiler", 40000, "Lisandro de La Torre");
alert(`Departamento en ${dpto.negocio}, ubicado a mts de la estación de ${dpto.ubicacion}. Su precio ronda los ${dpto.precio}ARS.`); */

/* const propCasa = Propiedades.filter((el) => el.negocio.includes("venta")); también probe usando casa.filter/dpto.filter pero no funcionó
const propDpto = Propiedades.filter((el) => el.negocio.includes("alquiler"));

alert(propCasa); */

const titulo = document.getElementById("titulo");
titulo.innerText = "texto de prueba";

const parrafo = document.getElementById("parrafo");
parrafo.remove();

const h6 = document.createElement("h6");
h6.innerHTML = "<h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h6>";
document.body.append(h6);

