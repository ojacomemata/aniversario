const photos = document.querySelectorAll(".polaroid img");

photos.forEach(photo=>{

    photo.addEventListener("click",()=>{

        openViewer(photo.dataset.full);

    });

});