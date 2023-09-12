$(window).scroll(function() {
    if($(window).scrollTop() > 0) {
        $(".menu_main_text").css("color", "black");
        $(".text_menu").css("color", "black");
        $(".home").css("display", "none");
        $(".home_black").css("display", "block");
        $(".dropdown_menu").css("background-color", "white");
        $(".container_menu").css("background-color", "white");
        $(".header_burger:before").css("background-color", "black");
        $(".header_burger:after").css("background-color", "black");
        $(".header_burger span").css("background-color", "black");
        $(".container_menu").css("box-shadow", "0 0.4em 5px rgba(122,122,122,0.2)");
        $(".dropdown").css("box-shadow", "0 0.5em 15px rgba(122,122,122,0.5)");
    } else {
        $(".menu_main_text").css("color", "white");
        $(".text_menu").css("color", "white");
        $(".home").css("display", "block");
        $(".home_black").css("display", "none");
        $(".dropdown_menu").css("background-color", "transparent");
        $(".container_menu").css("background-color", "transparent");
        $(".header_burger:before").css("background-color", "white");
        $(".header_burger:after").css("background-color", "white");
        $(".header_burger span").css("background-color", "white");
        $(".container_menu").css("box-shadow", "none");
        $(".dropdown").css("box-shadow", "none");
    }
    if($(window).scrollTop() > 0 && $(window).width() <= 900) {
        $(".inner").css("background-color", "white");
    } else if ($(window).scrollTop() == 0) {
        $(".inner").css("background-color", "transparent");
    }
    if($(window).scrollTop() > (window.innerHeight)){
        $('.30').animate({ num: 30}, {
            duration: 1000,
            step: function (num){
                this.innerHTML = (num++).toFixed(0)
            }
        });
        $('.60').animate({ num: 55}, {
            duration: 1000,
            step: function (num){
                this.innerHTML = (num+5).toFixed(0)
            }
        });
        $('.100').animate({ num: 90}, {
            duration: 1000,
            step: function (num){
                this.innerHTML = (num+10).toFixed(0)
            }
        });
        $('.4000').animate({ num: 3500}, {
            duration: 1000,
            step: function (num){
                this.innerHTML = (num+500).toFixed(0)
            }
        });
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
        arrows: false,
        centerPadding: '160px'
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
