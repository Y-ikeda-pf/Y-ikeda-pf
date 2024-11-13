$(function(){
	$('.header_menu a[href^="#"], .footer_menu a[href^="#"], .top_btn a[href^="#"], .container04 a[href^="#"], .contents02_03 a[href^="#"]').click(function(){
	  var adjust = -60;
	  var speed = 400;
	  var href= $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top + adjust;
	  $('body,html').animate({scrollTop:position}, speed, 'swing');
	  return false;
    });
});
