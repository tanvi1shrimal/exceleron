

//function to call edit-low-balance
$(document).ready(function(){
    toggleButton();

    $(".subscription-panel-wrapper .edit-btn-edit").click(function(e){
        e.preventDefault();
        $(this).closest(".subscription-panel-wrapper").addClass("low-balance-edit");
        // $(this).html( $(this).text() == 'save' ? 'edit' : 'save');
        $(".overlay").addClass("overlay--active");
        $(this).hide();
        $(this).siblings(".edit-btn-save").show();
    });

    $(".subscription-panel-wrapper .edit-btn-save").click(function(e){
        e.preventDefault();
        $(this).closest(".subscription-panel-wrapper").removeClass("low-balance-edit");
        // $(this).html( $(this).text() == 'save' ? 'edit' : 'save');
        $(".overlay").removeClass("overlay--active");
         $(this).hide();
        $(this).siblings(".edit-btn-edit").show();
        // $(this).sibling(".edit-btn-edit").css("opacity","1");
    });         
});


//function close menu on click out of element
// $(function() {

//     //function for advanced serach
//     $(document).on('mouseup', function(e) {

//         container = $(".edit-balance");

//         if (!container.is(e.target)// if the target of the click isn't the container...
//         && container.has(e.target).length === 0)// ... nor a descendant of the container
//         {
//             if (container.hasClass('low-balance-edit')) 
//             {
//                 $(".edit-balance").removeClass("low-balance-edit");

//                  $(".overlay").removeClass("overlay--active");
//             }
//         }
    
//     });

// })


//function to switch between span and input
$(document).ready(function() {

    $(document).on('click', '.edit-btn-edit', function () {
            var html = parseInt($(this).parents(".subscription-panel-wrapper").find("span.editNum").text());
            var input = $('<input type="number" class="editNum"/>');
            input.val(html);
            $(this).parents(".subscription-panel-wrapper").find("span.editNum").replaceWith(input);
            $('.low-balance-edit input').focus();
    });

    $(document).on('click', '.edit-btn-save', function () {
        var inputVal = $(this).parents(".subscription-panel-wrapper").find("input.editNum").val();
        $(this).parents(".subscription-panel-wrapper").find("input.editNum").replaceWith('<span class="editNum">'+inputVal+'</span>')
    });


    $(document).on('click', '.edit-btn--usage', function () {
        var html = parseFloat(( $(this).parents(".edit-balance-detail").find("span.editNum").text()));
        var input = $('<input type="number" class="editNum" />');
        input.val(html);
        $(this).parents(".edit-balance-detail").find("span.editNum").replaceWith(input);
        $('.edit-balance-detail--active input').focus();
    });

    $(document).on('click', '.edit-btn--visible', function () {
        var inputVal = $(this).parents(".edit-balance-detail").find("input.editNum").val();
        $(this).closest(".edit-balance-detail").find("input.editNum").replaceWith('<span class="editNum">'+inputVal+'</span>')
    });
    
    // $(document).on('blur', '.low-balance-wrapper input', function(){
    //     $(this).replaceWith('<span class="editNum">'+this.value+'</span>')
    // })

    
});


// Close Download app popup
$(".download-app .close-btn").on('click', function(){
    $('.download-app').hide();
});

//function to activate the edit-balance 
$(document).ready(function(){
    $(".collapse-body").hide();
    $(".edit-btn--usage").click(function(e){
        e.preventDefault();
        // $(this).parents(".edit-balance-detail").addClass("test");

        $(this).parents(".edit-balance-detail").addClass("edit-balance-detail--active");
        $(this).closest(".collapse-header").siblings(".collapse-body").slideDown();
        $(this).parents(".edit-balance-detail").siblings(".edit-balance-detail").find(".collapse-body").slideUp();
        $(this).parents(".edit-balance-detail").siblings(".edit-balance-detail").removeClass("edit-balance-detail--active");
        $(this).hide();
        $(this).parents(".edit-balance-detail").siblings(".edit-balance-detail").find(".edit-btn--usage").show();
    });

     $(".edit-btn--visible").click(function(e){
        e.preventDefault();
        $(this).closest(".edit-balance-detail").removeClass("edit-balance-detail--active");
        $(this).closest(".collapse-body").slideUp();
        $(this).parents(".edit-balance-detail").find(".edit-btn--usage").show();

     });
});

/*Add toggle action*/
function toggleButton() {
    $(document).on('click', '[data-button="toggle"]', function() {
        var findText = $(this).find('span').text(),
            altText = $(this).attr('data-alt');

        $(this).toggleClass('active');
        $(this).find('span').text(altText);
        $(this).attr('data-alt', findText);
    });
}