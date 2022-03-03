$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed:100,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $(".slick-current").addClass("selected");
    $(".slick-current").next().next().addClass("selected");
    
    $('.carousel').on('afterChange', function(){
        $(".slick-current").addClass("selected");
        $(".slick-current").next().next().addClass("selected");
    });

    $('.carousel').on('beforeChange', function(){
        $(".slick-current").removeClass("selected");
        $(".slick-current").next().next().removeClass("selected");
    });

});


  