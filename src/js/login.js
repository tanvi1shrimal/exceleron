$('#reset-password').on('click', function(){
	$(".password-reset-form").addClass("shown");
});

$("#reset-password-back").on('click', function(){
	$(".password-reset-form").removeClass("shown");
});

// Login form validation
$('.login-form').validator();

// Forgot password form validation
$('.password-reset-form').validator();