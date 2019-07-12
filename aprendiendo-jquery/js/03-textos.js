$(document).ready(function(){
     $('a').each(function(index){
       var that= $(this);
       var enlace=  $(this).attr("href");
        that.text(enlace);
    
    });

});