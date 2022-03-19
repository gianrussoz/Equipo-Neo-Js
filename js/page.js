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
    } while (usuario.trim() === "" || usuario === null);
  }
}
function recuperarNU() {
  let usuarioRecuperado = JSON.parse(localStorage.getItem('nombredeUsuario')) || [];
  console.log(usuarioRecuperado);
}
recuperarNU();

// Buscador
  const buscador = document.querySelector("#buscadorInput");

  buscador.addEventListener("input", () => {
    if (buscador.value.trim() == "") {
      mostrarProductos(arrayPropiedades);
    } else {
      mostrarProductos(arrayPropiedades.filter(el => el.tipo.toLowerCase().includes(buscador.value.toLowerCase())));
    }
  });

// Select
  const selectNegocio = document.getElementById("filtroNegocio");
  const selectTipo = document.getElementById("filtroTipo");

  selectNegocio.addEventListener('change', () => {
    if (selectNegocio.value == 'all') {
      mostrarProductos(arrayPropiedades);
    } else {
      mostrarProductos(arrayPropiedades.filter(el => el.negocio == selectNegocio.value));
    }
  })

  selectTipo.addEventListener('change', () => {
    if (selectTipo.value == 'all') {
      mostrarProductos(arrayPropiedades);
    } else {
      mostrarProductos(arrayPropiedades.filter(el => el.tipo == selectTipo.value));
    }
  })

// Productos
  const containerCasa = document.querySelector("#containerCasa");

  mostrarProductos(arrayPropiedades);

  function mostrarProductos(array) {
    containerCasa.innerHTML = "";
    array.forEach(casas => {
      let div = document.createElement('div');
      div.classList.add("arrayPropiedades");
      div.innerHTML += `
      <div class= "card-deck">
        <div class="card underline-from-center" style="width: 18rem;">
          <img src=${casas.img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">${casas.tipo}</h5>
            <small class="text-muted">${casas.negocio} | ${casas.ubicacion}</small>
            <p class="card-text">${casas.desc}</p>
            <h6 class="cardPrecio">${casas.precio}</h6>
          </div>
        </div>
      </div>`
      containerCasa.appendChild(div);
    })
}

// Spinner de carga
containerCasa.innerHTML = '<img src="../assets/load.gif"></img>'

const spinner = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arrayPropiedades);
    }, 2000)
  })
    .then((res) => {
      mostrarProductos(res);
    })
}

spinner();

// Api
  const comentarios = document.querySelector("#ul");

  fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=20')
    .then(response => response.json())
    .then(json => {
      json.forEach((comments) => {
        const li = document.createElement("li");
        li.classList.add("containerLi");
        li.innerHTML = `
        <h4>${comments.name}</h4>
        <small">✉️ ${comments.email}</small>
        <p class="parrafoApi">${comments.body}</p>`
        comentarios.append(li);
      })
    })