window.onload= function(){
       listarTabla();    

    
    function click () {
        console.log(";;");
        
       var id= $(this).attr("id");
       $("#"+id+" input").attr("checked",true);
    }
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
        console.log(response[0]);
        console.log(response[0].producto.nombre);
        for (let index = 0; index < response.length; index++) {
            $("tbody").append("<tr id="+response[index].id+">"+
                "<td>"+response[index].pedido.id+"</td>"+
                "<td id=distribuidor>"+response[index].pedido.sucursal.nombre+"</td>"+
                "<td>"+response[index].pedido.fechaPedido+"</td>"+
                "<td>"+response[index].producto.nombre+"</td>"+
                "<td>"+response[index].cantidad+"</td>" + 
                "<td>"+
                "<div class='form-check'>"+
                "<input class = 'form-check-input' type='checkbox' disabled ><label class='form-check-label' for='defaultCheck1'>Autorizado</label> "+   
                "</div>"+
                "</td>"+
                "<td>"+
                "<center>"+
                "<button class='btn btn-success'>Autorizar</button>"+
                "</center>"+
                "</td>"               
             
             +"</tr>");
            
        }
        if(response==""){
            console.log("::");
        }else{
            console.log(":W");
            
        }
        
      });
}



}
/**$("tbody").append("<tr id="+localStorage.idT+">"+
                "<td>"+localStorage.idT+"</td>"+
                "<td id=distribuidor></td>"+
                "<td>"+localStorage.fechaT+"</td>"+
                "<td>BD</td>"+
                "<td>BD</td>" + 
                "<td>"+
                "<div class='form-check'>"+
                "<input class = 'form-check-input' type='checkbox' disabled "+check+"><label class='form-check-label' for='defaultCheck1'>Autorizado</label> "+   
                "</div>"+
                "</td>"+
                "<td>"+
                "<center>"+
                "<button class='btn btn-success'>Autorizar</button>"+
                "</center>"+
                "</td>"               
             
             +"</tr>"); */