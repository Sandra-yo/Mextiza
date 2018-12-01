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
        $("#loggin a").html("Iniciar sesion");
        $("#loggin").removeClass("SI");
        $("#compras").css("display","none");
$("#ordenar").on("click",function() {
    console.log(":3");
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/Pedidos",
        "method": "POST",
        "headers": {
          "authorization": "AdobJBPkVGwPn6CvOkUiM7iT7AA9hK2sFHknvPZskXPD6DpLkjG9tqi1xImQnoUG",
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "a620d99b-c9ea-6638-a112-e9e4a4f454b1"
        },
        "processData": false,
        "data": "{\n  \"estatus\": \"pendiente\",\n  \"fechaPedido\": \"20-11-18\",\n  \"fechaPagado\": \"20-11-18\",\n  \"sucursalId\": \"5bf3780615338534589f9528\",\n  \"usuarioId\": \"be3a52e432fba13bd6547c2\"\n}"
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
    
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
