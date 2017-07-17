//Rutinas

//***********************************
//script para el botón "top"
//***********************************
var btnInterval;
// MUESTRA EL BOTÓN CUANDO HACE SCROLL MÁS DE 20 PX
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("BtnTop").style.display = "block";
        clearTimeout(btnInterval);
        btnInterval = setTimeout("ocultarbtn()", 2500);
    } else {
        document.getElementById("BtnTop").style.display = "none";
    }
}
function ocultarbtn() {
    document.getElementById("BtnTop").style.display = "none";
}

// CUANDO EL USUARIO HACE CLICK, HACE SCROLL HASTA EL INICIO DEL DOCUMENTO
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
