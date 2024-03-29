function mostrarImagen(src) {
    var imagenGrande = document.getElementById("imagenGrande");
    imagenGrande.innerHTML = "<img src='" + src + "' alt='Imagen grande'>";
    imagenGrande.style.display = "block";
}

function ocultarImagen() {
    var imagenGrande = document.getElementById("imagenGrande");
    imagenGrande.innerHTML = "";
    imagenGrande.style.display = "none";
}
