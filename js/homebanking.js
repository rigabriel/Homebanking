//Declaración de variables
var nombreUsuario = "Gabriel Ríos";
var saldoCuenta = 10000;
var limiteExtraccion = 3000;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

function agregarDinero(dinero) {
  saldoCuenta += dinero;
  return saldoCuenta;
}

function restarDinero(dinero) {
  saldoCuenta -= dinero;
  return saldoCuenta;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {

}

function extraerDinero() {

}

function depositarDinero() {

  var saldoAnterior = saldoCuenta;
  var dinero = prompt("Ingrese dinero a depositar:");
  var dineroADepositar = parseInt(dinero);

  agregarDinero(dineroADepositar);

  alert("Has depositado: $" + dineroADepositar +
  ".\nSaldo anterior: $" + saldoAnterior +
  ".\nSaldo actual: $" + saldoCuenta + ".");

  actualizarSaldoEnPantalla();
}

function pagarServicio() {

}

function transferirDinero() {

}

function iniciarSesion() {

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
