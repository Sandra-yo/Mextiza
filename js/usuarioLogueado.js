function usuario() {
window.onload = function() {  
console.log("::::");

if(localStorage.token!="null"){
    console.log(":::");
    
   console.log(localStorage.token=="null");
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
