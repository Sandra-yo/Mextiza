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
    ordenemos();
    setTimeout(() => {
        
     location.href="Productos.html"
    }, 2000);
    });
    


    function ordenemos() {
        vistaProductos();
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
            console.log(response.id);
            var cMacha=$("#cantMacha").val();
            var cSanM=$("#cantSM").val();

            if(!cMacha==""){
                console.log(cMacha+"-- "+response.id+"--"+localStorage.SalsaM);
                
                productosPedido(cMacha,response.id,localStorage.SalsaM);
               
            }
            if(!cSanM==""){
                console.log(cSanM+"-- "+response.id+"--"+localStorage.SalsaSM);

                productosPedido(cSanM,response.id,localStorage.SalsaSM);
         }
            
          });
          
         // location.href="Productos.html";
    }
    function vistaProductos() {
        alert("orden realizada")
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/api/Productos",
            "method": "GET",
            "headers": {
              "authorization": localStorage.token,
              "cache-control": "no-cache",
              "postman-token": "07020a7e-fb91-cdf6-7367-4429f7fec51d"
            }
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            localStorage.SalsaM=response[0].id;
            localStorage.SalsaSM=response[1].id;
          });
          
    }
}
function productosPedido(cant,pedido,producto) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/ProductoPedidos",
        "method": "POST",
        "headers": {
          "Authorization": localStorage.token,
          "Content-Type": "application/json",
          "cache-control": "no-cache",
          "Postman-Token": "1ca060de-a959-4d3d-9ea9-e627941fcc46"
        },
        "processData": false,
        "data": "{\n  \"cantidad\":  \""+cant+"\",\n  \"pedidoId\":  \""+pedido+"\",\n  \"productoId\":  \""+producto+"\"\n}"
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);

     
      });
    
}