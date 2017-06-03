// Tips Slider
$('.tips-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
  	cssEase: 'ease',
  	autoplay: true,
  	speed: 250
});

// CARD EXPAND BLOCK

// Open expand block
$('a.card-expand').on('click', function(e){
	e.preventDefault();
	$('.card-expand-block').addClass("shown");
	e.stopPropagation()
});

// Close expand block when clicked outside any of he cards
$(document).on("click", function(e) {
	if (!$('.card').is(e.target) && $('.card').has(e.target).length === 0) {
	  $(".card-expand-block").removeClass("shown");
	}
});


//Alert info block
// $('.alert-info-icon').hover(function(){
// 	if($(this).hasClass('active')) {
// 		$(this).removeClass('active')
// 	}
// 	else {
// 		$(this).addClass('active');
// 	}
// });
