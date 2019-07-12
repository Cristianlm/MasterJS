'use strict'
// localstorage, comprobar disponibilidad del localstorage 
if (typeof(Storage)!== 'undefined'){
    console.log('Localstorage disponible');
} else {
    console.log('Incompatible');
}
// guardar datos en el localstorage 
localStorage.setItem("titulo","Curso de Synfony de Victor Robles");
//Recuperar elemento 

document.querySelector("#peliculas").innerHTML =localStorage.getItem("titulo");
// Guardar objetos 
var usuario = {
    nombre:"Cristian",
    email: "thark.cris@gmail.com",
    web:"vendobolibic.com"
};

localStorage.setItem("usuario", JSON.stringify(usuario));
//Recuperar datos objetos 
 var userjs= JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
 document.querySelector("#peliculas").append(" " + userjs.email+ " - "+ userjs.nombre);