//color inicial del pincel es negro
var colorActual = "#000000";
var colorRejilla = "#000000";
var usarBordes = true;
var fondoAplicado = "#ffffff";
var colorLienzo = "#000000"
var radioBorde = 0;
// modal: radio, rgb, gallery, importar, exportar, filas, columnas
var modalActual = "ninguno";
// recuerda el scroll y lo restaura al cerrar el modal
var miBodyScroll;
var miDocumentScroll;
//para guardar la última acción
var lastRadioBorde = 0;
var lastAction;
var lastIndexFiltro;
var actualIndexFiltro;
var lastColor;
var lastID;
var lastArrayID = [];
var lastArrayColor = [];
var lastFondoAplicado;
var lastColorLienzo;
var lastColorRejilla;
var lastNumColumnas;
var lastNumFilas;
var lastModo = "pincel";
// modos: pincel, borrador, relleno, extraer, libre
var modoActual = "pincel";
// es como un modo, pero se gestiona diferente
var pantallaCompleta = false;
var timerCursor = 0;
var timerResaltar = 0;
var timerHistorial = 0;
var tamaño = 20;
var MAXSIZE = 100;
var MINSIZE = 4;
var anchoBordes;
var ocupado = false;
var hexTemp = "#000000";
var rgbTemp = "rgb(0, 0, 0)";
var miR = 0;
var miG = 0;
var miB = 0;
var hexValues = [];
var decValues = [];
var i;
//var str = "";
for (i = 0; i <= 255; i++) {
    decValues[i] = Number(i);
    hexValues[i] = i.toString(16).toLowerCase();
    if (hexValues[i].length < 2) {
        hexValues[i] = "0" + hexValues[i];
    }
    //str = str + hexValues[i] + " - ";
}
//alert("0 - 255:   " + str);
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
// anima el botón de historial color
var idAnimarHistorial = 0;
function animarBtnHistorial() {
    if (arrayColoresUsados.length == 0) {
        return;
    }    
    if (idAnimarHistorial > arrayColoresUsados.length - 1) {
        idAnimarHistorial = 0;
    }
    document.getElementById("rellenoHistorial").style.backgroundColor = arrayColoresUsados[idAnimarHistorial];
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
document.getElementById("BtnPincel").style.border = "3px solid #009900";
// indica que zoom + es el modo preteterminado en pantalla completa
var zoomIn = true;
document.getElementById("BtnAumentarFull").style.border = "3px solid #009900";
document.getElementById("BtnDisminuirFull").style.border = "3px solid #666699";
// en el modo pincel no están estos
document.getElementById("BtnAceptarLibre").style.display = "none";
document.getElementById("BtnCancelarLibre").style.display = "none";
// el relleno inicial es negro
document.getElementById("relleno").style.backgroundColor = "#000000";
// la propiedad color de ciertos íconos es negra por defecto, desde css
//el primer botón del historial es blanco
// solo si es agregado en html
//document.getElementById("BtnColor0").style.color = "#ffffff";
// el estilo de borde del botón rejilla
document.getElementById("BtnRejilla").style.border = "3px double #ffffff";
// radio por defecto es cero
document.getElementById("rangoRadioBordes").value = 0;
document.getElementById("muestraRadio").style.borderRadius = "0%";
document.getElementById("relleno").style.borderRadius = "0%";
document.getElementById("rellenoHistorial").style.borderRadius = "0%";

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
    var element = document.getElementById("pantalla");

    if (element.requestFullScreen) {
        element.requestFullScreen();
    } else if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
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
//el input range del radio de los bordes y sus botones debajo
var sliderRadio = document.getElementById("rangoRadioBordes");
var getCuadro = document.getElementById("icoCuadro");
var getCírculo = document.getElementById("icoCírculo");
getCuadro.onclick = function () {
    // cero radio                   
    sliderRadio.value = 0;
    document.getElementById("muestraRadio").style.borderRadius = 0 + "%";
}
getCírculo.onclick = function () {
    // 50% radio                   
    sliderRadio.value = 50;
    document.getElementById("muestraRadio").style.borderRadius = 50 + "%";
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
    document.getElementById("muestraRadio").style.borderRadius = nuevo + "%";
}
var timerRGB;
// ajustes rgb según los slider
// requiere función validaComponenteRGB(idActual, idSincronizar, fuenteRoja)
function actualizaRGB(componente) {
    // variables globales miR miG miB ya tienen valores válidos
    // pueden cambiar desde los rangos o los number
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
// ajustes según la disponibilidad de deshacer
function estadoBtnDeshacer(activar) {
    if (activar == true) {
        // activa el botón deshacer
        document.getElementById("BtnDeshacer").disabled = false;
        document.getElementById("BtnDeshacer").style.opacity = "1";
        document.getElementById("BtnDeshacer").style.cursor = "pointer";
    } else {
        // dasactiva el botón deshacer
        // porque solo se puede deshacer una sola vez
        document.getElementById("BtnDeshacer").disabled = true;
        document.getElementById("BtnDeshacer").style.opacity = "0.5";
        document.getElementById("BtnDeshacer").style.cursor = "not-allowed";
    }
}
function alturaModal() {
    var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;
    var bd = document.getElementById("modalBody");
    var ft = document.getElementById("modalFooter");
    var hd = document.getElementById("modalHeader");
    // mejor define altura descontando título y footer.
    h = 0.82 * (h - 30 - hd.scrollHeight - ft.scrollHeight);
    bd.style.height = h + "px";
}
// ajustes según el tamaño de la pantalla
function ajustesResize() {    
    // el top del historial 
    document.getElementById("BtnCerrarHistorial").style.top = 0 + document.getElementById("paletaArriba").offsetHeight + "px";
    document.getElementById("paletaHistorial").style.top = 0 + document.getElementById("paletaArriba").offsetHeight + document.getElementById("BtnCerrarHistorial").offsetHeight + "px";
    document.getElementById("paletaHistorial").style.bottom = 0 + document.getElementById("paletaAbajo").offsetHeight + "px";
    if (pantallaCompleta == true) {
        var h = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;
        $("#contenedor").css("margin", "0px");
        var margenArribaCont = h - document.getElementById("contenedor").offsetHeight;
        margenArribaCont = margenArribaCont / 2;
        if (isNaN(margenArribaCont) == true || margenArribaCont < 0) {
            margenArribaCont = 0;
        }
        $("#contenedor").css("margin-top", margenArribaCont + "px");
        $("#contenedor").css("max-width", "98%");        
    } else {
        var margenArribaCont = 8 + document.getElementById("paletaArriba").offsetHeight;
        $(".contenedor").css("margin", "0px");
        $(".contenedor").css("margin-top", margenArribaCont + "px");
        $("#contenedor").css("max-width", "88%");        
        var espacioPie = 12 + document.getElementById("paletaAbajo").offsetHeight;
        $("#pie").css("margin-bottom", espacioPie + "px");

    }
    if (modalActual != "ninguno") {
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
        if (modalActual == "rgb") { 
            
            // para definir margenes y centrar los elementos flotantes
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
            // compara las alturas
            //var mayor;
            //var alturaNumber = document.getElementsByClassName("number-rgb-container")[0].offsetHeight;
            //var alturaRango = document.getElementById("rangoR").offsetHeight;
            //if (alturaNumber >= alturaRango) {
                //mayor = alturaNumber;
            //} else {
                //mayor = alturaRango;
            //}
            // le agrega los espacios necesarios
            //mayor = 24 + mayor;
            // ajusta altura de los contenedores
            //$(".contenedor-rgb-color").css("height", mayor);
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
            //showSnackbar("m " + marg + " m ran " + margRango + " f " + $('.number-rgb-container').css("float"));
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
    var x = document.getElementById("filtro").selectedIndex;
    var y = document.getElementById("filtro").options;
    // guarda
    lastAction = "filtrar";
    lastIndexFiltro = actualIndexFiltro;
    actualIndexFiltro = document.getElementById("filtro").selectedIndex;
    // sintaxis estándar
    document.getElementById("contenedor").style.filter = y[x].value;
    // Safari 6.0 - 9.0
    document.getElementById("contenedor").style.WebkitFilter = y[x].value;
    // activa el botón deshacer
    estadoBtnDeshacer(true);
}

//para el modal
// Get the modal , múltiples usos
var modal = document.getElementById('myModal');
// Get the <span> element that closes the modal 
var span = document.getElementsByClassName("close")[0];
// para cerrar el modal y controlar el actual
function cerrarModal() {
    modalActual = "ninguno";
    modal.style.display = "none";
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
    document.getElementById("colorPixel").value = hexTemp;
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
// depende de modalActual/
function aceptarModal() {
    switch (modalActual) {
        case "radio":
            // guarda para poder deshacer
            lastRadioBorde = radioBorde;
            lastAction = "CambiarRadioBordes";
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
            radioBorde = nuevo;
            //obtiene un array con todos los de la clase columna
            var x = document.getElementsByClassName("columna");
            var i;
            //recorre todo el array y les aplica el estilo de borde
            for (i = 0; i < x.length; i++) {
                x[i].style.borderRadius = radioBorde + "%";
            }
            // floritura, lo aplica al relleno junto al tanque y el multicolor
            document.getElementById("relleno").style.borderRadius = radioBorde + "%";
            document.getElementById("rellenoHistorial").style.borderRadius = radioBorde + "%";
            showSnackbar("Radio bordes: " + radioBorde + " %");
            // puede deshacer
            estadoBtnDeshacer(true);
            break;
        case "rgb":
            // actualiza el color actual según el rgb seleccionado
            // asigna el valor hexadecimal al input color
            document.getElementById("colorPixel").value = hexTemp;
            // para otras actualizaciones
            colorPixel();
            break;
        case "hex":
            aceptarModalHex();
            break;
        case "gallery":
            // actualiza el color actual según el elemento de la galería seleccionado
            // asigna el valor hexadecimal al input color
            document.getElementById("colorPixel").value = hexTemp;
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
    //muestra el modal    
    modal.style.display = "block";
    //define su altura    
    alturaModal();
    // scroll
    document.getElementById("modalBody").scrollTop = 0;
    // OCULTA TODOS LOS MARCOS
    $(".marco").css("display", "none");
    // ahora hace ajustes iniciales según su uso
    // por defecto visible
    $("#infoModal").css("display", "block");
    switch (modalActual) {
        case "radio":
            $("#marcoRadio").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='far fa-circle'></i> Radio del borde";
            document.getElementById("spanInfoModal").innerHTML = "Use el control para ajustar el radio de los bordes";
            sliderRadio.value = radioBorde;
            document.getElementById("muestraRadio").style.borderRadius = radioBorde + "%";
            break;
        case "rgb":
            $("#marcoRGB").css("display", "block");
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-palette'></i> RGB: <i id = 'icoMuestraRGB' class='fas fa-square'></i>";
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
            // sí lleva info
            document.getElementById("spanInfoModal").innerHTML = "Aquí puede elegir entre 140 colores, organizados en 11 grupos del estándar HTML. Puede buscar los colores por su nombre en inglés y español.";
            // título
            document.getElementById("modalTitle").innerHTML = "<i class='fas fa-grip-horizontal'></i> Galería: <i id = 'icoMuestraGallery' class='fas fa-square'></i>";
            // inicialmente hex es el color actual
            hexTemp = colorActual;
            // SE MUESTRA EL COLOR ACTUAL EN RGB Y HEX
            document.getElementById("infoColor").innerHTML = document.getElementById("relleno").style.backgroundColor + " - " + colorActual;
            // el detalle en cada panel es spanInfoColorSel
            $(".spanInfoColorSel").html("Actual: " + document.getElementById("relleno").style.backgroundColor + " - " + colorActual);
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
            // elimina la clase intermitente de todos los acc
            $(".accordion").removeClass("seleccionado");
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
            // ahora busca el color actual
            var miMiembro = document.getElementsByClassName("miembroFamiliaColores");
            for (i = 0; i < miMiembro.length; i++) {
                if (miMiembro[i].dataset.color == colorActual) {
                    // lo marca como seleccionado
                    $(miMiembro[i]).addClass("miembroSeleccionado");
                    // muestra su nombre y familia
                    // el nombre 
                    var miTitle = miMiembro[i].title.split(" - ");
                    // 0 inglés, 1 español
                    var miNombre = miTitle[0] + " (" + miTitle[1] + ")";
                    document.getElementById("infoColorNombre").innerHTML = miNombre;
                    // familia
                    var miFamilia = miTitle[2];
                    document.getElementById("infoColorFamilia").innerHTML = miFamilia;
                    // el detalle en cada panel es spanInfoColorSel                    
                    $(".spanInfoColorSel").html("Actual: " + document.getElementById("relleno").style.backgroundColor + " - " + colorActual + " - " + miNombre + " - " + miFamilia);
                    // debemos identificar al abuelo
                    var abuelo = $(miMiembro[i]).closest(".panel"); // es una colección                    
                    // el acc es el elemento anterior al abuelo
                    var vecinoAcc = abuelo[0].previousElementSibling;
                    // ya tenemos identicado el acc vecino, ahora...
                    // agrega la clase intermitente al acc                    
                    $(vecinoAcc).addClass("seleccionado");
                    // expande el acc de este miembro
                    clickAcc(vecinoAcc); 
                    // hace scroll para que el miembro seleccionado sea visible  
                    $(miMiembro[i]).parent()[0].scrollLeft = miMiembro[i].offsetLeft - 4;                    
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
    miFamilia = miTitle[2];
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
    // agrega la clase seleccionado al miembro actual
    $(miembro).addClass("miembroSeleccionado");
    // elimina la clase intermitente de todos los acc
    $(".accordion").removeClass("seleccionado");
    // debemos identificar al abuelo
    var abuelo = $(miembro).closest(".panel"); // es una colección                    
    // el acc es el elemento anterior al abuelo
    var vecinoAcc = abuelo[0].previousElementSibling;
    // ya tenemos identicado el acc vecino, ahora...
    // agrega la clase intermitente al acc                    
    $(vecinoAcc).addClass("seleccionado");
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
//  eventos al cambiar valor hex
document.getElementById("valorHex").addEventListener("input", procesarEntradaHex);
document.getElementById("valorHex").addEventListener("change", procesarEntradaHex);

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
    document.getElementById("filtro").selectedIndex = 0;
    actualIndexFiltro = 0;
    lastIndexFiltro = 0;
    AplicarFiltro();
    // DIMENSIONA AL INICIAR LA PÁGINA con 10x10
    //para que se agreguen al abrir la página     
    configurarSelects(); 
    dimensionar();
    // radio por defecto es cero
    document.getElementById("rangoRadioBordes").value = 0;
    // el input color es negro por defecto, ie recuerda colores anteriores
    document.getElementById("colorPixel").value = "#000000";
    // muestra el contenedor pantalla, ya configurada
    $("#pantalla").css("display", "block");
    // scroll
    topFunction();
});

// resalta el color actual en el historial de colores
function resaltarActual() {
    var i;
    var miID;
    var miBtn;
    var colorSeleccionado = document.getElementById("relleno").style.backgroundColor;
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
            miBtn.style.border = "3px solid #009900";
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
                if (filaVecino > 0 && document.getElementById(idVecino).style.backgroundColor == colorViejo) {
                    // lo agrega a nuevos contagios
                    arrayNuevosContagios[arrayNuevosContagios.length] = idVecino;
                    //guardar los id y los colores para poder deshacer
                    lastArrayID[lastArrayID.length] = idVecino;
                    lastArrayColor[lastArrayColor.length] = colorViejo;
                    // lo rellena
                    document.getElementById(idVecino).style.backgroundColor = colorNuevo;
                }
            }
            // abajo
            filaVecino = Number(fila) + 1;
            columnaVecino = Number(columna);
            idVecino = "f" + filaVecino + "c" + columnaVecino;
            // si existe y si es del colorViejo la contagia
            if (existeCelda(idVecino) == true) {
                if (filaVecino <= numFilas && document.getElementById(idVecino).style.backgroundColor == colorViejo) {
                    // lo agrega a nuevos contagios
                    arrayNuevosContagios[arrayNuevosContagios.length] = idVecino;
                    //guardar los id y los colores para poder deshacer
                    lastArrayID[lastArrayID.length] = idVecino;
                    lastArrayColor[lastArrayColor.length] = colorViejo;
                    // lo rellena
                    document.getElementById(idVecino).style.backgroundColor = colorNuevo;
                }
            }
            // derecha
            filaVecino = Number(fila);
            columnaVecino = Number(columna) + 1;
            idVecino = "f" + filaVecino + "c" + columnaVecino;
            // si existe y si es del colorViejo la contagia
            if (existeCelda(idVecino) == true) {
                if (columnaVecino <= numColumnas && document.getElementById(idVecino).style.backgroundColor == colorViejo) {
                    // lo agrega a nuevos contagios
                    arrayNuevosContagios[arrayNuevosContagios.length] = idVecino;
                    //guardar los id y los colores para poder deshacer
                    lastArrayID[lastArrayID.length] = idVecino;
                    lastArrayColor[lastArrayColor.length] = colorViejo;
                    // lo rellena
                    document.getElementById(idVecino).style.backgroundColor = colorNuevo;
                }
            }
            // izquierda
            filaVecino = Number(fila);
            columnaVecino = Number(columna) - 1;
            idVecino = "f" + filaVecino + "c" + columnaVecino;
            // si existe y si es del colorViejo la contagia
            if (existeCelda(idVecino) == true) {
                if (columnaVecino > 0 && document.getElementById(idVecino).style.backgroundColor == colorViejo) {
                    // lo agrega a nuevos contagios
                    arrayNuevosContagios[arrayNuevosContagios.length] = idVecino;
                    //guardar los id y los colores para poder deshacer
                    lastArrayID[lastArrayID.length] = idVecino;
                    lastArrayColor[lastArrayColor.length] = colorViejo;
                    // lo rellena
                    document.getElementById(idVecino).style.backgroundColor = colorNuevo;
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
    estadoBtnDeshacer(true);
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
        document.getElementById("paletaHistorial").appendChild(nuevo);
        // corrige un bug
        // mayor ancho para disimularlo.
    }
    resaltarActual();
}
// el blanco ya fue usado en el color inicial de los cuadritos
procesarHistorial("#ffffff");
// el negro ya fue usado en los bordes y el lienzo
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
    // procesa el click en un div, es decir, en un cuadrito  
    // resaltar con sombra el cuadrito
    // cancela el temporizador en curso para eliminación de la clase
    clearTimeout(timerResaltar);
    // remueve inmediatamente cualquier resaltado
    $(".resaltado").removeClass("resaltado");
    // resalta el que recibe el click
    $("[id = " + celda + "]").addClass("resaltado");
    // inicia el temporizador para quitar el resaltado
    timerResaltar = setTimeout(function () {
        // remueve el resaltado de todos
        $(".resaltado").removeClass("resaltado");
    }, 400);
    ocupado = true;
    switch (modoActual) {
        case "libre":
            //modo selección libre
            var miCuadrito = document.getElementById(celda)
            if (miCuadrito.innerHTML == "") {
                miCuadrito.innerHTML = "×";
                $("[id = " + celda + "]").addClass("seleccionado");
                miCuadrito.style.backgroundColor = colorActual;
                procesarHistorial(colorActual);
            } else {
                miCuadrito.innerHTML = "";
                $("[id = " + celda + "]").removeClass("seleccionado");
                miCuadrito.style.backgroundColor = lastArrayColor[lastArrayID.indexOf(celda)];
            }
            break;
        case "pincel":
            // modo pincel
            // guarda primero
            lastID = celda;
            lastColor = document.getElementById(celda).style.backgroundColor;
            lastAction = "pintar";
            //pinta la celda
            document.getElementById(celda).style.backgroundColor = colorActual;
            //procesa el historial de colores
            procesarHistorial(colorActual);
            // activa el botón deshacer
            estadoBtnDeshacer(true);
            break;
        case "borrador":
            //modo borrador
            //primero guarda
            lastID = celda;
            lastColor = document.getElementById(celda).style.backgroundColor;
            lastAction = "borrar";
            //borra
            document.getElementById(celda).style.backgroundColor = fondoAplicado;
            // activa el botón deshacer
            estadoBtnDeshacer(true);
            break;
        case "extraer":
            //modo extraer color             
            colorActual = convertirRGBaHexadecimal(document.getElementById(celda).style.backgroundColor);
            // asigna el valor hexadecimal al input color
            document.getElementById("colorPixel").value = colorActual;
            // también al span de relleno
            document.getElementById("relleno").style.backgroundColor = colorActual;
            // el color de ciertos íconos
            document.getElementById("BtnRellenar").style.color = colorActual;
            document.getElementById("BtnColorLienzo").style.color = colorActual;
            document.getElementById("BtnColorRejilla").style.color = colorActual;
            document.getElementById("BtnGotero").style.color = colorActual;
            document.getElementById("BtnPincel").style.color = colorActual;
            // para el caso de los importados
            procesarHistorial(colorActual);
            // resalta en historial
            resaltarActual();
            // informa
            showSnackbar("Extraído: " + colorActual);
            break;
        case "relleno":
            // parámetros: colorViejo, colorNuevo, miID
            // document.getElementById(celda).style.backgroundColor es RGB
            // document.getElementById("relleno").style.backgroundColor es colorActual en RGB
            // colorActual es hexadecimal
            //alert("pasa viejo " + document.getElementById(celda).style.backgroundColor);
            //alert("pasa nuevo " + document.getElementById("relleno").style.backgroundColor);
            rellenarZona(document.getElementById(celda).style.backgroundColor, document.getElementById("relleno").style.backgroundColor, celda);
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
    var miColumna;
    var miID;
    // recorre filas
    for (fila = 1; fila <= MAXNUMFILAS; fila++) {
        miFila = document.createElement("DIV");
        miFila.setAttribute("class", "fila");
        document.getElementById("contenedor").appendChild(miFila);
        // recorre columnas
        for (columna = 1; columna <= MAXNUMCOLUMNAS; columna++) {
            miColumna = document.createElement("DIV");
            miColumna.setAttribute("class", "columna");
            miID = "f" + fila + "c" + columna;
            miColumna.id = miID;
            miColumna.addEventListener("click", function () { hacerClick(this.id); });
            // por las x
            miColumna.style.fontSize = tamaño * 0.8 + "px";
            miFila.appendChild(miColumna);
        }
    }
}

//para que se creen al abrir la página 
crearCuadritos();
// agrega los números de los selectores de filas y columnas al DOM
// SE LLAMA JUSTO DESPÚES DE DECLARARLA, AL ABRIR LA PÁGINA
function configurarSelects() {
    var fila;
    var columna;
    var x;
    var y;
    var listaFilas = document.getElementById("selectFilas");
    var listaColumnas = document.getElementById("selectColumnas");
    // agrega selectores de número de filas
    for (fila = 1; fila <= MAXNUMFILAS; fila++) {
        x = document.createElement("option");
        x.text = fila;
        x.value = fila;
        listaFilas.add(x, fila - 1);
    }
    // agrega selectores de número de columnas
    for (columna = 1; columna <= MAXNUMCOLUMNAS; columna++) {
        y = document.createElement("option");
        y.text = columna;
        y.value = columna;
        listaColumnas.add(y, columna - 1);
    }
    // selecciona los valores por defecto
    listaFilas.selectedIndex = 9; // 10 filas
    listaColumnas.selectedIndex = 9; // 10 columnas
    numColumnas = 10;
    numFilas = 10;
}
//se muestra el historial de color
function mostrarHistorial(afectarPreferencia) {
    if (modoActual == "borrador") {
        showSnackbar("Está en Modo Borrador...");
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
    if (modoActual != "borrador" && afectarPreferencia == true) {
        prefiereHistorial = true;
    }
    //oculta este botón
    document.getElementById("BtnHistorialColor").style.display = "none";
    // la barra se activa y el botón cerrar historial también
    document.getElementById("paletaHistorial").style.pointerEvents = "auto";
    document.getElementById("BtnCerrarHistorial").disabled = false;
    //muestra la paleta de historial de color
    //document.getElementById("paletaHistorial").style.display = "block";
    document.getElementById("paletaHistorial").style.left = "0px";
    document.getElementById("paletaHistorial").style.visibility = "visible";
    document.getElementById("paletaHistorial").style.opacity = "0.9";
    //muestra el botón para cerrar historial de color
    //document.getElementById("BtnCerrarHistorial").style.display = "inline-block";
    document.getElementById("BtnCerrarHistorial").style.left = "0px";
    document.getElementById("BtnCerrarHistorial").style.visibility = "visible";
    document.getElementById("BtnCerrarHistorial").style.opacity = "1";
    // para definir sus posiciones y apariencia
    ajustesResize();
    resaltarActual();
}
//se llama la función que muestra el historial de color
document.getElementById("BtnHistorialColor").onclick = function () {
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
    if (modoActual != "borrador" && afectarPreferencia == true) {
        prefiereHistorial = false;
    }
    // la barra se desactiva y el botón cerrar historial también
    document.getElementById("paletaHistorial").style.pointerEvents = "none";
    document.getElementById("BtnCerrarHistorial").disabled = true;
    //muestra el botón en la paleta de arriba
    // en caso que quiera esperar comente la siguiente línea
    document.getElementById("BtnHistorialColor").style.display = "inline-block";
    // al rato
    timerHistorial = setTimeout(function () {
        // la paleta del historial
        //  lo oculta un poco después, para dar tiempo a la transición 
        document.getElementById("paletaHistorial").style.left = "-300px";
        document.getElementById("paletaHistorial").style.visibility = "hidden";
        //oculta la paleta de historial de color
        // document.getElementById("paletaHistorial").style.display = "none";        
        //muestra el botón en la paleta de arriba
        // en caso que quiera esperar quite el comentario en la siguiente línea
        //document.getElementById("BtnHistorialColor").style.display = "inline-block";
        // el botón de cerrar historial
        //  lo oculta un poco después, para dar tiempo a la transición 
        document.getElementById("BtnCerrarHistorial").style.left = "-300px";
        document.getElementById("BtnCerrarHistorial").style.visibility = "hidden";
        //oculta la paleta de historial de color
        //document.getElementById("BtnCerrarHistorial").style.display = "none";
    }, 2000);
    document.getElementById("paletaHistorial").style.opacity = "0";
    //oculta el botón de cerrar historial de color
    //document.getElementById("BtnCerrarHistorial").style.display = "none";    
    document.getElementById("BtnCerrarHistorial").style.opacity = "0";
}
//se llama la función que cierra el historial de color
document.getElementById("BtnCerrarHistorial").onclick = function () {
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
    // no se ocultará si estába pendiente
    clearTimeout(timerCursor);
    // sale si no es pantalla completa
    if (pantallaCompleta == false) { return; }
    // el puntero es visible
    document.getElementById("pantalla").style.cursor = definirPuntero();
    document.getElementById("contenedor").style.cursor = definirPuntero();
    $(".columna").css("cursor", definirPuntero());
    // también los botones
    $("#paletaFull").css("top", "12px");
    // programa que se oculte
    timerCursor = setTimeout(ocultarPuntero, 3000);
}

function ocultarPuntero() {
    // oculta el puntero
    document.getElementById("pantalla").style.cursor = "none";
    document.getElementById("contenedor").style.cursor = "none";
    $(".columna").css("cursor", "none");
    // también los botones
    $("#paletaFull").css("top", "-50px");
}
// pantalla completa, entrar
document.getElementById("BtnPantallaCompleta").onclick = function () {
    pantallaCompleta = true;
    // primero guarda el scroll de la página
    miBodyScroll = document.body.scrollTop; // For Chrome, Safari and Opera
    miDocumentScroll = document.documentElement.scrollTop; // For IE and Firefox
    // ajustes css
    document.getElementById("paletaFull").style.display = "block";
    $("#pantalla").css("width", "100%");
    $("#pantalla").css("height", "100%");
    $("#BtnCerrarHistorial").addClass("oculto");
    $(".paleta").addClass("oculto");
    $(":header").addClass("oculto");
    // por defecto es zoom +
    document.getElementById("BtnAumentarFull").style.border = "3px solid #009900";
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
    $("#pantalla").css("width", "auto");
    $("#pantalla").css("height", "auto");
    $("#BtnCerrarHistorial").removeClass("oculto");
    $(".paleta").removeClass("oculto");
    $(":header").removeClass("oculto");
    // puntero
    document.getElementById("pantalla").style.cursor = "default";
    $("#contenedor").css("cursor", "default");
    $(".columna").css("cursor", "pointer");
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
document.getElementById("pantalla").onmousemove = function () { mostrarPuntero() };
document.getElementById("contenedor").onmousemove = function () { mostrarPuntero() };
// en eventos táctiles
document.getElementById("pantalla").ontouchmove = function () { mostrarPuntero() };
document.getElementById("contenedor").ontouchmove = function () { mostrarPuntero() };
document.getElementById("pantalla").ontouchstart = function () { mostrarPuntero() };
document.getElementById("contenedor").ontouchstart = function () { mostrarPuntero() };
// cuando hace scroll
document.getElementById("pantalla").onscroll = function () { mostrarPuntero() };
document.getElementById("contenedor").onscroll = function () { mostrarPuntero() };
// también cuando hace click fuera del dibujo
document.getElementById("pantalla").onclick = function () {
    procesarZoom();
    mostrarPuntero();    
};
// también cuando hace click en el contenedor del dibujo, si es que se puede
document.getElementById("contenedor").onclick = function (event) {
    procesarZoom();
    mostrarPuntero();
    event.stopPropagation();
};

// define zoom +
document.getElementById("BtnAumentarFull").onclick = function (event) {
    document.getElementById("BtnAumentarFull").style.border = "3px solid #009900";
    document.getElementById("BtnDisminuirFull").style.border = "3px solid #666699";
    zoomIn = true;
    mostrarPuntero();
    event.stopPropagation();
}
// define zoom -
document.getElementById("BtnDisminuirFull").onclick = function (event) {
    document.getElementById("BtnAumentarFull").style.border = "3px solid #666699";
    document.getElementById("BtnDisminuirFull").style.border = "3px solid #009900";
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
        ajustarTamaño(1);
    } else {
        // hace zoom -
        ajustarTamaño(-1);
    }
}
//se muestra el selector rgb de color
document.getElementById("BtnRGB").onclick = function () {
    modalActual = "rgb";
    //muestra el modal
    showModal();
}
//se muestra el selector rgb de color
document.getElementById("BtnHex").onclick = function () {
    modalActual = "hex";
    //muestra el modal
    showModal();
}
//se muestra el selector rgb de color
document.getElementById("BtnGallery").onclick = function () {
    modalActual = "gallery";
    //muestra el modal
    showModal();
}
//se muestra la ventana con opciones para exportar
document.getElementById("BtnExportar").onclick = function () {
    alert("En construcción");

}
//se muestra la ventana con opciones para importar
document.getElementById("BtnImportar").onclick = function () {
    alert("En construcción");
}
//cambia el color seleccionado, llamada por selector o historial de colores
function colorPixel() {
    // NO OLVIDAR QUE backgroundColor DEVUELVE RGB Y EL VALUE DEL INPUT COLOR ES HEXADECIMAL
    var miValor = document.getElementById("colorPixel").value;
    if (validarHex(miValor) == false) {
        // no es un color válido, seguramente una entrada errada en ie o safari
        document.getElementById("colorPixel").value = "#000000";
        miValor = "#000000";
        showSnackbar("Color no válido. Se estableció negro (#000000).");        
    }
    //actualiza el color del pincel
    colorActual = miValor;
    //actualiza el color de rellenar todo junto al ícono del tanque
    document.getElementById("relleno").style.backgroundColor = colorActual;
    // el color de ciertos íconos
    document.getElementById("BtnRellenar").style.color = colorActual;
    document.getElementById("BtnColorLienzo").style.color = colorActual;
    document.getElementById("BtnColorRejilla").style.color = colorActual;
    document.getElementById("BtnGotero").style.color = colorActual;
    document.getElementById("BtnPincel").style.color = colorActual;
    // resalta en el historial si existe
    resaltarActual();
    // en caso de estar en modo libre
    if (modoActual == "libre") {
        $(".seleccionado").css("background-color", colorActual);
        procesarHistorial(colorActual);
    }
}
//selecciona un color del historial de colores
// click en un color del historial
// recibe el id del botón como parámetro
function colorHistorial(btnId) {
    //actualiza el color del selector
    document.getElementById("colorPixel").value = document.getElementById(btnId).title;
    // para otras actualizaciones de colorPixel
    colorPixel();
    // quite cometario en la siguiente línea para cerrar el historial al escoger un color
    //cerrarHistorial();
}
// ajusta el número de filas y columnas visibles
function dimensionar() {
    // sale si es por código
    if (permitirEvento == false) {
        return;
    }
    //actualiza el tamaño de la matriz
    var miFila;
    var miColumna;
    var miID;
    var x;
    var y;
    // primero guarda todo para poder deshacer
    lastNumFilas = numFilas;
    lastNumColumnas = numColumnas;
    lastFondoAplicado = fondoAplicado;
    //debe guardar los colores y los id      
    lastAction = "dimensionar";
    lastArrayColor.length = 0;
    lastArrayID.length = 0;
    //lee los valores de los selectores de filas y columnas
    x = document.getElementById("selectColumnas").selectedIndex;
    y = document.getElementById("selectColumnas").options;
    numColumnas = Number(y[x].value);
    x = document.getElementById("selectFilas").selectedIndex;
    y = document.getElementById("selectFilas").options;
    numFilas = Number(y[x].value);
    //alert("filas " + numFilas + " columnas " + numColumnas);    
    //recorre todos los cuadritos, por id    
    for (miFila = 1; miFila <= MAXNUMFILAS; miFila++) {
        for (miColumna = 1; miColumna <= MAXNUMCOLUMNAS; miColumna++) {
            //construye el id
            miID = "f" + miFila + "c" + miColumna;
            //si está dentro del tamaño especificado lo hace visible
            // y si no, lo oculta            
            if (miFila <= numFilas && miColumna <= numColumnas) {
                // visible
                document.getElementById(miID).style.display = "inline-block";
            } else {
                // no visible
                document.getElementById(miID).style.display = "none";
            }
            // primero guardar
            lastArrayID[lastArrayID.length] = miID;
            lastArrayColor[lastArrayColor.length] = document.getElementById(miID).style.backgroundColor;
            // de paso los coloca blancos a todos
            document.getElementById(miID).style.backgroundColor = "#ffffff";

        }
    }
    //ahora el fondo es blanco
    fondoAplicado = "#ffffff";
    //ajusta el contenedor de los cuadritos
    var anchoCont = tamaño * numColumnas;
    // MAXNUMFILAS VECES EL ANCHO DE UN CUADRITO
    //PERO OJO QUE maxWidth DEL CONTENEDOR ES 90%, NUNCA DESBORDA PANTALLA.
    document.getElementById("contenedor").style.width = anchoCont + "px";
    // activa el botón deshacer
    estadoBtnDeshacer(true);
}

// dasactiva el botón deshacer, no se ha hecho nada
// nota que la primera vez que se llama dimensionar se activa, pero aquí se desactiva para que sea su estado inicial
estadoBtnDeshacer(false);
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
    if (modoActual == "borrador") {        
            cerrarHistorial(false);
    } else {
        if (prefiereHistorial == true) {
            mostrarHistorial(false);
        } else {
            cerrarHistorial(false);
        }
    }
    // elimina las marcas x de todos
    $(".columna").html("");
    $(".columna").removeClass("seleccionado");

    if (modoActual != "libre") {
        //muestra y oculta elementos
        document.getElementById("BtnRellenar").style.display = "inline-block";
        document.getElementById("BtnColorLienzo").style.display = "inline-block";
        document.getElementById("BtnColorRejilla").style.display = "inline-block";
        document.getElementById("BtnGotero").style.display = "inline-block";
        document.getElementById("BtnBorrador").style.display = "inline-block";
        document.getElementById("BtnPincel").style.display = "inline-block";
        document.getElementById("BtnLibre").style.display = "inline-block";
        document.getElementById("BtnExtraerColor").style.display = "inline-block";
        document.getElementById("filtro").style.display = "inline-block";
        document.getElementById("BtnActualizar").style.display = "inline-block";
        document.getElementById("BtnRejilla").style.display = "inline-block";
        document.getElementById("BtnEstiloBorde").style.display = "inline-block";
        document.getElementById("BtnRadioBordes").style.display = "inline-block";
        document.getElementById("BtnDeshacer").style.display = "inline-block";
        //document.getElementById("spanFilas").style.display = "inline-block";
        $("#spanFilas").removeClass("oculto");
        document.getElementById("selectFilas").style.display = "inline-block";
        //document.getElementById("spanColumnas").style.display = "inline-block";
        $("#spanColumnas").removeClass("oculto");
        document.getElementById("selectColumnas").style.display = "inline-block";
        document.getElementById("BtnImportar").style.display = "inline-block";
        document.getElementById("BtnExportar").style.display = "inline-block";
        document.getElementById("BtnImprimir").style.display = "inline-block";
        document.getElementById("BtnAceptarLibre").style.display = "none";
        document.getElementById("BtnCancelarLibre").style.display = "none";
        document.getElementById("BtnPantallaCompleta").style.display = "inline-block";
    }
    switch (modoActual) {
        case "libre":
            document.getElementById("BtnLibre").style.border = "3px solid #009900";
            document.getElementById("BtnPincel").style.border = "3px solid #666699";
            document.getElementById("BtnBorrador").style.border = "3px solid #666699";
            document.getElementById("BtnGotero").style.border = "3px solid #666699";
            document.getElementById("BtnExtraerColor").style.border = "3px solid #666699";
            document.getElementById("colorPixel").style.display = "inline-block";
            document.getElementById("BtnRGB").style.display = "inline-block";
            document.getElementById("BtnHex").style.display = "inline-block";
            document.getElementById("BtnGallery").style.display = "inline-block";
            //muestra y oculta elementos
            document.getElementById("BtnAceptarLibre").style.display = "inline-block";
            document.getElementById("BtnCancelarLibre").style.display = "inline-block";
            document.getElementById("BtnRellenar").style.display = "none";
            document.getElementById("BtnColorLienzo").style.display = "none";
            document.getElementById("BtnColorRejilla").style.display = "none";
            document.getElementById("BtnGotero").style.display = "none";
            document.getElementById("BtnBorrador").style.display = "none";
            document.getElementById("BtnPincel").style.display = "none";
            document.getElementById("BtnLibre").style.display = "none";
            document.getElementById("BtnExtraerColor").style.display = "none";
            document.getElementById("filtro").style.display = "none";
            document.getElementById("BtnActualizar").style.display = "none";
            document.getElementById("BtnRejilla").style.display = "none";
            document.getElementById("BtnEstiloBorde").style.display = "none";
            document.getElementById("BtnRadioBordes").style.display = "none";
            document.getElementById("BtnDeshacer").style.display = "none";
            //document.getElementById("spanFilas").style.display = "none";
            $("#spanFilas").addClass("oculto");
            document.getElementById("selectFilas").style.display = "none";
            //document.getElementById("spanColumnas").style.display = "none";
            $("#spanColumnas").addClass("oculto");
            document.getElementById("selectColumnas").style.display = "none";
            document.getElementById("BtnImportar").style.display = "none";
            document.getElementById("BtnExportar").style.display = "none";
            document.getElementById("BtnImprimir").style.display = "none";
            document.getElementById("BtnPantallaCompleta").style.display = "none";
            //debe guardar los colores y los id      
            lastAction = "libre";
            lastArrayColor.length = 0;
            lastArrayID.length = 0;
            //obtiene un array con todos los de la clase columna
            var x = document.getElementsByClassName("columna");
            var i;
            //recorre todo el array y les aplica el color actual a todos los cuadritos
            for (i = 0; i < x.length; i++) {
                //guardar los id y los colores
                lastArrayID[lastArrayID.length] = x[i].id;
                lastArrayColor[lastArrayColor.length] = x[i].style.backgroundColor;
            }
            // informa
            showSnackbar("Modo Selección Libre");
            break;
        case "pincel":
            document.getElementById("BtnPincel").style.border = "3px solid #009900";
            document.getElementById("BtnLibre").style.border = "3px solid #666699";
            document.getElementById("BtnBorrador").style.border = "3px solid #666699";
            document.getElementById("BtnGotero").style.border = "3px solid #666699";
            document.getElementById("BtnExtraerColor").style.border = "3px solid #666699";
            document.getElementById("colorPixel").style.display = "inline-block";
            document.getElementById("BtnRGB").style.display = "inline-block";
            document.getElementById("BtnHex").style.display = "inline-block";
            document.getElementById("BtnGallery").style.display = "inline-block";
            showSnackbar("Modo Pincel");
            break;
        case "borrador":
            document.getElementById("BtnBorrador").style.border = "3px solid #009900";
            document.getElementById("BtnLibre").style.border = "3px solid #666699";
            document.getElementById("BtnPincel").style.border = "3px solid #666699";
            document.getElementById("BtnGotero").style.border = "3px solid #666699";
            document.getElementById("BtnExtraerColor").style.border = "3px solid #666699";
            document.getElementById("colorPixel").style.display = "none";
            document.getElementById("BtnRGB").style.display = "none";
            document.getElementById("BtnHex").style.display = "none";
            document.getElementById("BtnGallery").style.display = "none";
            showSnackbar("Modo Borrador");
            break;
        case "relleno":
            document.getElementById("BtnGotero").style.border = "3px solid #009900";
            document.getElementById("BtnLibre").style.border = "3px solid #666699";
            document.getElementById("BtnPincel").style.border = "3px solid #666699";
            document.getElementById("BtnBorrador").style.border = "3px solid #666699";
            document.getElementById("BtnExtraerColor").style.border = "3px solid #666699";
            document.getElementById("colorPixel").style.display = "inline-block";
            document.getElementById("BtnRGB").style.display = "inline-block";
            document.getElementById("BtnHex").style.display = "inline-block";
            document.getElementById("BtnGallery").style.display = "inline-block";
            showSnackbar("Modo Relleno Selectivo");
            break;
        case "extraer":
            document.getElementById("BtnExtraerColor").style.border = "3px solid #009900";
            document.getElementById("BtnLibre").style.border = "3px solid #666699";
            document.getElementById("BtnPincel").style.border = "3px solid #666699";
            document.getElementById("BtnBorrador").style.border = "3px solid #666699";
            document.getElementById("BtnGotero").style.border = "3px solid #666699";
            document.getElementById("colorPixel").style.display = "inline-block";
            document.getElementById("BtnRGB").style.display = "inline-block";
            document.getElementById("BtnHex").style.display = "inline-block";
            document.getElementById("BtnGallery").style.display = "inline-block";
            showSnackbar("Modo Extraer Color");
            break;
    }
}
//se selecciona ACEPTAR en el modo libre
document.getElementById("BtnAceptarLibre").onclick = function () {
    cambiarModo(lastModo);
    estadoBtnDeshacer(true);
}
//se selecciona CANCELAR en el modo libre
document.getElementById("BtnCancelarLibre").onclick = function () {
    cambiarModo(lastModo);
    // deshace cualquier cambio de color            
    var i;
    //recorre los array y les aplica el color guardado
    for (i = 0; i < lastArrayID.length; i++) {
        document.getElementById(lastArrayID[i]).style.backgroundColor = lastArrayColor[i];
    }
    estadoBtnDeshacer(false);
}
//se selecciona el modo libre
document.getElementById("BtnLibre").onclick = function () {
    cambiarModo("libre");
}
//se selecciona el pincel
document.getElementById("BtnPincel").onclick = function () {
    cambiarModo("pincel");
}
//se selecciona el borrador
document.getElementById("BtnBorrador").onclick = function () {
    cambiarModo("borrador");
}
//se selecciona el modo relleno, el gotero
document.getElementById("BtnGotero").onclick = function () {
    cambiarModo("relleno");
}
// se selecciona el modo extraer color
// extrae el color de la celda seleccionada y lo convierte en el color actual
document.getElementById("BtnExtraerColor").onclick = function () {
    cambiarModo("extraer");
}

// se ajusta el tamaño de los cuadritos
function ajustarTamaño(incremento) {
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
    tamaño = Number(tamaño) + incremento;
    //define el ancho de los bordes
    // ANTES 0.005
    anchoBordes = 0.01 * tamaño;
    var x = document.getElementsByClassName("columna");
    var i;
    //ajusta todos los cuadritos
    for (i = 0; i < x.length; i++) {
        //ancho
        x[i].style.width = tamaño + "px";
        x[i].style.maxWidth = tamaño + "px";
        x[i].style.minWidth = tamaño + "px";
        //alto
        x[i].style.height = tamaño + "px";
        x[i].style.maxHeight = tamaño + "px";
        x[i].style.minHeight = tamaño + "px";
        // el ancho del borde
        x[i].style.borderWidth = anchoBordes + "px";
        // la fuente, para las x
        x[i].style.fontSize = tamaño * 0.8 + "px";
    }

    //ajusta el contenedor de los cuadritos
    var anchoCont = tamaño * numColumnas;
    // n VECES EL ANCHO DE UN CUADRITO
    //PERO OJO QUE maxWidth DEL CONTENEDOR ES 90%, NUNCA DESBORDA PANTALLA.
    document.getElementById("contenedor").style.width = anchoCont + "px";
    // para centrado y otros ajustes
    ajustesResize();
    ocupado = false;
}
// la llama para ajustes iniciales
ajustarTamaño(1);
ajustarTamaño(1);
// todos los cuadritos blancos, borra todo
document.getElementById("BtnActualizar").onclick = function () {
    if (ocupado == true) {
        //sale si está ocupado
        return;
    }
    ocupado = true;
    //debe guardar los colores y los id      
    lastAction = "actualizar";
    lastArrayColor.length = 0;
    lastArrayID.length = 0;
    //obtiene un array con todos los de la clase columna
    var x = document.getElementsByClassName("columna");
    var i;
    //recorre todo el array y borra todos los cuadritos
    for (i = 0; i < x.length; i++) {
        //guardar los id y los colores al mismo tiempo que recorre los cuadritos
        lastArrayID[lastArrayID.length] = x[i].id;
        lastArrayColor[lastArrayColor.length] = x[i].style.backgroundColor;
        x[i].style.backgroundColor = "#ffffff";
    }
    lastFondoAplicado = fondoAplicado;
    fondoAplicado = "#ffffff";
    // activa el botón deshacer
    estadoBtnDeshacer(true);
    ocupado = false;
}
//aplica a todos los cuadros el relleno del color actual
document.getElementById("BtnRellenar").onclick = function () {
    if (ocupado == true) {
        //sale si está ocupado
        return;
    }
    ocupado = true;
    //debe guardar los colores y los id      
    lastAction = "rellenar";
    lastArrayColor.length = 0;
    lastArrayID.length = 0;
    //obtiene un array con todos los de la clase columna
    var x = document.getElementsByClassName("columna");
    var i;
    //recorre todo el array y les aplica el color actual a todos los cuadritos
    for (i = 0; i < x.length; i++) {
        //guardar los id y los colores al mismo tiempo que recorre los cuadritos
        lastArrayID[lastArrayID.length] = x[i].id;
        lastArrayColor[lastArrayColor.length] = x[i].style.backgroundColor;
        x[i].style.backgroundColor = colorActual;
    }
    lastFondoAplicado = fondoAplicado;
    fondoAplicado = colorActual;
    // historial de colorActual
    procesarHistorial(colorActual);
    // activa el botón deshacer
    estadoBtnDeshacer(true);
    ocupado = false;
}
// alterna entre cuadrados y círculos
document.getElementById("BtnRadioBordes").onclick = function () {
    modalActual = "radio";
    //muestra el modal
    showModal();
}
// alterna entre con y sin bordes
function alternarBordes(showMsj) {
    var miBorde;
    if (usarBordes == true) {
        usarBordes = false;
        document.getElementById("icoRejilla").setAttribute("class", "fa fa-stop");
        miBorde = "none";
        if (showMsj == true) {
            showSnackbar("Sin bordes");
        }
    } else {
        usarBordes = true;
        document.getElementById("icoRejilla").setAttribute("class", "fa fa-plus-square-o");
        miBorde = anchoBordes + "px solid " + colorRejilla;
        if (showMsj == true) {
            showSnackbar("Con bordes");
        }
    }
    //obtiene un array con todos los de la clase columna
    var x = document.getElementsByClassName("columna");
    var i;
    //recorre todo el array y les aplica el estilo de borde
    for (i = 0; i < x.length; i++) {
        x[i].style.border = miBorde;
    }
}
// alterna entre con o sin rejilla
document.getElementById("BtnRejilla").onclick = function () {
    if (ocupado == true) {
        //sale si está ocupado
        return;
    }
    ocupado = true;
    alternarBordes(true);
    // guarda para poder deshacer
    lastAction = "alternarBordes";
    // activa el botón deshacer
    estadoBtnDeshacer(true);
    ocupado = false;
}
// para definir ancho y tipo de borde
document.getElementById("BtnEstiloBorde").onclick = function () {
    alert("Ancho y tipo de borde... en construcción.")
}
// cambia el color de la rejilla
document.getElementById("BtnColorRejilla").onclick = function () {
    // esto era para ajustar el ancho del ícono...
    //this.title = "w " + document.getElementById("tint").offsetWidth + " h " + document.getElementById("tint").offsetHeight;
    if (ocupado == true) {
        //sale si está ocupado
        return;
    }
    ocupado = true;
    // guarda para poder deshacer
    lastAction = "cambiarColorRejilla";
    lastColorRejilla = colorRejilla;
    var miBorde;
    colorRejilla = colorActual;
    if (usarBordes == false) {
        miBorde = "none";
    } else {
        miBorde = anchoBordes + "px solid " + colorRejilla;
    }
    //obtiene un array con todos los de la clase columna
    var x = document.getElementsByClassName("columna");
    var i;
    //recorre todo el array y les aplica el estilo de borde
    for (i = 0; i < x.length; i++) {
        x[i].style.border = miBorde;
    }
    procesarHistorial(colorRejilla);
    showSnackbar("Color bordes: " + colorRejilla);
    // activa el botón deshacer
    estadoBtnDeshacer(true);
    ocupado = false;
}
// cambia el color del lienzo
document.getElementById("BtnColorLienzo").onclick = function () {
    // guarda para poder deshacer
    lastAction = "cambiarColorLienzo"
    lastColorLienzo = colorLienzo;
    //el nuevo valor
    colorLienzo = colorActual;
    // pinta el lienzo
    document.getElementById("contenedor").style.backgroundColor = colorLienzo;
    // historial actualizado
    procesarHistorial(colorLienzo);
    showSnackbar("Color del lienzo: " + colorLienzo);
    estadoBtnDeshacer(true);
}

// deshace la última acción
document.getElementById("BtnDeshacer").onclick = function () {
    if (ocupado == true) {
        //sale si está ocupado
        return;
    }
    ocupado = true;
    switch (lastAction) {
        case "filtrar":
            // deshace el filtro
            actualIndexFiltro = lastIndexFiltro;
            document.getElementById("filtro").selectedIndex = lastIndexFiltro;
            var x = document.getElementById("filtro").selectedIndex;
            var y = document.getElementById("filtro").options;
            // sintaxis estándar
            document.getElementById("contenedor").style.filter = y[x].value;
            // Safari 6.0 - 9.0
            document.getElementById("contenedor").style.WebkitFilter = y[x].value;

            break;
        case "alternarBordes":
            // alterna borde
            alternarBordes(false);
            break;
        case "CambiarRadioBordes":
            // vuelve al radio anterior
            radioBorde = lastRadioBorde;
            //obtiene un array con todos los de la clase columna
            var x = document.getElementsByClassName("columna");
            var i;
            //recorre todo el array y les aplica el estilo de borde
            for (i = 0; i < x.length; i++) {
                x[i].style.borderRadius = radioBorde + "%";
            }
            // floritura, lo aplica al relleno junto a al tanque y el multicolor
            document.getElementById("relleno").style.borderRadius = radioBorde + "%";
            document.getElementById("rellenoHistorial").style.borderRadius = radioBorde + "%";
            break;
        case "pintar":
            // deshace lo pintado
            document.getElementById(lastID).style.backgroundColor = lastColor;
            break;
        case "borrar":
            // deshace lo borrado
            document.getElementById(lastID).style.backgroundColor = lastColor;
            break;
        case "rellenar":
            // deshace el relleno
            fondoAplicado = lastFondoAplicado;
            var i;
            //recorre los array y les aplica el color guardado
            for (i = 0; i < lastArrayID.length; i++) {
                document.getElementById(lastArrayID[i]).style.backgroundColor = lastArrayColor[i];
            }
            break;
        case "libre":
            // deshace cualquier cambio de color            
            var i;
            //recorre los array y les aplica el color guardado
            for (i = 0; i < lastArrayID.length; i++) {
                document.getElementById(lastArrayID[i]).style.backgroundColor = lastArrayColor[i];
            }
            break;
        case "cambiarColorLienzo":
            // deshace el color aplicado
            colorLienzo = lastColorLienzo;
            document.getElementById("contenedor").style.backgroundColor = colorLienzo;
            break;
        case "cambiarColorRejilla":
            // deshace el color de la rejilla
            colorRejilla = lastColorRejilla;
            var miBorde;
            if (usarBordes == false) {
                miBorde = "none";
            } else {
                miBorde = anchoBordes + "px solid " + colorRejilla;
            }
            //obtiene un array con todos los de la clase columna
            var x = document.getElementsByClassName("columna");
            var i;
            //recorre todo el array y les aplica el estilo de borde
            for (i = 0; i < x.length; i++) {
                x[i].style.border = miBorde;
            }
            break;
        case "dimensionar":
            // deshace el ajuste de filas y columnas
            fondoAplicado = lastFondoAplicado;
            numFilas = lastNumFilas;
            numColumnas = lastNumColumnas;
            permitirEvento = false;
            document.getElementById("selectFilas").selectedIndex = numFilas - 1;
            document.getElementById("selectColumnas").selectedIndex = numColumnas - 1;

            var miID;
            var miFila;
            var miColumna;
            for (miFila = 1; miFila <= MAXNUMFILAS; miFila++) {
                for (miColumna = 1; miColumna <= MAXNUMCOLUMNAS; miColumna++) {
                    //construye el id
                    miID = "f" + miFila + "c" + miColumna;
                    //si está dentro del tamaño especificado lo hace visible
                    // y si no, lo oculta            
                    if (miFila <= numFilas && miColumna <= numColumnas) {
                        // visible
                        document.getElementById(miID).style.display = "inline-block";
                    } else {
                        // no visible
                        document.getElementById(miID).style.display = "none";
                    }
                }
            }
            //recorre los array y les aplica el color guardado
            for (i = 0; i < lastArrayID.length; i++) {
                document.getElementById(lastArrayID[i]).style.backgroundColor = lastArrayColor[i];
            }
            //ajusta el contenedor de los cuadritos
            var anchoCont = tamaño * numColumnas;
            // n VECES EL ANCHO DE UN CUADRITO
            //PERO OJO QUE maxWidth DEL CONTENEDOR ES 90%, NUNCA DESBORDA PANTALLA.
            document.getElementById("contenedor").style.width = anchoCont + "px";
            permitirEvento = true;
            break;
        case "actualizar":
            // deshace el limpiado total
            fondoAplicado = lastFondoAplicado;

            var i;
            //recorre los array y les aplica el color guardado
            for (i = 0; i < lastArrayID.length; i++) {
                document.getElementById(lastArrayID[i]).style.backgroundColor = lastArrayColor[i];
            }
            break;
        case "rellenarSelectivo":
            var i;
            //recorre los array y les aplica el color guardado
            for (i = 0; i < lastArrayID.length; i++) {
                document.getElementById(lastArrayID[i]).style.backgroundColor = lastArrayColor[i];
            }
            break;
        default:
            showSnackbar("No se pudo deshacer");
    }
    // desactiva el btn deshacer, solo se puede hacer una vez
    estadoBtnDeshacer(false);
    ocupado = false;
}

// aumenta el tamaño de todos los cuadritos
document.getElementById("BtnAumentar").onclick = function () {
    ajustarTamaño(1);
}
// disminuye el tamaño de todos los cuadritos
document.getElementById("BtnDisminuir").onclick = function () {
    ajustarTamaño(-1);
}
// imprime
document.getElementById("BtnImprimir").onclick = function () {
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