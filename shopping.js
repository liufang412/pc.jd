$(function(){
	$('.close').click(function(){
		$('.header-add img').hide();
		$(this).hide();
	});
	$('.jydq-nav a').hover(function(){
		// $(this).css({'background-color':' #C81623'});
		// $('.jydq-nav a span').css({'background-color':' #B1191A'});
		$(this).addClass('active1');


	},{
		// $(this).css({'background-color':''});
		// $('.jydq-nav a span').css({'background-color':''});
		$(this).remove('active1');
	})


















});