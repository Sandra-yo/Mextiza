function usuario() {
window.onload = function() {  
console.log("::::");

if(localStorage.token!="null" && this.localStorage.token!=undefined && this.localStorage.token!="undefined"){
    
    


   sucursales();
    $("#loggin a").html("Cerrar sesion");
    $("#loggin").addClass("SI");
    $("#compras").css("display","block");
    console.log(":::");

    productos();
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
/*
$("#ordenar").on("click",function() {
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
    
});*/
 
        $("#loggin").on("click", function () {  
            console.log(":::");
            
            location.href = "login.html";
       });
      
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
            }
              
          }
        

      });
      
}

function productos() {
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/Productos?=",
        "method": "GET",
        "headers": {
          "Authorization": localStorage.token,
          "": "",
          "cache-control": "no-cache",
          "Postman-Token": "b8fed307-c7ab-441c-acfe-d55b834c16e5"
        }
      }
      console.log(settings);
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      }).fail(function (response) {
        localStorage.SalsaM="5c032859f8404e2321adc2af";
        localStorage.SalsaSM="5c032881f8404e2321adc2b0";
        
      });;
    
}
