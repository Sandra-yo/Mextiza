function transaccion() {
    var x= setInterval(function () {
       if($("#loggin").length==1){
           activa();
           clearInterval(x);
       } 
    },100);     
    
}
function activa() {
    if(localStorage.token!="null"){
        console.log(":::");
        
        
       console.log(localStorage.token=="null");
        console.log(
         $("#loggin a").html("Cerrar sesion"));
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
        
    $("#ordenar").on("click",function () {
        var fecha=new Date();
        var diaP=fecha.getDate();
        var mesP=fecha.getMonth();
        var añoP=fecha.getFullYear();
        localStorage.fechaPedido=diaP+"/"+mesP+"/"+añoP;
        location.href="Productos.html";
//alert("miau");
ordenemos();
       
        
    });
    $("#cantMacha").on("change",function(){
          console.log(this);
          
        
    }
    );
    $("#cantSM").on("change",function(){
        
    }
    );


    function ordenemos() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/api/Pedidos",
            "method": "POST",
            "headers": {
              "Authorization": localStorage.token,
              "Content-Type": "application/json",
              "cache-control": "no-cache",
              "Postman-Token": "9a20254a-b611-4a07-9d28-7ec0be51a074"
            },
            "processData": false,
            "data": "{\n  \"estatus\": \"pendiente\",\n  \"fechaPedido\": \""+localStorage.fechaPedido+"\",\n  \"fechaPagado\": \"pendiente\",\n  \"sucursalId\": \""+localStorage.sucursalId+"\",\n  \"usuarioId\": \""+localStorage.usuarioId+"\"\n}"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            
          });
    }
    function vistaProductos() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/api/ProductoPedidos",
            "method": "GET",
            "headers": {
              "Authorization": "cyBJCrcNKSvE5jvjO5WYoVbPlIUYEX3fDhZCUWJ0sQivLKXyf3NDoisIZwA6kKCl",
              "Content-Type": "application/json",
              "cache-control": "no-cache",
              "Postman-Token": "b060d876-4444-4368-af75-05b8799916b7"
            },
            "processData": false,
            "data": "{\n  \"pedidoId\": \"5c006e10798c353c57007b94\",\n  \"productoId\": \"5c0193930c118f14256abc6b\"\n}"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
          
    }
}