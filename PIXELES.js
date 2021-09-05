// referencias (más memoria, menos recorridos del DOM)
// Get the root element
var getRoot = document.querySelector(':root');
var getColumnas; // toma valor después de crear los cuadritos
var getRelleno = document.getElementById("relleno");
var infoTemp = document.getElementById("infoTemporal");
var getPaletaArriba = document.getElementById("paletaArriba");
var getPaletaAbajo = document.getElementById("paletaAbajo");
var getPaletaHistorial = document.getElementById("paletaHistorial");
var getBtnCerrarHistorial = document.getElementById("BtnCerrarHistorial");
var getContenedor = document.getElementById("contenedor");
var getPantalla = document.getElementById("pantalla");
var getRellenoHist = document.getElementById("rellenoHistorial");
// la muestra del tipo de bordes
var getMuestraTipoBordes = document.getElementById("muestraTipoBordes");
// muestra especial ExtraerDesde
var getMuestraMarcoExtraerLienzo = document.getElementById("muestraMarcoExtraerLienzo");
var getMuestraMarcoExtraerPixel = document.getElementById("muestraMarcoExtraerPixel");
//para el modal
// Get the modal , múltiples usos
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal 
var span = document.getElementsByClassName("close")[0];
// el pie tiene un margen especial
// también se le cambia su visibilidad, opacidad o se le oculta según se necesite
var getPie = document.getElementById("pie");
// este es el margen inferior del pie
var getpieAfter = document.getElementById("pieAfter");
var getBtnHistorialColor = document.getElementById("BtnHistorialColor");
var getBtnEtiquetas = document.getElementById("BtnEtiquetas");
var getIcoEtiquetas = document.getElementById("icoEtiquetas");
var getBtnRellenar = document.getElementById("BtnRellenar");
var getBtnColorLienzo = document.getElementById("BtnColorLienzo");
var getBtnColorRejilla = document.getElementById("BtnColorRejilla");
var getBtnGotero = document.getElementById("BtnGotero");
var getBtnReemplazar = document.getElementById("BtnReemplazar");
var getBtnBorrador = document.getElementById("BtnBorrador");
var getIcoBtnBorrador = document.getElementById("icoBtnBorrador");
var getBtnPincel = document.getElementById("BtnPincel");
var getBtnLibre = document.getElementById("BtnLibre");
var getBtnExtraerColor = document.getElementById("BtnExtraerColor");
var getSpanInfoExtraer = document.getElementById("spanInfoExtraer");
var getSpanInfoBorrar = document.getElementById("spanInfoBorrar");
var getFiltro = document.getElementById("filtro");
var getSelectFondo = document.getElementById("selectFondo");
var getBtnActualizar = document.getElementById("BtnActualizar");
var getBtnTrash = document.getElementById("BtnTrash");
var getBtnInfo = document.getElementById("BtnInfo");
var getBtnTipoBorde = document.getElementById("BtnTipoBorde");
var getBtnAnchoBordes = document.getElementById("BtnAnchoBordes");
var getBtnRadioBordes = document.getElementById("BtnRadioBordes");
var getSpanInfoRadio = document.getElementById("spanInfoRadio");
var getBtnOpacidad = document.getElementById("BtnOpacidad");
var getSpanInfoOpacidad = document.getElementById("spanInfoOpacidad");
var getPMuestraOpacidad = document.getElementById("pMuestraOpacidad");
var getBtnSombras = document.getElementById("BtnSombras");
var getSpanInfoSombras = document.getElementById("spanInfoSombras");
var getSelectSombras = document.getElementById("selectSombras");
var getBtnDeshacer = document.getElementById("BtnDeshacer");
var getSpanFilas = document.getElementById("spanFilas");
var getSelectFilas = document.getElementById("selectFilas"); // listaFilas
var getSpanColumnas = document.getElementById("spanColumnas");
var getSelectColumnas = document.getElementById("selectColumnas"); // listaColumnas
var getBtnImportar = document.getElementById("BtnImportar");
var getBtnExportar = document.getElementById("BtnExportar");
var getBtnImprimir = document.getElementById("BtnImprimir");
var getBtnAceptarLibre = document.getElementById("BtnAceptarLibre");
var getBtnCancelarLibre = document.getElementById("BtnCancelarLibre");
var getBtnBorrarLibre = document.getElementById("BtnBorrarLibre");
var getBtnExpandirLibre = document.getElementById("BtnExpandirLibre");
var getBtnPantallaCompleta = document.getElementById("BtnPantallaCompleta");
var getcolorPixel = document.getElementById("colorPixel");
var getBtnRGB = document.getElementById("BtnRGB");
var getBtnHSL = document.getElementById("BtnHSL");
var getBtnHex = document.getElementById("BtnHex");
var getBtnGallery = document.getElementById("BtnGallery");
var getBtnRnd = document.getElementById("BtnRnd");
var getBtnOpuesto = document.getElementById("BtnOpuesto");
var getmodalBody = document.getElementById("modalBody");
var getmodalFooter = document.getElementById("modalFooter");
var getmodalHeader = document.getElementById("modalHeader");
var getSelectFormatoBorrado = document.getElementById("selectFormatoBorrado");
// para controlar una animación
var restauraOpacidad = true;
// etiquetas por defecto mostradas
var mostrarEtiquetas = true;
//color inicial del pincel es negro
var colorActual = "#000000";
var colorRejilla = "#000000";
// valores globales aplicados, usados al dimensionar y en otras funciones
var fondoAplicado = "#ffffff";
var radioAplicado = "0%";
var colorBordesAplicado = "#000000";
var opacidadAplicada = 1;
var sombrasAplicada = "s0000";
var colorLienzoAplicado = "#ffffff";
// fin globales
var colorLienzo = "#ffffff" // ahora es individual
// radio que se aplica por defecto en modo radio
// pero el inicial de clase columna es 0%
var radioBorde = "50%";
// la info junto al botón radio
getSpanInfoRadio.innerHTML = radioBorde;
// opacidad que se aplica por defecto en modo opacidad
// pero la inicial de clase columna es 100%
var opacidad = 0.5;
// la info junto al botón opacidad
getSpanInfoOpacidad.innerHTML = opacidad * 100 + "%";
// sombra por defecto abajo izquierda
// pero la inicial de clase columna es "s0000"
var sombras = "s0011";
// info sombras ajustado
$(getSpanInfoSombras).attr("class", sombras);
// la info junto al botón extraer
var ExtraerDesde = "Pixel"; // Pixel, Lienzo, Bordes
getSpanInfoExtraer.innerHTML = ExtraerDesde; //  por defecto
// la info junto al botón borrador
var formatoBorrado = "colorPixel";
// Se pueden borrar los siguientes formatos:
// ------ formatoBorrado
//colorPixel
//colorLienzo
//colorBordes
//radioBordes
//opacidad
//sombras
//todo
// ------ formatoBorrado en texto
// Color Pixel
// Color Lienzo
// Color Bordes
// Radio Bordes
// Opacidad
// Sombras
// Todo
// retorna el valor formatoBorrado como texto para visualizar
function formatoBorradoComoTexto(valor) {       
    var temp = "";
    switch (valor) {
        case "colorPixel":
            temp = "Color Pixel";
            break;
        case "colorLienzo":
            temp = "Color Lienzo";
            break;
        case "colorBordes":
            temp = "Color Bordes";
            break;
        case "radioBordes":
            temp = "Radio Bordes";
            break;
        case "opacidad":
            temp = "Opacidad";
            break;
        case "sombras":
            temp = "Sombras";
            break;
        case "todo":
            temp = "Todo";
            break;    
    }
    return temp;
}
getSpanInfoBorrar.innerHTML = formatoBorradoComoTexto(formatoBorrado); //  por defecto
var formatoAplicadoAlBorrar = "formatosGlobales"; // formatosIniciales y formatosGlobales
// las clases de íconos para el btn según la variable anterior
var claseIcoBorrado = "far fa-trash-alt"; // la otra es: "fas fa-sync-alt";
// modal: ninguno, radio, rgb, gallery, importar, exportar, filas, columnas, 
//        lienzo, anchoBordes, zoom, tipoBordes, colorBordes, opacidad, sombras, borrador, info
var modalActual = "ninguno";
// recuerda el scroll y lo restaura al cerrar el modal
var miBodyScroll;
var miDocumentScroll;
//para guardar la última acción
var lastAction;
var lastFormatoBorrado;
//var lastFormatoAplicadoAlBorrar;
var lastOpacidad = 1;
var lastRadioBorde = "0%";
var lastSombras = "s0000";
var lastIndexFiltro;
var actualIndexFiltro;
var lastColor;
var lastID;
var lastArrayID = [];
var lastArrayColor = [];
var lastArrayRadio = [];
var lastArraySombras = [];
var lastArrayOpacidad = [];
var lastArrayLienzo = [];
var lastArrayColorBordes = [];
// las last globales
var lastFondoAplicado;
var lastRadioAplicado;
var lastColorBordesAplicado;
var lastOpacidadAplicada;
var lastSombrasAplicada;
var lastColorLienzoAplicado;
// fin last globales
var lastColorLienzo;
var lastColorRejilla;
var lastNumColumnas;
var lastNumFilas;
var lastModo = "pincel";
// modos: pincel, borrador, relleno, extraer, libre, radio, sombras, opacidad, reemplazar, lienzo, colorBordes, 
var modoActual = "pincel";
// es como un modo, pero se gestiona diferente
var pantallaCompleta = false;
var timerCursor = 0;
var timerResaltar = 0;
var timerResaltarDeshacer = 0;
var timerHistorial = 0;
var tamaño = 23;
var MAXSIZE = 100;
var MINSIZE = 4;
var anchoBordes;
var factorAnchoBordes = 0.04; // es 4/100
var lastFactorAnchoBordes = 0.04;
var tipoBordes = "solid";
var lastTipoBordes = "solid";
var tempVarios = "";
var ocupado = false;
var hexTemp = "#000000";
var rgbTemp = "rgb(0, 0, 0)";
var miR = 0;
var miG = 0;
var miB = 0;
var miH = 0;
var miS = 100;
var miL = 50;
var hexValues = [];
var decValues = [];
var anchoValues = [];
var dec360Values = []; 
var i;
//var str = "";
// llena vectores para validación extricta
for (i = 0; i <= 255; i++) {
    decValues[i] = Number(i);
    hexValues[i] = i.toString(16).toLowerCase();
    if (hexValues[i].length < 2) {
        hexValues[i] = "0" + hexValues[i];
    }
    //str = str + hexValues[i] + " - ";
}
for (i = 1; i <= 80; i++) {
    anchoValues[i - 1] = i / 4; 
    //str = str + anchoValues[i - 1] + " - ";
}
//alert("0.25 - 20:   " + str);
// valida un valor hexadecimal como #0000ff
// devuelve false si no está en ese formato
function validarHex(hex) {    
    hex = "" + hex;
    if (hex.length != 7 || hex.substring(0, 1) != "#") {
        // no es hexadecimal
        return false;
    }
    var r;
    var g;
    var b;
    r = hex.slice(1, 3);
    g = hex.slice(3, 5);
    b = hex.slice(5);
    if (hexValues.indexOf(r) == -1) {
        return false;
    }
    if (hexValues.indexOf(g) == -1) {
        return false;
    }
    if (hexValues.indexOf(b) == -1) {
        return false;
    }
    //todo bien
    return true;
}
// valida una expresión numérica, 
// retorna false si no está en el rango 0 - 255
function validarDec(dec) {
    dec = Number(dec);   
    if (decValues.indexOf(dec) == -1) {
        return false;
    }
    //todo bien
    return true;
}
// retorna el valor sombras como texto para visualizar
function sombrasComoTexto(valor) {       
    var temp = "";
    switch (valor) {
        case "s0000":
            temp = "Sin sombras";
            break;
        case "s1000":
            temp = "Arriba";
            break;
        case "s0100":
            temp = "Derecha";
            break;
        case "s0010":
            temp = "Abajo";
            break;
        case "s0001":
            temp = "Izquierda";
            break;
        case "s1001":
            temp = "Arriba e izquierda";
            break;
        case "s1100":
            temp = "Arriba y derecha";
            break;
        case "s0110":
            temp = "Abajo y derecha";
            break;
        case "s0011":
            temp = "Abajo e izquierda";
            break;        
    }
    return temp;
}
// anima el botón de historial color
var idAnimarHistorial = 0;
function animarBtnHistorial() {
    if (arrayColoresUsados.length == 0) {
        return;
    }    
    if (idAnimarHistorial > arrayColoresUsados.length - 1) {
        idAnimarHistorial = 0;
    }

    // alterna círculo cuadro        
    if (getRellenoHist.dataset.radio == "0%") {
        getRellenoHist.dataset.radio = "50%";        
        getRellenoHist.style.MozBorderRadius = "50%";
        getRellenoHist.style.webkitBorderRadius = "50%";
        getRellenoHist.style.borderRadius = "50%";
        // de paso alterna el ícono de ancho bordes
        //document.getElementById("icoAnchoBordes").setAttribute("class", "fas fa-window-minimize");
    } else {
        getRellenoHist.dataset.radio = "0%";
        getRellenoHist.style.MozBorderRadius = "0%";
        getRellenoHist.style.webkitBorderRadius = "0%";
        getRellenoHist.style.borderRadius = "0%";
        // de paso alterna el ícono de ancho bordes
        //document.getElementById("icoAnchoBordes").setAttribute("class", "far fa-window-minimize");
    }
    // va cambiando el color
    getRellenoHist.style.backgroundColor = arrayColoresUsados[idAnimarHistorial];
    idAnimarHistorial = 1 + idAnimarHistorial;
}
// ********** IMPORTANTE ***********
// el tamaño máximo de la matriz es 50x50
// puede cambiar estos dos parámetros para probar matrices más grandes
// ESTOS SON LOS VALORES MÁXIMOS QUE PUEDEN SELECCIONARSE PARA EL TAMAÑO DE LA MATRIZ
var MAXNUMFILAS = 50; // NUNCA DEBE SER MENOR QUE numFilas
var MAXNUMCOLUMNAS = 50; // NUNCA DEBE SER MENOR QUE numColumnas
//el tamaño de la matriz por defecto es 10x10
// ESTE SERÁ EL TAMAÑO DE LA MATRIZ AL ABRIRLA
var numColumnas = 10;
var numFilas = 10;
//***************************
var permitirEvento = true;
var arrayColoresUsados = [];
// su estado: inicia oculto
var historialMostrado = false;
var prefiereHistorial = false;
// si deseamos incluir el blanco inicialmente
//arrayColoresUsados[0] = "#ffffff"; 
// el estilo inicial del botón pincel 
// indica que pintar es el modo preteterminado
$(getBtnPincel).addClass("seleccionadoBtnModos"); 
// indica que zoom + es el modo preteterminado en pantalla completa
var zoomIn = true;
document.getElementById("BtnAumentarFull").style.border = "3px outset #009900";
document.getElementById("BtnDisminuirFull").style.border = "3px solid #666699";
// en el modo pincel no están estos
getBtnAceptarLibre.style.display = "none";
getBtnCancelarLibre.style.display = "none";
getBtnBorrarLibre.style.display = "none";
getBtnExpandirLibre.style.display = "none";
// el relleno inicial es negro
getRelleno.style.backgroundColor = "#000000";
// la propiedad color de ciertos íconos es negra por defecto, desde css
//el primer botón del historial es blanco
// solo si es agregado en html
//document.getElementById("BtnColor0").style.color = "#ffffff";
// radio por defecto es 50 %
document.getElementById("rangoRadioBordes").value = 50;
// opacidad por defecto es 50 %
document.getElementById("rangoOpacidad").value = 50;
// el texto de la muestra está en html, en css tiene su valor inicial de 50
//document.getElementById("muestraRadio").style.borderRadius = "50%";
//getRelleno.style.borderRadius = "50%";
//document.getElementById("rellenoHistorial").style.borderRadius = "50%";

// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        clickAcc(this);
    });
}
// Lanza en pantalla completa en navegadores que lo soporten
function launchFullScreen() {
    //var element = document.documentElement;
    //var element = document.getElementById("pantalla");
    // ya tenemos la referencia a pantalla en getPantalla

    if (getPantalla.requestFullScreen) {
        getPantalla.requestFullScreen();
    } else if (getPantalla.requestFullscreen) {
        getPantalla.requestFullscreen();
    } else if (getPantalla.mozRequestFullScreen) {
        getPantalla.mozRequestFullScreen();
    } else if (getPantalla.webkitRequestFullScreen) {
        getPantalla.webkitRequestFullScreen();
    } else if (getPantalla.webkitRequestFullscreen) {
        getPantalla.webkitRequestFullscreen();
    } else if (getPantalla.msRequestFullscreen) {
        getPantalla.msRequestFullscreen();
    }
}

function cancelFullScreen() {

    if (document.cancelFullScreen) {
        document.cancelFullScreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msCancelFullScreen) {
        document.msCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }

}
// sombras
// la muestra de la sombra
var getMuestraSombras = document.getElementById("muestraSombras");
// cambia las sombras, llamada desde html en el selector
function actualizaSombras() {
    // ajusta la muestra
    getMuestraSombras.setAttribute("class", getSelectSombras.value);    
}
// opacidad
//el input range de la opacidad
var sliderOpacidad = document.getElementById("rangoOpacidad");
// la muestra de la opacidad
var getMuestraOpacidad = document.getElementById("muestraOpacidad");
// para no repetirlo en input y change del slider de opacidad
function actualizaOpacidad(nuevoValor) {
    var nuevo = nuevoValor;
    nuevo = Number(nuevo);
    var pos = decValues.indexOf(nuevo);
    if (pos == -1 || pos > 100) {
        nuevo = 100;
    } else {
        nuevo = decValues[pos];
    }
    // ajusta la muestra    
    var opacidadMuestra = nuevo / 100; // muestra tiene 120px de ancho
    getMuestraOpacidad.style.opacity = opacidadMuestra;
    getMuestraOpacidad.innerHTML = nuevo + "%";
    getPMuestraOpacidad.innerHTML = nuevo + "%";
}
// opacidad cambia dinámicamente con el slider
//input y change, redundantes por un bug en IE
sliderOpacidad.oninput = function () {
    actualizaOpacidad(this.value);
}
sliderOpacidad.onchange = function () {
    actualizaOpacidad(this.value);
}

// zoom
//el input range del tamaño de los pixeles, zoom
var sliderZoom = document.getElementById("rangoZoom");
// la muestra del tamaño de los pixeles, zoom
var getMuestraZoom = document.getElementById("muestraZoom");
// su etiqueta
var getEtiquetaZoom = document.getElementById("etiquetaZoom");
// para no repetirlo en input y change del slider zoom
function actualizaSliderZoom(nuevoValor) {
    var nuevo = nuevoValor;
    nuevo = Number(nuevo);
    var pos = decValues.indexOf(nuevo);
    if (pos == -1 || pos > 100 || pos < 4) {
        nuevo = 24;
    } else {
        nuevo = decValues[pos];
    }
    // ajusta la muestra solamente
    // borde proporcional
    var muestraAncho = nuevo * 0.05;
    getMuestraZoom.style.borderWidth = muestraAncho + "px";
    // la etiqueta
    getEtiquetaZoom.innerHTML = nuevo + " px";
    //ancho
    getMuestraZoom.style.width = nuevo + "px";
    getMuestraZoom.style.maxWidth = nuevo + "px";
    getMuestraZoom.style.minWidth = nuevo + "px";
    //alto
    getMuestraZoom.style.height = nuevo + "px";
    getMuestraZoom.style.maxHeight = nuevo + "px";
    getMuestraZoom.style.minHeight = nuevo + "px";
}
// tamaño o zoom cambia dinámicamente con el slider
//input y change, redundantes por un bug en IE
sliderZoom.oninput = function () {
    actualizaSliderZoom(this.value);
}
sliderZoom.onchange = function () {
    actualizaSliderZoom(this.value);
}

//el input range del ancho de los bordes
var sliderAnchoBordes = document.getElementById("rangoAnchoBordes");
// la muestra del ancho de los bordes
var getMuestraAnchoBordes = document.getElementById("muestraAnchoBordes");
// para no repetirlo en input y change del slider ancho bordes
function actualizaAnchoBordes(nuevoValor) {
    var nuevo = nuevoValor;
    nuevo = Number(nuevo);
    var pos = anchoValues.indexOf(nuevo);
    if (pos == -1) {
        nuevo = 4;
    } else {
        nuevo = anchoValues[pos];
    }    
    // ajusta la muestra
    // 120 * nuevo / 100.
    var anchoMuestra = nuevo * 1.2; // muestra tiene 120px de ancho
    getMuestraAnchoBordes.style.borderWidth = anchoMuestra + "px";
    getMuestraAnchoBordes.innerHTML = nuevo + "%";
}
//ancho de bordes cambia dinámicamente con el slider
//input y change, redundantes por un bug en IE
sliderAnchoBordes.oninput = function () {
    actualizaAnchoBordes(this.value);
}
sliderAnchoBordes.onchange = function () {
    actualizaAnchoBordes(this.value);
}
//el input range del radio de los bordes y sus botones debajo
var sliderRadio = document.getElementById("rangoRadioBordes");
var getCuadro = document.getElementById("icoCuadro");
var getCírculo = document.getElementById("icoCírculo");
var getMuestraRadio = document.getElementById("muestraRadio");
getCuadro.onclick = function () {
    // cero radio                   
    sliderRadio.value = 0;
    getMuestraRadio.style.MozBorderRadius = "0%";
    getMuestraRadio.style.webkitBorderRadius = "0%";
    getMuestraRadio.style.borderRadius = "0%";
    getMuestraRadio.innerHTML = "0%";
}
getCírculo.onclick = function () {
    // 50% radio                   
    sliderRadio.value = 50;
    getMuestraRadio.style.MozBorderRadius = "50%";
    getMuestraRadio.style.webkitBorderRadius = "50%";
    getMuestraRadio.style.borderRadius = "50%";
    getMuestraRadio.innerHTML = "50%";
}
//radio cambia dinámicamente con el slider
//input y change, redundantes por un bug en IE
sliderRadio.oninput = function () {
    actualizaRadio(this.value);
}
sliderRadio.onchange = function () {
    actualizaRadio(this.value);
}
// para no repetirlo en input y change del slider radio
function actualizaRadio(nuevoValor) {
    var nuevo = nuevoValor;
    nuevo = Number(nuevo);
    var pos = decValues.indexOf(nuevo);    
    if (pos == -1 || pos > 50) {
        nuevo = 0;
    } else {
        nuevo = decValues[pos];
    }
    var miValor = nuevo + "%";
    getMuestraRadio.style.MozBorderRadius = miValor;
    getMuestraRadio.style.webkitBorderRadius = miValor;
    getMuestraRadio.style.borderRadius = miValor;
    getMuestraRadio.innerHTML = miValor;
}

