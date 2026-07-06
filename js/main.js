document.addEventListener("DOMContentLoaded", () => {

    console.log(`
    ❤️ Bienvenida, amor.

    Si estás viendo la consola,
    significa que encontraste
    uno de los secretos de la página.

    Gracias por estos 3 años.
    `);

});

const photos = document.querySelectorAll(".polaroid img");

photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        openViewer(photo.dataset.full);

    });

});