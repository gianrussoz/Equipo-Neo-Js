// Modal
let container = document.getElementById("container");
container.innerHTML =
`<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" id="botonIS"><i class="fa-solid fa-house-user"></i></button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Iniciar sesión</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="form-group">
              <label for="exampleInputEmail1">Ingrese su nombre de usuario</label>
            <input type="email" class="form-control" id="inputLogIn" aria-describedby="emailHelp" placeholder="Ej: juancruz22" required>
            <small id="emailHelp" class="form-text text-muted">No compartimos sus datos con nadie.</small>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" id="botonEnviar" data-dismiss="modal" aria-label="Close">Entrar</button>
      </div>
    </div>
  </div>
</div>`

// Log in
let boton = document.getElementById("botonEnviar");

boton.addEventListener("click", logIn);
function logIn() {
  let usuario = document.getElementById("inputLogIn").value;
  if (usuario === "gian" || usuario === "Gian" || usuario === "GIAN") {
    Toastify({
        text: `👤 Bienvenido ${usuario}!`,
        duration: 2000,
        style: {
        background: 'linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)', color: '#f6f6f6'
      }
    }).showToast();
    localStorage.setItem("nombredeUsuario", JSON.stringify(usuario));
/*  $('#exampleModal').hide();
    $('.fade').hide(); */
    ;} else {
    do {
      Toastify({
        text: `❌ Usuario incorrecto, ingrese su nombre nuevamente.`,
        duration: 2000,
        style: {
        background: 'linear-gradient(to top, #cb2d3e 0%, #ef473a 100%)', color: '#f6f6f6'
      }
    }).showToast();
      usuario = console.log("Ingresa tu nombre de usuario: ");
    } while (usuario === "" || usuario === " " || usuario === null);
  }
}
function recuperarNU() {
  let usuarioRecuperado = JSON.parse(localStorage.getItem('nombredeUsuario'));
  console.log(usuarioRecuperado);
}
recuperarNU();

// Filtrado
const botonForm = document.getElementById("botonForm").value;

const propiedades = [];
class Propiedades{
    constructor(negocio, precio, ubicacion) {
        this.negocio = negocio;
        this.precio = precio;
        this.ubicacion = ubicacion;
}}
const casa = new Propiedades("venta", 234900, "Carapachay");
const dpto = new Propiedades("alquiler", 40000, "Lisandro de La Torre");
/* console.log (`Departamento en ${dpto.negocio}, ubicado a mts de la estación de ${dpto.ubicacion}. Su precio ronda los ${dpto.precio}ARS.`)
console.log(`Casa en ${casa.negocio}, ubicada en ${casa.ubicacion}, su precio ronda los US$${casa.precio}`) */

propiedades.push(casa, dpto);
propiedades.forEach(propiedades => console.log(propiedades));

const filtroCasa = propiedades.find((el) => el.negocio === "venta");
const filtroDpto = propiedades.find((el) => el.negocio === "alquiler");
console.log(JSON.stringify(filtroCasa));
console.log(JSON.stringify(filtroDpto));
/* const botonForm = document.getElementById("botonForm");

botonForm.addEventListener("click", ()=>{
  carritoDeCompras = carritoDeCompras.filter(elemento => elemento.id != productoAgregar.id)));
}*/
//? Quise filtrar mediante el formulario del index, pero no llego a terminarlo


