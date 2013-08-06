// JS
jQuery(document).ready(function($){
	// grab the top navigation
	var nav = $('.top-bar-section > ul li');  
	var navPos = $('.top-bar-section');
	
	nav.before('<li class="divider"/>'); 

	var subNav = $('.dropdown');
	subNav.parent('li').addClass('has-dropdown');
	subNav.addClass('dropdown');


}); // annon