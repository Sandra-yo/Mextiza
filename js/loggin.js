function modal(){
  location.href = "login.html";

}
function carrito(){
  location.href = "carrito.html";
}
function hist(){
  location.href = "Historia.html";
}
function prod(){
  location.href = "productosMuestra.html";
}
function entrar(){
  console.log(contras + email);
  //let promesaEntrada= new promise((resolve,reject)=>{});
  let email=$("#InputEmail").val();
  let contras=$("#InputPassword").val();
  $.ajax({
    method: "POST",
    url: "http://...../"
  }).done(function(data) {
    alert(data); // imprimimos la respuesta
  }).fail(function() {
    alert("Algo salió mal");
  }).always(function() {
    alert("Siempre se ejecuta")
  });

}

window.onload = function() {


var inicio=document.getElementById("loggin");
inicio.addEventListener("click", modal, false);

var histo=document.getElementById("hist");
histo.addEventListener("click", hist, false);

var produ=document.getElementById("prod");
produ.addEventListener("click", prod, false);

var compras=document.getElementById("compras");
compras.addEventListener("click", carrito, false);

var log=document.getElementById("log");
log.addEventListener("click", entrar, false);
}
