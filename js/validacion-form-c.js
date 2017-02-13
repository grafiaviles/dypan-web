// Validacion con Jquery
var expRegNombre = /^[a-zA-ZÑñÁáÉéíÍóÓúÚ\s]+$/;
var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    
$('#btn-enviar').on('click', function(){
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var ubicacion = $("#ubicacion").val();
    var mensaje = $("#mensaje").val();
    
    if (nombre == "" || !expRegNombre.test(nombre)){
        $("#mensaje1").fadeIn();
        return false;
    } else {
        $("#mensaje1").fadeOut();
        if (email == "" || !expRegEmail.test(email)){
            $("#mensaje2").fadeIn();
            return false;
        } else {
            $("#mensaje2").fadeOut();
        if (ubicacion == ""){
            $("#mensaje3").fadeIn();
            return false;
        } else {
            $("#mensaje3").fadeOut();
            }
            if (mensaje == "") {
                $("#mensaje4").fadeIn();
                return false;
            }
        }
    }
});