//Rutinas

//***********************************
//PARA EL ACORDEÓN
//***********************************
var acc = document.getElementById("accordion");
var accAbierta = false;
acc.onclick = function () {
    this.classList.toggle("active");
    var panel = document.getElementById("panel");
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        accAbierta = false;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        accAbierta = true;
    }
}
window.onresize = function () {   
    //if (mostrado == true) {
        //alto del sidenav es el alto del documento menos el padding
        document.getElementById("mySidenav").style.minHeight = (document.body.scrollHeight - 80) + "px";
    //}
    if (accAbierta == true) {
        var panel = document.getElementById("panel");
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
//***********************************
//PARA EL ÍCONO DE MENÚ Y EL MENÚ LATERAL SIDENAV
//***********************************

var mostrado = false;
var timerOverlay;

function myFunction(x) {
    x.classList.toggle("change");
    if (mostrado == true) {
        closeNav();
        overlayOff();
        navbarOn();
    }
    else {
        openNav();
        overlayOn();
        navbarOff();
    }
    
}
function soloCerrar() {
    if (mostrado == true) {
        document.getElementById("container").classList.toggle("change");
        closeNav();
        overlayOff();
        navbarOn()
    }  
}
/* Set the width of the side navigation to 250px */
function openNav() {
    mostrado = true;
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("relleno").style.width = "250px"; 
    document.getElementById("mySidenav").style.overflowY = "auto";
    //alto del sidenav es el alto del documento menos el padding
    document.getElementById("mySidenav").style.minHeight = (document.body.scrollHeight - 80) + "px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    mostrado = false;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("relleno").style.width = "0";
    document.getElementById("mySidenav").style.overflowY = "hidden";  
}

function overlayOn() {
    clearTimeout(timerOverlay);
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("overlay").style.visibility = "visible";
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
    document.getElementById("main").style.opacity = "0.5";
}

function overlayOff() {
    timerOverlay = setTimeout(function(){ document.getElementById("overlay").style.width = "0"; }, 400);
    document.getElementById("overlay").style.visibility = "hidden";
    document.body.style.backgroundColor = "initial";
    document.getElementById("main").style.opacity = "initial";
}

function navbarOn() {    
    var c;
    var i;    
    c = document.getElementById("navbar").children;
    for (i = 0; i < c.length; i++) {
        c[i].style.visibility = "visible";
        c[i].style.opacity = "1";
    }
    document.getElementById("navbar").style.cursor = "auto";
}

function navbarOff() {
    var c;
    var i;
    c = document.getElementById("navbar").children;
    for (i = 0; i < c.length; i++) {
        c[i].style.visibility = "hidden";
        c[i].style.opacity = "0";
    }
    document.getElementById("navbar").style.cursor = "pointer";    
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
