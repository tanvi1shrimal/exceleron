var timeoutHandler = null;

$(".btn--alert-edit").on('click', function(){
	
	var $clickedEl = $(this);
	var $messageNo = $clickedEl.parents('.alert-notification').find(".alert-notification__value");

	$clickedEl.parents(".alert-notification").addClass("is-open is-absolute");
	$clickedEl.parents(".card-body").addClass("is-static");

	$messageNo.replaceWith("<input type='text' class='alert-notification__value form-input' placeholder='" + $messageNo.html() +"'></input>");

	$(".alert-notification__value").focus();

	$(".overlay").addClass("overlay--active");
});

$(".btn--alert-save").on('click', function(){
	var $clickedEl = $(this);
	$clickedEl.parents(".alert-notification").removeClass("is-open");

	var $messageNo = $clickedEl.parents('.alert-notification').find(".alert-notification__value");
	$messageNo.replaceWith("<div class='alert-notification__value'>" + $messageNo.attr('placeholder') +"</div>");


	if (timeoutHandler) clearTimeout(timeoutHandler);

	timeoutHandler = setTimeout(function()
    {
        $clickedEl.parents(".alert-notification").removeClass("is-absolute");
        $clickedEl.parents(".card-body").removeClass("is-static");

    }, 250);

	$(".overlay").removeClass("overlay--active");

});