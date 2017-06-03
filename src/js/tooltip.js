$(".ex-tooltip").hover(function() {
    $(this).addClass("is-open");

    var scrollTop = $(window).scrollTop(),
	offsetTop = $(".ex-tooltip.is-open").offset().top,
	distanceTop = (offsetTop - scrollTop) + 20,
	offsetLeft = $(".ex-tooltip.is-open").offset().left,
	distanceLeft = offsetLeft,

	tooltipWidth = $(".ex-tooltip.is-open").find(".ex-tooltip__content").width();

	//console.log("scrollTop: " + scrollTop + "| top: " + offsetTop + "| left: " + offsetLeft);

	$(".ex-tooltip.is-open").find(".ex-tooltip__content").css({
		top: distanceTop,
		left: (distanceLeft - tooltipWidth) + 40
	});

}, function() {
    $(this).removeClass("is-open");
});