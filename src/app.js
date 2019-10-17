// cambio de imagenes 

// let arrayImagenes = ["../img/fondo3.jpg", "../img/cipher.png"];

// const cambiarImagenes = () => {
//     let index = Math.floor((Math.random() * arrayImagenes.length));

//     document.getElementById("imagen").src = arrayImagenes[index];
// }

// onload = () => {
//     cambiarImagenes();
//     setInterval(cambiarImagenes, 5000);
// }

$(document).on('click', '.navbar-collapse', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});


/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
