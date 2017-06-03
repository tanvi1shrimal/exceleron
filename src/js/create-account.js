$('.ex-calendar--blue').datepicker({
	dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	dateFormat: "dd-mm-yy",
	onSelect: function(dateText, inst) {
		var date = $(this).val();
		var dateNo = date.substring(0,2);
		$(this).prev().find(".calendar-dd-block__date").html(dateNo);
		
		var dateText = $(this).datepicker('getDate');
		var dateTextVal = $.datepicker.formatDate('DD', dateText)
		$(this).prev().find(".calendar-dd-block__day").html(dateTextVal);
	}
});

$('.ex-calendar--orange').datepicker({
	dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	dateFormat: "dd-mm-yy",
	setDate: "10/12/2012",
	onSelect: function(dateText, inst) {
		var date = $(this).val();
		var dateNo = date.substring(0,2);
		$(this).prev().find(".calendar-dd-block__date").html(dateNo);
		
		var dateText = $(this).datepicker('getDate');
		var dateTextVal = $.datepicker.formatDate('DD', dateText)
		$(this).prev().find(".calendar-dd-block__day").html(dateTextVal);
	}
});