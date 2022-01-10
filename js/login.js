//mis eventos
document
  .getElementById("bntIniciarSesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("bntRegistrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

// Declaracion de Variables
let contenedorLoginRegister = document.querySelector(
  ".contenedorLoginRegister"
);
let formularioLogin = document.querySelector(".formularioLogin");
let formularioRegister = document.querySelector(".formularioRegister");
let cajaTraseraLogin = document.querySelector(".cajaTraseraLogin");
let cajaTraseraRegister = document.querySelector(".cajaTraseraRegister");

function anchoPagina() {
  if (window.innerWidth > 850) {
    cajaTraseraLogin.style.display = "block";
    cajaTraseraRegister.style.display = "block";
  } else {
    cajaTraseraRegister.style.display = "block";
    cajaTraseraRegister.style.opacity = "1";
    cajaTraseraLogin.style.display = "none";
    formularioLogin.style.display = "block";
    formularioRegister.style.display = "none";
    contenedorLoginRegister.style.left = "0px";
  }
}
anchoPagina();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formularioRegister.style.display = "none";
    contenedorLoginRegister.style.left = "10px";
    formularioLogin.style.display = "block";
    cajaTraseraRegister.style.opacity = "1";
    cajaTraseraLogin.style.opacity = "0";
  } else {
    formularioRegister.style.display = "none";
    contenedorLoginRegister.style.left = "0px";
    formularioLogin.style.display = "block";
    cajaTraseraRegister.style.display = "block";
    cajaTraseraLogin.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formularioRegister.style.display = "block";
    contenedorLoginRegister.style.left = "420px";
    formularioLogin.style.display = "none";
    cajaTraseraRegister.style.opacity = "0";
    cajaTraseraLogin.style.opacity = "1";
  } else {
    formularioRegister.style.display = "block";
    contenedorLoginRegister.style.left = "0px";
    formularioLogin.style.display = "none";
    cajaTraseraRegister.style.display = "none";
    cajaTraseraLogin.style.display = "block";
    cajaTraseraLogin.style.opacity = "1";
  }
}
// Cuando presiones el boton de registrar usuario vas a guardarlo
function registrarUsuario() {
  // Obtener los datos del usuario a registrar
  let nombreUsuario = document.getElementById("nombre").value
  let emailUsuario = document.getElementById("email").value
  let passwordUsuario = document.getElementById("password").value

  // En vez de crear una clase, puedes crear un objeto llamado persona, 
  // lo hacer con un Json de la siguiente forma
  let persona = {
    nombre: nombreUsuario,
    email: emailUsuario,
    password: passwordUsuario
  }

    // creare una constante llamada usuarioGuardadoKey
  // esta sera la Key o llave para guardar en local storage y asi siempre usar la misma
  const usuarioGuardadoKey = "usuarioGuardadoKey"

  //obtener local storage para saber si antes guardaste a alguien
  let usuariosGuardadosPreviamente = localStorage.getItem(usuarioGuardadoKey)

  // validar si existen los usuarios guardados
  // en caso que no sea null, usuariosGuardados deberia ser un array de personas entonces 
  // haremos push a ese array y luego lo guardamos
  if(usuariosGuardadosPreviamente != null) {
    let usuariosGuardados = localStorage.getItem(usuarioGuardadoKey)
    // obtenemos los usuarios guardados
    let arrayDeUsuarios = JSON.parse(usuariosGuardados)
    //le agregamos la persona que se esta registrando
    arrayDeUsuarios.push(persona)
    //guardamos de todo en local storage\
    // Local Storage solo guarda string sino me equivoco y persona es un json
    //Asi que debes convertir el Json a un string con JSON.stringify 
    localStorage.setItem(usuarioGuardadoKey, JSON.stringify(arrayDeUsuarios))
    //puedes validar si se guardo: con Json.parse puedes ver el objeto en la consola en vez de un string
    let usuarios = localStorage.getItem(usuarioGuardadoKey)
    console.log(JSON.parse(usuarios))
  }
  //en caso que no existan los usuarios guardados
  else {
    // Un array vacio que es al que le vamos a hacer push de los usuarios
    let usuariosGuardados = []
    // le agregamos persona
    usuariosGuardados.push(persona)
    // guardamos
    localStorage.setItem(usuarioGuardadoKey, JSON.stringify(usuariosGuardados))
    //puedes validar si se guardo:
    let usuarios = localStorage.getItem(usuarioGuardadoKey)
    console.log(JSON.parse(usuarios))
  }  
}