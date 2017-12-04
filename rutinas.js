//Rutinas
//***********************************
//PARA IMPRESIÓN
//***********************************
function imprimir() {
    //el sidenav no debe salir
    soloCerrar();
    //para permitir transiciones espera un poco...
    setTimeout(nowImprime, 500);    
}
function nowImprime() {
    window.print();
}
//****************************************
// COPIAR
//****************************************

//pasa el contenido de cada campo a una cadena
function copiarFormulario() {    
    //aquí guardamos una referencia a cada control a copiar
    var copyCampo;
    //aquí vamos guardando la cadena total a copiar
    var copyText = "Ejemplo de Formulario " + "\r\n" + "--- CUESTIONARIO --- ";
    //nombre
    copyCampo = document.getElementById("nombre"); 
    copyText = copyText + "\r\n" + 'Nombre: ' + copyCampo.value;
    //apellido
    copyCampo = document.getElementById("apellido");
    copyText = copyText + "\r\n" + 'Apellido: ' + copyCampo.value;
    //sexo, si no ha seleccionado no coloca nada
    copyCampo = document.getElementById("masculino");
    if (copyCampo.checked) {
        copyText = copyText + "\r\n" + 'Sexo: Masculino';
    }
    copyCampo = document.getElementById("femenino");
    if (copyCampo.checked) {
        copyText = copyText + "\r\n" + 'Sexo: Femenino';
    }
    //correo
    copyCampo = document.getElementById("correo");
    copyText = copyText + "\r\n" + 'Correo: ' + copyCampo.value;
    //url
    copyCampo = document.getElementById("url");
    copyText = copyText + "\r\n" + 'URL: ' + copyCampo.value;
    //fecha de nacimiento
    copyCampo = document.getElementById("nacimiento");
    copyText = copyText + "\r\n" + 'Fecha de nacimiento: ' + copyCampo.value;
    //estrato
    copyCampo = document.getElementById("estrato");
    copyText = copyText + "\r\n" + 'Estrato: ' + copyCampo.value;
    //servicio
    copyCampo = document.getElementById("servicio");
    copyText = copyText + "\r\n" + 'Servicio a Jehová: ' + copyCampo.options.item(copyCampo.options.selectedIndex).innerHTML;
    //contraseña
    copyCampo = document.getElementById("contraseña");
    copyText = copyText + "\r\n" + 'Contraseña: ' + copyCampo.value;
    //vehículo, las opciones seleccionadas aparecen o se informa si no hay ninguna
    copyText = copyText + "\r\n" + 'Información sobre vehículos: ';
    var tienetransporte = false;
    copyCampo = document.getElementById("carro");    
    if (copyCampo.checked) {
        copyText = copyText + "\r\n" + 'Tengo carro';
        tienetransporte = true;
    }
    copyCampo = document.getElementById("moto");
    if (copyCampo.checked) {
        copyText = copyText + "\r\n" + 'Tengo moto';
        tienetransporte = true;
    }
    copyCampo = document.getElementById("bicicleta");
    if (copyCampo.checked) {
        copyText = copyText + "\r\n" + 'Tengo bicicleta';
        tienetransporte = true;
    }
    if (!tienetransporte) {
        copyText = copyText + 'No seleccionó ningún vehículo';        
    }
    //contraseña
    copyCampo = document.getElementById("colorfavorito");
    copyText = copyText + "\r\n" + 'Color favorito: ' + copyCampo.value;
    //país de destino
    copyCampo = document.getElementById("país");
    copyText = copyText + "\r\n" + 'País de destino: ' + copyCampo.value;
    //mes de viaje
    copyCampo = document.getElementById("mes");
    copyText = copyText + "\r\n" + 'Mes de preferencia del viaje: ' + copyCampo.value;
    //nivel de inglés
    copyCampo = document.getElementById("nivel");
    copyText = copyText + "\r\n" + 'Nivel de inglés: ' + copyCampo.options.item(copyCampo.options.selectedIndex).innerHTML;
    //comentarios adicionales
    copyCampo = document.getElementById("comentarios");
    copyText = copyText + "\r\n" + 'Comentarios adicionales: ' + copyCampo.value;

    //finalmente copiamos la cadena completa...
    copyToClipboard(copyText); 
    alert("Formulario copiado al portapapeles...");
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

//*******************************************
//NAVBAR SE DESPLAZA AL ELEMENTO ACTUAL
var barra = document.getElementById("navbar");
var actual = document.getElementById("selectednavbar");
window.onload = function () {
    //HACE VISIBLE EN EL NAVBAR EL ELEMENTO ACTUAL
    barra.scrollLeft = actual.offsetLeft;
    //FUNCIONES DE CADA PÁGINA, BODY ONLOAD
    //HTML
    if (typeof sumar == 'function') {
        sumar();        
    } 
    //SITIOS
    if (typeof mostrarpárrafo == 'function') {
        mostrarpárrafo('señale');
    } 
    //JUEGO
    if (typeof startGame == 'function') {
        startGame();
    } 
    //CANVAS
    if (typeof init == 'function') {
        init();
    }
    //MEDIA
    if (typeof inicia == 'function') {
        inicia();
    } 
};


//***********************************
//PARA EL ACORDEÓN
//***********************************
var acc = document.getElementById("accordion");
var arr = document.getElementById("arrow");
var accAbierta = false;

acc.onclick = function () { alternarAcc() };
arr.onclick = arrClick;
function alternarAcc() {
    acc.classList.toggle("active");
    var panel = document.getElementById("panel");
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        arr.style.display = "none";
        accAbierta = false;
    } else {
        arr.style.display = "block";
        panel.style.maxHeight = panel.scrollHeight + "px";
        accAbierta = true;
    }
}
function arrClick() {
    //para que se cierre
    alternarAcc();
    //ahora un scroll
    window.scrollTo(acc.offsetLeft, acc.offsetTop - 70);    
}
window.onresize = function () { ajustesResize() };

