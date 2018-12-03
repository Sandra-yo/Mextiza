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
 // console.log(response);
  location.href = "index.html";
  
});
}