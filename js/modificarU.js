window.onload=function () {
    llenarEspacios()
    function llenarEspacios() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/api/Sucursals/"+localStorage.idModificar+"?filter={%20%20%20%20%20%22include%22:[%22usuario%22,%22direccion%22,%22telefono%22]%20}&=",
            "method": "GET",
            "headers": {
              "Authorization": localStorage.token,
              "Content-Type": "application/json",
              "cache-control": "no-cache",
              "Postman-Token": "e0abf0a2-5970-40ea-b140-4252123e3b27"
            },
            "processData": false,
            "data": "{\n  \"estatus\": \"pendiente\",\n  \"fechaPedido\": \"10/11/18\",\n  \"fechaPagado\": \"11/11/18\",\n  \"sucursalId\": \"5c006d62798c353c57007b93\",\n  \"usuarioId\": \"5c006801798c353c57007b90\"\n}"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            $("#nombre").val(response.usuario.username);
            $("#correo").val(response.usuario.email);
            
            $("#nombreSucursal").val(response.nombre);
            $("#calle").val(response.direccion.calle);
            $("#colonia").val(response.direccion.colonia);

            $("#CP").val(response.direccion.cp);
            $("#ciudad").val(response.direccion.ciudad);
            $("#estado").val(response.direccion.estado);
            $("#telefono").val(response.telefono.numero);
            $("#enviarU").on("click",function () {

                modificarU(response.usuario.id,
                          $("#nombre").val(),
                          response.usuario.email,
                          response.direccion.id,
                          response.telefono.id);
                modificarsucursal(response.id,
                                $("#nombreSucursal").val(),
                                response.usuario.id,
                                response.direccion.id,
                                response.telefono.id);
                modificarDomicilio(response.direccion.id,
                                  $("#calle").val(),
                                  $("#colonia").val(),
                                  $("#CP").val(),
                                  $("#ciudad").val(),
                                  $("#estado").val());
                modificacionTelefono(response.telefono.id,
                                    $("#telefono").val());
                                    alert("usuario modificado");
            });
          });
    }
    
    function modificarU(id,nombre,correo,direccion,telefono) {
        console.log(nombre);
        
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/api/Usuarios/"+id,
            "method": "PUT",
            "headers": {
              "Authorization": localStorage.token,
              "Content-Type": "application/json",
              "cache-control": "no-cache",
              "Postman-Token": "6a4b096f-54ed-4380-9255-8db910d07d93"
            },
            "processData": false,
            "data": "\n{\n  \"realm\": \"proveedor\",\n  \"username\": \""+nombre+"\",\n  \"email\": \""+correo+"\",\n  \"id\": \""+id+"\",\n  \"direccionId\": \""+direccion+"\",\n  \"telefonoId\": \""+telefono+"\",\n\"password\":\""+localStorage.contraseña+"\"\n}"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
    }
    function modificarsucursal(id,nombre,usuario,direccion,telefono) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/api/Sucursals/"+id,
            "method": "PUT",
            "headers": {
              "Authorization": localStorage.token,
              "Content-Type": "application/json",
              "cache-control": "no-cache",
              "Postman-Token": "05629389-4f9c-42d4-9a12-8db8e603cef4"
            },
            "processData": false,
            "data": "{\n    \"nombre\": \""+nombre+"\",\n    \"id\": \""+id+"\",\n    \"usuarioId\": \""+usuario+"\",\n    \"direccionId\": \""+direccion+"\",\n    \"telefonoId\": \""+telefono+"\"\n  }"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
        
    }
    function modificarDomicilio(id,calle,colonia,cp,ciudad,estado) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/api/Direccions/"+id,
            "method": "PUT",
            "headers": {
              "Authorization": localStorage.token,
              "Content-Type": "application/json",
              "cache-control": "no-cache",
              "Postman-Token": "9ffa0310-605e-4d0a-92ff-23ae13522ee0"
            },
            "processData": false,
            "data": "{\n    \"calle\": \""+calle+"\",\n    \"colonia\": \""+colonia+"\",\n    \"cp\": \""+cp+"\",\n    \"ciudad\": \""+ciudad+"\",\n    \"estado\": \""+estado+"\",\n    \"id\": \""+id+"\"\n  }"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
    }
    function modificacionTelefono(id,numero) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "http://localhost:3000/api/Telefonos/"+id,
            "method": "PUT",
            "headers": {
              "Authorization": localStorage.token,
              "Content-Type": "application/json",
              "cache-control": "no-cache",
              "Postman-Token": "1606c701-1979-4432-9f51-7215e6a05e2a"
            },
            "processData": false,
            "data": "{\n    \"numero\": \""+numero+"\",\n    \"clave\": \"477\",\n    \"id\": \""+id+"\"\n  }"
          }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
          });
    }
    var x= setInterval(function () {
        if($("#regresar").length!=0){
            $("#regresar").on("click",function () {
                localStorage.idModificar="";
                setTimeout(() => {
                    location.href="sucursales.html"
                }, 1000);
            });
        }

    });
};