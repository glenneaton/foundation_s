// JS
jQuery(document).ready(function($){
	var nav = $('.top-bar-section > ul li');  
	var navPos = $('.top-bar-section');
	var menuItem = $('.menu-item');
	menuItem.removeClass('active');
	var current = $('.current-menu-item');
	current.addClass('active');
	
	nav.before('<li class="divider"/>'); 

	var subNav = $('.dropdown');
	subNav.parent('li').addClass('has-dropdown');
	subNav.addClass('dropdown');


}); // annon