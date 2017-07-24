//Rutinas

//***********************************
//PARA EL ÍCONO DE MENÚ Y EL MENÚ LATERAL SIDENAV
//***********************************

var mostrado = false;
var timeoculto;
function myFunction(x) {
    x.classList.toggle("change");
    if (mostrado == true) {
        closeNav();
    }
    else {
        openNav();
    }
    
}
/* Set the width of the side navigation to 250px */
function openNav() {
    mostrado = true;
    clearTimeout(timeoculto);
    document.getElementById("mySidenav").style.display = "block";
    document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    mostrado = false;
    document.getElementById("mySidenav").style.width = "0";
    timeoculto = setTimeout("ocultarNav()", 400);        
}
function ocultarNav() {    
    document.getElementById("mySidenav").style.display = "none";
}       
//***********************************
//script para el botón "top"
//***********************************
var btnInterval;
var btnContador;
// MUESTRA EL BOTÓN CUANDO HACE SCROLL MÁS DE 20 PX
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("BtnTop").style.opacity = "1";
        document.getElementById("BtnTop").style.display = "block";
        clearInterval(btnInterval);
        btnContador = 0;
        btnInterval = setInterval("manejarbtn()", 20);
    } else {
        document.getElementById("BtnTop").style.display = "none";
    }
}
function manejarbtn() {    
    btnContador += 1;
    switch (true) {
        case btnContador <= 1:
            //primera vez es totalmente visible
            document.getElementById("BtnTop").style.opacity = "1";
            break;
        case btnContador == 125:
            //finaliza
            document.getElementById("BtnTop").style.display = "none";            
            clearInterval(btnInterval);            
            break;
        case btnContador >= 100:
            //lo hace cada vez más opaco
            document.getElementById("BtnTop").style.opacity = 500/btnContador-4;
    }

    
    
}

// CUANDO EL USUARIO HACE CLICK, HACE SCROLL HASTA EL INICIO DEL DOCUMENTO
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
//***********************************