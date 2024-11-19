// Obtén los elementos del DOM
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

// Al hacer clic en el botón, muestra la ventana
btn.onclick = function() {
    modal.style.display = "block";
}

// Al hacer clic en la 'X', cierra la ventana
span.onclick = function() {
    modal.style.display = "none";
}

// Si se hace clic fuera del contenido de la ventana, cierra la ventana
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
