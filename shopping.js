
$(function(){
	$('.header-add span').click(function(){
		$('.header-add').css({'display':'none'});
	});
	$('.header-top-left').mouseover(function(){
		$('.xia').css({'display':'inline-block'});
		$('.xia').css({'transform':'rotate(180deg)'});
	});
	$('.header-top-left').mouseout(function(){
		$('.xia').css({'display':'inline-block'});
		$('.xia').css({'transform':'rotate(360deg)'});
	});
	$('.citylist').mouseover(function(){
		$('.song').css({'background-color':'#fff'});
	});
	$('.citylist').mouseout(function(){
		$('.song').css({'background-color':''});
	});
	$('.myjd0').mouseover(function(){
		$('.myjd').css({'display':'block'});
		$(this).css({'background-color':'#fff'});
	});
	$('.myjd0').mouseout(function(){
		$('.myjd').css({'display':'none'});
		$(this).css({'background-color':''});
	});
	$('.myjd').mouseover(function(){
		$('.myjd0').css({'background-color':'#fff'});
	});
	$('.myjd').mouseout(function(){
		$('.myjd0').css({'background-color':''});
		$(this).css({'display':'none'});
	});
	$('.phone').mouseover(function(){
		$(this).css({'background-color':'#fff'});
		$('.phonejd').css({'display':'block'});
	});
	$('.phone').mouseout(function(){
		$(this).css({'background-color':''});
		$('.phonejd').css({'display':'none'});
	})
	$('.guanzhujd').mouseover(function(){
		$(this).css({'background-color':'#fff'});
	});
	$('.guanzhujd').mouseout(function(){
		$(this).css({'background-color':''});
	});
	$('.khfw').mouseover(function(){
		$(this).css({'background-color':'#fff'});
		$('.khfw-hover').css({'display':'block'});
	});
	$('.khfw').mouseout(function(){
		$(this).css({'background-color':''});
		$('.khfw-hover').css({'display':'none'});
	});
	$('.wzdh').mouseover(function(){
		$(this).css({'background-color':'#fff'});
		$('.wzdh-hover').css({'display':'block'});
	});
	$('.wzdh').mouseout(function(){
		$(this).css({'background-color':''});
		$('.wzdh-hover').css({'display':'none'});
	});
	// $('.fixed-right-hover').mouseover(function(){
	// 	$('.base').css({'right':'35px','transition-duration':'1s'})
	// });
	// $('.fixed-right-hover').mouseout(function(){
	// 	$('.base').css({'right':'','transition-duration':'0.1s'})
	// });













	setInterval(function(){

	},1000);


	


});