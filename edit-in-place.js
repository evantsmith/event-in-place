console.log("testing");

$(document).ready(function(){

    $('.editable-in-place p').on('click', function(event){
        $(event.target).addClass('hidden');
        var theInput = $(event.target).siblings();
        $(theInput).val($(event.target).text());
        $(theInput).removeClass('hidden');
        $(theInput).trigger('focus');
    });

    $('.editable-in-place input').on('blur',function(event){
        $(event.target).addClass('hidden');
        var thePar = $(event.target).siblings();
        $(thePar).text($(event.target).val());
        $(thePar).removeClass('hidden');
    });

    $('.editable-in-place-2 .text-box-2 .TA').on('click', function(event){
        $(event.target).hide();
        var textArea = $(event.target).siblings();
        textArea.show();

    });
});
