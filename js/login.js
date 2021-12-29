//mis eventos
document.getElementById("bnt__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("bnt__Regístrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPagina);

// Declaracion de Variables
let contenedor_login_register = document.querySelector(
  ".contenedor__login-register"
);
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let caja_trasera_login = document.querySelector(".caja__trasera-login");
let caja_trasera_register = document.querySelector(".caja__trasera-register");

function anchoPagina() {
  if (window.innerWidth > 850) {
    caja_trasera_login.style.display = "block";
    caja_trasera_register.style.display = "block";
  } else {
    caja_trasera_register.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
  }
}
anchoPagina();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "420px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
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