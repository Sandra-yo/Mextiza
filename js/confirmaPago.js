window.onload=function() {
    var x= this.setInterval(function () {
        if($("#imagenUsr").length!=0){
            clearInterval(x);
            $("#enviar").on("click",function (params) {
              //  console.log(":3");
            
                if($("#imagenUsr").val()!=""){
                    pedido();
                    setTimeout(() => {
                        
                    location.href="index.html";
                    }, 1000);
                }else{
                    alert("suba foto de boucher")
                }
                
            });
            
        }
    });

    function pedido(params) {
        var id=$("#idPedido").val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://165.227.30.250:3300/api/Pedidos/"+id,
            "method": "GET",
            "headers": {
              "Authorization": localStorage.token,
              "cache-control": "no-cache",
              "Postman-Token": "a3a19d30-028d-45e3-8847-2217583dcfec"
            }
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
             modificar(response.id,response.fechaPedido,response.sucursalId,response.usuarioId);
          });
    }
    function modificar(id,fechaP,sucursalId,usuarioId) {
        var fecha=new Date();
        var diaP=fecha.getDate();
        var mesP=fecha.getMonth();
        var añoP=fecha.getFullYear();
        var fechaPago =diaP+"/"+mesP+"/"+añoP;
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://165.227.30.250:3300/api/Pedidos/"+id,
            "method": "PUT",
            "headers": {
              "Content-Type": "application/json",
              "Authorization": localStorage.token,
              "cache-control": "no-cache",
              "Postman-Token": "40117fcb-d142-4f09-8da5-97f17a5a165e"
            },
            "processData": false,
            "data": "{\n  \"estatus\": \"pendiente\",\n  \"fechaPedido\": \""+fechaP+"\",\n  \"fechaPagado\": \""+fechaPago+"\",\n  \"id\": \""+id+"\",\n  \"sucursalId\": \""+sucursalId+"\",\n  \"usuarioId\": \""+usuarioId+"\"\n}"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
    }
};