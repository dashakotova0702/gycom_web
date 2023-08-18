$(window).scroll(function() {
    if($(window).scrollTop() > 0) {
        $(".text_menu").css("color", "black");
        $(".home").css("display", "none");
        $(".home_black").css("display", "block");
        $(".dropdown_menu").css("background-color", "white");
        $(".container_menu").css("background-color", "white");
        $(".container_menu").css("box-shadow", "0 0.4em 5px rgba(122,122,122,0.2)");
    } else {
        $(".text_menu").css("color", "white");
        $(".home").css("display", "block");
        $(".home_black").css("display", "none");
        $(".dropdown_menu").css("background-color", "transparent");
        $(".container_menu").css("background-color", "transparent");
        $(".container_menu").css("box-shadow", "none");
    }
});