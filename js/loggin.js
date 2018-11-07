function modal(){
  location.href = "login.html";
  console.log(",,,");
}
function carrito(){
  location.href = "carrito.html";
}
function hist(){
  location.href = "Historia.html";
}
function prod(){
  console.log(",,");
  location.href = "productosMuestra.html";
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
}
