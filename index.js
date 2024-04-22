window.onscroll = function() {sataAndagi()};

var topnav = document.getElementById("topnav1");
var sticky = topnav.offsetTop;

function sataAndagi() {
  if (window.scrollY >= sticky) {
    topnav.classList.add("sticky");
  } else {
    topnav.classList.remove("sticky");
  }
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("CarouselSlide");
  let dots = document.getElementsByClassName("ProgressDot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Verificar el nivel de zoom actual del sitio web
const zoomLevel = window.devicePixelRatio * 100;

// Función para mostrar la ventana emergente según el zoom
function mostrarVentanaEmergente() {
    const ventanaEmergente = document.getElementById("ventanaEmergente");
    const mensajeVentana = document.getElementById("mensajeVentana");
    const cerrarVentana = document.getElementById("cerrarVentana");
    const fondoOpaco = document.getElementById("fondoOpaco");

    if (zoomLevel === 150) {
        mensajeVentana.innerText = "Favor de darle un zoom de 80% al sitio web y y refrescar la pagina";
        ventanaEmergente.style.display = "block"; // Mostrar la ventana emergente
        fondoOpaco.style.display = "block"; // Mostrar el fondo opaco
    } else if (zoomLevel === 125) {
        // No se muestra ninguna alerta
    } else if (zoomLevel === 100) {
        mensajeVentana.innerText = "Favor de darle un zoom de 125% al sitio web y y refrescar la pagina";
        ventanaEmergente.style.display = "block"; // Mostrar la ventana emergente
        fondoOpaco.style.display = "block"; // Mostrar el fondo opaco
    }

    // Cerrar la ventana emergente solo si el usuario cambió su resolución
    cerrarVentana.addEventListener("click", function() {
        if (window.devicePixelRatio * 100 !== zoomLevel) {
            ventanaEmergente.style.display = "none"; // Ocultar la ventana emergente al cerrarla
            fondoOpaco.style.display = "none"; // Ocultar el fondo opaco al cerrar la ventana
        }
    });

    // Deshabilitar clics en el resto de la página mientras la ventana emergente esté abierta
    document.body.style.pointerEvents = "none";

    // Habilitar clics en la ventana emergente
    ventanaEmergente.style.pointerEvents = "auto";
}

// Ejecutar la función cuando la página se cargue completamente
window.onload = mostrarVentanaEmergente;
