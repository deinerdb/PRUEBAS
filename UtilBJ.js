// Variables
var getBtnCopiar = document.getElementById("btnCopiar");
// Convertidor
var getPulgadas = document.getElementById("numberPulg");
var getCm = document.getElementById("numberCm");
// IVA
var getSinIVA = document.getElementById("numberSinIVA");
var getConIVA = document.getElementById("numberConIVA");
var getIVA = document.getElementById("numberIVA");
// Cuando cambia valor sin IVA
function cambiaSinIVA() {
    try {
        if (Number(getSinIVA.value) == 0 && getSinIVA.value == "") {
            getConIVA.value = "";
            getIVA.value = "";
            return;
        }
        var temp;
        // calcula el IVA
        temp = Number(getSinIVA.value) * 19 / 100;
        getIVA.value = Number(temp.toFixed(2));
        // calcula el valor con IVA
        temp = Number(getSinIVA.value) * 1.19;
        getConIVA.value = Number(temp.toFixed(2));
    }
    catch (err) {
        getSinIVA.value = "";
        getIVA.value = "";
        getConIVA.value = "";        
    }
}
// Cuando cambia valor IVA
function cambiaIVA() {
    try {
        if (Number(getIVA.value) == 0 && getIVA.value == "") {
            getConIVA.value = "";
            getSinIVA.value = "";
            return;
        }
        var temp;
        // calcula el valor sin IVA
        temp = Number(getIVA.value) * 100 / 19;
        getSinIVA.value = Number(temp.toFixed(2));
        // calcula el valor con IVA
        temp = temp * 1.19;
        getConIVA.value = Number(temp.toFixed(2));
    }
    catch (err) {
        getSinIVA.value = "";
        getIVA.value = "";
        getConIVA.value = "";
    }
}
// Cuando cambia valor con IVA
function cambiaConIVA() {
    try {
        if (Number(getConIVA.value) == 0 && getConIVA.value == "") {
            getSinIVA.value = "";
            getIVA.value = "";
            return;
        }
        var temp;        
        // calcula el valor sin IVA
        temp = Number(getConIVA.value) / 1.19;
        getSinIVA.value = Number(temp.toFixed(2));
        // calcula el IVA
        temp = temp * 19 / 100;
        getIVA.value = Number(temp.toFixed(2));
    }
    catch (err) {
        getSinIVA.value = "";
        getIVA.value = "";
        getConIVA.value = "";
    }
}
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
// evento change valor sin IVA
getSinIVA.onchange = function () {
    cambiaSinIVA();
}
// evento input valor sin IVA
getSinIVA.oninput = function () {
    cambiaSinIVA();
}
// evento change  IVA
getIVA.onchange = function () {
    cambiaIVA();
}
// evento input IVA
getIVA.oninput = function () {
    cambiaIVA();
}
// evento change valor con IVA
getConIVA.onchange = function () {
    cambiaConIVA();
}
// evento input valor con IVA
getConIVA.oninput = function () {
    cambiaConIVA();
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
// copia el valor sin IVA al portapapeles
function copiarValorSinIVA() {
    //aquí guarda la cadena a copiar
    var copyText = "";
    // recupera el valor sin IVA, con ejemplos de formato
    //copyText = Number(getSinIVA.value).toLocaleString(); // podría ser: 1.200,35 y no serviría
    copyText = getSinIVA.value; // se espera que sea: 1200.35 y tampoco serviría
    // para el software contable necesitamos la "coma" como separador decimal
    // es un requerimiento específico:
    copyText = copyText.replace(".", ","); // se espera: 1200,35 y es lo que necesitamos
    //copiamos la cadena con el formato deseado
    copyToClipboard(copyText);
}
// el botón copiar
getBtnCopiar.onclick = function () {
    copiarValorSinIVA();    
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

// Copies a string to the clipboard. Must be called from within an 
// event handler such as click. May return false if it failed, but
// this is not always possible. Browser support for Chrome 43+, 
// Firefox 42+, Safari 10+, Edge and IE 10+.
// IE: The clipboard feature may be disabled by an administrator. By
// default a prompt is shown the first time the clipboard is 
// used (per session).
function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copia al portapapeles ha fallado.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}
// al cargar la página
window.addEventListener("load", function (event) {
    // inicializar campos, algunos navegadores recuerdan valores previos
    getCm.value = "";
    getPulgadas.value = "";
    getSinIVA.value = "";
    getIVA.value = "";
    getConIVA.value = ""; 
    // scroll
    topFunction();
});
// scroll
topFunction();