function openfolder() {
    var a;
    a = document.getElementById("folder");
    a.innerHTML = "&#xf114;";
    setTimeout(function () {
        a.innerHTML = "&#xf115;";
    }, 1000);
}
openfolder();
setInterval(openfolder, 2000);

function ajustesResize() {    
    //altura del acordeón
    if (accAbierta == true) {
        var panel = document.getElementById("panel");
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
    //altura sidenav
    alturaNav();
}

//***********************************
//PARA EL ÍCONO DE MENÚ Y EL MENÚ LATERAL SIDENAV
//***********************************

var mostrado = false;
var timerOverlay;
var miOpacidad;
var miColorfondo;
var miBodyScroll;
var miDocumentScroll;


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
        navbarOn();
    }  
}
/* Set the width of the side navigation to 250px */
function openNav() {
    mostrado = true;
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("relleno").style.width = "250px"; 
    document.getElementById("mySidenav").style.overflowY = "auto";
    alturaNav();
    //guarda el scroll y se mueve al top
    miBodyScroll = document.body.scrollTop; // For Chrome, Safari and Opera
    miDocumentScroll = document.documentElement.scrollTop; // For IE and Firefox
    topFunction();        
}
function alturaNav() {    
    //alto del sidenav es el alto del documento
    //una asignación previa corrige ciertos bugs
    document.getElementById("mySidenav").style.height = document.body.scrollHeight/2 + "px";
    document.getElementById("mySidenav").style.height = document.body.scrollHeight + "px";    
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    mostrado = false;
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("relleno").style.width = "0";
    document.getElementById("mySidenav").style.overflowY = "hidden";
    //alturaNav();
    //restaura el scroll
    document.body.scrollTop = miBodyScroll; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = miDocumentScroll; // For IE and Firefox
}

function overlayOn() {
    clearTimeout(timerOverlay);
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("overlay").style.visibility = "visible";
    miColorfondo = document.body.style.backgroundColor; //lo guarda, porque old IE no soporta initial
    document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
    miOpacidad = document.getElementById("main").style.opacity; //lo guarda, porque old IE no soporta initial
    document.getElementById("main").style.opacity = "0.5";
}

function overlayOff() {
    timerOverlay = setTimeout(function(){ document.getElementById("overlay").style.width = "0"; }, 400);
    document.getElementById("overlay").style.visibility = "hidden";
    document.body.style.backgroundColor = miColorfondo;
    document.getElementById("main").style.opacity = miOpacidad;
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

// FUNCIÓN QUE HACE SCROLL HASTA EL INICIO DEL DOCUMENTO
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
//***********************************
