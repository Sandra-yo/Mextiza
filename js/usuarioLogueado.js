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


function sucursales() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/Sucursals",
        "method": "GET",
        "headers": {
          "Authorization": localStorage.token,
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
