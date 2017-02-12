function validar(){
    var nombre, email, ubicacion, mensaje, expresion; //Almacenamos nuestros campos en variables
    nombre = document.getElementById('nombre').value; //Guardo el valor del campo ".value"
    email = document.getElementById('email').value;
    ubicacion = document.getElementById('ubicacion').value;
    mensaje = document.getElementById('mensaje').value;
    
    // Expresiones regulares
    
    var expresion = /\w+@\w+\.+[a-z]/;
        
    // Condicionales - Si nombre está vacio envia alerta.
    if(nombre === "" || email === "" || ubicacion === "" || mensaje === ""){
        alert("Todos lo campos son obligatorios");
        return false;
    }
    else if(!expresion.test(email)){
        alert("El correo no es válido");
        return false;
    }
};