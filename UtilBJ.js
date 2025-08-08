// Variables
var getBtnCopiar = document.getElementById("btnCopiar");
var getTxtDocumento = document.getElementById("txtDocumento");
var getTxtCorreo = document.getElementById("txtCorreo");
var getBtnCopiarDocumento = document.getElementById("btnCopiarDocumento");
var getBtnCopiarCorreo = document.getElementById("btnCopiarCorreo");
var getBtnPegar = document.getElementById("btnPegar");
var getBtnDividir = document.getElementById("btnDividir");
var getBtnExtraer = document.getElementById("btnExtraer");
var getAlert = document.getElementById("alert");
var getSpanCopiado = document.getElementById("spanCopiado");
var getFormato = document.getElementById("formato");
var getOptNatural =document.getElementById("micheckNatural");
var miFormato;
var timerAlert;
miFormato= "comapunto";
// Convertidor
var getPulgadas = document.getElementById("numberPulg");
var getPulgadas2 = document.getElementById("numberPulg2");
var getCm = document.getElementById("numberCm");
var getCm2 = document.getElementById("numberCm2");
// IVA
var getSinIVA = document.getElementById("numberSinIVA");
var getConIVA = document.getElementById("numberConIVA");
var getIVA = document.getElementById("numberIVA");
var getDividirEntre = document.getElementById("dividirEntre");
// selecciona persona natural o jurídica
function cambiarNatural() {
}
// cambia el formato de origen esperado al pegar
function cambiarFormato() {
    var x = getFormato.selectedIndex;
    var y = getFormato.options;
    // el nuevo valor
    miFormato = y[x].value;
    var msj;
    if (miFormato == "puntocoma"){
        msj = "Formato de origen colombiano";
        showSnackbar(msj);
        getFormato.setAttribute("title", msj);    
    } else {
        msj = "Formato de origen extranjero";
        showSnackbar(msj);
        getFormato.setAttribute("title", msj);
    }    
}
// De la Calculadora IVA
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

