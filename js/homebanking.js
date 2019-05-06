//Declaración de variables
var nombreUsuario = "Gabriel Ríos";
var saldoCuenta = 1000;
var limiteExtraccion = 3000;
var servicioAgua = 350;
var servicioTelefono = 425;
var servicioLuz = 210;
var servicioInternet = 570;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//
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
  var nuevoLimite = prompt("Ingrese nuevo límite de extracción:");
  limiteExtraccion = parseInt(nuevoLimite);

  actualizarLimiteEnPantalla();

  alert("El nuevo límite de extracción es: " + limiteExtraccion);
}

function extraerDinero() {

  var saldoAnterior = saldoCuenta;
  var dinero = prompt("Ingrese dinero a extraer:");
  var dineroAExtraer = parseInt(dinero);

  restarDinero(dineroAExtraer);

  alert("Has extraído: $" + dineroAExtraer +
  ".\nSaldo anterior: $" + saldoAnterior +
  ".\nSaldo actual: $" + saldoCuenta + ".");


  actualizarSaldoEnPantalla();
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

  var servicios = prompt ("Ingrese el número que corresponda con el servicio que querés pagar.\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Teléfono");

  pagoServicios = parseInt(servicios);

  saldoAnterior = saldoCuenta;

  switch (pagoServicios) {
    case 1:
      pagarAgua();
    break;
    case 2:
      pagarLuz();
    break;
    case 3:
      pagarInternet();
    break;
    case 4:
      pagarTelefono();
    break;
    default:
    alert("No existe el servicio que seleccionaste");
  }

  actualizarSaldoEnPantalla();

  function pagarAgua(){
    if(saldoCuenta < servicioAgua){
      alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
    }else{
      saldoCuenta -= servicioAgua;
      alert("Has pagado el servicio de agua.\nSaldo anterior: $" + saldoAnterior +
      ".\nDinero descontado: $" + servicioAgua + ".\nSaldo actual: $" + saldoCuenta + ".");
    }
  }

  function pagarLuz(){
    if(saldoCuenta < servicioLuz){
      alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
    }else{
      saldoCuenta -= servicioLuz;
      alert("Has pagado el servicio de luz.\nSaldo anterior: $" + saldoAnterior +
      ".\nDinero descontado: $" + servicioLuz + ".\nSaldo actual: $" + saldoCuenta + ".");
    }
  }

  function pagarInternet(){
    if(saldoCuenta < servicioInternet){
      alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
    }else{
      saldoCuenta -= servicioInternet;
      alert("Has pagado el servicio de Internet.\nSaldo anterior: $" + saldoAnterior +
      ".\nDinero descontado: $" + servicioInternet + ".\nSaldo actual: $" + saldoCuenta + ".");
    }
  }

  function pagarTelefono(){
    if(saldoCuenta < servicioTelefono){
      alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
    }else{
      saldoCuenta -= servicioTelefono;
      alert("Has pagado el servicio de teléfono.\nSaldo anterior: $" + saldoAnterior +
      ".\nDinero descontado: $" + servicioTelefono + ".\nSaldo actual: $" + saldoCuenta + ".");
    }
  }

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
