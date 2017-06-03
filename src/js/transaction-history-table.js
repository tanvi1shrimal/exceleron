$(".level1-heading > tbody > tr").click(function(){
	$(this).toggleClass('active');
	$(this).parents('.level1-heading').siblings(".level1-info").toggleClass('active');
	$(this).parents('.level1-heading').siblings(".level1-info").find(".level2-heading").toggleClass('active');
})
$(".level2-heading > tbody > tr").click(function(){
	$(this).toggleClass('active');
	$(this).parents('.level2-heading').siblings(".level2-info").toggleClass('active');
	$(this).parents('.level2-heading').siblings(".level2-info").find(".level3-heading").toggleClass('active');
})
$(".level3-heading > tbody > tr").click(function(){
	$(this).toggleClass('active');
	$(this).parents('.level3-heading').siblings(".level3-info").toggleClass('active');
	$(this).parents('.level3-heading').siblings(".level3-info").find(".level4-heading").toggleClass('active');
})
$(".level4-heading > tbody > tr").click(function(){
	$(this).toggleClass('active');
	$(this).parents('.level4-heading').siblings(".level4-info").toggleClass('active');
	$(this).parents('.level4-heading').siblings(".level4-info").find(".level5-heading").toggleClass('active');
})
$(".level5-heading > tbody > tr").click(function(){
	$(this).parents('.level5-heading').siblings(".level5-info").toggle();
	// $(this).siblings(".level1-info").find(".level6-heading").toggleClass('active');
})