$(window).ready(function() {
    $('#header').bind('hover', function() {
        $('nav > ul').toggleClass('slideDown');
        $('#menu_icon').toggleClass('spinItem');
        if($('#navigationMenu a').hasClass('slideRight')) {
            $('#navigationMenu a').removeClass('slideRight');
        }
    });
    $('#menu_0').bind('click', function() {
        $('#menu_0 > div > a').toggleClass('slideRight');
        $('#menu_1 > div > a').removeClass('slideRight');
        $('#menu_2 > div > a').removeClass('slideRight');
        $('#menu_3 > div > a').removeClass('slideRight');
    });
    $('#menu_1').bind('click', function() {
        $('#menu_0 > div > a').removeClass('slideRight');
        $('#menu_1 > div > a').toggleClass('slideRight');
        $('#menu_2 > div > a').removeClass('slideRight');
        $('#menu_3 > div > a').removeClass('slideRight');
    });
    $('#menu_2').bind('click', function() {
        $('#menu_0 > div > a').removeClass('slideRight');
        $('#menu_1 > div > a').removeClass('slideRight');
        $('#menu_2 > div > a').toggleClass('slideRight');
        $('#menu_3 > div > a').removeClass('slideRight');
    });
    $('#menu_3').bind('click', function() {
        $('#menu_0 > div > a').removeClass('slideRight');
        $('#menu_1 > div > a').removeClass('slideRight');
        $('#menu_2 > div > a').removeClass('slideRight');
        $('#menu_3 > div > a').toggleClass('slideRight');
    });
    $('.menuLink').bind('click', function() {
        window.alert('Clicked!');
    });

    $('.buttonSaveModule').bind('click', function() {
        $('a.active').parent().next('li').children('a').click();
    	$('#module_wrapper').addClass('slideDown');
    });
    
    $('.buttonPreviousModule').bind('click', function() {
        $('a.active').parent().prev('li').children('a').click();
    	$('#module_wrapper').addClass('slideExpandUp');
    });
    
    console.log("framwork actions loaded!");
});