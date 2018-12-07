window.onload= function(){
       listarTabla();    

function listarTabla() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/ProductoPedidos?filter={%20%20%20%20%20%22include%22:[%20%20%20%20%20%20%20%20%20{%20%20%20%20%20%20%20%20%20%20%20%20%20%22relation%22:%22pedido%22,%20%20%20%20%20%20%20%20%20%20%20%20%20%22scope%22:{%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22include%22:%22sucursal%22%20%20%20%20%20%20%20%20%20%20%20%20%20}%20%20%20%20%20%20%20%20%20},{%20%20%20%20%20%20%20%20%20%20%20%20%20%22relation%22:%22producto%22%20%20%20%20%20%20%20%20%20}%20%20%20%20%20]%20}",
        "method": "GET",
        "headers": {
          "Authorization": localStorage.token,
          "Content-Type": "application/json",
          "cache-control": "no-cache",
          "Postman-Token": "bb656600-56cb-49d7-8171-745bf956b1ab"
        },
        "processData": false,
        "data": ""
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        console.log(response[0].producto.nombre);
        
        for (let index = 0; index < response.length; index++) {
            console.log("::");
            var check=(response[index].pedido.estatus=="enviado")?"checked":"";
            $("tbody").append("<tr id="+response[index].pedido.id+">"+
                "<td>"+response[index].pedido.id+"</td>"+
                "<td id='sucursal' index='"+response[index].pedido.sucursal.id+"'>"+response[index].pedido.sucursal.nombre+"</td>"+
                "<td id='fecha'>"+response[index].pedido.fechaPedido+"</td>"+
                "<td>"+response[index].producto.nombre+"</td>"+
                "<td>"+response[index].cantidad+"</td>" + 
                "<td>"+response[index].pedido.fechaPagado+"</td>" + 
                "<td>"+
                "<div class='form-check'>"+
                "<input id="+response[index].id+" class = 'form-check-input' type='checkbox' disabled "+check+"><label class='form-check-label' for='defaultCheck1'>Autorizado</label> "+   
                "</div>"+
                "</td>"+
                "<td>"+
                "<center>"+
                "<button index='"+response[index].pedido.id+"' class='btn btn-success'>Autorizar</button>"+
                "</center>"+
                "</td>"               
             
                
                +"</tr>");
        }
        if(response==""){
            console.log("::");
        }else{
            
        }
        
      });
         
      var time = this.setInterval(function name() {
       
        
        if($(".btn-success").length!=0){
    clearInterval(time);
    btnFuncion();
        }
    },1000);
    
    function btnFuncion() {
        $(".btn-success").on("click",function () {
            var id=$(this).attr("index");
            var fecha=$("#"+$(this).attr("index")+" #fecha").html();
            var sucursal=$("#"+$(this).attr("index")+" #sucursal").attr("index");
            console.log(sucursal);
            
            actualiza(id,fecha,sucursal);
        });
    
    }
    function actualiza(id,fecha,sucursal) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/api/Pedidos/"+id,
            "method": "PUT",
            "headers": {
              "authorization": localStorage.token,
              "content-type": "application/json",
              "cache-control": "no-cache",
              "postman-token": "bc3c82a3-1526-e7c6-1664-1bb591067281"
            },
            "processData": false,
            "data": "{    \"estatus\": \"enviado\",\n    \"fechaPedido\": \""+fecha+"\",\n    \"fechaPagado\": \"pendiente\",\n    \"id\": \""+id+"\",\n    \"sucursalId\": \""+sucursal+"\",\n    \"usuarioId\": \""+localStorage.usuarioId+"\"\n  }"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            $(".form-check-input").attr("checked","true");
          });
    }   
}

}