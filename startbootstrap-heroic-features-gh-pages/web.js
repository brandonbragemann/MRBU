// JavaScript Document

$(document).ready(function(e) {
	  
  $("#ingresar").addEventListener("click",desplegable,false);
  $("#ingresar").addEventListener("click",login,false);
  $("#datos_usuario").addEventListener("invalid",validar_tiempo_real,true);
  $("#datos_usuario").addEventListener("invalid",revalidar,true);  
  $("#enviar").addEventListener("click",enviar,false);
  
  var nombre = $("#minombre");  
  var email = $("#miemail");
           
  nombre.addEventListener("input",validar,false); 
  email.addEventListener("input",validar,false);
  validar();
  
  $("#sugerencia").addEventListener("click",function(){alert("presionaste")},false);
      
});
 


function revalidar(e){

  var elemento=e.target;
  elemento.style.background="#FFDDDD"
}

function validar(){
  
  if(nombre.value=="" && email.value==""){
  
  nombre.setCustomValidity("Introduce nombre o appelido");
  
  nombre.style.background="#FFDDDD";
  email.style.background="#FFDDDD";
    
  }
  else{
  
  nombre.style.background="#FFFFFF";
  email.style.background="#FFFFFF";        
  }
}



function enviar(){
  
  var cuadro_usuario=document=getElementById("minombre");
  
  var correcto=document.datos_usuario.checkValidity();
  
  if(correcto==true){
  
  document.datos_usuario.submit();
  } else if(cuadro_usuario.validity.valueMissing==true || cuadro_usuario.validity.patternMismatch==true){
    
    alert("el usuario no puede estar vacio y recuerda debe tener minimo 3 letras");
  }
}

function validar_tiempo_real(e){
  
  
  var elemento=e.target;
  
  if(elemento.validity.valid==true){
    
  elemento.style.background="FFFFFF";
  }else{
  elemento.style.background="FFDDDD";
  }
}


function login(){
	
	var usuario=prompt("Ingresa El Usuario","Login");
	var clave =prompt("Ingresa La Contraseña","Login");
	
}

function desplegable(){
	
	var condicional;
	var oculto = $("#menu").css("left") == "-210px";
    if(oculto){
     $("#menu").animate({left:"0px"}, 1000);
	 $("#informacion").hide(1000);
    }else{
     $("#menu").animate({left:"-210px"}, 1000);
	 $("#informacion").show(1000);
    }
	

	
}