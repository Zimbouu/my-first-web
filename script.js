function changeImage(imagePath) {
    var img = document.getElementById("displayed-img");

    img.classList.add("image-fade-out");

    setTimeout(function() {
        img.src = "asset/" + imagePath;
        img.classList.remove("image-fade-out");
        img.classList.add("image-fade-in");
    }, 500);
}

function animateButton() {
    var button = event.target;
    button.classList.add("btn-animated");
    
    setTimeout(function() {
        button.classList.remove("btn-animated");
    }, 300);
}
