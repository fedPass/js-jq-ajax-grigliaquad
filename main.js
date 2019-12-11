$(document).ready(function(){
    //inserisco 36 quadrati nel container
    for (var i = 0; i < 36; i++) {
        $('.container').append('<div class="quadrato"></div>');
    }

    // Ad ogni click su un quadratino
    $('.quadrato').click(function(){
        var currentSquare = $(this);
        // parte una chiamata AJAX all'API
        $.ajax({
            url : 'https://flynn.boolean.careers/exercises/api/random/int',
            method : 'GET',
            success : function (data) {
            $(currentSquare).html(data);
            // se il numero <= 5 il quadratino diventa giallo
            // se il numero > 5 il quadratino diventa verde
            },
            error : function (richiesta,stato,errori) {
            alert("E' avvenuto un errore. "+errore);
            }
        });
    })


})
