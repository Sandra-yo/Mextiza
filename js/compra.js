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
            "data": "{\n  \"estatus\": \"pendiente\",\n  \"fechaPedido\": \""+localStorage.fechaPedido+"\",\n  \"fechaPagado\": \"pendiente\",\n  \"sucursalId\": \"5c006d62798c353c57007b93\",\n  \"usuarioId\": \"5c006801798c353c57007b90\"\n}"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
        
    });
}