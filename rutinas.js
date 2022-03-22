//Rutinas

//QUITEMOS EL TEXTO DEL RELLENO
document.getElementById("relleno").innerHTML = "";

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
// PARA EL SNACKBAR
//****************

// Get the snackbar DIV
var sBar = document.getElementById("snackbar");
var tSnackBarSubiendo = 0;
var tSnackBarBajando = 0;
var tSnackBarCima = 0;
var estadoSnackBar = "inactivo"; // inactivo, subiendo, cima, bajando
var snackBarOpacity = 0;
var snackBarBottom = 0;
var contadorSnackBar = 0;
// va subiendo el SnackBar
function subirSnackBar() {
    contadorSnackBar += 1;
    // si llega a la cima, detiene la subida
    if (contadorSnackBar > 25) {
        // detiene el interval de subida
        clearInterval(tSnackBarSubiendo);
        // define el nuevo estado
        estadoSnackBar = "cima";
        // se queda en la cima unos segundos y luego empieza a bajar
        tSnackBarCima = setTimeout(function () {
            // define el nuevo estado
            estadoSnackBar = "bajando";
            contadorSnackBar = 25;
            // por si acaso
            clearInterval(tSnackBarBajando);
            // establece las propiedades
            sBar.style.opacity = 1;
            sBar.style.bottom = "70px";
            sBar.style.visibility = "visible";
            // anima la bajada del SnackBar                
            tSnackBarBajando = setInterval("bajarSnackBar()", 20);
        }, 2000);
        return;
    }
    // regla de 3:
    // cuando contador es 25 la opacidad es 1
    snackBarOpacity = contadorSnackBar / 25;
    // cuando contador es 25 bottom es 70px
    snackBarBottom = contadorSnackBar * 70 / 25;
    // establece las propiedades
    sBar.style.opacity = snackBarOpacity;
    sBar.style.bottom = snackBarBottom + "px";
}
// va bajando el SnackBar
function bajarSnackBar() {
    contadorSnackBar -= 1;
    // si llega al borde, deja de bajar
    if (contadorSnackBar < 0) {
        // detiene el interval de bajada
        clearInterval(tSnackBarBajando);
        // define el nuevo estado
        estadoSnackBar = "inactivo";
        // lo oculta
        sBar.style.visibility = "hidden";
        return;
    }
    // regla de 3:
    // cuando contador es 25 la opacidad es 1
    snackBarOpacity = contadorSnackBar / 25;
    // cuando contador es 25 bottom es 70px
    snackBarBottom = contadorSnackBar * 70 / 25;
    // establece las propiedades
    sBar.style.opacity = snackBarOpacity;
    sBar.style.bottom = snackBarBottom + "px";
}


function showSnackbar(msj) {
    //mensaje debe ser modificado inmediatamente, sin importar el estado
    sBar.innerHTML = msj;
    // toma acciones según el estado actual
    switch (estadoSnackBar) {
        case "inactivo":
            // no hay mensaje en curso, empieza a subir
            // define el nuevo estado
            estadoSnackBar = "subiendo";
            contadorSnackBar = 0;
            // por si acaso
            clearInterval(tSnackBarSubiendo);
            // establece las propiedades
            sBar.style.opacity = 0;
            sBar.style.bottom = "0px";
            sBar.style.visibility = "visible";
            // anima la subida del SnackBar
            tSnackBarSubiendo = setInterval("subirSnackBar()", 20);
            break;
        case "subiendo":
            // va subiendo con un mensaje, ya fue modificado
            // no se requiere acción
            break;
        case "cima":
            // está en la cima, debe permanecer ahí un par de segundos
            // cancela el tSnackBarCima
            clearTimeout(tSnackBarCima);
            // vuelve a iniciar la cuenta de los segundos
            tSnackBarCima = setTimeout(function () {
                // define el nuevo estado
                estadoSnackBar = "bajando";
                contadorSnackBar = 25;
                // por si acaso
                clearInterval(tSnackBarBajando);
                // establece las propiedades
                sBar.style.opacity = 1;
                sBar.style.bottom = "70px";
                sBar.style.visibility = "visible";
                tSnackBarBajando = setInterval("bajarSnackBar()", 20);
            }, 2000);
            break;
        case "bajando":
            // va de bajada, debe detenerse y empezar a subir
            // detiene el interval de bajada
            clearInterval(tSnackBarBajando);
            // define el nuevo estado
            estadoSnackBar = "subiendo";
            // anima la subida del SnackBar
            tSnackBarSubiendo = setInterval("subirSnackBar()", 20);
            break;
    } // fin switch              
} // showSnackbar

