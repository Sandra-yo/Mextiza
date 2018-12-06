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
  var numero=$("#telefono").val();
  var calle=$("#calle").val();
  var colonia=$("#colonia").val();
  var cp=$("#CP").val();
  var ciudad=$("#ciudad").val();
  var estado=$("#estado").val();
  var nS=$("#nombreSucursal").val();
  numeroi(numero);
  direccion(calle,colonia,cp,ciudad,estado);

  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://165.227.30.250:3300/api/Usuarios",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Postman-Token": "38041391-0ae4-4152-991e-8dfdae39bdd0"
    },
    "processData": false,
    "data": "{\n  \"realm\": \"Distribuidor\",\n  \"username\": \""+nombre+"\",\n  \"email\": \""+correo+"\",\n  \"direccionId\": \""+localStorage.direccionid+"\",\n  \"telefonoId\": \""+localStorage.telefonoid+"\",\n  \"password\": \""+pass+"\"\n}"
  }
  $.ajax(settings).done(function (response) {
    console.log(response);
    localStorage.email=correo;
    localStorage.contraseña=pass;
    localStorage="";
    primerInicio();
    var time =setInterval(function () {
      
      if(localStorage.token!="" && localStorage.token!=undefined && localStorage.token!="undefined"){
        clearInterval(time);
        sucursal(nS);
        cerrarSesion();
        localStorage.token="";
        alert("Usuario creado exitosamente");
      }
    },100);
   
    
    }).fail(function(response){
      console.log(response.password);
  });
  
}
function numeroi(numero) {
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://165.227.30.250:3300/api/Telefonos",
  "method": "POST",
  "headers": {
    "content-type": "application/json",
    "authorization": localStorage.token,
    "cache-control": "no-cache",
    "postman-token": "892cc3ab-8bff-7f3b-b7e5-124209b173d3"
  },
  "processData": false,
  "data": "{\n  \"numero\": \""+numero+"\",\n  \"clave\": \"string\"\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
  localStorage.telefonoid=response['id'];
});
}
function direccion(calle,colonia,cp,ciudad,estado) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://165.227.30.250:3300/api/Direccions",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "authorization": localStorage.token,
      "cache-control": "no-cache",
      "postman-token": "05fc3c31-fdca-b59f-22b2-82b28a36a178"
    },
    "processData": false,
    "data": "{\n  \"calle\": \""+calle+"\",\n  \"colonia\": \""+colonia+"\",\n  \"cp\": \""+cp+"\",\n  \"ciudad\": \""+ciudad+"\",\n  \"estado\": \""+estado+"\"\n}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    localStorage.direccionid=response['id'];
  });
}

function cerrarSesion() {
  var form = new FormData();
form.append("email", localStorage.email);
form.append("password", localStorage.contraseña);

var settings = {
"async": true,
"crossDomain": true,
"url": "http://165.227.30.250:3300/api/Usuarios/logout",
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

});
  
}

function identificacionUsuarios() {
var form = new FormData();
form.append("id", localStorage.usuarioId);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://165.227.30.250:3300/api/Usuarios/"+localStorage.usuarioId,
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
  
  
});
}
function sucursal(nombre) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://165.227.30.250:3300/api/Sucursals",
    "method": "POST",
    "headers": {
      "Authorization": localStorage.token,
      "Content-Type": "application/json",
      "cache-control": "no-cache",
      "Postman-Token": "abdf03ce-7255-423b-915f-887e2e24c50b"
    },
    "processData": false,
    "data": "{\n  \"nombre\": \""+nombre+"\",\n  \"usuarioId\": \""+localStorage.usuarioId+"\",\n  \"direccionId\": \""+localStorage.direccionid+"\",\n  \"telefonoId\": \""+localStorage.telefonoid+"\"\n}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
function primerInicio() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://165.227.30.250:3300/api/Usuarios/login",
    "method": "POST",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache",
      "postman-token": "98b31ce1-3448-95c4-11af-cbfc1270e4c8"
    },
    "processData": false,
    "data": "{\n\"email\":\""+localStorage.email+"\",\n\"password\":\""+localStorage.contraseña+"\"\n}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    localStorage.token=response['id'];
    localStorage.usuarioId=response['userId']
  });
}


function iniciarSesion() {
   localStorage.tipoUsuario="";
   localStorage.token="";
   localStorage.usuarioId="";
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://165.227.30.250:3300/api/Usuarios/login",
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