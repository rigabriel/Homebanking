//Declaración de variables
var nombreUsuario = "Gabriel Ríos";
var saldoCuenta = 5000;
var limiteExtraccion = 3000;

//Variables que contienen los precios de los servicios a pagar.
var precioAgua = 350;
var precioTelefono = 425;
var precioLuz = 210;
var precioInternet = 570;

//Variables que contienen número de las cuentas para realizar transferencias.
var cuentaAmiga1 = "1234567";
var cuentaAmiga2 = "7654321";


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que serán utilizadas para sumar y restar dinero tanto en deposito como en extracción.
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

  if(!Boolean(limiteExtraccion)){
    return;
  }

  actualizarLimiteEnPantalla();

  alert("El nuevo límite de extracción es: " + limiteExtraccion);
}

function extraerDinero() {

  var saldoAnterior = saldoCuenta;
  var dinero = prompt("Ingrese dinero a extraer:");
  var dineroAExtraer = parseInt(dinero);

  if (!Boolean(dineroAExtraer)) {
  return;
  }

  if(dineroAExtraer % 100 == 0 && dineroAExtraer <= limiteExtraccion){
    procedimientoExtraccion();
  }else if (dineroAExtraer % 100 != 0){
    alert("Solo puedes sacar billetes de 100.");
  }else if (dineroAExtraer > limiteExtraccion) {
    alert("La cantidad de dinero que quieres extraer es mayor a tu límite de extracción.");
  }

  function procedimientoExtraccion(){
    if (dineroAExtraer > saldoAnterior) {
      alert("No hay saldo en tu cuenta para extraer esa cantidad de dinero.");
    }else{
      restarDinero(dineroAExtraer);

      alert("Has extraído: $" + dineroAExtraer +
      ".\nSaldo anterior: $" + saldoAnterior +
      ".\nSaldo actual: $" + saldoCuenta + ".");
      actualizarSaldoEnPantalla();
    }
  }
}

function depositarDinero() {

  var saldoAnterior = saldoCuenta;
  var dinero = prompt("Ingrese dinero a depositar:");
  var dineroADepositar = parseInt(dinero);

  if(!Boolean(dineroADepositar)){
    return;
  }

  agregarDinero(dineroADepositar);

  alert("Has depositado: $" + dineroADepositar +
  ".\nSaldo anterior: $" + saldoAnterior +
  ".\nSaldo actual: $" + saldoCuenta + ".");

  actualizarSaldoEnPantalla();
}

function pagarServicio() {

  var servicios = prompt ("Ingrese el número que corresponda con el servicio que querés pagar.\n1 - Agua\n2 - Luz\n3 - Internet\n4 - Teléfono");

  deudaServicios = parseInt(servicios);

  saldoAnterior = saldoCuenta;

  if(!Boolean(servicios)){
    return;
  }

  switch (deudaServicios) {
    case 1:
      debitarServicio(precioAgua,"Agua");
    break;
    case 2:
      debitarServicio(precioLuz,"Luz");
    break;
    case 3:
      debitarServicio(precioInternet,"Internet");
    break;
    case 4:
      debitarServicio(precioTelefono,"Teléfono");
    break;
    default:
      alert("No existe el servicio que seleccionaste");
  }

  actualizarSaldoEnPantalla();

  function debitarServicio(valorServicio, nombreServicio){
    if(saldoCuenta < valorServicio){
    alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
    }else{
    restarDinero(valorServicio);
    alert("Has pagado el servicio de " + nombreServicio + ".\nSaldo anterior: $" + saldoAnterior +
    ".\nDinero descontado: $" + valorServicio + ".\nSaldo actual: $" + saldoCuenta + ".");
    }
  }
}

function transferirDinero() {

  saldoAnterior = saldoCuenta;

  var dinero = prompt("Ingrese dinero a transferir: ");
  var dineroATransferir = parseInt(dinero);

  if(!Boolean(dineroATransferir)){
    return;
  }

  if(dineroATransferir > saldoCuenta){
    alert("No tienes dinero suficiente para realizar una transferencia");
  }else{
    var cuenta = prompt("Ingrese número de cuenta para realizar trasferencia:");

    if(cuenta === cuentaAmiga1 || cuenta === cuentaAmiga2){
      restarDinero(dinero);
      alert("Se han transferido: $" + dinero + ".\nCuenta destino: " + cuenta);

      actualizarSaldoEnPantalla();
    }else{
      alert("Solo puedes transferir dinero a una cuenta amiga");
    }
  }

}

function iniciarSesion() {

  var codigoSeguridad = "6789";
  var codigo = prompt("Ingresa tu código de seguridad:");

  if(!Boolean(codigo)){
    saldoCuenta = 0;
    nombreUsuario = "";
    limiteExtraccion = 0;
  }

  if (codigoSeguridad == codigo) {
    alert("Bienvenido/a "+ nombreUsuario + "ya puedes comenzar a realizar operaciones.");
  }else{
    saldoCuenta = 0;
    nombreUsuario = "";
    limiteExtraccion = 0;
    alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
  }

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
