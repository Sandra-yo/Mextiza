function usuario() {
window.onload = function() {  
console.log("::::");

if(localStorage.token!="null" && this.localStorage.token!=undefined && this.localStorage.token!="undefined"){
    console.log(":::");
    
   console.log(localStorage.token=="undefined" );

   sucursales();
    $("#loggin a").html("Cerrar sesion");
    $("#loggin").addClass("SI");
    $("#compras").css("display","block");


    $("#compras").on("click",function () {
        console.log(".s");
        location.href = "carrito.html";
        
    });
    
$(".SI").on("click",function () {
    console.log(";;;");
    cerrarSesion();
    localStorage.email=null;
    localStorage.contraseña=null;
    localStorage.token=null;

   
    setTimeout(() => {
         location.href = "index.html";
    }, 1000);

  });

    }else{
        console.log(";E");
        $("#loggin a").html("Iniciar sesion");
        $("#loggin").removeClass("SI");
        $("#compras").css("display","none");
        
$("#ordenar").on("click",function() {
    console.log(":3");
    
});
 
        $("#loggin").on("click", function () {  
            console.log(":::");
            
            location.href = "login.html";
       });
      console.log(";");
      
        }
    }
}

function identificacionUsuarios() {
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
  console.log(response);
});
}
function sucursales() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/Sucursals",
        "method": "GET",
        "headers": {
          "Authorization": "cyBJCrcNKSvE5jvjO5WYoVbPlIUYEX3fDhZCUWJ0sQivLKXyf3NDoisIZwA6kKCl",
          "Content-Type": "application/json",
          "cache-control": "no-cache",
          "Postman-Token": "dfa4248b-6784-495a-a3ab-3a016ed8edd1"
        },
        "processData": false,
        
      }
      
      $.ajax(settings).done(function (response) {
          //esta solucion es temporal
          for (let index = 0; index < response.length; index++) {
            if(response[index].usuarioId==localStorage.usuarioId){
                localStorage.sucursalId=response[index].id;
                console.log(response[index].id);
            }
              
          }
        

      });
}
