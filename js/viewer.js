const viewer = document.querySelector("#viewer");

const viewerImage = document.querySelector("#viewer-image");

const closeButton = document.querySelector("#viewer-close");

function openViewer(image){

    viewerImage.src = image;

    viewer.classList.add("open");

    document.body.style.overflow = "hidden";

}

function closeViewer(){

    viewer.classList.remove("open");

    document.body.style.overflow = "";

}

closeButton.onclick = closeViewer;

viewer.querySelector(".viewer-backdrop").onclick = closeViewer;