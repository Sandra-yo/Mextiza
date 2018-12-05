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
$("#enviarU").on("click",function() {
  console.log(":S");
  
  nuevoUsuario();
});
$("#log").on("click",function () {
  console.log(":W");
  localStorage.email=$("#InputEmail").val();
  localStorage.contraseña=$("#InputPassword").val();
  iniciarSesion();
});
$("#nuevoDist").on("click",function () {
  location.href="NuevoDistribuidor.html"
});

}
function nuevoUsuario() {
  var nombre=$("#nombre").val()+" "+$("#Apellidos").val();
  var correo=$("#correo").val();
  var pass=$("#password").val();

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://localhost:3000/api/Usuarios",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Postman-Token": "38041391-0ae4-4152-991e-8dfdae39bdd0"
    },
    "processData": false,
    "data": "{\n  \"realm\": \"Distribuidor\",\n  \"username\": \""+nombre+"\",\n  \"email\": \""+correo+"\",\n  \"direccionId\": \"string\",\n  \"telefonoId\": \"string\",\n  \"password\": \""+pass+" \"\n}"
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
    }).fail(function(response){
      console.log(response);
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
    var form = new FormData();
form.append("id", localStorage.usuarioId);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/api/Usuarios/"+localStorage.usuarioId,
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
  console.log(response);
  
  //localStorage.tipoUsuario="proveedor";
  
  
});
}


function iniciarSesion() {
   localStorage.tipoUsuario="";
   localStorage.token="";
   localStorage.usuarioId="";
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
  var time=setInterval(function() {
    if(localStorage.tipoUsuario!=""){
      clearInterval(time);
      alert(localStorage.tipoUsuario);
      if(localStorage.tipoUsuario=="proveedor"){
        location.href = "Administrador/pedidos.html";
      }else{
      location.href = "index.html";
      }
    }

  },1000);
  console.log(localStorage.tipoUsuario);
 // alert(localStorage.tipoUsuario);

});
}