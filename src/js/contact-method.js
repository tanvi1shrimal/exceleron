var timeoutHandler = null;

$(".btn--alert-edit").on('click', function(){
	var $clickedEl = $(this);
	var $contactNo = $clickedEl.parents('.alert').find(".alert__info-value");

	$clickedEl.parents(".alert").addClass("is-open is-absolute");
	$clickedEl.parents(".contact-method__list").addClass("is-static");

	$contactNo.replaceWith("<input type='text' class='alert__info-value form-input' placeholder='" + $contactNo.html() +"'></input>");

	$(".alert__info-value").focus();

	$(".overlay").addClass("overlay--active");
});

$(".btn--alert-save").on('click', function(){
	var $clickedEl = $(this);
	$clickedEl.parents(".alert").removeClass("is-open");

	var $contactNo = $clickedEl.parents('.alert').find(".alert__info-value");
	$contactNo.replaceWith("<span class='alert__info-value'>" + $contactNo.attr('placeholder') +"</span>");


	if (timeoutHandler) clearTimeout(timeoutHandler);

	timeoutHandler = setTimeout(function()
    {
        $clickedEl.parents(".alert").removeClass("is-absolute");
        $clickedEl.parents(".contact-method__list").removeClass("is-static");

    }, 250);

	$(".overlay").removeClass("overlay--active");

});


//function to edit contact-method in expert search page

$(document).ready(function(){

	$(".btn--alert-edit2").click(function(){

		var $parent = $(this).parents(".edit-alert");
		$parent.find(".time-visible").hide();
		$parent.addClass("is-edit");

		$parent.find(".time-selected").hide();
		$parent.find(".time-select").addClass("time-select--on");
		$parent.find(".alert-and").addClass("alert-and--on");
		$parent.find(".alert__info-time").addClass("alert__info-time--on"); 

		var html = parseInt($(this).closest(".edit-alert").find(".editNum").text());
        var input = $('<input type="number" class="editNum" />');
        input.val(html);
        $(this).closest(".edit-alert").find(".editNum").replaceWith(input);
        $('.edit-alert input').focus();
	});


	$(".btn--alert-save2").click(function(){
		var $parent = $(this).parents(".edit-alert");
		$parent.find(".time-visible").show();
		$parent.removeClass("is-edit");

        var inputVal = $parent.find("input.editNum").val();
		$parent.find("input.editNum").replaceWith('<span class="editNum">'+ inputVal +'</span>');

		$parent.find(".time-selected").show();
		$parent.find(".time-select").removeClass("time-select--on");
		$parent.find(".alert-and--on").removeClass("alert-and--on");
		$parent.find(".alert__info-time").removeClass("alert__info-time--on");

		var currentSelect1 = $parent.find(".time-select1 .dropdown-menu li.selected");
		var currentVal1 = currentSelect1.text();
		currentSpan1 = $parent.find(".time-selected1").html(currentVal1);

		var currentSelect2 = $parent.find(".time-select2 .dropdown-menu li.selected");
		var currentVal2 = currentSelect2.text();
		currentSpan2 = $parent.find(".time-selected2").html(currentVal2);
	
	});

});