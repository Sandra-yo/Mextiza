window.onload = function() {
$("#loggin").on("click", function () {  
  location.href = "login.html";
});
$("#hist").on("click", function () {  
  location.href = "Historia.html";
});
$("#prod").on("click", function () {  
  location.href = "productosMuestra.html";
});

$("#log").on("click",function () {
  console.log(":W");
  localStorage.email=$("#InputEmail").val();
  localStorage.contraseña=$("#InputPassword").val();
  iniciarSesion();
});
$("#nuevoDist").on("click",function () {
  console.log(":::");
  location.href="NuevoDistribuidor.html"
});

}


function cerrarSesion() {
  var form = new FormData();
form.append("email", localStorage.email);
form.append("password", localStorage.contraseña);

var settings = {
"async": true,
"crossDomain": true,
"url": "http://localhost:3000/api/Usuarios/logout",
"method": "POST",
"headers": {
  "authorization": localStorage.token,
  "cache-control": "no-cache",
  "postman-token": "ecdf5626-451f-cdf1-db09-ec1ed04dc248"
},
"processData": false,
"contentType": false,
"mimeType": "multipart/form-data",
"data": form
}

$.ajax(settings).done(function (response) {
console.log(response);
localStorage.token=null;
console.log("log out");

});
  
}
function identificacionUsuarios() {
  console.log(";;");
  
    var form = new FormData();
form.append("id", localStorage.usuarioId);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/api/Usuarios/5c006801798c353c57007b90",
  "method": "GET",
  "headers": {
    "Authorization": localStorage.token,
    "Content-Type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "Postman-Token": "ca57e4b9-b934-4f10-84b4-a906ab377ac5"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(":E");
 var resp=jQuery.parseJSON(response);
  
  localStorage.tipoUsuario=resp['realm'];

}).fail(function(response){
  //localStorage.tipoUsuario="proveedor";
  
  
});
}


function iniciarSesion() {
   
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/api/Usuarios/login",
  "method": "POST",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "postman-token": "8b8efe41-89db-9779-0f9f-cf86168cf953"
  },
  "data": {
    "email": localStorage.email,
    "password": localStorage.contraseña
  }
}

$.ajax(settings).done(function (response) {
  localStorage.token=response['id'];
  localStorage.usuarioId=response['userId'];
  console.log(response);
  identificacionUsuarios();
  console.log(localStorage.tipoUsuario=="proveedor");
  if(localStorage.tipoUsuario=="proveedor"){
    location.href = "Administrador/pedidos.html";
  }else{
  location.href = "index.html";
  }
});
}