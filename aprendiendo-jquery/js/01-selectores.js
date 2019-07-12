// primero Hay que comprobar si el documento está listo, para que esté todo ready. 
//el $ siempre se refiere al objeto JQuery en general. $ => JQuery
// dentro del parentesis () son los selectores.
$(document).ready(function () {

    //Selector de ID
    $("#rojo").css("background", "red")
        .css("color", "white");
    $("#amarillo").css("background", "yellow")
        .css("color", "green");
    $("#verde").css("background", "green")
        .css("color", "white");
    

        // Selectores de clase
    var mi_clase= $('.zebra').css("padding","5px");
    


   
    $('.sin_borde').click(function() {
        console.log("Click dado");
       
        $(this).addClass('zebra');
    });

            //selectores de etiqueta 

            var parrafos =$('p').css("cursor","pointer");
            parrafos.click(function() {
                var that= $(this);
              if(!that.hasClass('grande')){
                  that.addClass('grande');
              }else{
                  that.removeClass('grande');
              }
            });

            // Selectores de atributos, utilizando los corchetes[]
            $('[title="Google"]').css("background","#ccc");
            $('[title="Facebook"]').css("background","blue");
            //Otros 
            //$('p, a').addClass('margen-superior');
            // El método find nos ayuda a buscar dentro de un arbol html muy grande un elemento o elementos concretos que no sabemos donde están.
            // parent, salir a las etiquetas padre y despues buscar.
            var busqueda= $("#caja").find('.resaltado').eq(0).parent().find('[title="Google"]');
            console.log(busqueda);


});
// El dolar siempre se refiere al JQuery, al objeto JQuery como tal.