// FIN SNACKBAR


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

// EVENTO LOAD PARA DIFERENTES PÁGINAS

window.onload = function () {

    //HACE VISIBLE EN EL NAVBAR EL ELEMENTO ACTUAL
    // un scroll animado
    $(barra).animate({  
        scrollLeft: actual.offsetLeft
    }, 1800);
    
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
    // POLYGONS
    if (typeof iniciaTáctil == 'function') {
        iniciaTáctil();
    }   
    //FUENTES
    if (typeof alturaMitades == 'function') {
        //se ajusta a la pantalla
        alturaMitades();
        //forza el valor por defecto fuente rango
        document.getElementById("rangoFuente").value = 16;
        //forza los demás valores
        document.getElementById("negrita").checked = false;
        document.getElementById("cursiva").checked = false;
        document.getElementById("indentar").checked = false;
        document.getElementById("colorletra").value = "#000000";
        document.getElementById("colorfondo").value = "#ffffff";
        document.getElementById("decorar").value = "ninguna";
        document.getElementById("alinear").value = "izquierda";
        document.getElementById("transformar").value = "ninguna";
        document.getElementById("sinsombra").checked = true;        
        document.getElementById("divsombra").style.display = "none";
        document.getElementById("colorsombra").value = "#000000";
        document.getElementById("rangoxsombra").value = 0;
        document.getElementById("rangoysombra").value = 0;
        document.getElementById("rangoblursombra").value = 0;
        document.getElementsByClassName("pSombra")[0].innerHTML = "Color de sombra: #000000";
        document.getElementsByClassName("pSombra")[1].innerHTML = "Posición horizontal: 0 px";
        document.getElementsByClassName("pSombra")[2].innerHTML = "Posición vertical: 0 px";
        document.getElementsByClassName("pSombra")[3].innerHTML = "Difuminado (blur): 0 px";

    }
    //GRAFICAR
    if (typeof drawChart == 'function') {
        //forza el valor por defecto timeTV rango
        document.getElementById("rangoTV").value = 2;
        
    }
    //ANALIZAR (INTERFAZ)
    if (typeof alturaDatos == 'function') {
        alturaDatos();
        //forza el valor por defecto del rango Datos
        document.getElementById("rangoDatos").value = 3;
        document.getElementById("numDatos").innerHTML = "3 datos";
        //3 visibles        
        document.getElementById("div1").style.display = "block";
        document.getElementById("div2").style.display = "block";
        document.getElementById("div3").style.display = "block";
        //CHECKBOX DESMARCADO        
        document.getElementById("myCheck").checked = false;
        document.getElementById("myCheck2").checked = false;
        document.getElementById("myCheck3").checked = false;
        //ninguna regresión en el gráfico

        //limpia por si acaso
        borrarResultados();
        // todos los campos input borrados
        var i;
        for (i = 1; i <= 100; i++) {
            document.getElementById("dato" + i).value = "";           
        }
    } 
    // POLYGONS (INTERFAZ E INICIALIZACIÓN)
    if (typeof alturaOpciones == 'function') {
        alturaOpciones();
        //forza el valor por defecto de los rangos de ángulos
        document.getElementById("rangoAngleLargo").value = -90;
        document.getElementById("pAngleLargo").innerHTML = "-90 grados";
        document.getElementById("rangoAngleCorto").value = -90;
        document.getElementById("pAngleCorto").innerHTML = "-90 grados";
        //forza el valor por defecto de los rangos de ancho de borde
        document.getElementById("anchoBordeLargo").value = 3;
        document.getElementById("pAnchoLargo").innerHTML = "3";
        document.getElementById("anchoBordeCorto").value = 3;
        document.getElementById("pAnchoCorto").innerHTML = "3";
        //forza el valor por defecto de los rangos de opacidad de borde
        document.getElementById("opacidadBordeLargo").value = 1;
        document.getElementById("pOpacidadBordeLargo").innerHTML = "1";
        document.getElementById("opacidadBordeCorto").value = 1;
        document.getElementById("pOpacidadBordeCorto").innerHTML = "1";
        //forza el valor por defecto de los rangos de opacidad de RELLENO
        document.getElementById("opacidadRellenoLargo").value = 1;
        document.getElementById("pOpacidadRellenoLargo").innerHTML = "1";
        document.getElementById("opacidadRellenoCorto").value = 1;
        document.getElementById("pOpacidadRellenoCorto").innerHTML = "1";
        // las listas seleccionables
        document.getElementById("listaOpcionesCorto").value = "lados";
        document.getElementById("listaLadosLargo").value = "3lados";
        document.getElementById("listaLadosCorto").value = "3lados";
        document.getElementById("tipoGiroLargo").value = "definido";
        document.getElementById("tipoGiroCorto").value = "definido";
        document.getElementById("ListaPunteadoCorto").value = "ninguno";
        document.getElementById("ListaPunteadoLargo").value = "ninguno";
        document.getElementById("tipoRellenoLargo").value = "sólido";
        document.getElementById("tipoRellenoCorto").value = "sólido";
        // colores
        document.getElementById("colorBordeLargo").value = "#ff0000";
        document.getElementById("colorBordeCorto").value = "#ff0000";
        document.getElementById("colorSólidoLargo").value = "#0066ff";
        document.getElementById("colorSólidoCorto").value = "#0066ff";
        document.getElementById("color1Largo").value = "#00cc66";
        document.getElementById("color1Corto").value = "#00cc66";
        document.getElementById("color2Largo").value = "#cc3399";
        document.getElementById("color2Corto").value = "#cc3399";        
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
    // POLYGONS (INTERFAZ)
    if (typeof alturaOpciones == 'function') {
        alturaOpciones();
    } 
}
function arrClick() {
    //para que se cierre
    alternarAcc();
    //ahora un scroll
    window.scrollTo(acc.offsetLeft, acc.offsetTop - 70);    
}

// esto sobreescribe cualquier onresize de las páginas
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

    //para el juego, altura botones
    if (typeof alturaBotones == 'function') {
        alturaBotones();
        definirPadding();
        definirPadding();
    }

    //para DTV
    if (typeof sizeLogo == 'function') {
        sizeLogo();
    }

    //FUENTES Y FRASES (PRIMER MODAL)
    if (typeof alturaModal == 'function') {
        alturaModal();           
    } 
    //FRASES Y FUENTES (SEGUNDO MODAL)
    if (typeof alturaModalTexto == 'function') {        
        alturaModalTexto();
    } 
    //FRASES (TERCER MODAL)
    if (typeof alturaModalHistorial == 'function') {       
        alturaModalHistorial();
    } 
    //FUENTES (INTERFAZ)
    if (typeof alturaMitades == 'function') {
        alturaMitades();     
    } 
    //ANALIZAR (INTERFAZ)
    if (typeof alturaDatos == 'function') {
        alturaDatos();
    } 
    // POLYGONS (INTERFAZ)
    if (typeof alturaOpciones == 'function') {
        alturaOpciones();
    } 
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
