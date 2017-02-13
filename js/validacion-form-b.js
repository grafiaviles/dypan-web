// Paso 1 - Crear Funcion de Validacion
function validarForm (){
    
    // alert("Validando");
    var verificar = true; 
    var expRegNombre = /^[a-zA-ZÑñÁáÉéíÍóÓúÚ\s]+$/; //Expersiones regulares Nombre
    var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; //Expersiones regulares Email
    
    var myForm = document.getElementById('myForm');
    var nombre = document.getElementById('nombre');
    var email = document.getElementById('email');
    var ubicacion = document.getElementById('ubicacion');
    var mensaje = document.getElementById('mensaje');
    
    if(!nombre.value){
        alert("El campo nombre es requerido");
        nombre.focus();
        verificar = false;
    }
    // Expresión Regular para el Nombre
    else if (!expRegNombre.exec(nombre.value)){
        alert("El campo nombre solo acepta letras");
        nombre.focus();
        verificar = false;
    }
    else if(!email.value){
        alert("El campo email es requerido");
        email.focus();
        verificar = false;
    }
    // Expresión Regular para el Email
    else if (!expRegEmail.exec(email.value)){
        alert("Ingrese un correo válido");
        email.focus();
        verificar = false;
    }
    else if(!ubicacion.value){
        alert("El campo ubicación es requerido");
        ubicacion.focus();
        verificar = false;
    }
    else if(!mensaje.value){
        alert("El campo Mensaje es requerido");
        mensaje.focus();
        verificar = false;
    }
    if(verificar){
        alert("Se ha enviado el formulario");
        document.getElementById("myForm").submit();
    }
    
}
// Paso 2 - cuando carge la ventana ejecuta algo que este en el HTML...
window.onload = function(){
    var botonEnviar = document.getElementById('btn-enviar');
    botonEnviar.onclick = validarForm;
}