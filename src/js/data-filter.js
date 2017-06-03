

$('.panel-filter .panel-heading a').click(function() {
    // $('.panel-heading').removeClass('actives');
    $(this).parents('.panel-heading').toggleClass('actives');
    $(this).parents('.panel-filter').siblings(".panel-filter").find('.panel-heading').removeClass('actives');

    $(this).find(".panel-filter__count").toggleClass('show-count');
    $(this).parents('.panel-filter').siblings(".panel-filter").find(".panel-filter__count").removeClass('show-count');

});


//fcuntion to show the filter-data

$(document).ready(function(){

	$(".filter").click(function(){
		$(".data-filters").addClass("show-data");
		
		$(".filter-header__close ").click(function(){
			$(".data-filters").removeClass("show-data");
		});
	});

});