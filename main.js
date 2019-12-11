$(document).ready(function(){
    //inserisco 36 quadrati nel container
    for (var i = 0; i < 36; i++) {
        $('.container').append('<div class="quadrato"></div>');
    }
    // Ad ogni click su un quadratino
    $('.quadrato').click(function(){
        var currentSquare = $(this);
        //se non l'ho già cliccato
        if (!(currentSquare.hasClass('verde')) && !(currentSquare.hasClass('giallo'))) {

            // parte una chiamata AJAX all'API
            $.ajax({
                url : 'https://flynn.boolean.careers/exercises/api/random/int',
                method : 'GET',
                success : function (data) {
                    console.log(data.response);
                    $(currentSquare).text(data.response);
                    // se il numero <= 5 il quadratino diventa giallo
                    if (data.response <= 5) {
                        $(currentSquare).addClass('giallo');
                    } else {
                    // se il numero > 5 il quadratino diventa verde
                        $(currentSquare).addClass('verde');
                    }
                },
                error : function (err) {
                alert("E' avvenuto un errore");
                console.log(err.status);
                }
            });
        }
    })
})
