document.addEventListener('DOMContentLoaded', function(){//aqui especificamos que evento vamos a escuchar y le decimos que funcion se ejecutara
    iniciarApp();
});
function iniciarApp(){
    slider();
    MostrarMenu();
}
function MostrarMenu(){
    var  menu = $(".menu"); 
    $(".boton").click(function(){
        menu.slideToggle("slow"); // toggle y sus variaciones lo muestra y oculta (fade , slide)
    });
}
function slider(){
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          speed: 1000,
          captions: true,
          slideWidth: 1200,
          auto: true,
          pause: 6000
        });
      });
}
