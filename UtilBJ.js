﻿// Variables
var getPulgadas = document.getElementById("numberPulg");
var getCm = document.getElementById("numberCm");
// Cuando cambian las pulgadas
function cambiaPulgadas() {
    try {
        if (Number(getPulgadas.value) == 0 && getPulgadas.value == "") {
            getCm.value = "";
            return;
        }
        var temp;
        temp = Number(getPulgadas.value) * 2.54;
        getCm.value = Number(temp.toFixed(2));
    }
    catch (err) {
        getCm.value = "";
        getPulgadas.value = "";
    }   
}
// Cuando cambian los centímetros
function cambiaCm() {
    try {        
        if (Number(getCm.value) == 0 && getCm.value == "") {
            getPulgadas.value = "";
            return;
        }        
        var temp;
        temp = Number(getCm.value) / 2.54;
        getPulgadas.value = Number(temp.toFixed(2));
    }
    catch (err) {
        getCm.value = "";
        getPulgadas.value = "";
    }
}
// evento change valor pulgadas
getPulgadas.onchange = function () {
    cambiaPulgadas();
}
// evento input valor pulgadas
getPulgadas.oninput = function () {
    cambiaPulgadas();
}
// evento change valor cm
getCm.onchange = function () {
    cambiaCm();
}
// evento input valor cm
getCm.oninput = function () {
    cambiaCm();
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
            document.getElementById("BtnTop").style.opacity = 500 / btnContador - 4;
    }



}

// FUNCIÓN QUE HACE SCROLL HASTA EL INICIO DEL DOCUMENTO
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}


// scroll
topFunction();
