$(window).scroll(function(){
    var barra = $(window).scrollTop();
    var posicion = barra * 0.20;

    $('.container-full').css({
    'background-position': '0 -' + posicion + 'px'
    });
});
