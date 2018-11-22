function bienvenida(){
let nombreparajugar = document.getElementById("nombre").value.toUpperCase();
if (nombreparajugar == ""){
  alert("Ingresa tu Nombre")
}else{
document.getElementById("nombreusuario").innerHTML = ("¡Hola " + nombreparajugar +"!" + "<br>" +  "Elige una categoria y demuestra de que Paises conoces más modismos:")

//Para hacer que aparezca botones ocultos
document.getElementById("oculto").style.display = "block"
}
}

function elegircategoria(){
  document.getElementById("preguntas1").style.display = "block"

}

//verificar rspuyestas 

var respuestaCorrecta = new Array("Genial"  , "Pues", "c1");
		
		function comprobarRadio(matriz){
		
			var numeroRespuestasOK=0;
			var numeroRespuestasKO=0;
			var solucion = document.getElementById("solucion");
			var tablaResultados ="<table border='1'>";
			
			for(j=0; j< matriz.length; j++){
			var radios = document.getElementsByName(j+1);
			
        for(i=0; i< radios.length;i++){
					if (radios[i].checked){
					var valor =  radios[i].value;
						if(valor == matriz[j]) {
						tablaResultados+= "Respuesta correcta: "+ valor ;
						numeroRespuestasOK++; 
						break;
						}else {
						tablaResultados+= "Respuesta incorrecta:"+ valor;
						numeroRespuestasKO++;
						break;
						}
					}
				}
				
				
			}
			var numeroRespuestasNulas=matriz.length - (numeroRespuestasOK + numeroRespuestasKO);
			tablaResultados+="<tr><td>Resultado: </td><td>Respuestas correctas: "+numeroRespuestasOK+"<br/>Respuestas incorrectas: "+ numeroRespuestasKO+"<br/>Respuestas en blanco: "+ numeroRespuestasNulas;
			solucion.innerHTML = tablaResultados;
	}
location.reload();