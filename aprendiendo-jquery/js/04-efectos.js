$(document).ready(function () {



    // efectos hide y show
    $('#mostrar').hide();

    $('#mostrar').click(function () {
        $(this).hide();
        $('#ocultar').show();
        $('#caja').show();
    });
    $('#ocultar').click(function () {
        $(this).hide();
        $('#mostrar').show();
        $('#caja').hide();
    });



});