// cuando selecciona tipos de bordes en el modal
function seleccionaTipoBordes(miTipo) {
    //lo guarda en la temporal
    tempVarios = miTipo;
    // ajusta la muestra
    getMuestraTipoBordes.style.borderStyle = miTipo;
}
// formato a la muestra ExtraerDesde
function ajustarMuestraExtraer(desde) {
    // primero todo por defecto
    getMuestraMarcoExtraerLienzo.style.backgroundColor = "#dcdcdc";
    getMuestraMarcoExtraerPixel.style.backgroundColor = "#a9a9a9";
    getMuestraMarcoExtraerPixel.style.borderColor = "#696969";
    // ahora resalta según la opción seleccionada
    switch (desde) {
        case "Pixel":
            getMuestraMarcoExtraerPixel.style.backgroundColor = "#228b22";
            break;
        case "Lienzo":
            getMuestraMarcoExtraerLienzo.style.backgroundColor = "#228b22";
            break;
        case "Bordes":
            getMuestraMarcoExtraerPixel.style.borderColor = "#228b22";
            break;
    }
}
// cuando selecciona ExtraerDesde en el modal
function seleccionaExtraerDesde(desde) {
    //lo guarda en la temporal
    tempVarios = desde;
    // ajusta la muestra
    ajustarMuestraExtraer(desde);
}
var timerRGB;
// ajustes rgb según los slider
// requiere función validaComponenteRGB(idActual, idSincronizar, fuenteRoja)
function actualizaRGB(componente) {
    // variables globales miR miG miB ya tienen valores válidos
    // pueden cambiar desde los rangos o los number rgb
    rgbTemp = "rgb(" + miR + ", " + miG + ", " + miB + ")";
    hexTemp = convertirRGBaHexadecimal(rgbTemp);
    // cancela el timerRGB
    clearTimeout(timerRGB);
    // primero rgbCaption muestra el cambio actual
    switch (componente) {
        case "r":
            // rojo
            document.getElementById("rgbCaption").innerHTML = "Rojo = " + miR;
            document.getElementById("rgbCaption").style.color = "#ff0000";
            $("#rangoR").attr("title", miR);
            break;
        case "g":
            // verde
            document.getElementById("rgbCaption").innerHTML = "Verde = " + miG;
            document.getElementById("rgbCaption").style.color = "#008000";
            $("#rangoG").attr("title", miG);
            break;
        case "b":
            // azul
            document.getElementById("rgbCaption").innerHTML = "Azul = " + miB;
            document.getElementById("rgbCaption").style.color = "#0000ff";
            $("#rangoB").attr("title", miB);
            break;
    }
    // rgbCaption MUESTRA EL COLOR ACTUAL EN RGB Y HEX
    // pero unos segundos despúes
    timerRGB = setTimeout(function () {
        document.getElementById("rgbCaption").innerHTML = "" + rgbTemp + " - " + hexTemp;
        document.getElementById("rgbCaption").style.color = "purple";
    }, 2500);
    // LOS BORDES DE contenedorRGB SON LA MUESTRA DE COLOR
    $("#contenedorRGB").css("border-color", hexTemp);
    // tambíen el ícono en el título es una muestra icoMuestraRGB
    $("#icoMuestraRGB").css("color", hexTemp);
}
// valida valores rgb en rangos y number
// devuelve el valor normalizado o cero en caso de no ser válido
// admite un parámetro para fuente roja en campo errado
// primer id es el campo a validar, segundo id es el que se sincroniza
function validaComponenteRGB(idActual, idSincronizar, fuenteRoja) {
    var nuevo = document.getElementById(idActual).value;
    nuevo = Number(nuevo);
    var pos = decValues.indexOf(nuevo);    
    if (pos == -1) {
        // no es un valor válido entre 0 y 255
        nuevo = 0; // le asigna el valor de negro, como recomienda la W3
        // fuente roja
        if (fuenteRoja == true) {
            document.getElementById(idActual).style.color = "red";
        }
    } else {
        nuevo = decValues[pos];
        // fuente roja
        if (fuenteRoja == true) {
            document.getElementById(idActual).style.color = "black";
        }
    }
    // sincroniza el otro control
    document.getElementById(idSincronizar).value = nuevo;
    // devuelve el valor normalizado, siempre válido
    return nuevo;
}
// rgb cambia dinámicamente con los slider
//input y change, redundantes por un bug en IE
// rango rojo
document.getElementById("rangoR").oninput = function () {
    miR = validaComponenteRGB("rangoR", "numberR", false);
    actualizaRGB("r");
}
document.getElementById("rangoR").onchange = function () {
    miR = validaComponenteRGB("rangoR", "numberR", false);
    actualizaRGB("r");
}
// rango verde
document.getElementById("rangoG").oninput = function () {
    miG = validaComponenteRGB("rangoG", "numberG", false);
    actualizaRGB("g");
}
document.getElementById("rangoG").onchange = function () {   
    miG = validaComponenteRGB("rangoG", "numberG", false);
    actualizaRGB("g");
}
// rango azul
document.getElementById("rangoB").oninput = function () {
    miB = validaComponenteRGB("rangoB", "numberB", false);
    actualizaRGB("b");
}
document.getElementById("rangoB").onchange = function () {    
    miB = validaComponenteRGB("rangoB", "numberB", false);
    actualizaRGB("b");
}
// rgb cambia dinámicamente con los input number
//input y change, redundantes por un bug en IE
// number rojo
document.getElementById("numberR").oninput = function () {
    miR = validaComponenteRGB("numberR", "rangoR", true);
    actualizaRGB("r");
}
document.getElementById("numberR").onchange = function () {
    miR = validaComponenteRGB("numberR", "rangoR", true);
    actualizaRGB("r");
}
// number verde
document.getElementById("numberG").oninput = function () {
    miG = validaComponenteRGB("numberG", "rangoG", true);
    actualizaRGB("g");
}
document.getElementById("numberG").onchange = function () {
    miG = validaComponenteRGB("numberG", "rangoG", true);
    actualizaRGB("g");
}
// number AZUL
document.getElementById("numberB").oninput = function () {
    miB = validaComponenteRGB("numberB", "rangoB", true);
    actualizaRGB("b");
}
document.getElementById("numberB").onchange = function () {
    miB = validaComponenteRGB("numberB", "rangoB", true);
    actualizaRGB("b");
}
// extrae Rojo en entero de un valor hexadecimal
function rDesdeHex(hex) {
    var miR = 0;
    hex = "" + hex;
    miR = hex.slice(1, 3);
    miR = parseInt(miR, 16);
    return miR;
}
// extrae Verde en entero de un valor hexadecimal
function gDesdeHex(hex) {
    var miG = 0;
    hex = "" + hex;
    miG = hex.slice(3, 5);
    miG = parseInt(miG, 16);
    return miG;
}
// extrae Azul en entero de un valor hexadecimal
function bDesdeHex(hex) {
    var miB = 0;
    hex = "" + hex;
    miB = hex.slice(5);
    miB = parseInt(miB, 16);
    return miB;
}
// HSL      **********
// ajustes hsl según los slider o input number
// requiere función validaComponenteHSL(idActual, idSincronizar, fuenteRoja, tope)
function actualizaHSL(componente) {
    // variables globales miH miS miL ya tienen valores válidos
    // pueden cambiar desde los rangos o los number hsl
    var tempHSL = hslToRgb(miH, miS / 100, miL / 100);     
    rgbTemp = "rgb(" + Math.round(tempHSL.r) + ", " + Math.round(tempHSL.g) + ", " + Math.round(tempHSL.b) + ")";
    //alert("rgbtemp: " + rgbTemp);
    hexTemp = convertirRGBaHexadecimal(rgbTemp);    
    // hslCaption MUESTRA EL COLOR ACTUAL EN HSL Y HEX
    document.getElementById("hslCaption").innerHTML = "hsl(" + miH + "\u00B0, " + miS + "%, " + miL + "%) - " + hexTemp;
    // LOS BORDES DE contenedorRGB SON LA MUESTRA DE COLOR, INICIAN CON EL ACTUAL
    $("#contenedorHSL").css("border-color", hexTemp);
    // LOS BORDES DE la clase contenedor-hsl-color son del color actual
    $(".contenedor-hsl-color").css("border-color", hexTemp);
    // también el ícono en el título es una muestra
    $("#icoMuestraHSL").css("color", hexTemp);
    // dependiendo del componente hsl que cambió...
    switch (componente) {
        case "h":
            // h
            // las sombras de los contenedores según el h actual            
            getRoot.style.setProperty('--color-sombra', "hsl(" + miH + ", 100%, 50%)");
            // el indicador multicolor de ángulo
            var scrolled = (miH / 360) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";     
            // LOS RANGOS TIENEN SU TITLE actual
            $("#rangoH").attr("title", miH);            
            // ajusta el gradiente del slider rangoS según color actual
            ajustarGradienteHSL("s");
            // ajusta el gradiente del slider rangoL según color actual
            ajustarGradienteHSL("l");
            break;
        case "s":
            // s
            // LOS RANGOS TIENEN SU TITLE actual            
            $("#rangoS").attr("title", miS);
            // ajusta el gradiente del slider rangoH según color actual
            ajustarGradienteHSL("h");            
            // ajusta el gradiente del slider rangoL según color actual
            ajustarGradienteHSL("l");
            break;
        case "l":
            // l
            // LOS RANGOS TIENEN SU TITLE actual            
            $("#rangoL").attr("title", miL);
            // ajusta el gradiente del slider rangoH según color actual
            ajustarGradienteHSL("h");
            // ajusta el gradiente del slider rangoS según color actual
            ajustarGradienteHSL("s");            
            break;
    }
}
//capturando pulsación de teclado en campo numberH...
document.getElementById("numberH").onkeydown = function (e) {

    var characterCode;
    // e.key es la recomendación actual
    if (e.key != undefined) {
        if (e.key.toLowerCase() == "enter") {
            characterCode = 13;
        }
        else {
            characterCode = 0;
        }
    } else {
        /* navegadores antiguos...  */
        characterCode = e.which || e.charCode || e.keyCode || e.keyIdentifier || 0;
    }

    // solo si presionó Enter
    if (characterCode == 13) {

        //da el enfoque al SIGUIENTE,

        document.getElementById("numberH").blur();
        document.getElementById("numberS").focus();

    }

}
//capturando pulsación de teclado en campo numberS...
document.getElementById("numberS").onkeydown = function (e) {

    var characterCode;
    // e.key es la recomendación actual
    if (e.key != undefined) {
        if (e.key.toLowerCase() == "enter") {
            characterCode = 13;
        }
        else {
            characterCode = 0;
        }
    } else {
        /* navegadores antiguos...  */
        characterCode = e.which || e.charCode || e.keyCode || e.keyIdentifier || 0;
    }

    // solo si presionó Enter
    if (characterCode == 13) {

        //da el enfoque al SIGUIENTE,

        document.getElementById("numberS").blur();
        document.getElementById("numberL").focus();

    }

}
//capturando pulsación de teclado en campo numberL...
document.getElementById("numberL").onkeydown = function (e) {

    var characterCode;
    // e.key es la recomendación actual
    if (e.key != undefined) {
        if (e.key.toLowerCase() == "enter") {
            characterCode = 13;
        }
        else {
            characterCode = 0;
        }
    } else {
        /* navegadores antiguos...  */
        characterCode = e.which || e.charCode || e.keyCode || e.keyIdentifier || 0;
    }

    // solo si presionó Enter
    if (characterCode == 13) {

        //da el enfoque al SIGUIENTE,

        document.getElementById("numberL").blur();
        document.getElementById("BtnAceptar").focus();
    }

}
// valida valores HSL en rangos y number
// devuelve el valor normalizado o cero en caso de no ser válido
// admite un parámetro para fuente roja en campo errado
// Parámetro tope indica el máximo valor permitido (100 o 360)
// primer id es el campo a validar, segundo id es el que se sincroniza
function validaComponenteHSL(idActual, idSincronizar, fuenteRoja, tope) {
    var nuevo = document.getElementById(idActual).value;
    nuevo = Number(nuevo);
    var pos = dec360Values.indexOf(nuevo);    
    if (pos == -1 || pos > tope) {
        // no es un valor válido entre 0 y tope
        nuevo = 0; // le asigna el valor de negro, como recomienda la W3
        // fuente roja
        if (fuenteRoja == true) {
            document.getElementById(idActual).style.color = "red";
        }
    } else {
        nuevo = dec360Values[pos];
        // fuente roja
        if (fuenteRoja == true) {
            document.getElementById(idActual).style.color = "black";
        }
    }
    // sincroniza el otro control
    document.getElementById(idSincronizar).value = nuevo;
    // devuelve el valor normalizado, siempre válido
    return nuevo;
}
// HSL cambia dinámicamente con los slider
//input y change, redundantes por un bug en IE
// rango H
document.getElementById("rangoH").oninput = function () {
    miH = validaComponenteHSL("rangoH", "numberH", false, 360);
    actualizaHSL("h");
}
document.getElementById("rangoH").onchange = function () {
    miH = validaComponenteHSL("rangoH", "numberH", false, 360);
    actualizaHSL("h");
}
// rango S
document.getElementById("rangoS").oninput = function () {
    miS = validaComponenteHSL("rangoS", "numberS", false, 100);
    actualizaHSL("s");
}
document.getElementById("rangoS").onchange = function () {
    miS = validaComponenteHSL("rangoS", "numberS", false, 100);
    actualizaHSL("s");
}
// rango L
document.getElementById("rangoL").oninput = function () {
    miL = validaComponenteHSL("rangoL", "numberL", false, 100);
    actualizaHSL("l");
}
document.getElementById("rangoL").onchange = function () {
    miL = validaComponenteHSL("rangoL", "numberL", false, 100);
    actualizaHSL("l");
}
// HSL cambia dinámicamente con los input number
//input y change, redundantes por un bug en IE
// number H
document.getElementById("numberH").oninput = function () {
    miH = validaComponenteHSL("numberH", "rangoH", true, 360);
    actualizaHSL("h");
}
document.getElementById("numberH").onchange = function () {
    miH = validaComponenteHSL("numberH", "rangoH", true, 360);
    actualizaHSL("h");
}
// number S
document.getElementById("numberS").oninput = function () {
    miS = validaComponenteHSL("numberS", "rangoS", true, 100);
    actualizaHSL("s");
}
document.getElementById("numberS").onchange = function () {
    miS = validaComponenteHSL("numberS", "rangoS", true, 100);
    actualizaHSL("s");
}
// number L
document.getElementById("numberL").oninput = function () {
    miL = validaComponenteHSL("numberL", "rangoL", true, 100);
    actualizaHSL("l");
}
document.getElementById("numberL").onchange = function () {
    miL = validaComponenteHSL("numberL", "rangoL", true, 100);
    actualizaHSL("l");
}
// ajusta el gradiente de los slider hsl
function ajustarGradienteHSL(componente) {
    switch (componente) {
        case "h":
            // gradiente toma valores de s y l actuales, y h varía de 0 a 360 grados
            getRoot.style.setProperty('--color-hue0', "hsl(0, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue30', "hsl(30, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue60', "hsl(60, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue90', "hsl(90, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue120', "hsl(120, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue150', "hsl(150, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue180', "hsl(180, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue210', "hsl(210, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue240', "hsl(240, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue270', "hsl(270, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue300', "hsl(300, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue330', "hsl(330, " + miS + "%, " + miL + "%)");
            getRoot.style.setProperty('--color-hue360', "hsl(360, " + miS + "%, " + miL + "%)");            
            break;
        case "s":
            // gradiente toma valores de h y l actuales, y s varía de 0% a 100%
            getRoot.style.setProperty('--color-sat0', "hsl(" + miH + ", 0%, " + miL + "%)");
            getRoot.style.setProperty('--color-sat10', "hsl(" + miH + ", 10%, " + miL + "%)");
            getRoot.style.setProperty('--color-sat20', "hsl(" + miH + ", 20%, " + miL + "%)");
            getRoot.style.setProperty('--color-sat30', "hsl(" + miH + ", 30%, " + miL + "%)");
            getRoot.style.setProperty('--color-sat40', "hsl(" + miH + ", 40%, " + miL + "%)");
            getRoot.style.setProperty('--color-sat50', "hsl(" + miH + ", 50%, " + miL + "%)");
            getRoot.style.setProperty('--color-sat60', "hsl(" + miH + ", 60%, " + miL + "%)");
            getRoot.style.setProperty('--color-sat70', "hsl(" + miH + ", 70%, " + miL + "%)");
            getRoot.style.setProperty('--color-sat80', "hsl(" + miH + ", 80%, " + miL + "%)");
            getRoot.style.setProperty('--color-sat90', "hsl(" + miH + ", 90%, " + miL + "%)");
            getRoot.style.setProperty('--color-sat100', "hsl(" + miH + ", 100%, " + miL + "%)");
            break;
        case "l":
            // gradiente toma valores de h y s actuales, y l varía de 0% a 100%
            getRoot.style.setProperty('--color-lum0', "hsl(" + miH + ", " + miS + "%, 0%)");
            getRoot.style.setProperty('--color-lum10', "hsl(" + miH + ", " + miS + "%, 10%)");
            getRoot.style.setProperty('--color-lum20', "hsl(" + miH + ", " + miS + "%, 20%)");
            getRoot.style.setProperty('--color-lum30', "hsl(" + miH + ", " + miS + "%, 30%)");
            getRoot.style.setProperty('--color-lum40', "hsl(" + miH + ", " + miS + "%, 40%)");
            getRoot.style.setProperty('--color-lum50', "hsl(" + miH + ", " + miS + "%, 50%)");
            getRoot.style.setProperty('--color-lum60', "hsl(" + miH + ", " + miS + "%, 60%)");
            getRoot.style.setProperty('--color-lum70', "hsl(" + miH + ", " + miS + "%, 70%)");
            getRoot.style.setProperty('--color-lum80', "hsl(" + miH + ", " + miS + "%, 80%)");
            getRoot.style.setProperty('--color-lum90', "hsl(" + miH + ", " + miS + "%, 90%)");
            getRoot.style.setProperty('--color-lum100', "hsl(" + miH + ", " + miS + "%, 100%)");
            break;
    }
}

// convierte hsl en rgb
// requiere función hueToRgb
function hslToRgb(hue, sat, light) {
    var t1, t2, r, g, b;
    hue = hue / 60;
    if (light <= 0.5) {
        t2 = light * (sat + 1);
    } else {
        t2 = light + sat - (light * sat);
    }
    t1 = light * 2 - t2;
    r = hueToRgb(t1, t2, hue + 2) * 255;
    g = hueToRgb(t1, t2, hue) * 255;
    b = hueToRgb(t1, t2, hue - 2) * 255;
    return { r: r, g: g, b: b };
}
// requerida por función hslToRgb
function hueToRgb(t1, t2, hue) {
    if (hue < 0) hue += 6;
    if (hue >= 6) hue -= 6;
    if (hue < 1) return (t2 - t1) * hue + t1;
    else if (hue < 3) return t2;
    else if (hue < 4) return (t2 - t1) * (4 - hue) + t1;
    else return t1;
}
// convierte rgb en hsl 
function rgbToHsl(r, g, b) {
    var min, max, i, l, s, maxcolor, h, rgb = [];
    rgb[0] = r / 255;
    rgb[1] = g / 255;
    rgb[2] = b / 255;
    min = rgb[0];
    max = rgb[0];
    maxcolor = 0;
    for (i = 0; i < rgb.length - 1; i++) {
        if (rgb[i + 1] <= min) { min = rgb[i + 1]; }
        if (rgb[i + 1] >= max) { max = rgb[i + 1]; maxcolor = i + 1; }
    }
    if (maxcolor == 0) {
        h = (rgb[1] - rgb[2]) / (max - min);
    }
    if (maxcolor == 1) {
        h = 2 + (rgb[2] - rgb[0]) / (max - min);
    }
    if (maxcolor == 2) {
        h = 4 + (rgb[0] - rgb[1]) / (max - min);
    }
    if (isNaN(h)) { h = 0; }
    h = h * 60;
    if (h < 0) { h = h + 360; }
    l = (min + max) / 2;
    if (min == max) {
        s = 0;
    } else {
        if (l < 0.5) {
            s = (max - min) / (max + min);
        } else {
            s = (max - min) / (2 - max - min);
        }
    }
    s = s;
    return { h: h, s: s, l: l };
}
// ajustes según la disponibilidad de deshacer
function estadoBtnDeshacer(activar, captionBtn) {    
    if (activar == true) {
        // activa el botón deshacer
        getBtnDeshacer.disabled = false;
        getBtnDeshacer.style.opacity = "1";
        getBtnDeshacer.style.cursor = "pointer";        
    } else {
        // dasactiva el botón deshacer
        // porque solo se puede deshacer una sola vez
        getBtnDeshacer.disabled = true;
        getBtnDeshacer.style.opacity = "0.5";
        getBtnDeshacer.style.cursor = "not-allowed";
        captionBtn = "No se puede deshacer";
    }
    getBtnDeshacer.setAttribute("title", captionBtn);
}
function alturaModal() {
    var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    //var bd = document.getElementById("modalBody");
    //var ft = document.getElementById("modalFooter");
    //var hd = document.getElementById("modalHeader");
    // mejor define altura descontando título y footer.
    h = 0.82 * (h - 30 - getmodalHeader.scrollHeight - getmodalFooter.scrollHeight);
    getmodalBody.style.height = h + "px";
}
// ajustes según el tamaño de la pantalla
// referencias están al inicio del script
function ajustesResize() {    
    // para obtener anchos mínimos de botones al diseñar
    // $("#BtnEtiquetas1").attr("title", document.getElementById("BtnEtiquetas1").offsetWidth);
    
    // ajusta el infoTemporal, solo si es visible    
    if (window.getComputedStyle(infoTemp).display === "block") {
        infoTemp.style.marginLeft = -infoTemp.offsetWidth / 2 + "px";
        infoTemp.style.top = 40 + getPaletaArriba.offsetHeight + "px";
    }
            
    // el top del historial    
    getBtnCerrarHistorial.style.top = 0 + getPaletaArriba.offsetHeight + "px";
    getPaletaHistorial.style.top = 0 + getPaletaArriba.offsetHeight + getBtnCerrarHistorial.offsetHeight + "px";
    getPaletaHistorial.style.bottom = 0 + getPaletaAbajo.offsetHeight + "px";
    if (pantallaCompleta == true) {
        var h = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        $(getContenedor).css("margin", "0px");
        var margenArribaCont = h - getContenedor.offsetHeight;
        margenArribaCont = margenArribaCont / 2;
        if (isNaN(margenArribaCont) == true || margenArribaCont < 0) {
            margenArribaCont = 0;
        }
        $(getContenedor).css("margin-top", margenArribaCont + "px");
        $(getContenedor).css("max-width", "98%");        
    } else {
        var margenArribaCont = 8 + getPaletaArriba.offsetHeight;
        $(getContenedor).css("margin", "0px");
        $(getContenedor).css("margin-top", margenArribaCont + "px");
        $(getContenedor).css("max-width", "88%");        
        var espacioPie = 12 + getPaletaAbajo.offsetHeight;
        //$("#paletaAbajo").attr("title", espacioPie);
        $(getpieAfter).css("height", espacioPie + "px");        
    }
    if (modalActual == "ninguno") {
        // ajusta el contenedor a su contendido, sin scroll
        // por un bug en tv LG
        getContenedor.width = getContenedor.scrollWidth + "px";
        getContenedor.height = getContenedor.scrollHeight + "px";
    }
    else {
        alturaModal();
        // cuando está en galería
        if (modalActual == "gallery") {
            // recorre los paneles
            var panel = document.getElementsByClassName("panel");
            var i;
            for (i = 0; i < panel.length; i++) {
                if (panel[i].style.maxHeight) {
                    // los páneles abiertos se ajustan a su contenido, para que se vea el scroll bar
                    panel[i].style.maxHeight = panel[i].scrollHeight + "px";
                }
            }
        }
        if (modalActual == "hsl") {
            // para definir márgenes y centrar los elementos flotantes
            var marg = 0;
            var margRango = 0;
            // 0 inicialmente
            $(".number-hsl-container").css("margin-top", "0px");
            $(".number-hsl-container").css("margin-bottom", "0px");
            $("#rangoH").css("margin-top", "0px");
            $("#rangoH").css("margin-bottom", "0px");
            $("#rangoS").css("margin-top", "0px");
            $("#rangoS").css("margin-bottom", "0px");
            $("#rangoL").css("margin-top", "0px");
            $("#rangoL").css("margin-bottom", "0px");
            if ($('.number-hsl-container').css("float") == "left") {
                // centra verticalmente
                marg = document.getElementsByClassName("contenedor-hsl-color")[0].scrollHeight - document.getElementsByClassName("number-hsl-container")[0].offsetHeight;
                marg = marg / 2;
                margRango = document.getElementsByClassName("contenedor-hsl-color")[0].scrollHeight - document.getElementById("rangoH").offsetHeight;
                margRango = margRango / 2;
                if (marg < 4 || isNaN(marg) == true) {
                    marg = 4;
                }
                if (margRango < 4 || isNaN(margRango) == true) {
                    margRango = 4;
                }
            } else {
                marg = 8;
                margRango = 8;
            }
            $(".number-hsl-container").css("margin-top", marg + "px");
            $(".number-hsl-container").css("margin-bottom", marg + "px");
            $("#rangoH").css("margin-top", margRango + "px");
            $("#rangoH").css("margin-bottom", margRango + "px");
            $("#rangoS").css("margin-top", margRango + "px");
            $("#rangoS").css("margin-bottom", margRango + "px");
            $("#rangoL").css("margin-top", margRango + "px");
            $("#rangoL").css("margin-bottom", margRango + "px");
        }
        if (modalActual == "rgb") {             
            // para definir márgenes y centrar los elementos flotantes
            var marg = 0;
            var margRango = 0; 
            // 0 inicialmente
            $(".number-rgb-container").css("margin-top", "0px");
            $(".number-rgb-container").css("margin-bottom", "0px");
            $("#rangoR").css("margin-top", "0px");
            $("#rangoR").css("margin-bottom", "0px");
            $("#rangoG").css("margin-top", "0px");
            $("#rangoG").css("margin-bottom", "0px");
            $("#rangoB").css("margin-top", "0px");
            $("#rangoB").css("margin-bottom", "0px");        
            if ($('.number-rgb-container').css("float") == "left") {
                // centra verticalmente
                marg = document.getElementsByClassName("contenedor-rgb-color")[0].scrollHeight - document.getElementsByClassName("number-rgb-container")[0].offsetHeight;
                marg = marg / 2;
                margRango = document.getElementsByClassName("contenedor-rgb-color")[0].scrollHeight - document.getElementById("rangoR").offsetHeight;
                margRango = margRango / 2;
                if (marg < 4 || isNaN(marg) == true) {
                    marg = 4;
                }
                if (margRango < 4 || isNaN(margRango) == true) {
                    margRango = 4;
                }
            } else {
                marg = 8;
                margRango = 8;
            }            
            $(".number-rgb-container").css("margin-top", marg + "px");
            $(".number-rgb-container").css("margin-bottom", marg + "px"); 
            $("#rangoR").css("margin-top", margRango + "px");
            $("#rangoR").css("margin-bottom", margRango + "px");
            $("#rangoG").css("margin-top", margRango + "px");
            $("#rangoG").css("margin-bottom", margRango + "px");
            $("#rangoB").css("margin-top", margRango + "px");
            $("#rangoB").css("margin-bottom", margRango + "px");
        }   
    }
}
// para los filtros
function AplicarFiltro() {
    var xsel = getFiltro.selectedIndex;
    var y = getFiltro.options;
    // guarda
    lastAction = "filtrar";
    lastIndexFiltro = actualIndexFiltro;
    actualIndexFiltro = getFiltro.selectedIndex;
    // sintaxis estándar
    getContenedor.style.filter = y[xsel].value;
    // Safari 6.0 - 9.0
    getContenedor.style.WebkitFilter = y[xsel].value;
    // activa el botón deshacer
    estadoBtnDeshacer(true, "Deshacer filtro");
}
// para el fondo de la página
function aplicarFondo() {
    var xsel = getSelectFondo.selectedIndex;
    var y = getSelectFondo.options;    
    // obtiene el valor actual de la lista
    var nuevoFondo = y[xsel].value;
    // aplica la clase al body
    document.body.setAttribute("class", nuevoFondo);
    // guarda la preferencia
    // protegido por protocolo file en ie
    try {
        if(typeof (Storage) !== "undefined") {
            // si soporta almacenamiento, guarda el valor                            
            localStorage.fondopixeles = nuevoFondo;
        }
    }
    catch (err) {
        // simplemente no guarda, no reporta
    }    
}

// para cerrar el modal y controlar el actual
function cerrarModal() {
    // restaura el pie
    getPie.style.display = "block";
    // oculta el modal
    modal.style.display = "none";
    // acciones específicas, según el modal que se cierra
    if (modalActual == "hsl") {
        // libera recursos
        dec360Values.length = 0;
    }
    // una pequeña animación
    if (restauraOpacidad == true) {
        getContenedor.style.opacity = "1";
    } else {
        // no hace nada por el momento
    }
    // no hay modal abierto
    modalActual = "ninguno";    
    //restaura el scroll
    document.body.scrollTop = miBodyScroll; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = miDocumentScroll; // For IE and Firefox    
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    cerrarModal();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        cerrarModal();
    }
}
// al hacer click en aceptar o presionar enter en el selector hex
function aceptarModalHex() {
    // actualiza el color actual según el hex seleccionado
    // asigna el valor hexadecimal al input color
    getcolorPixel.value = hexTemp;
    // para otras actualizaciones
    colorPixel();
}
//capturando pulsación de teclado en campo valorHex...
document.getElementById("valorHex").onkeydown = function (e) {

    var characterCode;
    // e.key es la recomendación actual
    if (e.key != undefined) {
        if (e.key.toLowerCase() == "enter") {
            characterCode = 13;
        }
        else {
            characterCode = 0;
        }
    } else {
        /* navegadores antiguos...  */
        characterCode = e.which || e.charCode || e.keyCode || e.keyIdentifier || 0;
    }

    // solo si presionó Enter
    if (characterCode == 13) {

        //da el enfoque al botón,
        //esto permite que se oculte el teclado en algunos móviles

        document.getElementById("valorHex").blur();
        document.getElementById("BtnAceptar").focus();
        //ahora sí llama la función
        // no es necesario, focus a un btn dispara click
        //aceptarModalHex();
        
    }

}
//capturando pulsación de teclado en campo numberR...
document.getElementById("numberR").onkeydown = function (e) {

    var characterCode;
    // e.key es la recomendación actual
    if (e.key != undefined) {
        if (e.key.toLowerCase() == "enter") {
            characterCode = 13;
        }
        else {
            characterCode = 0;
        }
    } else {
        /* navegadores antiguos...  */
        characterCode = e.which || e.charCode || e.keyCode || e.keyIdentifier || 0;
    }

    // solo si presionó Enter
    if (characterCode == 13) {

        //da el enfoque al SIGUIENTE,
       
        document.getElementById("numberR").blur();
        document.getElementById("numberG").focus();
        
    }

}
//capturando pulsación de teclado en campo numberG...
document.getElementById("numberG").onkeydown = function (e) {

    var characterCode;
    // e.key es la recomendación actual
    if (e.key != undefined) {
        if (e.key.toLowerCase() == "enter") {
            characterCode = 13;
        }
        else {
            characterCode = 0;
        }
    } else {
        /* navegadores antiguos...  */
        characterCode = e.which || e.charCode || e.keyCode || e.keyIdentifier || 0;
    }

    // solo si presionó Enter
    if (characterCode == 13) {

        //da el enfoque al SIGUIENTE,

        document.getElementById("numberG").blur();
        document.getElementById("numberB").focus();

    }

}
//capturando pulsación de teclado en campo numberB...
document.getElementById("numberB").onkeydown = function (e) {

    var characterCode;
    // e.key es la recomendación actual
    if (e.key != undefined) {
        if (e.key.toLowerCase() == "enter") {
            characterCode = 13;
        }
        else {
            characterCode = 0;
        }
    } else {
        /* navegadores antiguos...  */
        characterCode = e.which || e.charCode || e.keyCode || e.keyIdentifier || 0;
    }

    // solo si presionó Enter
    if (characterCode == 13) {

        //da el enfoque al SIGUIENTE,

        document.getElementById("numberB").blur();
        document.getElementById("BtnAceptar").focus();
    }

}
// al hacer click en aceptar en el modal con la opción aplicar lienzo global
function aplicarLienzoGlobal() {    
    var i;
    //debe guardar los colores de los lienzos y sus id      
    lastAction = "CambiarColorLienzoGlobal";
    lastArrayLienzo.length = 0;
    lastArrayID.length = 0;
    // nuevo global aplicado
    lastColorLienzoAplicado = colorLienzoAplicado;
    colorLienzoAplicado = colorLienzo;
    //recorre todo el array y les aplica el color de lienzo
    for (i = 0; i < getColumnas.length; i++) {
        //guardar los id y el color anterior de lienzo al mismo tiempo que recorre los cuadritos
        lastArrayID[lastArrayID.length] = getColumnas[i].id;
        lastArrayLienzo[lastArrayLienzo.length] = getColumnas[i].dataset.colorlienzo;
        getColumnas[i].dataset.colorlienzo = colorLienzo;
        //$("[id = " + getColumnas[i].id + "]").parent().css("background-color", colorLienzo);
        $(getColumnas[i]).parent().css("background-color", colorLienzo);
    }
    // se procesa el historial
    procesarHistorial(colorActual);    
}
// depende de modalActual/
function aceptarModal() {
    switch (modalActual) {
        case "borrador":            
            // actualiza las variables con la nueva configuración del borrador
            // el option
            if ( document.getElementById("miCheckFormatosGlobales").checked ) {
                formatoAplicadoAlBorrar = "formatosGlobales";
                // la clase del ícono para alternar
                claseIcoBorrado = "far fa-trash-alt";
            } else {
                formatoAplicadoAlBorrar = "formatosIniciales";
                // la clase del ícono para alternar
                claseIcoBorrado = "fas fa-sync-alt";
            }
            // el select
            formatoBorrado = getSelectFormatoBorrado.value;
            // la etiqueta del btn se actualiza
            getSpanInfoBorrar.innerHTML = formatoBorradoComoTexto(formatoBorrado);
            var tempInfo = "Configuración borrador: " + formatoBorradoComoTexto(formatoBorrado);
            if (formatoAplicadoAlBorrar == "formatosGlobales") {
                tempInfo = tempInfo + " (Formato Global)";
            } else {
                tempInfo = tempInfo + " (Formato Inicial)";
            }
            // informa
            showSnackbar(tempInfo);            
            break;
        case "hsl":            
            // actualiza el color actual según el hsl seleccionado
            // asigna el valor hexadecimal al input color
            getcolorPixel.value = hexTemp;
            // para otras actualizaciones
            colorPixel();
            break;
        case "sombras":
            // captura el valor nuevo del select
            sombras = getSelectSombras.value;           
            // la info junto al botón
            getSpanInfoSombras.setAttribute("class", sombras);
            // ahora decide si lo aplica individualmente o a todos
            var decideSombrasGlobal = document.getElementById("myCheckSombrasGlobal").checked;
            if (decideSombrasGlobal == false) {
                // ya asignó el valor, se aplicará al hacer click en cada celda
                // informa y sale
                // nada que deshacer
                //showSnackbar("Sombra aplicada al hacer click: " + $("#selectSombras option:selected").text());
                showSnackbar("Sombras aplicadas al hacer click: " + getSelectSombras.options[getSelectSombras.selectedIndex].text);                
                break;
            }
            // en este punto sabemos que se aplicará a todos...
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia
                var i;
                //debe guardar los estilos de sombras y los id      
                lastAction = "CambiarSombrasGlobal";
                lastArraySombras.length = 0;
                lastArrayID.length = 0;
                // nueva global
                lastSombrasAplicada = sombrasAplicada;
                sombrasAplicada = sombras;
                //recorre todo el array y les aplica el estilo de sombras
                for (i = 0; i < getColumnas.length; i++) {
                    //guardar los id y los estilos de sombras al mismo tiempo que recorre los cuadritos
                    lastArrayID[lastArrayID.length] = getColumnas[i].id;
                    lastArraySombras[lastArraySombras.length] = getColumnas[i].dataset.sombras;
                    getColumnas[i].dataset.sombras = sombras;
                    // remueve todas las clases de sombras
                    $(getColumnas[i]).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
                    // agrega la clase actual de sombras
                    $(getColumnas[i]).addClass(sombras);                    
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas
                // ajusta todo
                ajustesResize();
                showSnackbar("Sombra global aplicada: " + getSelectSombras.options[getSelectSombras.selectedIndex].text);
                // puede deshacer
                estadoBtnDeshacer(true, "Deshacer cambio global de sombras");
            }, 0); 
            break;
        case "opacidad":
            //valida, porque en ie 9 input range se muestra como campo de texto
            var nuevo = sliderOpacidad.value;
            nuevo = Number(nuevo);
            var pos = decValues.indexOf(nuevo);
            if (pos == -1 || pos > 100) {
                nuevo = 100;
            } else {
                nuevo = decValues[pos];
            }
            // el nuevo valor            
            opacidad = nuevo / 100;      
            // la info junto al botón
            getSpanInfoOpacidad.innerHTML = nuevo + "%";
            // ahora decide si la aplica individualmente o a todos
            var decideOpacidadGlobal = document.getElementById("myCheckOpacidadGlobal").checked;
            if (decideOpacidadGlobal == false) {
                // ya asignó el valor, se aplicará al hacer click en cada celda
                // informa y sale
                // nada que deshacer
                showSnackbar("Opacidad aplicada al hacer click: " + nuevo + "%");
                break;
            }
            // en este punto sabemos que se aplicará a todos...
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia                
                var i;
                //debe guardar las opacidades y los id      
                lastAction = "CambiarOpacidadGlobal";
                lastArrayOpacidad.length = 0;
                lastArrayID.length = 0;
                //global
                lastOpacidadAplicada = opacidadAplicada;
                opacidadAplicada = opacidad;
                //recorre todo el array y les aplica la opacidad actual
                for (i = 0; i < getColumnas.length; i++) {
                    //guardar los id y los bordes al mismo tiempo que recorre los cuadritos
                    lastArrayID[lastArrayID.length] = getColumnas[i].id;
                    lastArrayOpacidad[lastArrayOpacidad.length] = getColumnas[i].style.opacity;                    
                    getColumnas[i].style.opacity = opacidad;
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas
                // ajusta todo
                ajustesResize();
                showSnackbar("Opacidad global aplicada: " + nuevo + "%");
                // puede deshacer
                estadoBtnDeshacer(true, "Deshacer cambio global de opacidad");
            }, 0);  
            break;
        case "colorBordes":            
            // dice "yo me encargo"
            restauraOpacidad = false;
            // nada que validar, colorActual es según la muestra
            // ahora decide si lo aplica individualmente o a todos
            var decideColorBordesGlobal = document.getElementById("miCheckColorBordesGlobal").checked;
            if (decideColorBordesGlobal == false) {
                // ya asignó el valor del color, se aplicará a los bordes al hacer click en cada celda
                // informa y sale
                // nada que deshacer
                showSnackbar("Color aplicado en bordes al hacer click: " + colorActual);
                // anima
                getContenedor.style.opacity = "1";
                break;
            }
            // en este punto sabemos que se aplicará a todos los bordes...
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {                
                var i;
                //debe guardar los colores de cada borde y los id      
                lastAction = "cambiarColorRejillaGlobal";
                lastArrayColorBordes.length = 0;
                lastArrayID.length = 0;
                // global
                lastColorBordesAplicado = colorBordesAplicado;
                colorBordesAplicado = colorActual;
                //recorre todo el array y les aplica el color de bordes
                for (i = 0; i < getColumnas.length; i++) {
                    //guardar los id y los colores de bordes al mismo tiempo que recorre los cuadritos
                    lastArrayID[lastArrayID.length] = getColumnas[i].id;
                    lastArrayColorBordes[lastArrayColorBordes.length] = getColumnas[i].dataset.colorbordes;
                    getColumnas[i].dataset.colorbordes = colorActual;                    
                    getColumnas[i].style.borderColor = colorActual;
                }
                // se procesa el historial
                procesarHistorial(colorActual);
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas
                // ajusta todo
                ajustesResize();
                showSnackbar("Color aplicado a todos los bordes: " + colorActual);
                // puede deshacer
                estadoBtnDeshacer(true, "Deshacer cambio global de color de bordes");
                // anima
                getContenedor.style.opacity = "1";
            }, 0);  
            break;
        case "extraer":
            // dice "yo me encargo"
            restauraOpacidad = false;
            // temporal pasa a ser el valor actual
            ExtraerDesde = tempVarios;
            // la info
            getSpanInfoExtraer.innerHTML = ExtraerDesde;
            // notifica la opción
            showSnackbar("Extraer desde: " + ExtraerDesde.toUpperCase());
            // anima
            getContenedor.style.opacity = "1";
            // nada que deshacer
            break;
        case "tipoBordes":
            // tempVarios contiene el valor seleccionado
            // dice "yo me encargo"
            restauraOpacidad = false;
            // primero lo guarda para poder deshacer
            lastTipoBordes = tipoBordes;
            lastAction = "CambiarTipoBordes";
            // temporal pasa a ser el valor actual
            tipoBordes = tempVarios;
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () { 
                var i;                
                //recorre todo el array y les aplica el ancho de borde
                for (i = 0; i < getColumnas.length; i++) {
                    getColumnas[i].style.borderStyle = tipoBordes;
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas
                // ajusta todo
                ajustesResize();
                showSnackbar("Tipo de bordes: " + tipoBordes.toUpperCase());
                // puede deshacer
                estadoBtnDeshacer(true, "Deshacer tipo de bordes");
                // anima
                getContenedor.style.opacity = "1";
            }, 0);  
            break;
        case "zoom":
            // dice "yo me encargo"
            restauraOpacidad = false;
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia
                //valida, porque en ie 9 input range se muestra como campo de texto
                var nuevo = sliderZoom.value;
                nuevo = Number(nuevo);
                var pos = decValues.indexOf(nuevo);
                if (pos == -1 || pos > 100 || pos < 4) {
                    nuevo = 24;
                } else {
                    nuevo = decValues[pos];
                }
                // nuevo ya tiene un valor válido
                // actualiza la variable global de tamaño
                tamaño = nuevo;
                // llama la rutina para refrescar tamaño de todos los pixeles
                // incremento cero y sin loader ni notificación
                ajustarTamaño(0, false, false);
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas
                showSnackbar("Tamaño: " + nuevo + " px");
                // anima
                getContenedor.style.opacity = "1";
            }, 0);  
            break;
        case "lienzo":
            // dice "yo me encargo"
            restauraOpacidad = false;
            //NADA QUE VALIDAR, el color actual está definido            
            // el nuevo valor
            colorLienzo = colorActual;
            // ahora decide si lo aplica individualmente o a todos
            var decideLienzoGlobal = document.getElementById("miCheckLienzoGlobal").checked;
            if (decideLienzoGlobal == false) {
                // el color actual se aplicará al hacer click en cada celda
                // informa y sale
                // nada que deshacer
                showSnackbar("Color de lienzo al hacer click: " + colorLienzo);                
                // anima
                getContenedor.style.opacity = "1";
                break;
            }
            // en este punto sabemos que se aplicará a todos...
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout( function () {
                aplicarLienzoGlobal();
                // oculta el loader
                $(".loader").addClass("oculto");
                // informa
                showSnackbar("Color aplicado a todos los lienzos: " + colorLienzo);
                // puede deshacer
                estadoBtnDeshacer(true, "Deshacer color de lienzo global");
                // anima
                getContenedor.style.opacity = "1";
            }, 0);                        
            break;
        case "anchoBordes":
            // dice "yo me encargo"
            restauraOpacidad = false;
            //valida, porque en ie 9 input range se muestra como campo de texto
            var nuevo = sliderAnchoBordes.value;
            nuevo = Number(nuevo);
            var pos = anchoValues.indexOf(nuevo);
            if (pos == -1) {
                nuevo = 4;
            } else {
                nuevo = anchoValues[pos];
            }    
            // el nuevo valor global
            // primero lo guarda para poder deshacer
            lastFactorAnchoBordes = factorAnchoBordes;
            lastAction = "CambiarAnchoBordes";
            factorAnchoBordes = nuevo / 100; // global, esto es usado en ajustarTamaño()            
            // se aplicará a todos...
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia                
                var i;
                // tamaño es global, el factor acaba de definirse
                anchoBordes = tamaño * factorAnchoBordes;
                //recorre todo el array y les aplica el ancho de borde
                for (i = 0; i < getColumnas.length; i++) { 
                    getColumnas[i].style.borderWidth = anchoBordes + "px";
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas
                // ajusta todo
                ajustesResize();
                showSnackbar("Ancho de bordes: " + nuevo + "%");
                // puede deshacer
                estadoBtnDeshacer(true, "Deshacer ancho de los bordes");
                // anima
                getContenedor.style.opacity = "1";
            }, 0);  
            break;
        case "radio":            
            //valida, porque en ie 9 input range se muestra como campo de texto
            var nuevo = sliderRadio.value;
            nuevo = Number(nuevo);
            var pos = decValues.indexOf(nuevo);
            if (pos == -1 || pos > 50) {
                nuevo = 0;
            } else {
                nuevo = decValues[pos];
            }
            // el nuevo valor
            radioBorde = nuevo + "%";  
            // la info junto al botón
            getSpanInfoRadio.innerHTML = radioBorde;
            // ahora decide si lo aplica individualmente o a todos
            var decideRadioGlobal = document.getElementById("myCheckRadioGlobal").checked;
            if (decideRadioGlobal == false) {
                // ya asignó el valor, se aplicará al hacer click en cada celda
                // informa y sale
                // nada que deshacer
                showSnackbar("Radio aplicado al hacer click: " + radioBorde);
                break;
            }
            // en este punto sabemos que se aplicará a todos...
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia                
                var i;
                //debe guardar los radios y los id      
                lastAction = "CambiarRadioBordesGlobal";
                lastArrayRadio.length = 0;
                lastArrayID.length = 0;
                // nuevo global
                lastRadioAplicado = radioAplicado;
                radioAplicado = radioBorde;
                //recorre todo el array y les aplica el radio de borde
                for (i = 0; i < getColumnas.length; i++) {
                    //guardar los id y los bordes al mismo tiempo que recorre los cuadritos
                    // solo los visibles, comentado, se aplica a todos                       
                    //if (window.getComputedStyle(getColumnas[i]).display === "inline-block") {
                        lastArrayID[lastArrayID.length] = getColumnas[i].id;
                        lastArrayRadio[lastArrayRadio.length] = getColumnas[i].dataset.radio;
                        getColumnas[i].dataset.radio = radioBorde;
                        getColumnas[i].style.MozBorderRadius = radioBorde;
                        getColumnas[i].style.webkitBorderRadius = radioBorde;
                        getColumnas[i].style.borderRadius = radioBorde;
                    //}
                }            
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas
                // ajusta todo
                ajustesResize();
                showSnackbar("Radio aplicado a todos los bordes: " + radioBorde);
                // puede deshacer
                estadoBtnDeshacer(true, "Deshacer cambio global de radios");
            }, 0);  
            break;
        case "rgb":
            // actualiza el color actual según el rgb seleccionado
            // asigna el valor hexadecimal al input color
            getcolorPixel.value = hexTemp;
            // para otras actualizaciones
            colorPixel();
            break;
        case "hex":
            aceptarModalHex();
            break;
        case "gallery":
            // actualiza el color actual según el elemento de la galería seleccionado
            // asigna el valor hexadecimal al input color
            getcolorPixel.value = hexTemp;
            // para otras actualizaciones
            colorPixel();
            break;
        case "importar":

            break;
        case "exportar":

            break;
        case "filas":

            break;
        case "columnas":

            break;
    }
    // cierra el modalActual
    cerrarModal();
}
// el botón aceptar del modal
document.getElementById("BtnAceptar").onclick = function () {
    // acepta
    aceptarModal();
}
// ajustar el modal según su uso
// depende de modalActual, ver declaración al principio
function showModal() {
    // primero guarda el scroll de la página
    miBodyScroll = document.body.scrollTop; // For Chrome, Safari and Opera
    miDocumentScroll = document.documentElement.scrollTop; // For IE and Firefox
    // para la animación, por defecto no se cambia la opacidad
    restauraOpacidad = false;
    //muestra el modal
    modal.style.display = "block";
    // oculta el pie para liberar recursos
    getPie.style.display = "none";
    //define su altura    
    alturaModal();
    // scroll
    getmodalBody.scrollTop = 0;
    // OCULTA TODOS LOS MARCOS
    $(".marco").css("display", "none");
    // ahora hace ajustes iniciales según su uso
    // por defecto visible
    $("#infoModal").css("display", "block");
    switch (modalActual) {
        case "info":
            $("#marcoInfo").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-info-circle'></i> Información";
            document.getElementById("spanInfoModal").innerHTML = "Se muestra información sobre el pixel seleccionado. Las propiedades individuales pueden ser personalizadas para cada pixel, las globales son iguales en todos los pixeles.";
            // LAS PROPIEDADES SE RECUPERAN Y SE ACTUALIZAN EN LA TABLA AL HACER CLIC EN CELDA EN MODO INFO
            // para animarla al cerrar: opacidad ajustada
            restauraOpacidad = true;
            $(getContenedor).css("opacity", "0");
            break;
        case "hsl":
            // llena el vector 360            
            for (i = 0; i <= 360; i++) {
                dec360Values[i] = Number(i);                
            }            
            $("#marcoHSL").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-sliders-h'></i> HSL: <i id = 'icoMuestraHSL' class='fas fa-square'></i>";
            document.getElementById("spanInfoModal").innerHTML = "Use los controles de Ángulo (<strong>H</strong>ue), Saturación (<strong>S</strong>aturation) y Luminosidad (<strong>L</strong>ightness) para definir un color HSL";            
            // inicialmente hex es el color actual
            hexTemp = colorActual;
            // ES NECESARIO SINCRONIZAR LAS VARIABLES GLOBALES
            miR = rDesdeHex(colorActual);
            miG = gDesdeHex(colorActual);
            miB = bDesdeHex(colorActual);
            var actualHSL = rgbToHsl(miR, miG, miB);            
            miH = Math.round(actualHSL.h);            
            miS = Math.round(actualHSL.s * 100);            
            miL = Math.round(actualHSL.l * 100);
            // LOS RANGOS rangoH, rangoS y rangoL  TOMAN LOS VALORES DEL COLOR ACTUAL                
            document.getElementById("rangoH").value = miH;
            document.getElementById("rangoS").value = miS;
            document.getElementById("rangoL").value = miL;
            // LOS input number numberH numberS numberL  TOMAN LOS VALORES DEL COLOR ACTUAL
            document.getElementById("numberH").value = miH;
            document.getElementById("numberS").value = miS;
            document.getElementById("numberL").value = miL;
            // LOS input number numberH numberS numberL  SON VÁLIDOS, FUENTE NEGRA
            $(".number-hsl").css("color", "#000000");
            // LOS RANGOS TIENEN SU TITLE INICIAL
            $("#rangoH").attr("title", miH);
            $("#rangoS").attr("title", miS);
            $("#rangoL").attr("title", miL);
            // hslCaption MUESTRA EL COLOR ACTUAL EN HSL Y HEX
            document.getElementById("hslCaption").innerHTML = "hsl(" + miH + "\u00B0, " + miS + "%, " + miL + "%) - " + colorActual;
            // LOS BORDES DE contenedorRGB SON LA MUESTRA DE COLOR, INICIAN CON EL ACTUAL
            $("#contenedorHSL").css("border-color", colorActual);
            // LOS BORDES DE la clase contenedor-hsl-color son del color actual
            $(".contenedor-hsl-color").css("border-color", colorActual);
            // también el ícono en el título es una muestra
            $("#icoMuestraHSL").css("color", colorActual);
            // las sombras de los contenedores según el h actual            
            getRoot.style.setProperty('--color-sombra', "hsl(" + miH + ", 100%, 50%)");
            // ajusta el gradiente del slider rangoH según color actual
            ajustarGradienteHSL("h");
            // ajusta el gradiente del slider rangoS según color actual
            ajustarGradienteHSL("s");
            // ajusta el gradiente del slider rangoL según color actual
            ajustarGradienteHSL("l");
            // el indicador multicolor de ángulo
            var scrolled = (miH / 360) * 100;
            document.getElementById("myBar").style.width = scrolled + "%";            
            break;
        case "sombras":
            $("#marcoSombras").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-sun'></i> Sombras";
            document.getElementById("spanInfoModal").innerHTML = "Seleccione un estilo de sombras de la lista y aplíquelo individualmente o a todos los pixeles.";
            // LA MUESTRA INDICA la sombra actual
            $(getMuestraSombras).attr("class", sombras);  
            // la lista indica la sombra actual
            getSelectSombras.value = sombras;
            // por defecto, no será global
            document.getElementById("myCheckSombrasGlobal").checked = false;
            // para animarla al cerrar: opacidad ajustada
            restauraOpacidad = true;
            $(getContenedor).css("opacity", "0");
            break;
        case "opacidad":
            $("#marcoOpacidad").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-adjust'></i> Opacidad";
            document.getElementById("spanInfoModal").innerHTML = "Utilice el control para ajustar la opacidad. Puede aplicar el nivel seleccionado de opacidad individualmente o a todos los pixeles.";
            // LA MUESTRA INDICA la opacidad actual
            $("#muestraOpacidad").css("opacity", opacidad);
            var opacActual = opacidad * 100;
            opacActual = opacActual.toFixed(0); // sin decimales
            getMuestraOpacidad.innerHTML = opacActual + "%";
            getPMuestraOpacidad.innerHTML = opacActual + "%";
            // ajusta el slider, sin decimales, de 0 a 100            
            sliderOpacidad.value = opacActual;
            // por defecto, será global
            document.getElementById("myCheckOpacidadGlobal").checked = true;
            // para animarla al cerrar: opacidad ajustada
            restauraOpacidad = true;
            $(getContenedor).css("opacity", "0");
            break;
        case "extraer":
            $("#marcoExtraer").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-map-pin'></i> Extraer Color";
            document.getElementById("spanInfoModal").innerHTML = "Seleccione si desea extraer el color del pixel, del lienzo o de los bordes. Al hacer click en un pixel cambiará el color actual según la opción seleccionada.";
            // se selecciona el option con el valor actual            
            var xCheck = document.getElementsByName("checkExtraer");
            var i;
            for (i = 0; i < xCheck.length; i++) {
                if (xCheck[i].value == ExtraerDesde) {
                    // el que coincide con la opción actual
                    xCheck[i].checked = true;
                    break;
                }
            }
            // ajusta la muestra o indicador
            ajustarMuestraExtraer(ExtraerDesde);
            // la variable temporal toma el valor actual
            tempVarios = ExtraerDesde;
            // para animarla al cerrar: opacidad ajustada
            restauraOpacidad = true;
            $(getContenedor).css("opacity", "0");
            break;
        case "borrador":
            $("#marcoBorrador").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-eraser'></i> Configurar Borrador";
            document.getElementById("spanInfoModal").innerHTML = "Configure el borrador en esta ventana. Elija aplicar el formato inicial o el último global. Indique también a qué elemento se aplicará el formato.";                
            // el botón de opción según el valor actual
            var xCheck = document.getElementsByName("checkFormatoAplicado");
            var i;
            for (i = 0; i < xCheck.length; i++) {
                if (xCheck[i].value == formatoAplicadoAlBorrar) {
                    // el que coincide con la opción actual
                    xCheck[i].checked = true;
                    break;
                }
            }
            // el select se ajusta al valor actual
            getSelectFormatoBorrado.value = formatoBorrado;
            break;
        case "colorBordes":
            $("#marcoColorBordes").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-tint'></i> Color de Bordes";
            document.getElementById("spanInfoModal").innerHTML = "El color del borde de cada pixel se aprecia cuando sus bordes son visibles y gruesos. Puede aplicar el color actual individualmente o a todos los pixeles. El efecto de algunos tipos de borde depende del color.";
            // LA MUESTRA DE COLOR INDICA EL COLOR ACTUAL
            $("#muestraMarcoColorBordes").css("background-color", colorActual);
            // por defecto, será global
            document.getElementById("miCheckColorBordesGlobal").checked = true;
            // para animarla al cerrar: opacidad ajustada
            restauraOpacidad = true;
            $(getContenedor).css("opacity", "0");
            break;
        case "tipoBordes":
            $("#marcoTipoBordes").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-border-style'></i> Tipo de borde";
            document.getElementById("spanInfoModal").innerHTML = "Seleccione el tipo de borde que se aplicará a todos los pixeles. El tipo de borde se aprecia mejor cuando los bordes son de mayor grosor. Recuerde usar la opción 'Con Bordes' para percibir los cambios.";
            // se selecciona el option con el valor actual            
            var xCheck = document.getElementsByName("checkTipoBordes");
            var i;
            for (i = 0; i < xCheck.length; i++) {
                if (xCheck[i].value == tipoBordes) {
                    // el que coincide con el estilo actual
                    xCheck[i].checked = true;
                    break;
                }
            }
            // ajusta la muestra            
            getMuestraTipoBordes.style.borderStyle = tipoBordes;
            // la variable temporal toma el valor actual
            tempVarios = tipoBordes;
            // para animarla al cerrar: opacidad ajustada
            restauraOpacidad = true;
            $(getContenedor).css("opacity", "0");
            break;
        case "anchoBordes":
            $("#marcoAnchoBordes").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<svg id='icoAnchoBordesModal' height='24' width='24'>< line x1= '4' y1= '4' x2= '20' y2= '4' style= 'stroke:rgb(255,255,255);stroke-width:0.7' /><line x1='4' y1='8' x2='20' y2='8' style='stroke:rgb(255,255,255);stroke-width:1' /><line x1='4' y1='13.3333' x2='20' y2='13.3333' style='stroke:rgb(255,255,255);stroke-width:1.8666' /><line x1='4' y1='20' x2='20' y2='20' style='stroke:rgb(255,255,255);stroke-width:3.8666' />|||</svg >Ancho de los bordes";
            document.getElementById("spanInfoModal").innerHTML = "Use el control para definir el ancho de los bordes como un porcentaje del tamaño del pixel (0,25% - 20%). Los bordes muy delgados podrían no ser visibles en algunos dispositivos.";
            // el slider muestra el porcentaje, no el factor
            sliderAnchoBordes.value = factorAnchoBordes * 100;
            // ajusta la muestra
            var anchoMuestra = 120 * factorAnchoBordes; // muestra tiene 120px de ancho
            getMuestraAnchoBordes.style.borderWidth = anchoMuestra + "px";
            getMuestraAnchoBordes.innerHTML = sliderAnchoBordes.value + "%";
            // para animarla al cerrar: opacidad ajustada
            restauraOpacidad = true;
            $(getContenedor).css("opacity", "0");
            break;
        case "zoom":
            $("#marcoZoom").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-eye'></i> Ajustar tamaño";
            document.getElementById("spanInfoModal").innerHTML = "Use el control para definir rápidamente el tamaño de la cuadrícula en pixeles.";
            // el rango toma el valor actual
            sliderZoom.value = tamaño;
            // ajusta la muestra
            // borde proporcional
            var muestraAncho = tamaño * 0.05;
            getMuestraZoom.style.borderWidth = muestraAncho + "px";
            // la etiqueta
            getEtiquetaZoom.innerHTML = tamaño + " px";
            //ancho
            getMuestraZoom.style.width = tamaño + "px";
            getMuestraZoom.style.maxWidth = tamaño + "px";
            getMuestraZoom.style.minWidth = tamaño + "px";
            //alto
            getMuestraZoom.style.height = tamaño + "px";
            getMuestraZoom.style.maxHeight = tamaño + "px";
            getMuestraZoom.style.minHeight = tamaño + "px";
            // para animarla al cerrar: opacidad ajustada
            restauraOpacidad = true;
            $(getContenedor).css("opacity", "0");
            break;
        case "radio":
            $("#marcoRadio").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='far fa-circle'></i> Radio del borde";
            document.getElementById("spanInfoModal").innerHTML = "Use el control para definir el radio de los bordes que se aplicará";
            // le quita el signo % a la variable y lo asigna al slider
            sliderRadio.value = radioBorde.slice(0, radioBorde.length - 1);
            // la muestra se ajusta            
            getMuestraRadio.style.MozBorderRadius = radioBorde;
            getMuestraRadio.style.webkitBorderRadius = radioBorde;
            getMuestraRadio.style.borderRadius = radioBorde;
            getMuestraRadio.innerHTML = radioBorde;
            // por defecto, no será global
            document.getElementById("myCheckRadioGlobal").checked = false;
            break;
        case "lienzo":
            $("#marcoLienzo").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-paint-roller'></i> Color de Lienzo";
            document.getElementById("spanInfoModal").innerHTML = "El color del lienzo de cada pixel se aprecia cuando sus bordes son curvos. Puede aplicar el color actual individualmente o a todos los lienzos.";
            // LA MUESTRA DE COLOR INDICA EL COLOR ACTUAL
            $("#muestraMarcoLienzo").css("background-color", colorActual);
            // por defecto, será global
            document.getElementById("miCheckLienzoGlobal").checked = true;
            // para animarla al cerrar: opacidad ajustada
            restauraOpacidad = true;
            $(getContenedor).css("opacity", "0");
            break;
        case "rgb":
            $("#marcoRGB").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-sliders-h'></i> RGB: <i id = 'icoMuestraRGB' class='fas fa-square'></i>";
            document.getElementById("spanInfoModal").innerHTML = "Use los controles ROJO, VERDE Y AZUL para definir un color";
            // inicialmente hex es el color actual
            hexTemp = colorActual;
            // ES NECESARIO SINCRONIZAR LAS VARIABLES GLOBALES
            miR = rDesdeHex(colorActual);
            miG = gDesdeHex(colorActual);
            miB = bDesdeHex(colorActual);
            // LOS RANGOS rangoR, rangoG Y rangoB  TOMAN LOS VALORES DEL COLOR ACTUAL                
            document.getElementById("rangoR").value = miR;
            document.getElementById("rangoG").value = miG;
            document.getElementById("rangoB").value = miB;
            // LOS input number numberR numberG numberB  TOMAN LOS VALORES DEL COLOR ACTUAL
            document.getElementById("numberR").value = miR;
            document.getElementById("numberG").value = miG;
            document.getElementById("numberB").value = miB;
            // LOS input number numberR numberG numberB  SON VÁLIDOS, FUENTE NEGRA
            $(".number-rgb").css("color", "#000000");
            // LOS RANGOS TIENEN SU TITLE INICIAL
            $("#rangoR").attr("title", miR);
            $("#rangoG").attr("title", miG);
            $("#rangoB").attr("title", miB);
            // rgbCaption MUESTRA EL COLOR ACTUAL EN RGB Y HEX
            document.getElementById("rgbCaption").innerHTML = "rgb(" + miR + ", "  + miG + ", " + miB + ") - " + colorActual;
            // LOS BORDES DE contenedorRGB SON LA MUESTRA DE COLOR, INICIAN CON EL ACTUAL
            $("#contenedorRGB").css("border-color", colorActual);
            // también el ícono en el título es una muestra
            $("#icoMuestraRGB").css("color", colorActual);            
            break;
        case "hex":
            $("#marcoHex").css("display", "block");
            // info
            document.getElementById("spanInfoModal").innerHTML = "Ingrese un color en formato hexadecimal (Ejemplo: #ff00ff). Puede usar mayúsculas o minúsculas. Puede omitir el signo #.";
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-hashtag'></i> Hexadecimal: <i id = 'icoMuestraHex' class='fas fa-square'></i>";
            // inicialmente hex es el color actual
            hexTemp = colorActual;
            document.getElementById("valorHex").value = colorActual;
            // LA MUESTRA DE COLOR, INICIA CON EL ACTUAL
            $("#muestraMarcoHex").css("background-color", colorActual);
            // también el ícono en el título es una muestra
            $("#icoMuestraHex").css("color", colorActual); 
            // supone un color válido inicialmente, no hay error
            $("#errorHex").css("display", "none");
            break;
        case "gallery":
            $("#marcoGallery").css("display", "block");
            // oculta el error
            $("#infoNoEncontrados").css("display", "none");   
            // sí lleva info
            document.getElementById("spanInfoModal").innerHTML = "Aquí puede elegir entre más de 140 colores, organizados en 11 grupos del estándar HTML. Puede buscar los colores por su nombre en inglés y español.";
            // título
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-grip-horizontal'></i> Galería: <i id = 'icoMuestraGallery' class='fas fa-square'></i>";
            // nada que buscar todavía
            document.getElementById("buscarColor").value = "";
            document.getElementById("contenedorEncontrados").style.display = "none";
            document.getElementById("contenedorGrupos").style.display = "block";
            // inicialmente hex es el color actual
            hexTemp = colorActual;
            // SE MUESTRA EL COLOR ACTUAL EN RGB Y HEX
            document.getElementById("infoColor").innerHTML = getRelleno.style.backgroundColor + " - " + colorActual;
            // el detalle en cada panel es spanInfoColorSel
            $(".spanInfoColorSel").html("Actual: " + getRelleno.style.backgroundColor + " - " + colorActual);
            // el nombre inicial en blanco
            document.getElementById("infoColorNombre").innerHTML = " - ";
            // familia inicial en blanco
            document.getElementById("infoColorFamilia").innerHTML = " - ";
            // LOS BORDES DE contInfoGallery SON LA MUESTRA DE COLOR, INICIAN CON EL ACTUAL
            $("#contInfoGallery").css("border-color", colorActual);
            // también el ícono en el título es una muestra
            $("#icoMuestraGallery").css("color", colorActual);
            // también los íconos icoInfoColorSel son una muestra
            $(".icoInfoColorSel").css("background-color", colorActual);
            // elimina la clase seleccionado de todos
            $(".miembroFamiliaColores").removeClass("miembroSeleccionado");
            // elimina la clase seleccionado de los resultados también
            $(".miembroResultados").removeClass("miembroSeleccionado");
            // elimina la clase intermitente de todos los acc
            $(".accordion").removeClass("seleccionadoAcc");
            // todos los acc se cierran            
            var i;
            var abierta = false;
            var miacc = document.getElementsByClassName("accordion");
            for (i = 0; i < miacc.length; i++) {
                if (miacc[i].classList) {
                    abierta = miacc[i].classList.contains("active");
                } else {
                    abierta = /\bactive\b/g.test(miacc[i].className); // For IE9 and earlier                    
                }
                if (abierta == true) {
                    // poco ortodoxo, llamar un click
                    //miacc[i].click();
                    // mejor usar una función y llamarla también en el evento click
                    clickAcc(miacc[i]);
                }
            }
            // ninguno está seleccionado por el momento, bordes normales
            $(".miembroFamiliaColores").css("border-color", "#666699");
            $(".miembroResultados").css("border-color", "#666699");
            // ahora busca el color actual en los resultados, para resaltarlo
            var miembroEncontrado = false;
            var miMiembro = document.getElementsByClassName("miembroResultados");
            for (i = 0; i < miMiembro.length; i++) {
                if (miMiembro[i].dataset.color == colorActual) {
                    // no busca más
                    miembroEncontrado = true;
                    // lo marca como seleccionado
                    $(miMiembro[i]).addClass("miembroSeleccionado");
                }
                if (miembroEncontrado == true) {
                    // si ya lo encontró, sale del ciclo, no busca más
                    break;
                }
            }
            // ahora busca el color actual en los acc
            miembroEncontrado = false;
            miMiembro = document.getElementsByClassName("miembroFamiliaColores");
            for (i = 0; i < miMiembro.length; i++) {
                if (miMiembro[i].dataset.color == colorActual) {
                    // no busca más
                    miembroEncontrado = true;
                    // lo marca como seleccionado
                    $(miMiembro[i]).addClass("miembroSeleccionado");
                    // muestra su nombre y familia
                    // el nombre 
                    var miTitle = miMiembro[i].title.split(" - ");
                    // 0 inglés, 1 español
                    var miNombre = miTitle[0] + " (" + miTitle[1] + ")";
                    document.getElementById("infoColorNombre").innerHTML = miNombre;
                    // familia, tambíen en inglés y español
                    var miFamilia = miTitle[2] + " (" + miMiembro[i].dataset.espfam + ")";
                    document.getElementById("infoColorFamilia").innerHTML = miFamilia;
                    // el detalle en cada panel es spanInfoColorSel                    
                    $(".spanInfoColorSel").html("Actual: " + getRelleno.style.backgroundColor + " - " + colorActual + " - " + miNombre + " - " + miFamilia);
                    // debemos identificar al abuelo
                    var abuelo = $(miMiembro[i]).closest(".panel"); // es una colección                    
                    // el acc es el elemento anterior al abuelo
                    var vecinoAcc = abuelo[0].previousElementSibling;
                    // ya tenemos identicado el acc vecino, ahora...
                    // agrega la clase intermitente al acc                    
                    $(vecinoAcc).addClass("seleccionadoAcc");  
                    // da tiempo a la transición y luego hace scroll hasta el acc
                    var elemToScroll = $(miMiembro[i]).parent()[0];
                    var miembroToScroll = miMiembro[i];
                    //// expande el acc de este miembro
                    clickAcc(vecinoAcc); 
                    setTimeout(function () {
                        // hace scroll para que se vea este acc                        
                        $(getmodalBody).animate({
                            scrollTop: $(vecinoAcc).offset().top - vecinoAcc.offsetHeight - 16
                        }, 800);
                    }, 400);
                    
                    // da tiempo a la animación del scroll y luego hace scroll hasta el color
                    setTimeout(function () {                                           
                        $(elemToScroll).animate({
                            // hace scroll para que el miembro seleccionado en el acc sea visible
                            scrollLeft: miembroToScroll.offsetLeft - 4
                        }, 700);

                    }, 1500); 
                }
                if (miembroEncontrado == true) {
                    // si ya lo encontró, sale del ciclo, no busca más
                    break;
                }
            }
            break;
        case "importar":

            break;
        case "exportar":

            break;
        case "filas":

            break;
        case "columnas":

            break;
    }
    // sin importar cuál modal es... no estaría mal
    ajustesResize();
}
// click en miembro familia colores
function seleccionaMiembroFamilia(miembro) {
    var miTitle;
    var miNombre;
    var miFamilia;
    //  hex es el color actual
    hexTemp = miembro.dataset.color;
    // SE MUESTRA EL COLOR ACTUAL EN RGB Y HEX
    miR = rDesdeHex(miembro.dataset.color);
    miG = gDesdeHex(miembro.dataset.color);
    miB = bDesdeHex(miembro.dataset.color);
    document.getElementById("infoColor").innerHTML = "rgb(" + miR + ", " + miG + ", " + miB + ") - " + miembro.dataset.color;
    // el nombre 
    miTitle = miembro.title.split(" - ");
    // 0 inglés, 1 español
    var miNombre = miTitle[0] + " (" + miTitle[1] + ")";
    document.getElementById("infoColorNombre").innerHTML = miNombre;
    // familia
    miFamilia = miTitle[2] + " (" + miembro.dataset.espfam + ")";
    document.getElementById("infoColorFamilia").innerHTML = miFamilia;
    // el detalle en cada panel es spanInfoColorSel                    
    $(".spanInfoColorSel").html("Actual: " + document.getElementById("infoColor").innerHTML + " - " + miNombre + " - " + miFamilia);
    // LOS BORDES DE contInfoGallery SON LA MUESTRA DE COLOR, EL ACTUAL
    $("#contInfoGallery").css("border-color", miembro.dataset.color);
    // también el ícono en el título es una muestra
    $("#icoMuestraGallery").css("color", miembro.dataset.color);
    // también los íconos icoInfoColorSel son una muestra
    $(".icoInfoColorSel").css("background-color", miembro.dataset.color);
    // elimina la clase seleccionado de todos
    $(".miembroFamiliaColores").removeClass("miembroSeleccionado");
    // elimina la clase seleccionado de los resultados también
    $(".miembroResultados").removeClass("miembroSeleccionado");
    // agrega la clase seleccionado al miembro actual
    $(miembro).addClass("miembroSeleccionado");
    // ahora busca el color actual en los resultados, para resaltarlo también
    var miembroEncontrado = false;
    var miMiembro = document.getElementsByClassName("miembroResultados");
    for (i = 0; i < miMiembro.length; i++) {
        if (miMiembro[i].dataset.color == hexTemp) {
            // no busca más
            miembroEncontrado = true;
            // lo marca como seleccionado
            $(miMiembro[i]).addClass("miembroSeleccionado");
        }
        if (miembroEncontrado == true) {
            // si ya lo encontró, sale del ciclo, no busca más
            break;
        }
    }
    // elimina la clase intermitente de todos los acc
    $(".accordion").removeClass("seleccionadoAcc");
    // debemos identificar al abuelo
    var abuelo = $(miembro).closest(".panel"); // es una colección                    
    // el acc es el elemento anterior al abuelo
    var vecinoAcc = abuelo[0].previousElementSibling;
    // ya tenemos identicado el acc vecino, ahora...
    // agrega la clase intermitente al acc                    
    $(vecinoAcc).addClass("seleccionadoAcc");
}
// click en miembro de los colores encontrados
function seleccionaMiembroResultados(miembro) {
    var miTitle;
    var miNombre;
    var miFamilia;
    //  hex es el color actual
    hexTemp = miembro.dataset.color;
    // SE MUESTRA EL COLOR ACTUAL EN RGB Y HEX
    miR = rDesdeHex(miembro.dataset.color);
    miG = gDesdeHex(miembro.dataset.color);
    miB = bDesdeHex(miembro.dataset.color);
    document.getElementById("infoColor").innerHTML = "rgb(" + miR + ", " + miG + ", " + miB + ") - " + miembro.dataset.color;
    // el nombre 
    miTitle = miembro.title.split(" - ");
    // 0 inglés, 1 español
    var miNombre = miTitle[0] + " (" + miTitle[1] + ")";
    document.getElementById("infoColorNombre").innerHTML = miNombre;
    // familia
    miFamilia = miTitle[2] + " (" + miembro.dataset.espfam + ")";
    document.getElementById("infoColorFamilia").innerHTML = miFamilia;
    // el detalle en cada panel es spanInfoColorSel                    
    $(".spanInfoColorSel").html("Actual: " + document.getElementById("infoColor").innerHTML + " - " + miNombre + " - " + miFamilia);
    // LOS BORDES DE contInfoGallery SON LA MUESTRA DE COLOR, EL ACTUAL
    $("#contInfoGallery").css("border-color", miembro.dataset.color);
    // también el ícono en el título es una muestra
    $("#icoMuestraGallery").css("color", miembro.dataset.color);
    // también los íconos icoInfoColorSel son una muestra
    $(".icoInfoColorSel").css("background-color", miembro.dataset.color);
    // elimina la clase seleccionado de todos
    $(".miembroFamiliaColores").removeClass("miembroSeleccionado");
    $(".miembroResultados").removeClass("miembroSeleccionado");
    // elimina la clase intermitente de todos los acc
    $(".accordion").removeClass("seleccionadoAcc");
    // todos los acc se cierran            
    var i;
    var abierta = false;
    var miacc = document.getElementsByClassName("accordion");
    for (i = 0; i < miacc.length; i++) {
        if (miacc[i].classList) {
            abierta = miacc[i].classList.contains("active");
        } else {
            abierta = /\bactive\b/g.test(miacc[i].className); // For IE9 and earlier                    
        }
        if (abierta == true) {
            // poco ortodoxo, llamar un click
            //miacc[i].click();
            // mejor usar una función y llamarla también en el evento click
            clickAcc(miacc[i]);
        }
    }
    // ninguno está seleccionado por el momento, bordes normales
    $(".miembroFamiliaColores").css("border-color", "#666699");    
    $(".miembroResultados").css("border-color", "#666699");
    // agrega la clase seleccionado al miembro actual
    $(miembro).addClass("miembroSeleccionado");
    // identifica el miembro equivalente en los grupos
    // ahora busca el color que acaba de ser seleccionado en los resultados en los acc
    var miembroEncontrado = false;
    var miMiembro = document.getElementsByClassName("miembroFamiliaColores");
    for (i = 0; i < miMiembro.length; i++) {
        if (miMiembro[i].dataset.color == hexTemp) {
            // no busca más
            miembroEncontrado = true;
            // lo marca como seleccionado
            $(miMiembro[i]).addClass("miembroSeleccionado");             
            // debemos identificar al abuelo
            var abuelo = $(miMiembro[i]).closest(".panel"); // es una colección                    
            // el acc es el elemento anterior al abuelo
            var vecinoAcc = abuelo[0].previousElementSibling;
            // ya tenemos identicado el acc vecino, ahora...
            // agrega la clase intermitente al acc                    
            $(vecinoAcc).addClass("seleccionadoAcc");
            //// expande el acc de este miembro
            clickAcc(vecinoAcc);            
            // no hace scroll hasta el acc
            // tampoco hace scroll hasta el miembro dentro del acc
        }
        if (miembroEncontrado == true) {
            // si ya lo encontró, sale del ciclo, no busca más
            break;
        }
    }
}
// click en un elemento clase accordion
function clickAcc(thisAcc) {
    //thisAcc.classList.toggle("active");
    $(thisAcc).toggleClass("active");
    var panel = thisAcc.nextElementSibling;
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
// procesa las entradas en el campo valorHex
function procesarEntradaHex() {
    // recupera el valor del campo
    var test = document.getElementById("valorHex").value;
    if (test.length == 6 && test.indexOf("#") == -1) {
        // si llega a 6 caracteres y no tiene #, se lo agrega
        test = "#" + test;
        document.getElementById("valorHex").value = test;
    }
    // es indiferente a las mayúsculas, siempre se almacena en minúsculas    
    test = test.toLowerCase();
    // lo valida
    if (validarHex(test) == false) {
        // muestra el error
        $("#errorHex").css("display", "block");
        // asigna negro, color por defecto
        hexTemp = "#000000";
        // LA MUESTRA DE COLOR es negra
        $("#muestraMarcoHex").css("background-color", "#000000");
        // también el ícono en el título es una muestra
        $("#icoMuestraHex").css("color", "#000000"); 
    } else {
        // oculta el error msj
        $("#errorHex").css("display", "none");
        // captura el color ingresado
        hexTemp = test;
        // LA MUESTRA DE COLOR es el ingresado
        $("#muestraMarcoHex").css("background-color", test);
        // también el ícono en el título es una muestra
        $("#icoMuestraHex").css("color", test); 
    }
}
// procesa las entradas en el campo buscarColor
var buscandoColor = false;
var timerBuscarColor = 0;
function procesarEntradaBuscarColor() {
    if (modalActual != "gallery") {
        // sale si no está en galería
        return;
    }
    if (buscandoColor == true) {        
        // cancela el temporizador en curso para la nueva búsqueda
        clearTimeout(timerBuscarColor);
        // inicia el temporizador para nueva búsqueda
        timerBuscarColor = setTimeout(function () {
            procesarEntradaBuscarColor();
        }, 500);
        return;
    }
    buscandoColor = true;   
    // recupera el valor del campo
    var test = document.getElementById("buscarColor").value;
    if (test.length > 0) {
        // si hay algo, oculta acc y muestra resultados
        document.getElementById("contenedorEncontrados").style.display = "block";
        document.getElementById("contenedorGrupos").style.display = "none";
    } else {
        // si no hay nada, muestra los acc y oculta los resultados
        document.getElementById("contenedorEncontrados").style.display = "none";
        document.getElementById("contenedorGrupos").style.display = "block";
        // desocupado y sale
        buscandoColor = false;
        return;
    }    
    // es indiferente a las mayúsculas, siempre se almacena en minúsculas    
    test = test.toLowerCase();
    // recorre los colores de la galería
    //obtiene un array con todos los de la clase miembroResultados
    var x = document.getElementsByClassName("miembroResultados");
    var i;
    // para obtener el nombre en español e inglés
    var miTitle = "";
    var miFamEsp = "";
    var cantidadEncontrados = 0;
    // oculta el error
    $("#infoNoEncontrados").css("display", "none");   
    //recorre todo el array y compara su color con el ingresado
    for (i = 0; i < x.length; i++) {
        // el nombre 
        miTitle = x[i].title.split(" - ");
        miFamEsp = x[i].dataset.espfam.toLowerCase();
        if (miTitle[0].toLowerCase().indexOf(test) == -1 && miTitle[1].toLowerCase().indexOf(test) == -1 && miTitle[2].toLowerCase().indexOf(test) == -1 && miFamEsp.indexOf(test) == -1) {
            // no coincide, lo oculta
            x[i].style.display = "none";
        } else {
            // coincide, lo muestra
            x[i].style.display = "inline-block";
            cantidadEncontrados++;
        }
    }
    if (cantidadEncontrados > 0) {
        // oculta el error
        $("#infoNoEncontrados").css("display", "none");        
    } else {
        // muestra el error
        $("#infoNoEncontrados").css("display", "block");        
    }
    // al final indica que ya está desocupado
    buscandoColor = false;
}
//  eventos al cambiar valor hex
document.getElementById("valorHex").addEventListener("input", procesarEntradaHex);
document.getElementById("valorHex").addEventListener("change", procesarEntradaHex);
//  eventos al cambiar valor buscarColor
$("#buscarColor").focusin(function () {   
    // hace scroll para que se vea el txt                        
    $(getmodalBody).animate({
        scrollTop: 12 + document.getElementById("contInfoGallery").offsetHeight 
    }, 600);
});
document.getElementById("buscarColor").addEventListener("input", procesarEntradaBuscarColor);
document.getElementById("buscarColor").addEventListener("change", procesarEntradaBuscarColor);
//capturando pulsación de teclado en campo buscarColor...
document.getElementById("buscarColor").onkeydown = function (e) {

    var characterCode;
    // e.key es la recomendación actual
    if (e.key != undefined) {
        if (e.key.toLowerCase() == "enter") {
            characterCode = 13;
        }
        else {
            characterCode = 0;
        }
    } else {
        /* navegadores antiguos...  */
        characterCode = e.which || e.charCode || e.keyCode || e.keyIdentifier || 0;
    }

    // solo si presionó Enter
    if (characterCode == 13) {

        //da el enfoque al contenedor indicado,
        //esto permite que se oculte el teclado en algunos móviles

        if (document.getElementById("buscarColor").value.length == 0) {
            // no hace nada, no hay nada que buscar
            showSnackbar("Nada que buscar...");
        } else {
            document.getElementById("buscarColor").blur();
            document.getElementById("contenedorEncontrados").focus();
        }       

    }

}
//  onresize, cuando cambia el tamaño de la pantalla
window.addEventListener("resize", ajustesResize);
// previene pérdida de datos accidental
window.addEventListener("beforeunload", function (event) {
    // Cancela el evento según la recomendación actual.
    event.preventDefault();
  // Chrome requiere que returnValue sea establecido
    event.returnValue = "Nadie quiere perder una obra de arte...";
});
// al cargar la página
window.addEventListener("load", function (event) {
    // valores por defecto, inicializar
    // selecciona el valor por defecto del filtro
    getFiltro.selectedIndex = 0;
    actualIndexFiltro = 0;
    lastIndexFiltro = 0;
    AplicarFiltro();
    // valor inicial del fondo
    var miFondo = "sinFondo";
    // protegido por protocolo file en ie
    try {
        if (typeof (Storage) !== "undefined") {
            // si soporta almacenamiento, recupera el valor
            if (localStorage.fondopixeles) {
                // hay valor almacenado, lo recupera
                miFondo = localStorage.fondopixeles;
            } else {
                // si no hay valor almacenado, asume index 0... clase sinFondo y lo guarda
                localStorage.fondopixeles = "sinFondo";
                miFondo = "sinFondo";
            }
        } else {
            // si no lo soporta, asume clase sin fondo y no guarda
            miFondo = "sinFondo";
        }
    }
    catch (err) {
        miFondo = "sinFondo";
    }    
    // el fondo se selecciona en la lista select
    getSelectFondo.value = miFondo;
    // se aplica la clase al body
    aplicarFondo();
    // DIMENSIONA AL INICIAR LA PÁGINA con 10x10
    //para que se agreguen al abrir la página     
    configurarSelects(); 
    dimensionar(false);
    // radio por defecto es 50, para que tenga efecto al hacer click en modo radio al iniciar
    document.getElementById("rangoRadioBordes").value = 50;
    // opacidad por defecto es 50, para que tenga efecto al hacer click en modo opacidad al iniciar
    document.getElementById("rangoOpacidad").value = 50;
    // el input color es negro por defecto, ie recuerda colores anteriores
    getcolorPixel.value = "#000000";    
    // scroll
    topFunction();
    // dasactiva el botón deshacer, no se ha hecho nada
    // nota que la primera vez que se llama dimensionar se activa, pero aquí se desactiva para que sea su estado inicial
    estadoBtnDeshacer(false)
});

// resalta el color actual en el historial de colores
function resaltarActual() {
    var i;
    var miID;
    var miBtn;
    var colorSeleccionado = getRelleno.style.backgroundColor;
    //recorre los botones del historial    
    for (i = 0; i < arrayColoresUsados.length; i++) {
        miID = "BtnColor" + i;
        miBtn = document.getElementById(miID);
        //  comparar .title con colorActual, ambos en hexadecimal
        // o comparar los backgroundColor en rgb        
        //alert("btn color " + miBtn.style.color);
        //alert("color sel" + colorSeleccionado);
        if (miBtn.style.color == colorSeleccionado) {
            // le aplica el borde resaltado
            miBtn.style.border = "3px outset #009900";
        } else {
            // les aplica el borde normal
            miBtn.style.border = "3px solid #666699";
        }
    }
}
// dado un valor RGB, devuelve el valor hexadecimal
function convertirRGBaHexadecimal(rgb) {
    var test = "" + rgb;
    if (test.length == 7 && test.substring(0, 1) == "#") {
        // ya es hexadecimal, no hace nada
        return test;
    }
    var res = rgb.substring(4);
    res = res.substring(0, res.length - 1);
    res = res.split(", ");
    var r = res[0];
    var g = res[1];
    var b = res[2];
    var rhex = Number(r).toString(16);
    var ghex = Number(g).toString(16);
    var bhex = Number(b).toString(16);
    if (rhex.length < 2) {
        rhex = "0" + rhex;
    }
    if (ghex.length < 2) {
        ghex = "0" + ghex;
    }
    if (bhex.length < 2) {
        bhex = "0" + bhex;
    }
    res = "#" + rhex + ghex + bhex;
    return res;
}
// para verificar si por ejemplo existe el vecino de una celda
function existeCelda(idCelda) {
    if (!document.getElementById(idCelda)) {
        //no existe
        return false;
    } else {
        //sí existe
        return true;
    }
}
// buscar y reemplazar color
function reemplazarColor(colorViejo, colorNuevo, miID) {
    if (colorViejo == colorNuevo) {
        // no veo necesaria ninguna acción
        showSnackbar("Colores son iguales");
        return;
    }
    //debe guardar los colores y los id      
    lastAction = "reemplazar";
    lastArrayColor.length = 0;
    lastArrayID.length = 0;    
    var i;    
    // muestra un loader...
    $(".loader").removeClass("oculto");
    setTimeout(function () {
        // código alta exigencia        
        var i;        
        //recorre todo el array, busca el color de la celda seleccionada y lo reemplaza por el actual
        for (i = 0; i < getColumnas.length; i++) {            
            if (getColumnas[i].style.backgroundColor == colorViejo) {
                //guardar los id y los colores solo cuando hay cambio
                lastArrayID[lastArrayID.length] = getColumnas[i].id;
                //lastArrayColor[lastArrayColor.length] = getColumnas[i].style.backgroundColor;
                lastArrayColor[lastArrayColor.length] = colorViejo;
                getColumnas[i].style.backgroundColor = colorNuevo;
            }            
        }
        // historial de colorActual
        procesarHistorial(colorActual);
        // activa el botón deshacer
        estadoBtnDeshacer(true, "Deshacer reemplazar color");       
        // oculta el loader
        $(".loader").addClass("oculto");
        // otras tareas
        showSnackbar("Color reemplazado");
    }, 0); 
}
// relleno de selección
function rellenarZona(colorViejo, colorNuevo, miID) {
    if (colorViejo == colorNuevo) {
        // no veo necesaria ninguna acción
        showSnackbar("Colores son iguales");
        return;
    }
    //debe guardar los colores y los id      
    lastAction = "rellenarSelectivo";
    lastArrayColor.length = 0;
    lastArrayID.length = 0;
    // los que se van rellenando
    var arrayInfectados = [];
    arrayInfectados.length = 0;
    // paciente cero
    arrayInfectados[0] = miID;
    //guardar los id y los colores para poder deshacer
    lastArrayID[0] = miID;
    lastArrayColor[0] = colorViejo;
    // sus síntomas:
    document.getElementById(miID).style.backgroundColor = colorNuevo;
    // no hay inicialmente
    var arrayNuevosContagios = [];
    arrayNuevosContagios.length = 0;
    var i;
    var fila;
    var columna;
    var filaVecino;
    var columnaVecino;
    var idVecino;
    var getVecino;
    var salir = false;
    var str;
    var res;
    do {
        // bucle        
        for (i = 0; i < arrayInfectados.length; i++) {
            // obtener fila y columna
            str = "" + arrayInfectados[i];
            res = str.substring(1);
            res = res.split("c");
            fila = res[0];
            columna = res[1];
            // se propaga
            // arriba
            filaVecino = Number(fila) - 1;
            columnaVecino = Number(columna);
            idVecino = "f" + filaVecino + "c" + columnaVecino;
            // si existe y si es del colorViejo la contagia
            if (existeCelda(idVecino) == true) {
                getVecino = document.getElementById(idVecino);
                if (filaVecino > 0 && getVecino.style.backgroundColor == colorViejo) {
                    // lo agrega a nuevos contagios
                    arrayNuevosContagios[arrayNuevosContagios.length] = idVecino;
                    //guardar los id y los colores para poder deshacer
                    lastArrayID[lastArrayID.length] = idVecino;
                    lastArrayColor[lastArrayColor.length] = colorViejo;
                    // lo rellena
                    getVecino.style.backgroundColor = colorNuevo;
                }
            }
            // abajo
            filaVecino = Number(fila) + 1;
            columnaVecino = Number(columna);
            idVecino = "f" + filaVecino + "c" + columnaVecino;
            // si existe y si es del colorViejo la contagia
            if (existeCelda(idVecino) == true) {
                getVecino = document.getElementById(idVecino);
                if (filaVecino <= numFilas && getVecino.style.backgroundColor == colorViejo) {
                    // lo agrega a nuevos contagios
                    arrayNuevosContagios[arrayNuevosContagios.length] = idVecino;
                    //guardar los id y los colores para poder deshacer
                    lastArrayID[lastArrayID.length] = idVecino;
                    lastArrayColor[lastArrayColor.length] = colorViejo;
                    // lo rellena
                    getVecino.style.backgroundColor = colorNuevo;
                }
            }
            // derecha
            filaVecino = Number(fila);
            columnaVecino = Number(columna) + 1;
            idVecino = "f" + filaVecino + "c" + columnaVecino;
            // si existe y si es del colorViejo la contagia
            if (existeCelda(idVecino) == true) {
                getVecino = document.getElementById(idVecino);
                if (columnaVecino <= numColumnas && getVecino.style.backgroundColor == colorViejo) {
                    // lo agrega a nuevos contagios
                    arrayNuevosContagios[arrayNuevosContagios.length] = idVecino;
                    //guardar los id y los colores para poder deshacer
                    lastArrayID[lastArrayID.length] = idVecino;
                    lastArrayColor[lastArrayColor.length] = colorViejo;
                    // lo rellena
                    getVecino.style.backgroundColor = colorNuevo;
                }
            }
            // izquierda
            filaVecino = Number(fila);
            columnaVecino = Number(columna) - 1;
            idVecino = "f" + filaVecino + "c" + columnaVecino;
            // si existe y si es del colorViejo la contagia
            if (existeCelda(idVecino) == true) {
                getVecino = document.getElementById(idVecino);
                if (columnaVecino > 0 && getVecino.style.backgroundColor == colorViejo) {
                    // lo agrega a nuevos contagios
                    arrayNuevosContagios[arrayNuevosContagios.length] = idVecino;
                    //guardar los id y los colores para poder deshacer
                    lastArrayID[lastArrayID.length] = idVecino;
                    lastArrayColor[lastArrayColor.length] = colorViejo;
                    // lo rellena
                    getVecino.style.backgroundColor = colorNuevo;
                }
            }
        }
        // si no hay nuevos contagios, sale
        if (arrayNuevosContagios.length == 0) {
            salir = true;
        } else {
            // para continuar el ciclo
            salir = false;
            // borra el de infectados
            arrayInfectados.length = 0;
            // agrega nuevos contagios al de infectados
            for (i = 0; i < arrayNuevosContagios.length; i++) {
                arrayInfectados[i] = arrayNuevosContagios[i];
            }
            // borra el de nuevos contagios para el siguiente ciclo
            arrayNuevosContagios.length = 0;
        }

    }
    while (salir == false);
    // HISTORIAL DE COLOR
    // no colorNuevo porque está en RGB
    // colorActual está en hexadecimal
    procesarHistorial(colorActual);
    // activa el botón deshacer
    estadoBtnDeshacer(true, "Deshacer relleno selectivo");
}
//procesan los colores usados para el historial de color
// color usado debe ser hexadecimal
function procesarHistorial(colorUsado) {
    var nuevo;
    var miID;
    var pos;
    // busca el color usado en el arrayColoresUsados
    if (arrayColoresUsados.indexOf(colorUsado) == -1) {
        // no está en en el array, lo agrega al array
        arrayColoresUsados[arrayColoresUsados.length] = colorUsado;
        // agrega un botón al historial con el nuevo color            
        nuevo = document.createElement("button");
        nuevo.innerHTML = "<i class='fas fa-square'></i>";
        pos = arrayColoresUsados.length - 1;
        miID = "BtnColor" + pos;
        nuevo.id = miID; // esto lo identifica al hacer click
        nuevo.title = colorUsado; // title guarda el color
        nuevo.style.color = colorUsado; //el botón presenta su respectivo color
        //el evento es agregado a cada uno
        nuevo.addEventListener("click", function () { colorHistorial(this.id); });
        // lo agrega al dom     
        getPaletaHistorial.appendChild(nuevo);
        // corrige un bug
        // mayor ancho para disimularlo.
    }
    resaltarActual();
}
// el blanco ya fue usado en el color inicial de los cuadritos y de los lienzos
procesarHistorial("#ffffff");
// el negro ya fue usado en los bordes
procesarHistorial("#000000");
// lo anterior hace que el blanco y el negro aparezcan en el historial al abrir la página.
// cuando hace click en un cuadrito
function hacerClick(celda) {
    if (ocupado == true) {
        //sale si está ocupado 
        return;
    }
    if (pantallaCompleta == true) {
        //sale si está en patalla completa
        // pero primero hace zoom, luego muestra el puntero y los botones
        //procesarZoom();
        // la anterior línea se omite porque el evento se propaga al contenedor
        mostrarPuntero();        
        return;
    }
    // ahora sí...
    ocupado = true;
    // procesa el click en un div, es decir, en un cuadrito  
    // resaltar con sombra el cuadrito
    // cancela el temporizador en curso para eliminación de la clase
    clearTimeout(timerResaltar);
    // y el temporal de deshacer también
    clearTimeout(timerResaltarDeshacer);
    // remueve inmediatamente cualquier resaltado
    $(".resaltado").removeClass("resaltado");
    // también de los lienzos
    $(".resaltadoLienzo").removeClass("resaltadoLienzo");
    // para usar la referencia en toda esta la rutina
    var miCuadrito = document.getElementById(celda);
    // z index del lienzo del cuadrito actual sube al agregar la clase
    //$("[id = " + celda + "]").parent().addClass("resaltadoLienzo");
    $(miCuadrito).parent().addClass("resaltadoLienzo");
    // resalta el que recibe el click
    //$("[id = " + celda + "]").addClass("resaltado");
    $(miCuadrito).addClass("resaltado");
    // inicia el temporizador para quitar el resaltado
    timerResaltar = setTimeout(function () {
        // remueve el resaltado de todos
        $(".resaltado").removeClass("resaltado");
        // también de los lienzos
        $(".resaltadoLienzo").removeClass("resaltadoLienzo");
    }, 400);
    
    switch (modoActual) {
        case "info":
            // modo información
            // OBTIENE Y ACTUALIZA LA INFO EN LA TABLA DEL MODAL
            // RECUPERA PROPIEDADES INDIVIDUALES            
            var str = "" + celda;
                var res = str.substring(1);
                res = res.split("c");
                var miFila = res[0];
                var miCol = res[1];
                miFila = Number(miFila);
                miCol = Number(miCol);
            // Fila
            $("#tablaInfoFila").html(miFila);           
            // Columna
            $("#tablaInfoColumna").html(miCol);           
            // Color Pixel
            $("#tablaInfoColorPixel").html(convertirRGBaHexadecimal(miCuadrito.style.backgroundColor));
            // Color Lienzo
            $("#tablaInfoColorLienzo").html(miCuadrito.dataset.colorlienzo);
            // Color Bordes
            $("#tablaInfoColorBordes").html(miCuadrito.dataset.colorbordes);
            // Radio Bordes
            $("#tablaInfoRadio").html(miCuadrito.dataset.radio);
            // Opacidad
            var opacActual = miCuadrito.style.opacity * 100;
            opacActual = opacActual.toFixed(0); // sin decimales
            $("#tablaInfoOpacidad").html( opacActual + "%");
            // Sombras
            var miSombras = miCuadrito.dataset.sombras;
            $("#tablaInfoSombras").html(sombrasComoTexto(miSombras));           
            // RECUPERA PROPIEDADES GLOBALES
            // Tipo Bordes
            // Ancho Bordes
            // Tamaño Pixel
            // Filtro
            // Fondo
            // Cantidad Filas
            // Cantidad Columnas
            // Etiquetas
            modalActual = "info";
            showModal(); // muestra el modal info
            break;
        case "sombras":
            // modo editor de sombras
            // guarda primero
            lastID = celda;
            // usemos miCuadrito                                  
            lastSombras = miCuadrito.dataset.sombras;
            lastAction = "CambiarSombrasCelda";
            //ajusta el estilo de sombras de la celda
            miCuadrito.dataset.sombras = sombras;            
            // remueve todas las clases de sombras
            $(miCuadrito).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
            // agrega la clase actual de sombras
            $(miCuadrito).addClass(sombras);     
            // activa el botón deshacer
            estadoBtnDeshacer(true, "Deshacer estilo de sombras");
            break;
        case "opacidad":
            // guarda primero
            lastID = celda;
            lastOpacidad = miCuadrito.style.opacity;
            lastAction = "CambiarOpacidadIndividual";
            // cambia la opacidad de la celda
            miCuadrito.style.opacity = opacidad;            
            // activa el botón deshacer
            estadoBtnDeshacer(true, "Deshacer opacidad");
            break;
        case "libre":
            //modo selección libre
            //var miCuadrito = document.getElementById(celda);
            //var miLienzo = $("[id = " + celda + "]").parent()[0];
            var miLienzo = $(miCuadrito).parent()[0];
            if ( $(miLienzo).hasClass("seleccionado") ) {                
                $(miLienzo).removeClass("seleccionado");
                miCuadrito.style.backgroundColor = lastArrayColor[lastArrayID.indexOf(celda)];
            } else {               
                $(miLienzo).addClass("seleccionado");
                miCuadrito.style.backgroundColor = colorActual;
                procesarHistorial(colorActual);                
            }
            break;
        case "pincel":
            // modo pincel
            // guarda primero
            lastID = celda;
            lastColor = miCuadrito.style.backgroundColor;
            lastAction = "pintar";
            //pinta la celda
            miCuadrito.style.backgroundColor = colorActual;
            //procesa el historial de colores
            procesarHistorial(colorActual);
            // activa el botón deshacer
            estadoBtnDeshacer(true, "Deshacer pincelada");
            break;
        case "colorBordes":
            // guarda para poder deshacer
            lastID = celda;
            lastAction = "cambiarColorRejillaIndividual";
            lastColorRejilla = miCuadrito.dataset.colorbordes;
            // aplica el color actual
            miCuadrito.style.borderColor = colorActual;
            miCuadrito.dataset.colorbordes = colorActual;
            // se procesa el historial
            procesarHistorial(colorActual);
            // activa el botón deshacer
            estadoBtnDeshacer(true, "Deshacer color de bordes");
            break;
        case "lienzo":            
            // modo lienzo, individual
            //var miCuadrito = document.getElementById(celda);
            // guarda para poder deshacer
            lastAction = "cambiarColorLienzo";
            lastID = celda;
            lastColorLienzo = miCuadrito.dataset.colorlienzo;            
            //el nuevo valor
            colorLienzo = colorActual;
            // pinta el lienzo del cuadrito actual
            //$("[id = " + celda + "]").parent().css("background-color", colorLienzo);            
            $(miCuadrito).parent().css("background-color", colorLienzo);            
            // guarda el valor en el dataset
            miCuadrito.dataset.colorlienzo = colorLienzo;
            // historial actualizado
            procesarHistorial(colorLienzo);
            showSnackbar("Color del lienzo aplicado: " + colorLienzo);
            estadoBtnDeshacer(true, "Deshacer color de lienzo individual");            
            break;
        case "radio":
            // modo editor de radio de bordes
            // guarda primero
            lastID = celda;
            // usemos miCuadrito
            //var miCeldaRadio = document.getElementById(celda);                      
            lastRadioBorde = miCuadrito.dataset.radio;
            lastAction = "CambiarRadioBordesCelda";
            //ajusta el radio de la celda
            miCuadrito.dataset.radio = radioBorde;
            miCuadrito.style.MozBorderRadius = radioBorde;
            miCuadrito.style.webkitBorderRadius = radioBorde;
            miCuadrito.style.borderRadius = radioBorde;
            // activa el botón deshacer
            estadoBtnDeshacer(true, "Deshacer radio de los bordes");
            break;
        case "borrador":
            //modo borrador
            //primero guarda el id
            lastID = celda;
            // la acción general es borrar
            lastAction = "borrar";
            // la acción específica de borrado
            lastFormatoBorrado = formatoBorrado;
            //lastFormatoAplicadoAlBorrar = formatoAplicadoAlBorrar;
            // acción de borrado según la opción actual
            switch (formatoBorrado) {
                case "colorPixel":
                    lastColor = miCuadrito.style.backgroundColor;                        
                    if (formatoAplicadoAlBorrar == "formatosGlobales") {
                        miCuadrito.style.backgroundColor = fondoAplicado;    
                    } else {
                        miCuadrito.style.backgroundColor = "#ffffff";
                    }                    
                    break;
                case "colorLienzo":
                    lastColorLienzo = miCuadrito.dataset.colorlienzo;            
                    //el nuevo valor
                    var tempFormat;
                    if (formatoAplicadoAlBorrar == "formatosGlobales") {
                        tempFormat = colorLienzoAplicado;
                    } else {
                        tempFormat = "#ffffff";
                    }  
                    // pinta el lienzo del cuadrito actual                                
                    $(miCuadrito).parent().css("background-color", tempFormat);            
                    // guarda el valor en el dataset
                    miCuadrito.dataset.colorlienzo = tempFormat;
                    break;
                case "colorBordes":
                    lastColorRejilla = miCuadrito.dataset.colorbordes;
                    var tempFormat;
                    if (formatoAplicadoAlBorrar == "formatosGlobales") {
                        tempFormat = colorBordesAplicado;
                    } else {
                        tempFormat = "#000000";
                    }
                    // aplica el color
                    miCuadrito.style.borderColor = tempFormat;
                    miCuadrito.dataset.colorbordes = tempFormat;
                    break;
                case "radioBordes":
                    lastRadioBorde = miCuadrito.dataset.radio;
                    var tempFormat;
                    if (formatoAplicadoAlBorrar == "formatosGlobales") {
                        tempFormat = radioAplicado;
                    } else {
                        tempFormat = "0%";
                    }                    
                    //ajusta el radio de la celda
                    miCuadrito.dataset.radio = tempFormat;
                    miCuadrito.style.MozBorderRadius = tempFormat;
                    miCuadrito.style.webkitBorderRadius = tempFormat;
                    miCuadrito.style.borderRadius = tempFormat;
                    break;
                case "opacidad":
                    lastOpacidad = miCuadrito.style.opacity;                    
                    // cambia la opacidad de la celda
                    var tempFormat;
                    if (formatoAplicadoAlBorrar == "formatosGlobales") {
                        tempFormat = opacidadAplicada;
                    } else {
                        tempFormat = "1";
                    }   
                    miCuadrito.style.opacity = tempFormat;
                    break;
                case "sombras":
                    lastSombras = miCuadrito.dataset.sombras;
                    var tempFormat;
                    if (formatoAplicadoAlBorrar == "formatosGlobales") {
                        tempFormat = sombrasAplicada;
                    } else {
                        tempFormat = "s0000";
                    }                    
                    //ajusta el estilo de sombras de la celda
                    miCuadrito.dataset.sombras = tempFormat;            
                    // remueve todas las clases de sombras
                    $(miCuadrito).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
                    // agrega la clase correspondiente de sombras
                    $(miCuadrito).addClass(tempFormat);
                    break;
                case "todo":
                    // un array para los formatos que se aplicarán
                    var arrayTempFormat = [];
                    // guarda las propiedades actuales
                    lastColor = miCuadrito.style.backgroundColor; // 0
                    lastColorLienzo = miCuadrito.dataset.colorlienzo; // 1
                    lastColorRejilla = miCuadrito.dataset.colorbordes; // 2
                    lastRadioBorde = miCuadrito.dataset.radio; // 3
                    lastOpacidad = miCuadrito.style.opacity; // 4
                    lastSombras = miCuadrito.dataset.sombras; // 5
                    // llena el array
                    if (formatoAplicadoAlBorrar == "formatosGlobales") {
                        arrayTempFormat[0] = fondoAplicado;
                        arrayTempFormat[1] = colorLienzoAplicado;
                        arrayTempFormat[2] = colorBordesAplicado;
                        arrayTempFormat[3] = radioAplicado;
                        arrayTempFormat[4] = opacidadAplicada;
                        arrayTempFormat[5] = sombrasAplicada;
                    } else {
                        arrayTempFormat[0] = "#ffffff";
                        arrayTempFormat[1] = "#ffffff";
                        arrayTempFormat[2] = "#000000";
                        arrayTempFormat[3] = "0%";
                        arrayTempFormat[4] = "1";
                        arrayTempFormat[5] = "s0000";
                    }  
                    // borra los formatos
                    // el color del pixel
                    miCuadrito.style.backgroundColor = arrayTempFormat[0];
                    // pinta el lienzo                          
                    $(miCuadrito).parent().css("background-color", arrayTempFormat[1]);
                    miCuadrito.dataset.colorlienzo = arrayTempFormat[1];
                    // aplica el color a los bordes
                    miCuadrito.style.borderColor = arrayTempFormat[2];
                    miCuadrito.dataset.colorbordes = arrayTempFormat[2];
                    //ajusta el radio de la celda
                    miCuadrito.dataset.radio = arrayTempFormat[3];
                    miCuadrito.style.MozBorderRadius = arrayTempFormat[3];
                    miCuadrito.style.webkitBorderRadius = arrayTempFormat[3];
                    miCuadrito.style.borderRadius = arrayTempFormat[3];
                    // opacidad
                    miCuadrito.style.opacity = arrayTempFormat[4];
                    // sombras de la celda
                    miCuadrito.dataset.sombras = arrayTempFormat[5];            
                    // remueve todas las clases de sombras
                    $(miCuadrito).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
                    // agrega la clase correspondiente de sombras
                    $(miCuadrito).addClass(arrayTempFormat[5]);
                    break;    
            }
            var tempInfo = "Borrado " + formatoBorradoComoTexto(formatoBorrado);
            if (formatoAplicadoAlBorrar == "formatosGlobales") {
                tempInfo = tempInfo + " (Formato Global)";
            } else {
                tempInfo = tempInfo + " (Formato Inicial)";
            }
            // informa
            showSnackbar(tempInfo);
            // activa el botón deshacer
            estadoBtnDeshacer(true, "Deshacer borrado");
            break;
        case "extraer":
            //modo extraer color según opción ExtraerDesde
            switch (ExtraerDesde) {
                case "Pixel":
                    colorActual = convertirRGBaHexadecimal(miCuadrito.style.backgroundColor);
                    break;
                case "Lienzo":
                    colorActual = miCuadrito.dataset.colorlienzo;
                    break;
                case "Bordes":
                    colorActual = miCuadrito.dataset.colorbordes;
                    break;
            }            
            // asigna el valor hexadecimal al input color
            getcolorPixel.value = colorActual;
            // actualiza el borde del input color
            getcolorPixel.style.borderColor = colorActual;
            // también al span de relleno
            getRelleno.style.backgroundColor = colorActual;
            // el color de ciertos íconos
            getBtnRellenar.style.color = colorActual;
            getBtnColorLienzo.style.color = colorActual;
            getBtnColorRejilla.style.color = colorActual;
            getBtnGotero.style.color = colorActual;
            getBtnPincel.style.color = colorActual;
            // en especial para el caso de los importados
            procesarHistorial(colorActual);
            // resalta en historial
            resaltarActual();
            // informa
            showSnackbar("Extraído desde " + ExtraerDesde + ": " + colorActual);
            break;
        case "relleno":
            // parámetros: colorViejo, colorNuevo, miID
            // document.getElementById(celda).style.backgroundColor es RGB
            // getRelleno.style.backgroundColor es colorActual en RGB
            // colorActual es hexadecimal            
            rellenarZona(miCuadrito.style.backgroundColor, getRelleno.style.backgroundColor, celda);
            break;
        case "reemplazar":
            // parámetros: colorViejo, colorNuevo, miID
            reemplazarColor(miCuadrito.style.backgroundColor, getRelleno.style.backgroundColor, celda);
            break;
    }
    ocupado = false;
}
// agrega los cuadritos al DOM
// SE LLAMA JUSTO DESPÚES DE DECLARARLA, AL ABRIR LA PÁGINA
function crearCuadritos() {
    var fila;
    var columna;
    var miFila;
    var miLienzo;
    var miColumna;
    var miID;
    // recorre filas
    for (fila = 0; fila <= MAXNUMFILAS; fila++) {
        // crea la fila
        miFila = document.createElement("DIV");
        // le agrega la clase
        miFila.setAttribute("class", "fila");
        // la añade al contenedor
        getContenedor.appendChild(miFila);
        // recorre columnas
        for (columna = 0; columna <= MAXNUMCOLUMNAS; columna++) {
            if (fila == 0 || columna == 0){
                // crea rótulo
                miColumna = document.createElement("DIV");
                miColumna.setAttribute("class", "etiqueta");
                if (fila == 0 && columna != 0){
                    miColumna.innerHTML = columna;
                } else if (columna == 0 && fila != 0) {
                    miColumna.innerHTML = fila;
                }
                // llevan id (row and col)
                miID = "r" + fila + "c" + columna;
                miColumna.id = miID;
                miFila.appendChild(miColumna);
            } else {
                // crea el lienzo
                miLienzo = document.createElement("DIV");
                // le agrega la clase
                miLienzo.setAttribute("class", "lienzo");
                // color lienzo por defecto, su hijo lo guarda en el dataset            
                miLienzo.style.backgroundColor = "#ffffff";
                // crea cuadrito
                miColumna = document.createElement("DIV");
                // la clase de los cuadritos es columna
                // la clase por defecto de sombras es s0000 (sin sombras)
                miColumna.setAttribute("class", "columna s0000");
                // llevan id
                miID = "f" + fila + "c" + columna;
                miColumna.id = miID;
                // para la gestión de la sombra
                miColumna.dataset.sombras = "s0000";
                // para la gestión del radio del borde
                miColumna.dataset.radio = "0%";
                miColumna.style.MozBorderRadius = "0%";
                miColumna.style.webkitBorderRadius = "0%";
                miColumna.style.borderRadius = "0%";
                // opacidad inicial es 1
                miColumna.style.opacity = "1";
                // el color del pixel
                miColumna.style.backgroundColor = "#ffffff";
                // para gestionar el color de su respectivo lienzo, parent
                miColumna.dataset.colorlienzo = "#ffffff";
                // para gestionar su color de bordes
                miColumna.dataset.colorbordes = "#000000";
                miColumna.style.borderColor = "#000000";
                // le adjunta el evento click
                miColumna.addEventListener("click", function () { hacerClick(this.id); });
                // por las x, define tamaño de fuente
                // TAMBIÉN POR LAS SOMBRAS EN UNIDADES em
                miColumna.style.fontSize = tamaño * 0.8 + "px";            
                // agrega el cuadrito a su lienzo
                miLienzo.appendChild(miColumna);
                // agrega el lienzo a su fila
                miFila.appendChild(miLienzo);
            }
        }
    }
}

//para que se creen al abrir la página 
crearCuadritos();
// la referencia:
// declarada al inicio
//obtiene un array con todos los de la clase columna
// para evitar recorridos al dom en algunas rutinas, optimizando
getColumnas = document.getElementsByClassName("columna");
// para probar su cantidad
//alert("cantidad " + getColumnas.length);
// agrega los números de los selectores de filas y columnas al DOM
// SE LLAMA JUSTO DESPÚES DE DECLARARLA, AL ABRIR LA PÁGINA
function configurarSelects() {
    var fila;
    var columna;
    var xsel;
    var y;  
    // agrega selectores de número de filas
    for (fila = 1; fila <= MAXNUMFILAS; fila++) {
        xsel = document.createElement("option");
        xsel.text = fila;
        xsel.value = fila;
        getSelectFilas.add(xsel, fila - 1);
    }
    // agrega selectores de número de columnas
    for (columna = 1; columna <= MAXNUMCOLUMNAS; columna++) {
        y = document.createElement("option");
        y.text = columna;
        y.value = columna;
        getSelectColumnas.add(y, columna - 1);
    }
    // selecciona los valores por defecto
    getSelectFilas.selectedIndex = 9; // 10 filas
    getSelectColumnas.selectedIndex = 9; // 10 columnas
    numColumnas = 10;
    numFilas = 10;
}
//se muestra el historial de color
function mostrarHistorial(afectarPreferencia) {
    if (modoActual == "borrador") {
        showSnackbar("Está en Modo Borrador...");
        return;
    }
    if (modoActual == "radio") {
        showSnackbar("Está en Modo Editor de Radios...");
        return;
    }
    if (modoActual == "opacidad") {
        showSnackbar("Está en Modo Editor de Opacidad...");
        return;
    }
    if (modoActual == "sombras") {
        showSnackbar("Está en Modo Editor de Sombras...");
        return;
    }
    // sale si ya está mostrado
    if (historialMostrado == true) {
        //return;
    }
    // indica el estado del historial
    historialMostrado = true;
    //cancela el timer que lo ocultaría
    clearTimeout(timerHistorial);
    // guarda la preferencia
    if (modoActual != "borrador" && modoActual != "radio" && modoActual != "opacidad" && modoActual != "sombras"  && afectarPreferencia == true) {
        prefiereHistorial = true;
    }
    //oculta este botón
    getBtnHistorialColor.style.display = "none";
    // la barra se activa y el botón cerrar historial también
    getPaletaHistorial.style.pointerEvents = "auto";
    getBtnCerrarHistorial.disabled = false;
    //muestra la paleta de historial de color
    //getPaletaHistorial.style.display = "block";
    getPaletaHistorial.style.left = "0px";
    getPaletaHistorial.style.visibility = "visible";
    getPaletaHistorial.style.opacity = "0.9";
    //muestra el botón para cerrar historial de color
    //BtnCerrarHistorial.style.display = "inline-block";
    BtnCerrarHistorial.style.left = "0px";
    BtnCerrarHistorial.style.visibility = "visible";
    BtnCerrarHistorial.style.opacity = "1";
    // para definir sus posiciones y apariencia
    ajustesResize();
    resaltarActual();
}
//se llama la función que muestra el historial de color
getBtnHistorialColor.onclick = function () {
    mostrarHistorial(true);
}
//se cierra el historial de color
function cerrarHistorial(afectarPreferencia) {
    // sale si ya está oculto
    if (historialMostrado == false) {
        //return;
    }
    // indica el estado
    historialMostrado = false;
    //cancela el timer que lo ocultaría
    clearTimeout(timerHistorial);
    // guarda la preferencia
    if (modoActual != "borrador" && modoActual != "radio" && modoActual != "opacidad" && modoActual != "sombras"  && afectarPreferencia == true) {
        prefiereHistorial = false;
    }
    // la barra se desactiva y el botón cerrar historial también
    getPaletaHistorial.style.pointerEvents = "none";
    BtnCerrarHistorial.disabled = true;
    //muestra el botón en la paleta de arriba
    // en caso que quiera esperar comente la siguiente línea
    getBtnHistorialColor.style.display = "inline-block";
    // la paleta crece
    ajustesResize();
    // al rato
    timerHistorial = setTimeout(function () {
        // la paleta del historial
        //  lo oculta un poco después, para dar tiempo a la transición 
        getPaletaHistorial.style.left = "-300px";
        getPaletaHistorial.style.visibility = "hidden";
        //oculta la paleta de historial de color
        // getPaletaHistorial.style.display = "none";
        //muestra el botón en la paleta de arriba
        // en caso que quiera esperar quite el comentario en la siguiente línea
        //getBtnHistorialColor.style.display = "inline-block";
        // el botón de cerrar historial
        //  lo oculta un poco después, para dar tiempo a la transición 
        BtnCerrarHistorial.style.left = "-300px";
        BtnCerrarHistorial.style.visibility = "hidden";
        //oculta la paleta de historial de color
        //BtnCerrarHistorial.style.display = "none";
    }, 2000);
    getPaletaHistorial.style.opacity = "0";
    //oculta el botón de cerrar historial de color
    //BtnCerrarHistorial.style.display = "none";
    BtnCerrarHistorial.style.opacity = "0";
}
//se llama la función que cierra el historial de color
BtnCerrarHistorial.onclick = function () {
    cerrarHistorial(true);
}
function definirPuntero() {
    // si hace zoom +
    if (zoomIn == true) {
        return "zoom-in";
    } else {
        // hace zoom -
        return "zoom-out";
    }
}
function mostrarPuntero() {
    // no se ocultará si estaba pendiente
    clearTimeout(timerCursor);
    // sale si no es pantalla completa
    if (pantallaCompleta == false) { return; }
    // el puntero es visible
    getPantalla.style.cursor = definirPuntero();
    getContenedor.style.cursor = definirPuntero();
    $(".columna").css("cursor", definirPuntero());
    $(".etiqueta").css("cursor", definirPuntero());
    // también los botones
    $("#paletaFull").css("top", "12px");
    // programa que se oculte
    timerCursor = setTimeout(ocultarPuntero, 3000);
}

function ocultarPuntero() {
    // oculta el puntero
    getPantalla.style.cursor = "none";
    getContenedor.style.cursor = "none";
    $(".columna").css("cursor", "none");
    $(".etiqueta").css("cursor", "none");
    // también los botones
    $("#paletaFull").css("top", "-50px");
}
// pantalla completa, entrar
getBtnPantallaCompleta.onclick = function () {
    pantallaCompleta = true;
    // primero guarda el scroll de la página
    miBodyScroll = document.body.scrollTop; // For Chrome, Safari and Opera
    miDocumentScroll = document.documentElement.scrollTop; // For IE and Firefox
    // ajustes css
    document.getElementById("paletaFull").style.display = "block";
    $(getPantalla).css("width", "100%");
    $(getPantalla).css("height", "100%");
    $(getBtnCerrarHistorial).addClass("oculto");
    $(".paleta").addClass("oculto");
    $(":header").addClass("oculto");
    // por defecto es zoom +
    document.getElementById("BtnAumentarFull").style.border = "3px outset #009900";
    document.getElementById("BtnDisminuirFull").style.border = "3px solid #666699";
    // gestiona el puntero
    zoomIn = true;
    mostrarPuntero();
    // api
    launchFullScreen();
    // para que se centre enseguida
    ajustesResize();
    // notifica
    showSnackbar("Pantalla completa activada");
}
// pantalla completa, salir
document.getElementById("BtnSalirPantallaCompleta").onclick = function () {    
    pantallaCompleta = false;
    // no se ocultará si estába pendiente
    clearTimeout(timerCursor);
    // ajustes css
    document.getElementById("paletaFull").style.display = "none";
    $(getPantalla).css("width", "auto");
    $(getPantalla).css("height", "auto");
    $(getBtnCerrarHistorial).removeClass("oculto");
    $(".paleta").removeClass("oculto");
    $(":header").removeClass("oculto");
    // puntero
    getPantalla.style.cursor = "default";
    $(getContenedor).css("cursor", "default");
    $(".columna").css("cursor", "pointer");
    $(".etiqueta").css("cursor", "default");
    // api
    cancelFullScreen();
    ajustesResize();
    // informa
    showSnackbar("Pantalla completa desactivada");
    //restaura el scroll
    setTimeout(function () {
        document.body.scrollTop = miBodyScroll; // For Chrome, Safari and Opera
        document.documentElement.scrollTop = miDocumentScroll; // For IE and Firefox
    }, 2000);
    
}
//mueve el puntero y aparece el cursor y los botones
getPantalla.onmousemove = function () { mostrarPuntero() };
getContenedor.onmousemove = function () { mostrarPuntero() };
// en eventos táctiles
getPantalla.ontouchmove = function () { mostrarPuntero() };
getContenedor.ontouchmove = function () { mostrarPuntero() };
getPantalla.ontouchstart = function () { mostrarPuntero() };
getContenedor.ontouchstart = function () { mostrarPuntero() };
// cuando hace scroll
getPantalla.onscroll = function () { mostrarPuntero() };
getContenedor.onscroll = function () { mostrarPuntero() };
// también cuando hace click fuera del dibujo
getPantalla.onclick = function () {
    procesarZoom();
    mostrarPuntero();    
};
// también cuando hace click en el contenedor del dibujo, si es que se puede
getContenedor.onclick = function (event) {
    procesarZoom();
    mostrarPuntero();
    event.stopPropagation();
};

// define zoom +
document.getElementById("BtnAumentarFull").onclick = function (event) {
    document.getElementById("BtnAumentarFull").style.border = "3px outset #009900";
    document.getElementById("BtnDisminuirFull").style.border = "3px solid #666699";
    zoomIn = true;
    mostrarPuntero();
    event.stopPropagation();
}
// define zoom -
document.getElementById("BtnDisminuirFull").onclick = function (event) {
    document.getElementById("BtnAumentarFull").style.border = "3px solid #666699";
    document.getElementById("BtnDisminuirFull").style.border = "3px outset #009900";
    zoomIn = false;
    mostrarPuntero();
    event.stopPropagation();
}
// al recibir solicitud de zoom, se verifica el estado de zoomIn
function procesarZoom() {  
    // sale si no es pantalla completa
    if (pantallaCompleta == false) { return; }
    // ahora sí decide...
    if (zoomIn == true) {
        // hace zoom +
        ajustarTamaño(1, false, true);
        // para que se centre enseguida
        ajustesResize();
    } else {
        // hace zoom -
        ajustarTamaño(-1, false, true);
        // para que se centre enseguida
        ajustesResize();
    }
}
//se selecciona un color aleatorio
getBtnRnd.onclick = function () {    
    var miRGB;
    var miHex;
    miR = Math.floor(Math.random() * 256); 
    miG = Math.floor(Math.random() * 256); 
    miB = Math.floor(Math.random() * 256); 
    miRGB = "rgb(" + miR + ", " + miG + ", " + miB + ")";
    miHex = convertirRGBaHexadecimal(miRGB);
    // asigna el valor hexadecimal al input color
    getcolorPixel.value = miHex;
    // para otras actualizaciones
    colorPixel();
}
//se pasa a un color opuesto al actual
getBtnOpuesto.onclick = function () {
    var miRGB;
    var miHex;
    miR = Number(rDesdeHex(colorActual));
    miG = Number(gDesdeHex(colorActual));
    miB = Number(bDesdeHex(colorActual));
    miR = 255 - miR;
    miG = 255 - miG;
    miB = 255 - miB;
    miRGB = "rgb(" + miR + ", " + miG + ", " + miB + ")";
    miHex = convertirRGBaHexadecimal(miRGB);
    // asigna el valor hexadecimal al input color
    getcolorPixel.value = miHex;
    // para otras actualizaciones
    colorPixel();
}
//se muestra el selector rgb de color
getBtnRGB.onclick = function () {
    modalActual = "rgb";
    //muestra el modal
    showModal();
}
//se muestra el selector HSL de color
getBtnHSL.onclick = function () {
    modalActual = "hsl";
    //muestra el modal
    showModal();
}
//se muestra el selector hexadecimal de color
getBtnHex.onclick = function () {
    modalActual = "hex";
    //muestra el modal
    showModal();
}
//se muestra el selector de galería de colores
getBtnGallery.onclick = function () {
    modalActual = "gallery";
    //muestra el modal
    showModal();
}
//se muestra la ventana con opciones para exportar
getBtnExportar.onclick = function () {
    alert("En construcción");

}
//se muestra la ventana con opciones para importar
getBtnImportar.onclick = function () {
    alert("En construcción");
}
//cambia el color seleccionado, llamada por selectores o historial de colores
function colorPixel() {
    // OJO: CÓDIGO PARALELO EN MODO EXTRAER
    // NO OLVIDAR QUE backgroundColor DEVUELVE RGB Y EL VALUE DEL INPUT COLOR ES HEXADECIMAL
    var miValor = getcolorPixel.value;
    if (validarHex(miValor) == false) {
        // no es un color válido, seguramente una entrada errada en ie o safari
        getcolorPixel.value = "#000000";
        miValor = "#000000";
        showSnackbar("Color no válido. Se estableció negro (#000000).");        
    }
    //actualiza el color del pincel
    colorActual = miValor;
    // actualiza el borde del input color
    getcolorPixel.style.borderColor = colorActual;
    //actualiza el color de rellenar todo junto al ícono del tanque
    getRelleno.style.backgroundColor = colorActual;
    // el color de ciertos íconos
    getBtnRellenar.style.color = colorActual;
    getBtnColorLienzo.style.color = colorActual;
    getBtnColorRejilla.style.color = colorActual;
    getBtnGotero.style.color = colorActual;
    getBtnPincel.style.color = colorActual;
    // resalta en el historial si existe
    resaltarActual();
    // en caso de estar en modo libre
    if (modoActual == "libre") {
        // los hijos de los lienzos con la clase seleccionados se colorean
        $(".seleccionado").children().css("background-color", colorActual);
        if (document.getElementsByClassName("seleccionado").length) {
            // solo lo procesa si hay seleccionados
            procesarHistorial(colorActual);
        }        
    }
}
//selecciona un color del historial de colores
// click en un color del historial
// recibe el id del botón como parámetro
function colorHistorial(btnId) {
    //actualiza el color del selector
    getcolorPixel.value = document.getElementById(btnId).title;
    // para otras actualizaciones de colorPixel
    colorPixel();
    // quite cometario en la siguiente línea para cerrar el historial al escoger un color
    //cerrarHistorial();
}
// ajusta el número de filas y columnas visibles
function dimensionar(mostrarLoader) {
    // sale si es por código
    if (permitirEvento == false) {
        return;
    }
    //actualiza el tamaño de la matriz
    var miFila;
    var miColumna;
    var miID;    
    var miElemDim;
    var xsel;
    var y;
    // primero guarda todo para poder deshacer
    lastNumFilas = numFilas;
    lastNumColumnas = numColumnas;    
    //debe guardar los colores, los radios, los colores de bordes y los id      
    lastAction = "dimensionar";
    lastArrayColor.length = 0;
    lastArrayRadio.length = 0;
    lastArrayColorBordes.length = 0;
    lastArrayOpacidad.length = 0;
    lastArraySombras.length = 0;
    lastArrayLienzo.length = 0;
    lastArrayID.length = 0;
    //lee los valores de los selectores de filas y columnas
    xsel = getSelectColumnas.selectedIndex;
    y = getSelectColumnas.options;
    numColumnas = Number(y[xsel].value);
    xsel = getSelectFilas.selectedIndex;
    y = getSelectFilas.options;
    numFilas = Number(y[xsel].value);
    // muestra un loader...
    if (mostrarLoader == true) {
        $(".loader").removeClass("oculto");
    }    
    setTimeout(function () {        
        // código alta exigencia
        //alert("filas " + numFilas + " columnas " + numColumnas);
        // recorre los rótulos y muestra solo los necesarios
        // los de las filas
        for (miFila = 0; miFila <= MAXNUMFILAS; miFila++) {            
            //construye el id del rótulo, row variable y col 0
            miID = "r" + miFila + "c0";                
            // referencia al rótulo para optimizar
            miElemDim = document.getElementById(miID);
            //si está dentro del tamaño especificado hace visible el rótulo
            // y si no, lo oculta            
            if (miFila <= numFilas) {
                // visible                    
                $(miElemDim).removeClass("oculto");                    
            } else {
                // oculto
                $(miElemDim).addClass("oculto"); 
            }
        }
        // los de las columnas
        for (miColumna = 0; miColumna <= MAXNUMCOLUMNAS; miColumna++) {            
            //construye el id del rótulo, row 0 y col variable
            miID = "r0" + "c" + miColumna;                
            // referencia al rótulo para optimizar
            miElemDim = document.getElementById(miID);
            //si está dentro del tamaño especificado hace visible el rótulo
            // y si no, lo oculta            
            if (miColumna <= numColumnas) {
                // visible                    
                $(miElemDim).removeClass("oculto");                    
            } else {
                // oculto
                $(miElemDim).addClass("oculto"); 
            }
        } 
        //recorre todos los cuadritos, clase columna, por id    
        for (miFila = 1; miFila <= MAXNUMFILAS; miFila++) {
            for (miColumna = 1; miColumna <= MAXNUMCOLUMNAS; miColumna++) {
                //construye el id
                miID = "f" + miFila + "c" + miColumna;                
                // referencia al cuadrito para optimizar
                miElemDim = document.getElementById(miID);
                // primero guardar
                // los id
                lastArrayID[lastArrayID.length] = miID;
                // color relleno
                lastArrayColor[lastArrayColor.length] = miElemDim.style.backgroundColor;
                // el radio
                lastArrayRadio[lastArrayRadio.length] = miElemDim.dataset.radio;
                // el color del borde
                lastArrayColorBordes[lastArrayColorBordes.length] = miElemDim.dataset.colorbordes;
                // la opacidad
                lastArrayOpacidad[lastArrayOpacidad.length] = miElemDim.style.opacity;
                // las sombras
                lastArraySombras[lastArraySombras.length] = miElemDim.dataset.sombras;
                // el color del lienzo
                lastArrayLienzo[lastArrayLienzo.length] = miElemDim.dataset.colorlienzo;
                //si está dentro del tamaño especificado lo hace visible
                // y si no, lo oculta            
                if (miFila <= numFilas && miColumna <= numColumnas) {
                    // visible
                    miElemDim.style.display = "inline-block";
                    //$("[id = " + miID + "]").removeClass("oculto");                    
                } else {
                    // no visible
                    miElemDim.style.display = "none";
                    //$("[id = " + miID + "]").addClass("oculto");                    
                    // los que no se ven se colocan del último fondo global aplicado, nuevo comportamiento
                    miElemDim.style.backgroundColor = fondoAplicado;
                    // también se les asigna el último radio global aplicado
                    miElemDim.dataset.radio = radioAplicado;
                    miElemDim.style.MozBorderRadius = radioAplicado;
                    miElemDim.style.webkitBorderRadius = radioAplicado;
                    miElemDim.style.borderRadius = radioAplicado;
                    // se les coloca el último color de bordes global aplicado
                    miElemDim.dataset.colorbordes = colorBordesAplicado;
                    miElemDim.style.borderColor = colorBordesAplicado;
                    // su opacidad será la última global aplicada
                    miElemDim.style.opacity = opacidadAplicada;
                    // la última configuración de sombras aplicada
                    miElemDim.dataset.sombras = sombrasAplicada;
                    // remueve todas las clases de sombras
                    $(miElemDim).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
                    // agrega la clase actual de sombras
                    $(miElemDim).addClass(sombrasAplicada);
                    // el color del lienzo será el último global aplicado
                    miElemDim.dataset.colorlienzo = colorLienzoAplicado;
                    $(miElemDim).parent().css("background-color", colorLienzoAplicado);
                }                
            }
        }
        // oculta el loader
        if (mostrarLoader == true) {
            $(".loader").addClass("oculto");
        }        
        // otras tareas        
        //ajusta el contenedor de los cuadritos
        if (mostrarEtiquetas == true) {
            var anchoCont = tamaño * (1 + numColumnas);
        } else {
            var anchoCont = tamaño * numColumnas;
        }        
        // MAXNUMFILAS VECES EL ANCHO DE UN CUADRITO... más el rótulo
        //PERO OJO QUE maxWidth DEL CONTENEDOR ES 90%, NUNCA DESBORDA PANTALLA.
        getContenedor.style.width = anchoCont + "px";
        // posiciona inmediatamente
        ajustesResize();
        // activa el botón deshacer
        estadoBtnDeshacer(true, "Deshacer dimensionado");
    }, 0);
}

//cambia el modo seleccionado, llamada por los botones de cambio de modo
function cambiarModo(nuevoModo) {
    if (modoActual == nuevoModo) {
        // si son iguales, se sale
        return;
    }
     
    // lo cambia, PERO PRIMERO GUARDA
    lastModo = modoActual;
    modoActual = nuevoModo;
    // gestiona el historial de color
    if (modoActual == "borrador" || modoActual == "radio" || modoActual == "opacidad" || modoActual == "sombras") {        
            cerrarHistorial(false);
    } else {
        if (prefiereHistorial == true) {
            mostrarHistorial(false);
        } else {
            cerrarHistorial(false);
        }
    }
    // solo en modo borrador empieza a alternar el ícono del btn
    if (modoActual == "borrador") {
        icoInterval = setInterval("alternarIcoBorrador()", 1000);        
    } else {
        // deja de alternar
        clearInterval(icoInterval);
        // vuelve al borrador normal
        getIcoBtnBorrador.className = "fas fa-eraser";
    }   
    // elimina las marcas x de todos
    //$(".columna").html("");
    $(".lienzo").removeClass("seleccionado");
    // elimina el modo seleccionado de todos los botones
    $(".seleccionadoBtnModos").removeClass("seleccionadoBtnModos");    
    if (modoActual != "libre") {
        //muestra y oculta elementos
        // muestra el pie
        getPie.style.visibility = "visible";
        getBtnRellenar.style.display = "inline-block";
        getBtnColorLienzo.style.display = "inline-block";
        getBtnColorRejilla.style.display = "inline-block";
        getBtnGotero.style.display = "inline-block";
        getBtnReemplazar.style.display = "inline-block";
        getBtnBorrador.style.display = "inline-block";
        getBtnPincel.style.display = "inline-block";
        getBtnLibre.style.display = "inline-block";
        getBtnExtraerColor.style.display = "inline-block";
        getFiltro.style.display = "inline-block";
        getBtnActualizar.style.display = "inline-block";        
        getBtnTipoBorde.style.display = "inline-block";
        getBtnAnchoBordes.style.display = "inline-block";
        getBtnRadioBordes.style.display = "inline-block";
        getBtnOpacidad.style.display = "inline-block";
        getBtnSombras.style.display = "inline-block";
        getBtnDeshacer.style.display = "inline-block";
        getBtnTrash.style.display = "inline-block";
        getBtnInfo.style.display = "inline-block";
        getBtnEtiquetas.style.display = "inline-block";
        //getSpanFilas.style.display = "inline-block";
        $(getSpanFilas).removeClass("oculto");
        getSelectFilas.style.display = "inline-block";
        //getSpanColumnas.style.display = "inline-block";
        $(getSpanColumnas).removeClass("oculto");
        getSelectColumnas.style.display = "inline-block";
        getBtnImportar.style.display = "inline-block";
        getBtnExportar.style.display = "inline-block";
        getBtnImprimir.style.display = "inline-block";
        getBtnAceptarLibre.style.display = "none";
        getBtnCancelarLibre.style.display = "none";
        getBtnBorrarLibre.style.display = "none";
        getBtnExpandirLibre.style.display = "none";
        getBtnPantallaCompleta.style.display = "inline-block";
    }
    switch (modoActual) {
        case "libre":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnLibre).addClass("seleccionadoBtnModos");   
            // el pie distrae
            getPie.style.visibility = "hidden";
            getcolorPixel.style.display = "inline-block";
            getBtnRGB.style.display = "inline-block";
            getBtnHSL.style.display = "inline-block";
            getBtnHex.style.display = "inline-block";
            getBtnGallery.style.display = "inline-block";
            getBtnRnd.style.display = "inline-block";
            getBtnOpuesto.style.display = "inline-block";
            //muestra y oculta elementos
            getBtnAceptarLibre.style.display = "inline-block";
            getBtnCancelarLibre.style.display = "inline-block";
            getBtnBorrarLibre.style.display = "inline-block";
            getBtnExpandirLibre.style.display = "inline-block";
            getBtnRellenar.style.display = "none";
            getBtnColorLienzo.style.display = "none";
            getBtnColorRejilla.style.display = "none";
            getBtnGotero.style.display = "none";
            getBtnReemplazar.style.display = "none";
            getBtnBorrador.style.display = "none";
            getBtnPincel.style.display = "none";
            getBtnLibre.style.display = "none";
            getBtnExtraerColor.style.display = "none";
            getFiltro.style.display = "none";
            getBtnActualizar.style.display = "none";
            getBtnTrash.style.display = "none";
            getBtnInfo.style.display = "none";
            getBtnEtiquetas.style.display = "none";
            getBtnTipoBorde.style.display = "none";
            getBtnAnchoBordes.style.display = "none";
            getBtnRadioBordes.style.display = "none";
            getBtnOpacidad.style.display = "none";
            getBtnSombras.style.display = "none";
            getBtnDeshacer.style.display = "none";
            //getSpanFilas.style.display = "none";
            $(getSpanFilas).addClass("oculto");
            getSelectFilas.style.display = "none";
            //getSpanColumnas.style.display = "none";
            $(getSpanColumnas).addClass("oculto");
            getSelectColumnas.style.display = "none";
            getBtnImportar.style.display = "none";
            getBtnExportar.style.display = "none";
            getBtnImprimir.style.display = "none";
            getBtnPantallaCompleta.style.display = "none";
            //debe guardar los colores y los id      
            lastAction = "libre";
            lastArrayColor.length = 0;
            lastArrayID.length = 0;
            //obtiene un array con todos los de la clase columna
            //getColumnas
            //var x = document.getElementsByClassName("columna");
            var i;
            //recorre todo el array y guarda los id y los colores
            for (i = 0; i < getColumnas.length; i++) {
                //guardar los id y los colores
                lastArrayID[lastArrayID.length] = getColumnas[i].id;
                lastArrayColor[lastArrayColor.length] = getColumnas[i].style.backgroundColor;
            }
            // informa
            showSnackbar("Modo Selección Libre");
            break;
        case "pincel":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnPincel).addClass("seleccionadoBtnModos"); 
            getcolorPixel.style.display = "inline-block";
            getBtnRGB.style.display = "inline-block";
            getBtnHSL.style.display = "inline-block";
            getBtnHex.style.display = "inline-block";
            getBtnGallery.style.display = "inline-block";
            getBtnRnd.style.display = "inline-block";
            getBtnOpuesto.style.display = "inline-block";
            showSnackbar("Modo Pincel");
            break;
        case "info":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnInfo).addClass("seleccionadoBtnModos");
            getcolorPixel.style.display = "inline-block";
            getBtnRGB.style.display = "inline-block";
            getBtnHSL.style.display = "inline-block";
            getBtnHex.style.display = "inline-block";
            getBtnGallery.style.display = "inline-block";
            getBtnRnd.style.display = "inline-block";
            getBtnOpuesto.style.display = "inline-block";
            showSnackbar("Modo Información");
            break;
        case "borrador":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnBorrador).addClass("seleccionadoBtnModos");            
            getcolorPixel.style.display = "none";
            getBtnRGB.style.display = "none";
            getBtnHSL.style.display = "none";
            getBtnHex.style.display = "none";
            getBtnGallery.style.display = "none";
            getBtnRnd.style.display = "none";
            getBtnOpuesto.style.display = "none";            
            showSnackbar("Modo Borrador");
            break;
        case "opacidad":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnOpacidad).addClass("seleccionadoBtnModos");
            getcolorPixel.style.display = "none";
            getBtnRGB.style.display = "none";
            getBtnHSL.style.display = "none";
            getBtnHex.style.display = "none";
            getBtnGallery.style.display = "none";
            getBtnRnd.style.display = "none";
            getBtnOpuesto.style.display = "none";
            showSnackbar("Modo Editor de Opacidad");
            break;
        case "sombras":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnSombras).addClass("seleccionadoBtnModos");
            getcolorPixel.style.display = "none";
            getBtnRGB.style.display = "none";
            getBtnHSL.style.display = "none";
            getBtnHex.style.display = "none";
            getBtnGallery.style.display = "none";
            getBtnRnd.style.display = "none";
            getBtnOpuesto.style.display = "none";
            showSnackbar("Modo Editor de Sombras");
            break;
        case "radio":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnRadioBordes).addClass("seleccionadoBtnModos");            
            getcolorPixel.style.display = "none";
            getBtnRGB.style.display = "none";
            getBtnHSL.style.display = "none";
            getBtnHex.style.display = "none";
            getBtnGallery.style.display = "none";
            getBtnRnd.style.display = "none";
            getBtnOpuesto.style.display = "none";
            showSnackbar("Modo Editor de Radios");
            break;
        case "lienzo":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnColorLienzo).addClass("seleccionadoBtnModos");
            getcolorPixel.style.display = "inline-block";
            getBtnRGB.style.display = "inline-block";
            getBtnHSL.style.display = "inline-block";
            getBtnHex.style.display = "inline-block";
            getBtnGallery.style.display = "inline-block";
            getBtnRnd.style.display = "inline-block";
            getBtnOpuesto.style.display = "inline-block";
            showSnackbar("Modo Color Lienzo");
            break;
        case "colorBordes":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnColorRejilla).addClass("seleccionadoBtnModos");
            getcolorPixel.style.display = "inline-block";
            getBtnRGB.style.display = "inline-block";
            getBtnHSL.style.display = "inline-block";
            getBtnHex.style.display = "inline-block";
            getBtnGallery.style.display = "inline-block";
            getBtnRnd.style.display = "inline-block";
            getBtnOpuesto.style.display = "inline-block";
            showSnackbar("Modo Color Bordes");
            break;
        case "relleno":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnGotero).addClass("seleccionadoBtnModos");
            getcolorPixel.style.display = "inline-block";
            getBtnRGB.style.display = "inline-block";
            getBtnHSL.style.display = "inline-block";
            getBtnHex.style.display = "inline-block";
            getBtnGallery.style.display = "inline-block";
            getBtnRnd.style.display = "inline-block";
            getBtnOpuesto.style.display = "inline-block";
            showSnackbar("Modo Relleno Selectivo");
            break;
        case "reemplazar":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnReemplazar).addClass("seleccionadoBtnModos");
            getcolorPixel.style.display = "inline-block";
            getBtnRGB.style.display = "inline-block";
            getBtnHSL.style.display = "inline-block";
            getBtnHex.style.display = "inline-block";
            getBtnGallery.style.display = "inline-block";
            getBtnRnd.style.display = "inline-block";
            getBtnOpuesto.style.display = "inline-block";
            showSnackbar("Modo Reemplazar Color");
            break;
        case "extraer":
            // agrega la clase seleccionado al btn del modo actual                    
            $(getBtnExtraerColor).addClass("seleccionadoBtnModos");            
            getcolorPixel.style.display = "inline-block";
            getBtnRGB.style.display = "inline-block";
            getBtnHSL.style.display = "inline-block";
            getBtnHex.style.display = "inline-block";
            getBtnGallery.style.display = "inline-block";
            getBtnRnd.style.display = "inline-block";
            getBtnOpuesto.style.display = "inline-block";
            showSnackbar("Modo Extraer Color");
            break;
    }
    ajustesResize();
}
//se selecciona ACEPTAR en el modo libre
getBtnAceptarLibre.onclick = function () {
    // muestra un loader...
    $(".loader").removeClass("oculto");
    setTimeout(function () {
        // código alta exigencia
        cambiarModo(lastModo);
        estadoBtnDeshacer(true, "Deshacer cambios del modo libre");
        // oculta el loader
        $(".loader").addClass("oculto");
        // otras tareas

    }, 0);  
   
}
//se selecciona CANCELAR en el modo libre
getBtnCancelarLibre.onclick = function () {
    // muestra un loader...
    $(".loader").removeClass("oculto");
    setTimeout(function () {
        // código alta exigencia
        cambiarModo(lastModo);
        // deshace cualquier cambio de color            
        var i;
        //recorre los array y les aplica el color guardado
        for (i = 0; i < lastArrayID.length; i++) {
            document.getElementById(lastArrayID[i]).style.backgroundColor = lastArrayColor[i];
        }
        estadoBtnDeshacer(false);
        // oculta el loader
        $(".loader").addClass("oculto");
        // otras tareas

    }, 0);  
    
}
// en modo libre, se borra la selección actual
getBtnBorrarLibre.onclick = function () {
    // muestra un loader...
    $(".loader").removeClass("oculto");
    setTimeout(function () {
        // código alta exigencia
        var x = document.getElementsByClassName("seleccionado");
        var i;
        var msj = "¡Hecho!";
        var miCuadrito;
        if (x.length < 1) {
            msj = "No hay ninguno seleccionado";
        } else {
            for (i = 0; i < x.length; i++) {
                // la referencia al pixel hijo
                miCuadrito = $(x[i]).children()[0];
                miCuadrito.style.backgroundColor = lastArrayColor[lastArrayID.indexOf(miCuadrito.id)];
            }
            $(".seleccionado").removeClass("seleccionado");
            msj = "Selección borrada";
        }        
        // oculta el loader
        $(".loader").addClass("oculto");
        // otras tareas
        showSnackbar(msj);
    }, 0);
    
}
// en modo libre, expande la selección actual
getBtnExpandirLibre.onclick = function () {
    // muestra un loader...
    $(".loader").removeClass("oculto");
    setTimeout(function () {
        // código alta exigencia
        var msj;
        var x = document.getElementsByClassName("seleccionado");
        var cantSeleccionado = x.length;
        // deben estar seleccionados por lo menos 2 cuadritos
        if (cantSeleccionado < 2) {
            msj = "Seleccione varios para poder expandir";
        } else {
            // procede a expandir la selección
            var i;
            var miCuadrito;
            var colMenor = Infinity;
            var colMayor = -Infinity;
            var filaMenor = Infinity;
            var filaMayor = -Infinity;
            var miFila;
            var miCol;
            var str;
            var res;
            var miID;
            // busca las filas y columnas mayores y menores recorriendo los seleccionados
            for (i = 0; i < x.length; i++) {                                
                //miCuadrito = $(x[i]).children()[0];
                miID = $(x[i]).children()[0].id;
                //str = "" + miCuadrito.id;
                str = "" + miID;
                res = str.substring(1);
                res = res.split("c");
                miFila = res[0];
                miCol = res[1];
                miFila = Number(miFila);
                miCol = Number(miCol);
                if (miFila > filaMayor) {
                    filaMayor = miFila;
                }
                if (miFila < filaMenor) {
                    filaMenor = miFila;
                }
                if (miCol > colMayor) {
                    colMayor = miCol;
                }
                if (miCol < colMenor) {
                    colMenor = miCol;
                }                
            }            
            // forma el cuadrado de selección con los valores límite encontrados y les aplica los cambios
            for (miFila = filaMenor; miFila <= filaMayor; miFila++) {
                for (miCol = colMenor; miCol <= colMayor; miCol++) {
                    miID = "f" + miFila + "c" + miCol;
                    miCuadrito = document.getElementById(miID);
                    //var miLienzo = $("[id = " + miID + "]").parent()[0];
                    var miLienzo = $(miCuadrito).parent()[0];
                    if ( $(miLienzo).hasClass("seleccionado") == false ) {                                                
                        $(miLienzo).addClass("seleccionado");
                        miCuadrito.style.backgroundColor = colorActual;
                    }
                }
            }
            msj = "Selección expandida";
        }
        // oculta el loader
        $(".loader").addClass("oculto");
        // otras tareas
        showSnackbar(msj);
    }, 0);

}

