window.onload= function(){
       listar();    

    function listar() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/api/Pedidos",
            "method": "GET",
            "headers": {
              "Authorization": "8wdxuM28swZN8RtSbMUI7cueoW47xyxtb18g9mx2OQ3CXukDQCYgOvPUsA4tMBXX",
              "cache-control": "no-cache",
              "Postman-Token": "39e78d81-5fe9-4aec-b4e3-f3c5a58c7ce0"
            }
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            if(tablalista && nombrelisto){
             console.log("pruebas"+localStorage.nombre);
             
            for (let index = 0; index < response.length; index++) {
                identificacionSucursales(response[index].sucursalId);
                localStorage.idT=response[index].id;
                localStorage.fechaT=response[index].fechaPedido;
                localStorage.autor=response[index].estatus;
                var check=((response[index].estatus!="pendiente") ?"checked":"");
                
                $("tbody").append("<tr id="+localStorage.idT+">"+
                "<td>"+localStorage.idT+"</td>"+
                "<td></td>"+
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
             
             +"</tr>");
            }
            }else{
                console.log(":::");
                
            }
                
            
          });
    }
    function click () {
        console.log(";;");
        
       var id= $(this).attr("id");
       $("#"+id+" input").attr("checked",true);
    }
    function tablalista(){
     
        while(("tbody").length!=1){
            if(("tbody").length==1){
                break;
            }
        }
        
    return true;
    }
    function nombrelisto(){
     
        while(localStorage.nombre==""){
            if(localStorage.nombre!=""){
                break;
            }
        }return true;
    }
    function identificacionSucursales(id) {
        localStorage.nombre=""
        
        var form = new FormData();
form.append("id", id);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "http://localhost:3000/api/Sucursals",
  "method": "GET",
  "headers": {
    "Authorization": "8wdxuM28swZN8RtSbMUI7cueoW47xyxtb18g9mx2OQ3CXukDQCYgOvPUsA4tMBXX",
    "cache-control": "no-cache",
    "Postman-Token": "03d6e042-6f28-4836-b6ab-e0ba11321b53"
  },
  "processData": false,
  "contentType": false,
  "mimeType": "multipart/form-data",
  "data": form
}
var sucursal="Mext 0";

$.ajax(settings).done(function (response) {

 var resp=jQuery.parseJSON(response);
 console.log(resp[0].nombre);
 
   localStorage.nombre=resp[0].nombre;
   
   
});
      }



}
