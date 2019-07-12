$(document).ready(function(){

    reloadLinks();

    $('#add_button')
        .removeAttr('disabled')
        .click(function(){
        // $('#menu').prepend('<li><a href="'+ $('#add_link').val()+'"></a></li>');
        // $('#menu').before('<li><a href="'+ $('#add_link').val()+'"></a></li>');
       // $('#menu').after('<li><a href="'+ $('#add_link').val()+'"></a></li>');
        $('#menu').append('<li><a href="'+ $('#add_link').val()+'"></a></li>');
        $('#add_link').val('');
        reloadLinks();
    });

    // Lo hemos metido en una función
function reloadLinks(){

    $('a').each(function(index){
        var that= $(this);
        var enlace=  $(this).attr("href");
        // Attr para añadir nuevos atributos a los enlances
        that.attr('target','_blank');

        // remover attr

         that.text(enlace);
     
     });
}
     


});