// se alterna la visibilidad de los rótulos
getBtnEtiquetas.onclick = function () {
    var anchoCont;
    var msj;
    if (mostrarEtiquetas == true) {
        // si están visibles, se ocultan
        $(".etiqueta").addClass("etiquetaOculta");
        // calcula el ancho del contenedor
        anchoCont = tamaño * numColumnas;
        // el ícono de este btn
        getIcoEtiquetas.className = "far fa-square";
        // actualiza la variable global
        mostrarEtiquetas = false;
        msj = "Etiquetas ocultas";
    } else {
        // si están ocultas, se muestran
        $(".etiqueta").removeClass("etiquetaOculta");
        // calcula el ancho del contenedor
        anchoCont = tamaño * (1 + numColumnas);
        // el ícono de este btn
        getIcoEtiquetas.className = "far fa-check-square";
        // actualiza la variable global
        mostrarEtiquetas = true;
        msj = "Etiquetas mostradas";
    }
    // ajusta el ancho del contenedor
    getContenedor.style.width = anchoCont + "px";
    // acomoda todo inmediatamente
    ajustesResize();
    showSnackbar(msj);
}

//se selecciona el modo información
getBtnInfo.onclick = function () {
    cambiarModo("info");
}

//se selecciona el modo libre
getBtnLibre.onclick = function () {
    cambiarModo("libre");
}
//se selecciona el pincel
getBtnPincel.onclick = function () {
    cambiarModo("pincel");
}
//se selecciona el borrador
getBtnBorrador.onclick = function () { 
    if (modoActual == "borrador") {
        // está en modo borrador, entonces se pueden ajustar las opciones de borrado
        modalActual = "borrador";
        //muestra el modal        
        showModal();
    } else {
        // pasa a modo borrador
        cambiarModo("borrador");
        // en modo borrador se ve la respectiva flecha en el btn borrador y su info
    }        
}
//se selecciona el modo relleno, el gotero
getBtnGotero.onclick = function () {
    cambiarModo("relleno");
}
//se selecciona el modo reemplazar color, los binoculares
getBtnReemplazar.onclick = function () {
    cambiarModo("reemplazar");
}
// se selecciona el modo extraer color
// extrae el color del pixel, lienzo o bordes y lo convierte en el color actual
getBtnExtraerColor.onclick = function () {
    if (modoActual == "extraer") {
        // está en modo extraer, entonces se puede ajustar la opción ExtraerDesde
        modalActual = "extraer";
        //muestra el modal
        showModal();
    } else {
        // pasa a modo extraer
        cambiarModo("extraer");
        // en modo extraer se ve la respectiva flecha en el btn extraer y su info
    }        
}

