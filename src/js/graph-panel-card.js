$(".card-expand--graph").on('click', function() { 
    $(".graph-panel").collapse('show');
    $(this).parents(".card-graph-expand").addClass("is--opened");

    $(".card, .card-graph-expand").filter(":not(.is--opened, .card-graph)").addClass('is--faded');
});

$(".graph-panel .close").on('click', function() { 
    $(".graph-panel").collapse('hide');
    $(".card-graph-expand").removeClass("is--opened");
    $(".card").removeClass('is--faded');
});
