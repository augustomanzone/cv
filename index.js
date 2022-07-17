$(document).ready(function(){
    $(window).scroll(function(){
        if( this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
   $('.menu-btn').click(function(){
        $('.menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");

    
        })
});


var typed = new Typed(".typing",{
    strings: ['Liquidador de siniestros', 'Perito accidentologo', 'Lic. en accidentologia y prenvencion vial', 'Estudiante de Desarrollador fullstack'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true



});