// se ajusta el tamaño de los cuadritos
function ajustarTamaño(incremento, mostrarLoader, notificar) {
    if (ocupado == true) {
        //sale si está ocupado
        return;
    }
    ocupado = true;
    if (incremento > 0 && tamaño >= MAXSIZE) {
        //NO PUEDE AUMENTAR
        showSnackbar("Tamaño máximo alcanzado");
        ocupado = false;
        return;
    }
    if (incremento < 0 && tamaño <= MINSIZE) {
        //NO PUEDE DISMINUIR
        showSnackbar("Tamaño mínimo alcanzado");
        ocupado = false;
        return;
    }
    // incremento puede ser 1, -1 o 0
    // si es 0 simplemente se refresca el tamaño
    tamaño = Number(tamaño) + incremento;
    //define el ancho de los bordes
    // 4% por defecto
    //anchoBordes = factorAnchoBordes * tamaño, inicialmente 0.04 * tamaño;
    anchoBordes = factorAnchoBordes * tamaño;
    // getColumnas
    //var x = document.getElementsByClassName("columna");
    var i;
    // muestra un loader...
    if (mostrarLoader == true) {
        $(".loader").removeClass("oculto");
    }
    
    setTimeout(function () {
        // código alta exigencia
        //ajusta todos los cuadritos
        for (i = 0; i < getColumnas.length; i++) {
            //ancho
            getColumnas[i].style.width = tamaño + "px";
            getColumnas[i].style.maxWidth = tamaño + "px";
            getColumnas[i].style.minWidth = tamaño + "px";
            //alto
            getColumnas[i].style.height = tamaño + "px";
            getColumnas[i].style.maxHeight = tamaño + "px";
            getColumnas[i].style.minHeight = tamaño + "px";
            // el ancho del borde
            getColumnas[i].style.borderWidth = anchoBordes + "px";
            // la fuente, para las x
            // también para las sombras en unidades em
            getColumnas[i].style.fontSize = tamaño * 0.8 + "px";            
        }
        // ajusta los rótulos
        // altura
        $(".etiqueta").css("height", tamaño + "px");
        $(".etiqueta").css("maxHeight", tamaño + "px");
        $(".etiqueta").css("minHeight", tamaño + "px");
        // ancho
        $(".etiqueta").css("width", tamaño + "px");
        $(".etiqueta").css("minWidth", tamaño + "px");
        $(".etiqueta").css("maxWidth", tamaño + "px");
        // su fuente
        $(".etiqueta").css("fontSize", tamaño * 0.45 + "px");
        // oculta el loader
        if (mostrarLoader == true) {
            $(".loader").addClass("oculto");
        }        
        // otras tareas
        //ajusta el contenedor de los cuadritos
        if (mostrarEtiquetas == true) {
            var anchoCont = tamaño * (1 + numColumnas);
        } else {
            var anchoCont = tamaño * numColumnas;
        }
        // n VECES EL ANCHO DE UN CUADRITO, más el rótulo
        //PERO OJO QUE maxWidth DEL CONTENEDOR ES 90%, NUNCA DESBORDA PANTALLA.
        getContenedor.style.width = anchoCont + "px"; // ajustesResize lo ajusta también
        // para centrado y otros ajustes
        ajustesResize();
        // otras tareas
        if (notificar == true) {
            showSnackbar("Tamaño: " + tamaño + " px");
        }        
        ocupado = false;
    }, 0); 
}
// la llama para ajustes iniciales, incremento 1, sin loader ni notificación
// inicial css es 23px, quedará en 24px con este ajuste
ajustarTamaño(1, false, false);
// Borrado total, globales
// todos los cuadritos toman el último formato global aplicado, borra todo
getBtnTrash.onclick = function () {
    if (ocupado == true) {
        //sale si está ocupado
        return;
    }
    ocupado = true;
    //debe guardar los formatos y los id      
    lastAction = "borradoGlobal"; 
    lastArrayColor.length = 0;
    lastArrayColorBordes.length = 0;
    lastArrayRadio.length = 0;
    lastArrayID.length = 0;
    lastArrayOpacidad.length = 0;
    lastArraySombras.length = 0;
    lastArrayLienzo.length = 0;
    // muestra un loader...
    $(".loader").removeClass("oculto");
    setTimeout(function () {
        // código alta exigencia
        var i;
        //recorre todo el array y borra todos los cuadritos
        for (i = 0; i < getColumnas.length; i++) {
            //guardar los id y sus formatos al mismo tiempo que recorre los cuadritos y los actualiza
            lastArrayID[lastArrayID.length] = getColumnas[i].id;            
            // color pixel
            lastArrayColor[lastArrayColor.length] = getColumnas[i].style.backgroundColor;
            getColumnas[i].style.backgroundColor = fondoAplicado;
            // color borde
            lastArrayColorBordes[lastArrayColorBordes.length] = getColumnas[i].dataset.colorbordes;
            getColumnas[i].dataset.colorbordes = colorBordesAplicado;
            getColumnas[i].style.borderColor = colorBordesAplicado;
            // radio borde
            lastArrayRadio[lastArrayRadio.length] = getColumnas[i].dataset.radio;
            getColumnas[i].dataset.radio = radioAplicado;
            getColumnas[i].style.MozBorderRadius = radioAplicado;
            getColumnas[i].style.webkitBorderRadius = radioAplicado;
            getColumnas[i].style.borderRadius = radioAplicado;
            // opacidad
            lastArrayOpacidad[lastArrayOpacidad.length] = getColumnas[i].style.opacity;
            getColumnas[i].style.opacity = opacidadAplicada;
            // sombras
            lastArraySombras[lastArraySombras.length] = getColumnas[i].dataset.sombras;
            getColumnas[i].dataset.sombras = sombrasAplicada;
            // remueve todas las clases de sombras
            $(getColumnas[i]).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
            // agrega la clase actual de sombras
            $(getColumnas[i]).addClass(sombrasAplicada);
            // color lienzo
            lastArrayLienzo[lastArrayLienzo.length] = getColumnas[i].dataset.colorlienzo;
            getColumnas[i].dataset.colorlienzo = colorLienzoAplicado;
            $(getColumnas[i]).parent().css("background-color", colorLienzoAplicado);
        }        
        // activa el botón deshacer
        estadoBtnDeshacer(true, "Deshacer borrar todo");
        ocupado = false;
        // oculta el loader
        $(".loader").addClass("oculto");
        // otras tareas
        ajustesResize();
        showSnackbar("Últimos valores globales aplicados");
    }, 0); 
}
// Borrado total, iniciales
// todos los cuadritos vuelven a sus formatos iniciales, borra todo
getBtnActualizar.onclick = function () {
    if (ocupado == true) {
        //sale si está ocupado
        return;
    }
    ocupado = true;
    //debe guardar los formatos y los id      
    lastAction = "actualizar";
    // filtro
    lastIndexFiltro = actualIndexFiltro;
    actualIndexFiltro = 0;
    getFiltro.selectedIndex = 0;
    var xsel = getFiltro.selectedIndex;
    var y = getFiltro.options;
    // sintaxis estándar
    getContenedor.style.filter = y[xsel].value;
    // Safari 6.0 - 9.0
    getContenedor.style.WebkitFilter = y[xsel].value;    
    lastTipoBordes = tipoBordes;
    tipoBordes = "solid"; // valor por defecto
    lastFactorAnchoBordes = factorAnchoBordes;
    factorAnchoBordes = 0.04; // es 4/100
    // tamaño es global, el factor acaba de definirse a su valor inicial
    anchoBordes = tamaño * factorAnchoBordes;
    lastArrayColor.length = 0;
    lastArrayColorBordes.length = 0;
    lastArrayRadio.length = 0;
    lastArrayID.length = 0;
    lastArrayOpacidad.length = 0;
    lastArraySombras.length = 0;
    lastArrayLienzo.length = 0;
    // muestra un loader...
    $(".loader").removeClass("oculto");
    setTimeout(function () {
        // código alta exigencia
        var i;
        //recorre todo el array y borra todos los cuadritos
        for (i = 0; i < getColumnas.length; i++) {
            //guardar los id y sus formatos al mismo tiempo que recorre los cuadritos y los actualiza
            lastArrayID[lastArrayID.length] = getColumnas[i].id;
            // tipo borde
            getColumnas[i].style.borderStyle = "solid";
            // ancho borde
            getColumnas[i].style.borderWidth = anchoBordes + "px";
            // color pixel
            lastArrayColor[lastArrayColor.length] = getColumnas[i].style.backgroundColor;
            getColumnas[i].style.backgroundColor = "#ffffff";
            // color borde
            lastArrayColorBordes[lastArrayColorBordes.length] = getColumnas[i].dataset.colorbordes;
            getColumnas[i].dataset.colorbordes = "#000000";
            getColumnas[i].style.borderColor = "#000000";
            // radio borde
            lastArrayRadio[lastArrayRadio.length] = getColumnas[i].dataset.radio;
            getColumnas[i].dataset.radio = "0%";
            getColumnas[i].style.MozBorderRadius = "0%";
            getColumnas[i].style.webkitBorderRadius = "0%";
            getColumnas[i].style.borderRadius = "0%";
            // opacidad
            lastArrayOpacidad[lastArrayOpacidad.length] = getColumnas[i].style.opacity;
            getColumnas[i].style.opacity = 1;
            // sombras
            lastArraySombras[lastArraySombras.length] = getColumnas[i].dataset.sombras;
            getColumnas[i].dataset.sombras = "s0000";
            // remueve todas las clases de sombras
            $(getColumnas[i]).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
            // agrega la clase actual de sombras
            $(getColumnas[i]).addClass("s0000");
            // color lienzo
            lastArrayLienzo[lastArrayLienzo.length] = getColumnas[i].dataset.colorlienzo;
            getColumnas[i].dataset.colorlienzo = "#ffffff";            
            $(getColumnas[i]).parent().css("background-color", "#ffffff");
        }
        // guarda las globales y las actualiza
        // color bordes
        lastColorBordesAplicado = colorBordesAplicado;
        colorBordesAplicado = "#000000";
        // radio borde
        lastRadioAplicado = radioAplicado;
        radioAplicado = "0%";
        // opacidad
        lastOpacidadAplicada = opacidadAplicada;
        opacidadAplicada = 1;
        // sombras
        lastSombrasAplicada = sombrasAplicada;
        sombrasAplicada = "s0000";
        // color lienzo
        lastColorLienzoAplicado = colorLienzoAplicado;
        colorLienzoAplicado = "#ffffff";
        // color pixel
        lastFondoAplicado = fondoAplicado;
        fondoAplicado = "#ffffff";
        // activa el botón deshacer
        estadoBtnDeshacer(true, "Deshacer borrar todo");
        ocupado = false;
        // oculta el loader
        $(".loader").addClass("oculto");
        // otras tareas
        ajustesResize();
        showSnackbar("Valores por defecto aplicados");
    }, 0); 
    
}
//aplica a todos los cuadros el relleno del color actual
// pues sí, es como cambiar el color de la hoja
getBtnRellenar.onclick = function () {
    if (ocupado == true) {
        //sale si está ocupado
        return;
    }
    ocupado = true;
    //debe guardar los colores y los id      
    lastAction = "rellenar";
    lastArrayColor.length = 0;
    lastArrayID.length = 0;
    // muestra un loader...
    $(".loader").removeClass("oculto");
    setTimeout(function () {
        // código alta exigencia        
        //recorre todo el array y les aplica el color actual a todos los cuadritos
        for (i = 0; i < getColumnas.length; i++) {
            //guardar los id y los colores al mismo tiempo que recorre los cuadritos
            // quitar los comentarios para aplicar solo a los visibles                        
            //if (window.getComputedStyle(getColumnas[i]).display === "inline-block") {
                lastArrayID[lastArrayID.length] = getColumnas[i].id;
                lastArrayColor[lastArrayColor.length] = getColumnas[i].style.backgroundColor;
                getColumnas[i].style.backgroundColor = colorActual;
            //}
        }
        lastFondoAplicado = fondoAplicado;
        fondoAplicado = colorActual;
        // historial de colorActual
        procesarHistorial(colorActual);
        // activa el botón deshacer
        estadoBtnDeshacer(true, "Deshacer relleno global");
        ocupado = false;
        // oculta el loader
        $(".loader").addClass("oculto");
        // otras tareas
        showSnackbar("Relleno global aplicado");
    }, 0);  
    
}
// para ajustar el ANCHO de los bordes
getBtnAnchoBordes.onclick = function () {    
    // define y muestra el modal de ancho bordes
    modalActual = "anchoBordes";
    //muestra el modal
    showModal();    
}
// para ajustar el radio de los bordes
getBtnRadioBordes.onclick = function () {
    if (modoActual == "radio") { 
        // está en modo radio, entonces se puede ajustar el valor
        modalActual = "radio"; 
        //muestra el modal
        showModal();
    } else {
        // pasa a modo radio
        cambiarModo("radio");
        // en modo radio se ve la respectiva flecha en el btn radio
    }    
}
// para ajustar la opacidad
getBtnOpacidad.onclick = function () {
    if (modoActual == "opacidad") {
        // está en modo opacidad, entonces se puede ajustar el valor
        modalActual = "opacidad";
        //muestra el modal
        showModal();
    } else {
        // pasa a modo opacidad
        cambiarModo("opacidad");
        // en modo opacidad se ve la respectiva flecha en el btn opacidad
    }
}
// para ajustar la opacidad
getBtnSombras.onclick = function () {
    if (modoActual == "sombras") {
        // está en modo sombras, entonces se puede ajustar el estilo
        modalActual = "sombras";
        //muestra el modal
        showModal();
    } else {
        // pasa a modo sombras
        cambiarModo("sombras");
        // en modo sombras se ve la respectiva flecha en el btn sombras
    }
}
// para definir tipo de borde
// incluido el tipo "none"
getBtnTipoBorde.onclick = function () {
    // define y muestra el modal de tipo de bordes
    modalActual = "tipoBordes";
    //muestra el modal
    showModal();    
}
// para cambiar el color de los bordes, individual o globalmente
getBtnColorRejilla.onclick = function () {
    if (modoActual == "colorBordes") {
        // está en modo colorBordes, entonces se puede decidir si se aplica global o no
        modalActual = "colorBordes";
        //muestra el modal
        showModal();
    } else {
        // pasa a modo colorBordes
        cambiarModo("colorBordes");
        // en este modo se ve la respectiva flecha en el btn
    }  
}
// cambia el color del lienzo
getBtnColorLienzo.onclick = function () {    
    if (modoActual == "lienzo") {
        // está en modo lienzo, entonces se puede ajustar el valor
        modalActual = "lienzo";
        //muestra el modal
        showModal();
    } else {
        // pasa a modo lienzo
        cambiarModo("lienzo");
        // en modo lienzo se ve la respectiva flecha en el btn lienzo
    }    
}

