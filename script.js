$(window).scroll(function() {
    if($(window).scrollTop() > 0) {
        $(".text_menu").css("color", "black");
        $(".home").css("display", "none");
        $(".home_black").css("display", "block");
        $(".dropdown_menu").css("background-color", "white");
        $(".container_menu").css("background-color", "white");
        $(".container_menu").css("box-shadow", "0 0.4em 5px rgba(122,122,122,0.2)");
        $(".dropdown").css("box-shadow", "0 0.5em 15px rgba(122,122,122,0.5)");
    } else {
        $(".text_menu").css("color", "white");
        $(".home").css("display", "block");
        $(".home_black").css("display", "none");
        $(".dropdown_menu").css("background-color", "transparent");
        $(".container_menu").css("background-color", "transparent");
        $(".container_menu").css("box-shadow", "none");
        $(".dropdown").css("box-shadow", "none");
    }
});
$(document).ready(function(){
    $('.slider_products').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        arrows: false
    });
    $('.slider_news').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        arrows: false
    });
});