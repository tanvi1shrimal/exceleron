
$('.selectpicker').selectpicker();

//script for changing the input color

$(document).ready(function(){


		$( ".form-amount input" ).on('keyup', function() {
	// $('.form-amount input[value!=""]').addClass('correct');
		if($( 'input').length > 0 && $('input').val() != ''){
			$(this).addClass("active");
		}
		else {
			$(this).removeClass("active");
			return true;
		}
	});

});