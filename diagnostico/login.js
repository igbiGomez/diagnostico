var inicioDeSesionRegistrado = "admin";
var contrasenhaRegistrada = "admin";



var botonlogin = document.querySelector("#btnlogin");

botonlogin.onclick = function(event){
      var inicioDeSesionIngresado = document.getElementById("user").value;
      var contrasenhaIngresada = document.getElementById("pass").value;

      
        if(inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada){
            alert("Bienvenido al sistema: " + inicioDeSesionIngresado);
          console.log("hola")
            location.replace('/principal.html')
        } else {
                alert("Inicio de sesión inválido. Favor intente de nuevo");
            }
        
  
    };