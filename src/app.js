// const arrImagenes = ['../fondo1.jpg', '../fondo2.jpg', '../fondo3.jpg', '../fondo4.jpg'];

// console.log(arrImagenes)
// const rotarImagenes = () => {
//     let index = Math.floor((Math.random() * arrImagenes.length));

//     document.getElementById("imagen").src = arrImagenes[index];
// }

// onload = () => {
//     rotarImagenes()

//     setInterval(rotarImagenes, 4000);
// }

$(document).on('click', '.navbar-collapse', function (e) {
    if ($(e.target).is('a')) {
        $(this).collapse('hide');
    }
});


/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