// deshace la última acción
getBtnDeshacer.onclick = function () {
    if (ocupado == true) {
        //sale si está ocupado
        return;
    }
    ocupado = true;
    var mensaje = "¡Hecho!";
    switch (lastAction) {
        case "filtrar":
            // deshace el filtro
            actualIndexFiltro = lastIndexFiltro;
            getFiltro.selectedIndex = lastIndexFiltro;
            var xsel = getFiltro.selectedIndex;
            var y = getFiltro.options;
            // sintaxis estándar
            getContenedor.style.filter = y[xsel].value;
            // Safari 6.0 - 9.0
            getContenedor.style.WebkitFilter = y[xsel].value;
            mensaje = "Se deshizo el filtro aplicado";
            break;        
        case "CambiarTipoBordes":
            mensaje = "Se deshizo el tipo de bordes";
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {                
                //obtiene un array con todos los de la clase columna
                // getColumnas                
                var i;
                // restaura la variable global
                tipoBordes = lastTipoBordes;                
                //recorre todo el array y les aplica el ancho del borde         
                for (i = 0; i < getColumnas.length; i++) {
                    getColumnas[i].style.borderStyle = tipoBordes;
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas

            }, 0);  
            break;
        case "CambiarAnchoBordes":
            mensaje = "Se deshizo el ancho de los bordes";
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia
                //obtiene un array con todos los de la clase columna
                // getColumnas
                //var x = document.getElementsByClassName("columna");
                var i;
                // restaura el factor
                factorAnchoBordes = lastFactorAnchoBordes;
                // define el ancho nuevamente
                anchoBordes = tamaño * factorAnchoBordes;
                //recorre todo el array y les aplica el ancho del borde         
                for (i = 0; i < getColumnas.length; i++) {
                    getColumnas[i].style.borderWidth = anchoBordes + "px";
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas

            }, 0);  
            break;
        case "CambiarSombrasGlobal":
            mensaje = "Se deshizo cambio de sombras global";
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia
                var i;
                var miElemSombras;
                var miLastSombras;
                // restaura el global
                sombrasAplicada = lastSombrasAplicada;
                //recorre todo el array y les aplica el estilo de sombras guardado         
                for (i = 0; i < lastArrayID.length; i++) {
                    miElemSombras = document.getElementById(lastArrayID[i]);
                    miLastSombras = lastArraySombras[i];
                    miElemSombras.dataset.sombras = miLastSombras;                    
                    // remueve todas las clases de sombras
                    $(miElemSombras).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
                    // agrega la clase actual de sombras
                    $(miElemSombras).addClass(miLastSombras);           
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas

            }, 0);
            break;
        case "CambiarSombrasCelda":
            var miElemSombras = document.getElementById(lastID);
            // vuelve al estilo de sombras anterior el cuadrito que cambió            
            miElemSombras.dataset.sombras = lastSombras;            
            // remueve todas las clases de sombras
            $(miElemSombras).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
            // agrega la clase actual de sombras
            $(miElemSombras).addClass(lastSombras);
            mensaje = "Se deshizo estilo de sombras";
            break;
        case "CambiarRadioBordesGlobal":
            mensaje = "Se deshizo cambio de radio de bordes global";
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia                
                var i;
                var miElemRadio;
                var miLastRadio;
                // restaura el global aplicado
                radioAplicado = lastRadioAplicado;
                //recorre todo el array y les aplica el estilo de radio borde guardado         
                for (i = 0; i < lastArrayID.length; i++) {
                    miElemRadio = document.getElementById(lastArrayID[i]);
                    miLastRadio = lastArrayRadio[i];
                    miElemRadio.dataset.radio = miLastRadio;
                    miElemRadio.style.MozBorderRadius = miLastRadio;
                    miElemRadio.style.webkitBorderRadius = miLastRadio;
                    miElemRadio.style.borderRadius = miLastRadio;
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas

            }, 0);  
            break;
        case "CambiarRadioBordesCelda":
            var miElemRadio = document.getElementById(lastID);
            // vuelve al radio anterior el cuadrito que cambió            
            miElemRadio.dataset.radio = lastRadioBorde;
            miElemRadio.style.MozBorderRadius = lastRadioBorde;
            miElemRadio.style.webkitBorderRadius = lastRadioBorde;
            miElemRadio.style.borderRadius = lastRadioBorde;
            mensaje = "Se deshizo radio de bordes";
            break;
        case "pintar":
            // deshace lo pintado
            document.getElementById(lastID).style.backgroundColor = lastColor;
            mensaje = "Se deshizo la pincelada";
            break;
        case "CambiarOpacidadIndividual":
            // deshace la opacidad
            document.getElementById(lastID).style.opacity = lastOpacidad;
            mensaje = "Se deshizo la opacidad";
            break;
        case "CambiarOpacidadGlobal":
            // deshace la opacidad de todos los afectados
            mensaje = "Se deshizo cambio de opacidad global";
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia                
                var i;
                var miElemOpacidad;
                var miLastOpacidad;
                // restaura el valor global aplicado
                opacidadAplicada = lastOpacidadAplicada;
                //recorre todo el array y les aplica la opacidad guardada
                for (i = 0; i < lastArrayID.length; i++) {
                    miElemOpacidad = document.getElementById(lastArrayID[i]);
                    miLastOpacidad = lastArrayOpacidad[i]; 
                    miElemOpacidad.style.opacity = miLastOpacidad;
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas

            }, 0);  
            break;
        case "borrar":
            // deshace el borrado según la acción específica realizada
            switch (lastFormatoBorrado) {
                case "colorPixel":
                    document.getElementById(lastID).style.backgroundColor = lastColor;                                   
                    break;
                case "colorLienzo":
                    var tempFormat = lastColorLienzo;
                    var miCuadrito = document.getElementById(lastID);
                    // restaura el dataset
                    miCuadrito.dataset.colorlienzo = tempFormat;
                    // cambia el color del lienzo            
                    $(miCuadrito).parent().addClass("resaltadoLienzo");            
                    $(miCuadrito).parent().css("background-color", tempFormat);
                    timerResaltarDeshacer = setTimeout(function () {
                        $(miCuadrito).parent().removeClass("resaltadoLienzo");
                    }, 400);
                    break;
                case "colorBordes":
                    // deshace el color de bordes de la celda
                    var miCuadrito = document.getElementById(lastID);
                    miCuadrito.style.borderColor = lastColorRejilla;
                    miCuadrito.dataset.colorbordes = lastColorRejilla;
                    break;
                case "radioBordes":
                    var miElemRadio = document.getElementById(lastID);
                    // vuelve al radio anterior el cuadrito que cambió            
                    miElemRadio.dataset.radio = lastRadioBorde;
                    miElemRadio.style.MozBorderRadius = lastRadioBorde;
                    miElemRadio.style.webkitBorderRadius = lastRadioBorde;
                    miElemRadio.style.borderRadius = lastRadioBorde;
                    break;
                case "opacidad":
                    // deshace la opacidad
                    document.getElementById(lastID).style.opacity = lastOpacidad;
                    break;
                case "sombras":
                    var miElemSombras = document.getElementById(lastID);
                    // vuelve al estilo de sombras anterior el cuadrito que cambió            
                    miElemSombras.dataset.sombras = lastSombras;            
                    // remueve todas las clases de sombras
                    $(miElemSombras).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
                    // agrega la clase actual de sombras
                    $(miElemSombras).addClass(lastSombras);
                    break;
                case "todo":
                    // restaura todos los formatos borrados
                    // referencia el elemento
                    var miCuadrito = document.getElementById(lastID);                    
                    // color pixel
                    miCuadrito.style.backgroundColor = lastColor;
                    // color lienzo
                    miCuadrito.dataset.colorlienzo = lastColorLienzo;
                    $(miCuadrito).parent().addClass("resaltadoLienzo");            
                    $(miCuadrito).parent().css("background-color", lastColorLienzo);
                    timerResaltarDeshacer = setTimeout(function () {
                        $(miCuadrito).parent().removeClass("resaltadoLienzo");
                    }, 400);
                    // color bordes
                    miCuadrito.style.borderColor = lastColorRejilla;
                    miCuadrito.dataset.colorbordes = lastColorRejilla;
                    // radio bordes
                    miCuadrito.dataset.radio = lastRadioBorde;
                    miCuadrito.style.MozBorderRadius = lastRadioBorde;
                    miCuadrito.style.webkitBorderRadius = lastRadioBorde;
                    miCuadrito.style.borderRadius = lastRadioBorde;
                    // opacidad
                    miCuadrito.style.opacity = lastOpacidad;
                    // sombras
                    miCuadrito.dataset.sombras = lastSombras;            
                    // remueve todas las clases de sombras
                    $(miCuadrito).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
                    // agrega la clase actual de sombras
                    $(miCuadrito).addClass(lastSombras);
                    break;    
            }
            // informa
            mensaje = "Se deshizo el borrado (" + formatoBorradoComoTexto(formatoBorrado) + ")";
            break;
        case "rellenar":
            mensaje = "Se deshizo el relleno global";
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia
                // deshace el relleno
                fondoAplicado = lastFondoAplicado;
                var i;
                //recorre los array y les aplica el color guardado
                for (i = 0; i < lastArrayID.length; i++) {
                    document.getElementById(lastArrayID[i]).style.backgroundColor = lastArrayColor[i];
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas

            }, 0);  
            break;
        case "reemplazar":
            mensaje = "Se deshizo el reemplazo de color";
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia
                // deshace el reemplazo                
                var i;
                //recorre los array y aplica el color guardado
                for (i = 0; i < lastArrayID.length; i++) {
                    document.getElementById(lastArrayID[i]).style.backgroundColor = lastArrayColor[i];
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas

            }, 0);
            break;
        case "libre":
            // muestra un loader...
            $(".loader").removeClass("oculto");
            mensaje = "Se deshicieron los cambios del modo libre";
            setTimeout(function () {
                // código alta exigencia
                // deshace cualquier cambio de color            
                var i;
                //recorre los array y les aplica el color guardado
                for (i = 0; i < lastArrayID.length; i++) {
                    document.getElementById(lastArrayID[i]).style.backgroundColor = lastArrayColor[i];
                }                
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas

            }, 0);  
            
            break;
        case "cambiarColorLienzo":
            // deshace el color aplicado
            colorLienzo = lastColorLienzo;
            var miCuadrito = document.getElementById(lastID);
            // restaura el dataset
            miCuadrito.dataset.colorlienzo = colorLienzo;
            // cambia el color del lienzo            
            $(miCuadrito).parent().addClass("resaltadoLienzo");            
            $(miCuadrito).parent().css("background-color", colorLienzo);
            timerResaltarDeshacer = setTimeout(function () {
                $(miCuadrito).parent().removeClass("resaltadoLienzo");
            }, 400);
            mensaje = "Se deshizo el color del lienzo de la celda";
            break;
        case "CambiarColorLienzoGlobal":
            // deshace el color aplicado globalmente            
            var i; 
            var colorLienzoAnterior;
            var idLienzoAnterior;
            // restaura el global aplicado
            colorLienzoAplicado = lastColorLienzoAplicado;
            // una pequeña animación con la opacidad
            //$(getContenedor).animate({ opacity: "0.2" }, 200);
            //getContenedor.style.opacity = "0";
            //recorre todo el array y les aplica el color de lienzo guardado   
            // muestra un loader...
            $(".loader").removeClass("oculto");
            mensaje = "Se deshizo el color del lienzo global";
            setTimeout(function () {
                var miCuadrito;
                for (i = 0; i < lastArrayID.length; i++) {
                    colorLienzoAnterior = lastArrayLienzo[i];
                    idLienzoAnterior = lastArrayID[i];
                    miCuadrito = document.getElementById(idLienzoAnterior);
                    miCuadrito.dataset.colorlienzo = colorLienzoAnterior;
                    $(miCuadrito).parent().css("background-color", colorLienzoAnterior);
                } 
               
                // oculta el loader
                $(".loader").addClass("oculto");
                // el resto de la animación
                //$(getContenedor).animate({ opacity: "1" }, 1000);
                //getContenedor.style.opacity = "1";
            }, 0);
            
            break;
        case "cambiarColorRejillaIndividual":
            // deshace el color de bordes de la celda
            var miCuadrito = document.getElementById(lastID);
            miCuadrito.style.borderColor = lastColorRejilla;
            miCuadrito.dataset.colorbordes = lastColorRejilla;
            mensaje = "Se deshizo el color de bordes";
            break;
        case "cambiarColorRejillaGlobal":
            // deshace el color de la rejilla de todos los pixeles
            mensaje = "Se deshizo el color global de los bordes";
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {                
                var i;
                var miElemColorBordes;
                var miLastColorBordes;
                // restaura el global
                colorBordesAplicado = lastColorBordesAplicado;
                //recorre todo el array y les aplica el estilo de borde
                for (i = 0; i < lastArrayID.length; i++) {
                    miElemColorBordes = document.getElementById(lastArrayID[i]);
                    miLastColorBordes = lastArrayColorBordes[i];
                    miElemColorBordes.dataset.colorbordes = miLastColorBordes;                    
                    miElemColorBordes.style.borderColor = miLastColorBordes;
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas

            }, 0); 
            break;
        case "dimensionar":
            // muestra un loader...
            $(".loader").removeClass("oculto");
            mensaje = "Se deshizo el dimensionado";
            setTimeout(function () {
                // código alta exigencia
                // deshace el ajuste de filas y columnas
                //fondoAplicado = lastFondoAplicado;
                numFilas = lastNumFilas;
                numColumnas = lastNumColumnas;
                permitirEvento = false;
                getSelectFilas.selectedIndex = numFilas - 1;
                getSelectColumnas.selectedIndex = numColumnas - 1;

                var miID;
                var miElemDim;
                var miFila;
                var miColumna;
                // visibilidad de rótulos
                // recorre los rótulos y muestra solo los necesarios
                // los de las filas
                for (miFila = 0; miFila <= MAXNUMFILAS; miFila++) {            
                    //construye el id del rótulo, row variable y col 0
                    miID = "r" + miFila + "c0";                
                    // referencia al rótulo para optimizar
                    miElemDim = document.getElementById(miID);
                    //si está dentro del tamaño especificado hace visible el rótulo
                    // y si no, lo oculta            
                    if (miFila <= numFilas) {
                        // visible                    
                        $(miElemDim).removeClass("oculto");                    
                    } else {
                        // oculto
                        $(miElemDim).addClass("oculto"); 
                    }
                }
                // los de las columnas
                for (miColumna = 0; miColumna <= MAXNUMCOLUMNAS; miColumna++) {            
                    //construye el id del rótulo, row 0 y col variable
                    miID = "r0" + "c" + miColumna;                
                    // referencia al rótulo para optimizar
                    miElemDim = document.getElementById(miID);
                    //si está dentro del tamaño especificado hace visible el rótulo
                    // y si no, lo oculta            
                    if (miColumna <= numColumnas) {
                        // visible                    
                        $(miElemDim).removeClass("oculto");                    
                    } else {
                        // oculto
                        $(miElemDim).addClass("oculto"); 
                    }
                }
                // visibilidad de pixeles, clase columna
                for (miFila = 1; miFila <= MAXNUMFILAS; miFila++) {
                    for (miColumna = 1; miColumna <= MAXNUMCOLUMNAS; miColumna++) {
                        //construye el id
                        miID = "f" + miFila + "c" + miColumna;
                        miElemDim = document.getElementById(miID); // referencia para optimizar
                        //si está dentro del tamaño especificado lo hace visible
                        // y si no, lo oculta            
                        if (miFila <= numFilas && miColumna <= numColumnas) {
                            // visible
                            miElemDim.style.display = "inline-block";
                            //$("[id = " + miID + "]").removeClass("oculto");
                        } else {
                            // no visible
                            miElemDim.style.display = "none";
                            //$("[id = " + miID + "]").addClass("oculto");
                        }
                    }
                }
                var miLastRadio;
                var miLastColorBordes;
                var miLastOpacidad;
                var miLastSombras;
                var miLastColorLienzo;
                //recorre los array y les aplica el color, el radio, el color de borde, la opacidad, las sombras... guardado
                for (i = 0; i < lastArrayID.length; i++) {
                    // usa la misma variable, pero diferentes referencias a las del for anterior
                    miElemDim = document.getElementById(lastArrayID[i]);
                    // color fondo
                    miElemDim.style.backgroundColor = lastArrayColor[i];
                    // el radio
                    miLastRadio = lastArrayRadio[i];
                    miElemDim.dataset.radio = miLastRadio;
                    miElemDim.style.MozBorderRadius = miLastRadio;
                    miElemDim.style.webkitBorderRadius = miLastRadio;
                    miElemDim.style.borderRadius = miLastRadio;
                    // color borde
                    miLastColorBordes = lastArrayColorBordes[i];
                    miElemDim.dataset.colorbordes = miLastColorBordes;
                    miElemDim.style.borderColor = miLastColorBordes;
                    // opacidad
                    miLastOpacidad = lastArrayOpacidad[i];
                    miElemDim.style.opacity = miLastOpacidad;
                    // las sombras
                    miLastSombras = lastArraySombras[i];
                    miElemDim.dataset.sombras = miLastSombras;
                    // remueve todas las clases de sombras
                    $(miElemDim).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
                    // agrega la clase actual de sombras
                    $(miElemDim).addClass(miLastSombras); 
                    // el color del lienzo
                    miLastColorLienzo = lastArrayLienzo[i];
                    miElemDim.dataset.colorlienzo = miLastColorLienzo;
                    $(miElemDim).parent().css("background-color", miLastColorLienzo);
                }
                //ajusta el contenedor de los cuadritos
                if (mostrarEtiquetas == true) {
                    var anchoCont = tamaño * (1 + numColumnas);
                } else {
                    var anchoCont = tamaño * numColumnas;
                }
                // n VECES EL ANCHO DE UN CUADRITO... más el rótulo
                //PERO OJO QUE maxWidth DEL CONTENEDOR ES 90%, NUNCA DESBORDA PANTALLA.
                getContenedor.style.width = anchoCont + "px";
                permitirEvento = true;
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas

            }, 0);              
            
            break;
        case "actualizar":
            // deshace el limpiado total            
            mensaje = "Se deshizo el borrado total";
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia
                // filtro
                actualIndexFiltro = lastIndexFiltro;
                getFiltro.selectedIndex = actualIndexFiltro;
                var xsel = getFiltro.selectedIndex;
                var y = getFiltro.options;
                // sintaxis estándar
                getContenedor.style.filter = y[xsel].value;
                // Safari 6.0 - 9.0
                getContenedor.style.WebkitFilter = y[xsel].value;
                fondoAplicado = lastFondoAplicado;
                colorBordesAplicado = lastColorBordesAplicado;
                radioAplicado = lastRadioAplicado;
                opacidadAplicada = lastOpacidadAplicada;
                sombrasAplicada = lastSombrasAplicada;
                colorLienzoAplicado = lastColorLienzoAplicado;
                tipoBordes = lastTipoBordes;
                factorAnchoBordes = lastFactorAnchoBordes;
                anchoBordes = tamaño * factorAnchoBordes; // tamaño es global, el factor fue restaurado
                var i;
                var miElem;
                var miLastColorBordes;
                var miLastRadio;
                var miLastOpacidad;
                var miLastSombras;
                var colorLienzoAnterior;
                //recorre los array y les aplica el formato guardado
                for (i = 0; i < lastArrayID.length; i++) {
                    // referencia al elemento
                    miElem = document.getElementById(lastArrayID[i]);
                    // tipo borde
                    miElem.style.borderStyle = tipoBordes;
                    // ancho borde
                    miElem.style.borderWidth = anchoBordes + "px";
                    // color pixel
                    miElem.style.backgroundColor = lastArrayColor[i];
                    // color borde
                    miLastColorBordes = lastArrayColorBordes[i];
                    miElem.dataset.colorbordes = miLastColorBordes;
                    miElem.style.borderColor = miLastColorBordes;
                    // radio borde
                    miLastRadio = lastArrayRadio[i];
                    miElem.dataset.radio = miLastRadio;
                    miElem.style.MozBorderRadius = miLastRadio;
                    miElem.style.webkitBorderRadius = miLastRadio;
                    miElem.style.borderRadius = miLastRadio;
                    // opacidad
                    miLastOpacidad = lastArrayOpacidad[i];
                    miElem.style.opacity = miLastOpacidad;
                    // sombras
                    miLastSombras = lastArraySombras[i];
                    miElem.dataset.sombras = miLastSombras;
                    // remueve todas las clases de sombras
                    $(miElem).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
                    // agrega la clase actual de sombras
                    $(miElem).addClass(miLastSombras);    
                    // color lienzo
                    colorLienzoAnterior = lastArrayLienzo[i];
                    miElem.dataset.colorlienzo = colorLienzoAnterior;
                    $(miElem).parent().css("background-color", colorLienzoAnterior);
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas
                ajustesResize();
            }, 0);  
            break;
        case "borradoGlobal":
            // deshace el limpiado total            
            mensaje = "Se deshizo el borrado total";
            // muestra un loader...
            $(".loader").removeClass("oculto");
            setTimeout(function () {
                // código alta exigencia
                var i;
                var miElem;
                var miLastColorBordes;
                var miLastRadio;
                var miLastOpacidad;
                var miLastSombras;
                var colorLienzoAnterior;
                //recorre los array y les aplica el formato guardado
                for (i = 0; i < lastArrayID.length; i++) {
                    // referencia al elemento
                    miElem = document.getElementById(lastArrayID[i]);                    
                    // color pixel
                    miElem.style.backgroundColor = lastArrayColor[i];
                    // color borde
                    miLastColorBordes = lastArrayColorBordes[i];
                    miElem.dataset.colorbordes = miLastColorBordes;
                    miElem.style.borderColor = miLastColorBordes;
                    // radio borde
                    miLastRadio = lastArrayRadio[i];
                    miElem.dataset.radio = miLastRadio;
                    miElem.style.MozBorderRadius = miLastRadio;
                    miElem.style.webkitBorderRadius = miLastRadio;
                    miElem.style.borderRadius = miLastRadio;
                    // opacidad
                    miLastOpacidad = lastArrayOpacidad[i];
                    miElem.style.opacity = miLastOpacidad;
                    // sombras
                    miLastSombras = lastArraySombras[i];
                    miElem.dataset.sombras = miLastSombras;
                    // remueve todas las clases de sombras
                    $(miElem).removeClass("s0000 s1000 s0100 s0010 s0001 s1001 s1100 s0110 s0011");
                    // agrega la clase actual de sombras
                    $(miElem).addClass(miLastSombras);
                    // color lienzo
                    colorLienzoAnterior = lastArrayLienzo[i];
                    miElem.dataset.colorlienzo = colorLienzoAnterior;
                    $(miElem).parent().css("background-color", colorLienzoAnterior);
                }
                // oculta el loader
                $(".loader").addClass("oculto");
                // otras tareas
                ajustesResize();
            }, 0);
            break;
        case "rellenarSelectivo":
            var i;
            //recorre los array y les aplica el color guardado
            for (i = 0; i < lastArrayID.length; i++) {
                document.getElementById(lastArrayID[i]).style.backgroundColor = lastArrayColor[i];
            }
            mensaje = "Se deshizo el relleno selectivo";
            break;
        default:
            mensaje = "No se pudo deshacer";
    }
    // informa
    showSnackbar(mensaje);
    showInfoTemporal();
    // desactiva el btn deshacer, solo se puede hacer una vez
    estadoBtnDeshacer(false);
    ocupado = false;
}

