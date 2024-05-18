let space_value = document.getElementById("mySpaceing");
let blur_value = document.getElementById("myBlur");
let color_value = document.getElementById("favcolor");
let the_image = document.getElementById("image");

function space() {
    the_image.style.transform = `translate(${space_value.value}px)`;
    the_image.style.filter = `blur(${blur_value.value}px)`;
}

function colors() {
    document.getElementById('gallery').style.color = color_value.value;
}

space_value.addEventListener('input', space);
blur_value.addEventListener('input', space);
color_value.addEventListener('input', colors);
