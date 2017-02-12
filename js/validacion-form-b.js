function validarForm (){
    
    var varificar = true; 
    var expRegNombre = /^[a-zA-ZÑñÁáÉéíÍóÓúÚ\s]+$/;
    var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    alert("Validando");
}
// cuando carge la ventana ejecuta algo que este en el HTML...
window.onload = function(){
    var botonEnviar = document.getElementById('btn-enviar');
    botonEnviar.onclick = validarForm;
}