$( window ).ready(function() {

	$('#header').bind('hover', function() {
				$('#header').toggleClass('grow');
				$('nav > ul').toggleClass('slideDown');
				if($('#navigationMenu a').hasClass('slideRight'))
				$('#navigationMenu a').removeClass('slideRight');				
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

		console.log( "framwork actions loaded!" );

});