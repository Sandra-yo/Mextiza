window.onload=function(){
tabla();



function tabla() {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/Sucursals?filter=%7B%22include%22%3A%5B%22usuario%22%2C%22telefono%22%2C%22direccion%22%5D%7D",
        "method": "GET",
        "headers": {
          "authorization": localStorage.token,
          "cache-control": "no-cache",
          "postman-token": "c95892bb-f8cd-d019-0d3b-b4e6766b3227"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        for (let index = 0; index < response.length; index++) {
            console.log(response[0].direccion.calle+" "+response[0].direccion.colonia+" "+response[0].direccion.cp+" "+response[0].direccion.ciudad+" "+response[0].direccion.estado);
            
            $("tbody").append("<tr id="+response[index].id+">"+
                "<td>"+response[index].id+"</td>"+
                "<td id=distribuidor>"+response[index].nombre+"</td>"+
                "<td>"+response[index].usuario.username+"</td>"+
                "<td>"+response[index].telefono.numero+"</td>"+
                "<td>"+response[index].direccion.calle+" "+response[index].direccion.colonia+" "+response[index].direccion.cp+" "+response[index].direccion.ciudad+" "+response[index].direccion.estado+"</td>" + 
                "<td>"+
                "<center>"+
                "<button id='baja' index='"+response[index].id+"' class='btn btn-danger'>Dar de baja</button>"+
                
                "<button id='modifica' index='"+response[index].id+"' class='btn btn-success'>Modificar</button>"+
                "</center>"+
                "</td>"               
             
             +"</tr>");
            
        }
      });
}
var time = this.setInterval(function name(params) {
    if($(".btn-danger").length){
clearInterval(time);
btnFuncion();
    }
},1000);


function btnFuncion() {
    $(".btn-danger").on("click",function () {
      //  console.log($(this).attr("index"));
       existencia($(this).attr("index"));

    });
    $(".btn-success").on("click",function () {
       console.log($(this).attr('index'));
       localStorage.idModificar=$(this).attr('index');
       
       location.href="modificaUsuarios.html";

    });
}
function borrar(id) {
    var form = new FormData();

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/api/Sucursals/"+id,
  "method": "DELETE",
  "headers": {
    "authorization": localStorage.token,
    "cache-control": "no-cache",
    "postman-token": "e0f99d46-1137-68ec-cc15-2d2e5da15d79"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
}

function existencia(idSucur) {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "http://localhost:3000/api/Sucursals/"+idSucur+"/pedido",
        "method": "GET",
        "headers": {
          "authorization": localStorage.token,
          "cache-control": "no-cache",
          "postman-token": "84cc57fa-9264-7703-cf62-7ced061dc434"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        alert("Este usuario no debe eliminarse, tiene registro de pedidos");
      }).fail(
        function (response) {
            console.log(response);
                    borrar(idSucur);
        location.href="sucursales.html";
        }
      );
}
};