$(document).ready(function () {

    // Eventos Mouse over 6out
    var caja = $("#caja");
    // caja.mouseover(function(){
    //     $(this).css("background", "red");
    // });
    // caja.mouseout(function(){
    //     $(this).css("backgorund", "green");
    // }); 
    //hover
    function cambiaRojo() {
        $(this).css("background", "red");
    }
    function cambiaVerde() {
        $(this).css("background", "green");
    }
    caja.hover(cambiaRojo, cambiaVerde);

    // click, doble click
    caja.click(function () {
        $(this).css("background", "blue")
            .css("color", "white");
    });
    caja.dblclick(function () {
        $(this).css("background", "pink")
            .css("color", "white");
    });

    // focus y blur
    var nombre= $('#nombre');
    var datos = $('#datos');
    nombre.focus(function(){
        $(this).css("border","2px solid green");
    });
    nombre.blur(function(){
        $(this).css("border", "2px solid transparent");
        
        datos.text($(this).val()).show();
    })

    //Mousedown y mouseup
    datos.mousedown(function(){
        $(this).css("border-color","gray");
    });
    datos.mouseup(function(){
        $(this).css("border-color","black");
    });
    //MOUSEMOVE
    $(document).mousemove(function(){
        console.log("En x: " + event.clientX);
        console.log("En y: " + event.clientY);
        $('body').css("cursor","none");
        $("#sigueme").css("left", event.clientX)
        .css("top", event.clientY);
       
    });




});