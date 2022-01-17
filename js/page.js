/*let nombre=prompt("Ingresa tu nombre: ");
let apellido=prompt("Ingresa tu apellido: ");
alert("¡Bienvenido/a " + nombre + " " + apellido + "!");

let numero = parseInt(prompt("Ingresa un numero (para terminar ingrese 00): "));
let numero2 = parseInt(prompt("Ingresa otro numero (para terminar ingrese 00): "));
while(numero || numero2 != 00){
    let resultado=numero + numero2;
    alert(resultado);
    numero2 = parseInt(prompt("Ingresa otro numero (para terminar ingrese 00): "));
}*/

let nombre=prompt("Ingresa tu nombre: (termina si no ingresas nada)");
do{
alert("¡Bienvenido" + " " + nombre + "!");
nombre=prompt("Ingresa tu nombre: (termina si no ingresas nada)");
} while (nombre != "");

let edad= parseInt(prompt("Ingrese su edad: "));
if(isNaN(edad)){
} else if(edad >=18){
    alert("Sos mayor de edad");
} else if(edad < 18){
    alert("Sos menor de edad");
}