// Del convertidor
// ***************

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
// Cuando cambian las pulgadas2
function cambiaPulgadas2() {   
    try {
        if (Number(getPulgadas2.value) == 0 && getPulgadas2.value == "") {
            getCm2.value = "";
            return;
        }
        var temp;
        temp = Number(getPulgadas2.value) * 2.54;
        getCm2.value = Number(temp.toFixed(2));
    }
    catch (err) {
        getCm2.value = "";
        getPulgadas2.value = "";
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
// Cuando cambian los centímetros2
function cambiaCm2() {
    try {        
        if (Number(getCm2.value) == 0 && getCm2.value == "") {
            getPulgadas2.value = "";
            return;
        }        
        var temp;
        temp = Number(getCm2.value) / 2.54;
        getPulgadas2.value = Number(temp.toFixed(2));
    }
    catch (err) {
        getCm2.value = "";
        getPulgadas2.value = "";
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
// evento change valor pulgadas2
getPulgadas2.onchange = function () {
    cambiaPulgadas2();
}
// evento input valor pulgadas
getPulgadas.oninput = function () {
    cambiaPulgadas();
}
// evento input valor pulgadas2
getPulgadas2.oninput = function () {
    cambiaPulgadas2();
}
// evento change valor cm
getCm.onchange = function () {
    cambiaCm();
}
// evento change valor cm2
getCm2.onchange = function () {
    cambiaCm2();
}
// evento input valor cm
getCm.oninput = function () {
    cambiaCm();
}
// evento input valor cm2
getCm2.oninput = function () {
    cambiaCm2();
}
// divide el valor con IVA entre el valor indicado
function dividir() {
    try {        
        if (Number(getDividirEntre.value) == 0 && getDividirEntre.value == "") {
            getDividirEntre.value = 1;
            showSnackbar("Valor no válido");
            return;
        }
        if (Number(getDividirEntre.value) == 0) {
            getDividirEntre.value = 1;
            showSnackbar("División por cero no es permitida");
            return;
        }          
        var temp;
        temp = Number(getConIVA.value) / Number(getDividirEntre.value);
        getConIVA.value = Number(temp.toFixed(2));
        cambiaConIVA();
        showSnackbar("División realizada");
    }
    catch (err) {
        getSinIVA.value = "";
        getIVA.value = "";
        getConIVA.value = "";
        getDividirEntre.value = "1";
        showSnackbar("Error al efectuar la división");
    }       
}

// copia el valor sin IVA al portapapeles
function copiarValorSinIVA() {
    //aquí guarda la cadena a copiar
    var copyText = "0";
    if (Number(getSinIVA.value) == 0 && getSinIVA.value == "") {
        copyText = "0";        
    } else {
        // recupera el valor sin IVA, con ejemplos de formato
        //copyText = Number(getSinIVA.value).toLocaleString(); // podría ser: 1.200,35 y no serviría
        copyText = "" + Number(getSinIVA.value); // se espera que sea: "1200.35" y ahora sí sirve
    }    
    // para el software contable necesitábamos la "coma" como separador decimal
    // era un requerimiento específico, ahora trabaja con punto:
    //copyText = copyText.replace(".", ","); // se espera: 1200,35 y era lo que necesitábamos
    //copiamos la cadena con el formato deseado
    copyToClipboard(copyText);
    showSnackbar("Copiado para Pymes+");
}
// copia el número de documento al portapapeles
function copiarDocumento() {
    //aquí guarda la cadena a copiar
    var copyText = "";    
    // recupera el valor ingresado        
    copyText = "" + getTxtDocumento.value;
    if (copyText == "") {
        // no hay nada escrito
        showSnackbar("No hay nada que copiar...");
        return;
    }
    //copiamos la cadena
    copyToClipboard(copyText);
    showSnackbar("Documento copiado al portapapeles");
}
// copia el correo electrónico al portapapeles
function copiarCorreo() {
    //aquí guarda la cadena a copiar
    var copyText = "";    
    // recupera el valor ingresado        
    copyText = "" + getTxtCorreo.value;
    if (copyText == "") {
        // no hay nada escrito
        showSnackbar("No hay nada que copiar...");
        return;
    }
    //copiamos la cadena
    copyToClipboard(copyText);
    showSnackbar("Correo copiado al portapapeles");
}
// el botón dividir
getBtnDividir.onclick = function () {
    dividir();    
}
// el botón copiar valor sin IVA
getBtnCopiar.onclick = function () {
    copiarValorSinIVA();    
}
// el botón copiar número de documento
getBtnCopiarDocumento.onclick = function () {
    copiarDocumento();    
}
// el botón copiar correo electrónico
getBtnCopiarCorreo.onclick = function () {
    copiarCorreo();    
}
// el botón pegar
getBtnPegar.onclick = function () {
    try {        
        pegar();                       
    }
    catch (err) {
         showSnackbar("Error al intentar pegar");
    } 
}
// el botón Extraer
getBtnExtraer.onclick = function () {
    try {        
        pegarParaExtraer();                       
    }
    catch (err) {
         showSnackbar("Error al intentar extraer los dígitos");
    } 
}
// recibe texto, extrae los dígitos y los copia al portapapeles
function copiarDígitos(text) {
    if (text == undefined) {
        // otros formatos en el portapapeles, como imágenes
        text = "";
    }
    text = "" + text;
    var Dígitos = "";
    var char = "";
    var contador = 0;    
    for (var i = 0; i < text.length; i++) {
        char = text.charAt(i);
        if ( "1234567890".indexOf(char) != -1 ) {
            Dígitos = Dígitos + char;
            contador = 1 + contador;
        }
    } 
    var msj;
    if (contador == 1) {               
        msj = "Se extrajo 1 dígito";
    } else if (contador > 1) {
        msj = "Se extrajeron " + contador + " dígitos";    
    } else {
        msj = "No hay dígitos que extraer. Se copió un cero";
        Dígitos = "0"; // copia un cero si no hay dígitos
    }
    // copia la cadena extraída
    copyToClipboard(Dígitos);
    // alerta visible
    getSpanCopiado.innerHTML = Dígitos
    getAlert.style.display = "block";
    // cancela el timerAlert
    clearTimeout(timerAlert);
    // unos segundos despúes oculta la alerta
    timerAlert = setTimeout(function () {
        getAlert.style.display = "none";
    }, 30000);
    // mensaje 
    showSnackbar(msj);
}
function pegarTexto(text) {
    if (text == undefined) {
        // otros formatos en el portapapeles, como imágenes
        text = "0";
    }
    switch (miFormato) {
        case "puntocoma":
            // formato colombiano
            // quita los puntos
            text = text.replace (".", "");       
            // reemplaza la coma por punto como separador decimal válido para JS
            text = text.replace (",", "."); // valid number
            break;
        case "comapunto":
            // formato extranjero            
            // solo quita las comas
            text = text.replace (",", "");
            break;       
    }
    
    if (isNaN(text)) {
        text = "0"; // si no es un número, asume 0
    }
    getSinIVA.value = Number(text);
    cambiaSinIVA();
    //showSnackbar("Pegado desde Pymes+");
}
// función para pegar texto. Devuelve el texto en el portapapeles
function pegar() {
    if (window.clipboardData && window.clipboardData.getData) {
        // para IE
        // IE specific code path to prevent textarea being shown while dialog is visible.
        //alert ("parece ie");
        pegarTexto( window.clipboardData.getData("Text") );
        showSnackbar("Pegado desde Pymes+");
    }
    else if (navigator.clipboard) { 
        // otros navegadores, no funciona en Firefox          
            //sintaxis con => genera error de compilación en ie  
            navigator.clipboard.readText().then(function (textFromClipboard) {
                //do stuff with textFromClipboard
                pegarTexto(textFromClipboard);
                showSnackbar("Pegado desde Pymes+");
              });
    }
}
// Recupera el texto en el portapapeles y lo pasa a la función copiarDígitos
function pegarParaExtraer() {
    if (window.clipboardData && window.clipboardData.getData) {
        // para IE
        // IE specific code path to prevent textarea being shown while dialog is visible.
        //alert ("parece ie");
        copiarDígitos( window.clipboardData.getData("Text") );
        //showSnackbar("Dígitos Extraídos");
    }
    else if (navigator.clipboard) { 
        // otros navegadores, no funciona en Firefox          
            //sintaxis con => genera error de compilación en ie  
            navigator.clipboard.readText().then(function (textFromClipboard) {
                //do stuff with textFromClipboard
                copiarDígitos(textFromClipboard);
                //showSnackbar("Dígitos Extraídos");
              });
    }
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
    getCm2.value = "";
    getPulgadas2.value = "";
    getSinIVA.value = "";
    getIVA.value = "";
    getConIVA.value = "";
    getDividirEntre.value = 1;
    getFormato.value = "comapunto";
    miFormato = "comapunto";
    getTxtDocumento.value = "";
    getTxtCorreo.value = "";
    getOptNatural.checked = true;
    var msj;
    msj = "Formato de origen extranjero";        
    getFormato.setAttribute("title", msj);
    // scroll
    topFunction();
});
// eventos teclado
function manejador(e, miId) {                            
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
    //ejecuta solo si presionó Enter
    //dirige el foco al siguiente con Enter                            
    if (characterCode == 13) {                                 
        // dirige el foco al siguiente con Enter     
        // Convertidor                        
        if (miId == "numberCm") {
            getCm2.focus();
        } 
        else if (miId == "numberPulg") {
            getPulgadas2.focus();
        }
        else if (miId == "numberCm2") {
            getPulgadas.focus();
        } 
        else if (miId == "numberPulg2") {
            // si es el último input, vuelve al primero, es un ciclo
            getCm.focus();
        }
        // IVA
        else if (miId == "numberSinIVA") {
            getIVA.focus();
        }
        else if (miId == "numberIVA") {
            getConIVA.focus();
        }
        else if (miId == "numberConIVA") {            
            getDividirEntre.focus();
        }
        else if (miId == "dividirEntre") {
            // si es el último input, vuelve al primero, es un ciclo
            getSinIVA.focus();
        }
    }
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
// previene pérdida de datos accidental
window.addEventListener("beforeunload", function (event) {
    // Cancela el evento según la recomendación actual.
    event.preventDefault();
  // Chrome requiere que returnValue sea establecido
    event.returnValue = "Evitando pérdida accidental de datos...";
});
// scroll
topFunction();
