$(document).ready(function(){
// This function allows to set equal heights to columns.
// put the data-match-height on the wrapping container i.e. class="row"
// and then put the data-height-watch role on all panels, or columns
	
	$("[data-match-height]").each(function() {

	  var parentRow = $(this),
	      childrenCols = $(this).find("[data-height-watch]"),
	      childHeights = childrenCols.map(function(){ return $(this).height(); }).get(),
	      tallestChild = Math.max.apply(Math, childHeights);

	  childrenCols.css('min-height', tallestChild);

	});

//  uncomment below if you would like to add a class of right to the nav section

	// var $nav = $('.top-bar-section > ul');
	// $nav.addClass('right');


	
}); // end annon

jQuery(document).foundation();