// aumenta el tamaño de todos los cuadritos
document.getElementById("BtnAumentar").onclick = function () {
    ajustarTamaño(1, true, true);
}
// disminuye el tamaño de todos los cuadritos
document.getElementById("BtnDisminuir").onclick = function () {
    ajustarTamaño(-1, true, true);
}
// ajusta rápidamente el tamaño de todos los cuadritos
document.getElementById("BtnSetZoom").onclick = function () {
    modalActual = "zoom";
    //muestra el modal
    showModal();
}
// imprime
getBtnImprimir.onclick = function () {
    imprimir();
}
function imprimir() {
    //para permitir transiciones espera un poco...
    showSnackbar("Optimizando impresión...");
    setTimeout(nowImprime, 2000);
}
function nowImprime() {
    window.print();
}
// PARA EL SNACKBAR
//****************

// Get the snackbar DIV
var sBar = document.getElementById("snackbar");
// también se usa en esta web getPie
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
        // ya no es una distracción
        $(getPie).addClass("parpadea");
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
    // evita una distracción
    $(getPie).removeClass("parpadea");
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
// script para cambiar ícono en modo borrador
var icoInterval;
function alternarIcoBorrador() {
    if (getIcoBtnBorrador.className == "fas fa-eraser") {
        getIcoBtnBorrador.className = claseIcoBorrado;
    } else {
        getIcoBtnBorrador.className = "fas fa-eraser";
    }    
}
// fin ico borrador

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

// FUNCIÓN QUE muestra el infoTemporal
var timerCerrarTemporal = 0;
var timerMostrarTemporal = 0;
var timerOpacAumTemporal = 0;
var timerOpacDismTemporal = 0;

function showInfoTemporal() {
    // empieza siempre de cero
    clearTimeout(timerCerrarTemporal);
    clearTimeout(timerMostrarTemporal); 
    clearTimeout(timerOpacAumTemporal);
    clearTimeout(timerOpacDismTemporal);
    // una referencia al elemento, ya es global
    //var infoTemp = document.getElementById("infoTemporal");
    infoTemp.style.display = "none";
    infoTemp.style.opacity = "0";   
    // ahora sí... lo muestra 
    timerMostrarTemporal = setTimeout(function () {  
        infoTemp.style.display = "block";
        // lo posiciona
        infoTemp.style.marginLeft = -infoTemp.offsetWidth / 2 + "px";
        infoTemp.style.top = 40 + getPaletaArriba.offsetHeight + "px";        
    }, 500);
    // opacidad 1 para que se vea, css transition 0.5 seg
    timerOpacAumTemporal = setTimeout(function () {
        infoTemp.style.opacity = "1";
    }, 520); 
    // opacidad 0 para que se empiece a ocultar
    timerOpacDismTemporal = setTimeout(function () {
        infoTemp.style.opacity = "0";
    }, 3020);
    // lo cierra
    timerCerrarTemporal = setTimeout(function () {
        infoTemp.style.display = "none";        
    }, 3520);  
}
//***********************************
// FUNCIÓN QUE ajusta todo si está desocupado
function intentaAjustar() {
    if (ocupado == true) {
        return;
    }
    // llama a los ajustes
    ajustesResize();
}
// ajuste permanente de tamaños
setInterval("intentaAjustar()", 1000);
// anima el btn historial
setInterval("animarBtnHistorial()", 2000);
// scroll
topFunction();
// dasactiva el botón deshacer, no se ha hecho nada
// nota que la primera vez que se llama dimensionar se activa, pero aquí se desactiva para que sea su estado inicial
estadoBtnDeshacer(false);