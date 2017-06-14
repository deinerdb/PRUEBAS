//título y subtítulo de la sección...
document.getElementById("títuloscript").innerHTML = "Sección escrita desde JavaScript.";
document.getElementById("subtítuloscript").innerHTML = "Cargando scripts en el archivo script.js...";
document.write("Desde JavaScript se escribe: ¡Hola!");
salto();
//Esto es un comentario de una línea
document.write("<b>Practicando variables y otras cosas básicas...</b>");
salto();
/*Esto es
    un grupo
    de comentarios
*/
var cadena = "Esto es una variable de cadena.";
document.write(cadena);
salto();
var numero;
numero = 1914;
document.write("Esto es una variable numérica tipo entera: " + numero);
salto();
var peso;
peso = 12.5;
document.write("Esto es una variable numérica tipo flotante: " + peso.toLocaleString());
salto();
var continuar;
continuar = true;
document.write("Esto es una variable tipo booleano: " + continuar);
continuar = false;
salto();
document.write("Esto es una variable tipo booleano: " + continuar);
salto();
var lista =["Mateo", "Marcos", "Lucas", "Juan"];
document.write("Esto es un elemento de una variable tipo arreglo o vector: " + lista[3]);
salto();
document.write("El arreglo o vector completo es: ");
salto();
document.write("Lista[0] = " + lista[0]); salto();
document.write("Lista[1] = " + lista[1]); salto();
document.write("Lista[2] = " + lista[2]); salto();
document.write("Lista[3] = " + lista[3]);
salto();
document.write("<b>Practicando operadores aritméticos:</b> "); salto();
var a = 7;
var b = 2;
var resultado = 0;
document.write("Si a = 7 y b = 2"); salto();
resultado = a + b;
document.write("a + b = " + resultado); salto();
resultado = a - b;
document.write("a - b = " + resultado); salto();
resultado = a * b;
document.write("a * b = " + resultado); salto();
resultado = a / b;
document.write("a / b = " + resultado.toLocaleString()); salto();
//residuo
resultado = a % b;
document.write("a % b = " + resultado + " (esto es el residuo)"); salto();
a++;
resultado = a;
document.write("a++ = " + resultado + " (esto es el incremento)"); salto();
b--;
resultado = b;
document.write("b-- = " + resultado + " (esto es el decremento)"); salto();
document.write("<b>Practicando operadores relacionales:</b> "); salto();
a = 7;
b = 2;
var comparar = true;
document.write("Si a = 7 y b = 2"); salto();
comparar = (a > b);
document.write("a > b = " + comparar + " (mayor que)"); salto();
comparar = (a < b);
document.write("a < b = " + comparar + " (menor que)"); salto();
comparar = (a >= b);
document.write("a >= b = " + comparar + " (mayor o igual que)"); salto();
comparar = (a <= b);
document.write("a <= b = " + comparar + " (menor o igual que)"); salto();
comparar = (a == b);
document.write("a == b = " + comparar + " (igual que)"); salto();
comparar = (a != b);
document.write("a != b = " + comparar + " (distinto de)"); salto();
document.write("<b>Practicando operadores lógicos:</b>"); salto();
document.write("<b>&& es el operador AND</b>"); salto();
var premisa1;
var premisa2;
document.write("Si premisa1 = true y premisa2 = true"); salto();
premisa1 = true;
premisa2 = true;
comparar = (premisa1 && premisa2);
document.write("premisa1 && premisa2 = " + comparar + " (VERDADERO)"); salto();
document.write("Si premisa1 = true y premisa2 = false"); salto();
premisa1 = true;
premisa2 = false;
comparar = (premisa1 && premisa2);
document.write("premisa1 && premisa2 = " + comparar + " (FALSO)"); salto();
document.write("Si premisa1 = false y premisa2 = true"); salto();
premisa1 = false;
premisa2 = true;
comparar = (premisa1 && premisa2);
document.write("premisa1 && premisa2 = " + comparar + " (FALSO)"); salto();
document.write("Si premisa1 = false y premisa2 = false"); salto();
premisa1 = false;
premisa2 = false;
comparar = (premisa1 && premisa2);
document.write("premisa1 && premisa2 = " + comparar + " (FALSO)"); salto();
document.write("<b>|| es el operador OR</b>"); salto();
document.write("Si premisa1 = true y premisa2 = true"); salto();
premisa1 = true;
premisa2 = true;
comparar = (premisa1 || premisa2);
document.write("premisa1 || premisa2 = " + comparar + " (VERDADERO)"); salto();
document.write("Si premisa1 = true y premisa2 = false"); salto();
premisa1 = true;
premisa2 = false;
comparar = (premisa1 || premisa2);
document.write("premisa1 || premisa2 = " + comparar + " (VERDADERO)"); salto();
document.write("Si premisa1 = false y premisa2 = true"); salto();
premisa1 = false;
premisa2 = true;
comparar = (premisa1 || premisa2);
document.write("premisa1 || premisa2 = " + comparar + " (VERDADERO)"); salto();
document.write("Si premisa1 = false y premisa2 = false"); salto();
premisa1 = false;
premisa2 = false;
comparar = (premisa1 || premisa2);
document.write("premisa1 || premisa2 = " + comparar + " (FALSO)"); salto();
document.write("<b>! es el operador NOT o de NEGACIÓN</b>"); salto();
document.write("Si premisa1 = true y premisa2 = false"); salto();
premisa1 = true;
premisa2 = false;
comparar = !premisa1;
document.write("!premisa1 = " + comparar + " (FALSO)"); salto();
comparar = !premisa2;
document.write("!premisa2 = " + comparar + " (VERDADERO)"); salto();
document.write("<b>ESTRUCTURAS DE CONTROL</b>"); salto();
var edad;
document.write("<b>if</b>"); salto();
document.write("Si edad = 20 es..."); salto();
edad=20;
if (edad >= 18) {
    document.write("Mayor de edad"); salto();
} else {
    document.write("Menor de edad"); salto();
}
document.write("Si edad = 16 es..."); salto();
edad=16;
if (edad >= 18) {
    document.write("Mayor de edad"); salto();
} else {
document.write("Menor de edad"); salto();
}
if (new Date().getHours() < 12) {
    document.write("Un <b>if simple</b> se ha usado para determinar que... ¡AÚN NO ES MEDIO DÍA!"); salto();
}
if (new Date().getHours() >= 12) {
    document.write("Un <b>if simple</b> se ha usado para determinar que... ¡YA PASÓ EL MEDIO DÍA!"); salto();
}

document.write("<b>for</b>"); salto();
document.write("Escribamos con un for el resultado de 5 iteraciones..."); salto();
var i;
for (i = 1; i <= 5; i++) {
    document.write("Iteración " + i); salto();
}
document.write("Escribamos con un for el vector usado antes..."); salto();
for (i = 0; i < lista.length; i++) {
    document.write("Lista[" + i + "] = " + lista[i]); salto();
}

document.write("<b>while</b>"); salto();
document.write("Escribamos con un while el valor de i mientras que sea menor que 4..."); salto();
i = 0;
while (i < 4) {
    document.write("i = " + i);
    salto();
    i++;
}

document.write("<b>do while</b>"); salto();
document.write("Se ejecuta al menos una vez porque la condición se evalúa al final."); salto();
document.write("Escribamos con un do while el valor de i mientras que sea menor que 4..."); salto();
i = 0;
do{
    document.write("i = " + i);
    salto();
    i++;
} while (i < 4)

document.write("<b>FUNCIONES</b>"); salto();
saludo();
saludaraalguien("Deiner");
document.write("Si a = 7 y b = 2"); salto();
a = 7;
b = 2;
document.write("El producto a x b calculado con una función con dos parámetros y que devuelve un valor es:"); salto();
document.write(multiplicar(a, b)); salto();

document.write("<b>OBJETOS</b>"); salto();
//creando un objeto paciente
document.write("Creamos un objeto <em>paciente</em> con propiedades y métodos..."); salto();
var paciente = {
    //propiedades
    edad: 0,
    estatura: 0,
    peso: 0,
    //métodos
    cambiarpeso: function (cambio) {
        paciente.peso = paciente.peso + cambio;
    }
}
//cambiando propiedades del objeto
document.write("Cambiamos sus propiedades (edad, estatura, peso)..."); salto();
paciente.edad = 37;
paciente.estatura = 1.73;
paciente.peso = 80;
//mostremos el objeto
document.write("Mostrando el objeto paciente..."); salto();
document.write("paciente.edad = " + paciente.edad); salto();
document.write("paciente.estatura = " + paciente.estatura); salto();
document.write("paciente.peso = " + paciente.peso); salto();
//ejecutando método del objeto
document.write("Ejecutamos un método del objeto (cambiarpeso(-2))..."); salto();
paciente.cambiarpeso(-2);
document.write("paciente.peso = " + paciente.peso); salto();
//creando una clase
document.write("Creamos una clase <em>estudiante</em> con una función constructor..."); salto();
//función constructor de la clase estudiante
function estudiante() {
    //propiedades
    this.nivel = 1;
    this.nombre = "NN";
    this.activo = true;
    //métodos
    this.renombrar = function (nuevonombre) {
        this.nombre = nuevonombre;
    }
}
//nueva instancia
document.write("Creamos un nuevo objeto <em>estudiante</em> llamado estudianteX..."); salto();
var estudianteX = new estudiante();
document.write("Le cambiamos el nombre con el método <em>renombrar</em> y el atributo <em>nombre</em> devuelve:"); salto();
estudianteX.renombrar("José Pérez");
document.write("estudianteX.nombre = " + estudianteX.nombre); salto();
document.write("Los otros atributos son..."); salto();
document.write("estudianteX.nivel = " + estudianteX.nivel); salto();
document.write("estudianteX.activo = " + estudianteX.activo); salto();
//OBJETO WINDOW
document.write("<b>OBJETO WINDOW</b>"); salto();
document.write("Haga clic para mostrar una alerta..."); salto();
document.write("<button onclick='mostraralerta()'>Alerta</button>"); salto();
document.write("Haga clic para mostrar una ventana de confirmación tipo ACEPTAR/CANCELAR..."); salto();
document.write("<button onclick='confirmar()'>Confirmar</button>"); salto();
document.write("<p id='presionado'></p>"); salto();
//location
document.write("<b>location:</b>"); salto();
document.write("<p id='location'></p>"); salto();
var textlocation = "";
textlocation += "<b>windows.location.href = </b>" + window.location.href + "<br /><br />";
textlocation += "<b>windows.location.hostname = </b>" + window.location.hostname + "<br /><br />";
textlocation += "<b>windows.location.pathname = </b>" + window.location.pathname + "<br /><br />";
textlocation += "<b>windows.location.protocol = </b>" + window.location.protocol + "<br />";

document.getElementById("location").innerHTML = textlocation;

document.write("<b>setInterval y setTimeout:</b>"); salto();
document.write("<p id='timeout'>...</p>"); salto();
setTimeout(probartimeout, 10000);
document.write("Un reloj creado con <em>setInterval</em>"); salto(); salto();
document.write("<p id='interval'>00:00:00</p>"); salto();
setInterval(miReloj, 1000);

document.write("<b>getElementsByName</b>"); salto();
document.write("Nombre buscado = 'especial'"); salto();
document.write("Encontrados = " + document.getElementsByName("especial").length); salto();
document.write("Etiqueta = " + document.getElementsByName("especial")[0].tagName); salto();
document.write("Contenido = " + document.getElementsByName("especial")[0].textContent); salto();

document.write("<b>getElementsById</b>"); salto();
document.write("Al párrafo 'especial' le cambiamos el color a púrpura."); salto();
document.getElementById("especial").style.color = "purple";

document.write("<b>getElementsByTagName</b>"); salto();
document.write("Número de párrafos al abrir este documento = ");
document.write(document.getElementsByTagName("P").length);
salto(); salto();
//CREANDO NODOS Y ELIMÁNDOLOS
document.write("<b>AGREGAR Y ELIMINAR ELEMENTOS</b>"); salto();
//creo párrafo
var párrafocreado = document.createElement("p");
//creo el texto
var contenidocreado = document.createTextNode("Este párrafo fue creado como un NODO y recibió formato desde JavaScript .");
//agrego el texto al párrafo
párrafocreado.appendChild(contenidocreado);
párrafocreado.style.color = "darkred";
párrafocreado.style.margin = "auto";
párrafocreado.style.textAlign = "center";
//agrego el párrafo al documento (mejor a la sección del Script).
document.getElementById("script").appendChild(párrafocreado);
document.write("<p id='eliminandoelemento'>Haga clic para eliminar el párrafo anterior...</p>"); salto();
document.write("<button id='btneliminar' onclick='eliminarpárrafo()'>Eliminar Párrafo</button>"); salto(); salto();
var Textoclick = "Evento onclick";
var TextoIn = "Evento onmouseover";
var TextoOut = "Evento onmouseout";
document.write("<p id='eventos' onmouseout='escribirevento( " + 'TextoOut' + ")' onmouseover='escribirevento( " + 'TextoIn' + ")' onclick='escribirevento( " + 'Textoclick' + ")'>Este párrafo escribe algunos de los eventos que le suceden:</br></p>"); salto();
/********************
*********************
*****FUNCIONES*******/

//escribe en el elemento el evento recibido
function escribirevento(evento) {
    txt = document.getElementById("eventos").innerHTML;
    document.getElementById("eventos").innerHTML = txt + evento + "</br>";
    document.getElementById("eventos").scrollTop = 1000000;
}
function probartimeout(){
    document.getElementById("timeout").innerHTML="¡ESTE MENSAJE APARECE 10 SEGUNDOS DESPÚES DE ABRIR LA PÁGINA!"
}
function miReloj() {
    var h = new Date();
    document.getElementById("interval").innerHTML = h.toLocaleTimeString("es-CO");
}
//Función para agregar un salto de línea
function salto() {
    document.write("<br />");
}
//elimina párrafo creado
function eliminarpárrafo() {
    párrafocreado.parentNode.removeChild(párrafocreado);
    document.getElementById("eliminandoelemento").innerHTML = "¡El párrafo fue eliminado!";
    document.getElementById("btneliminar").disabled = true;
}
function mostraralerta(x) {
    window.alert("¡Hola!\nEsto es una alerta.");
}
function confirmar() {
    var txt;
    var r = confirm("¡Presione un botón!\nSe mostrará el botón que presione.");
    if (r == true) {
        txt = "¡Presionaste ACEPTAR!";
    } else {
        txt = "¡Presionaste CANCELAR!";
    }
    document.getElementById("presionado").innerHTML = txt;
}
function saludo() {
    document.write("¡Hola, esto fue escrito desde una función sencilla!"); salto();
}
function saludaraalguien(nombre) {
    //con un parámetro
    document.write("¡Hola " + nombre + "! (Esto fue escrito desde una función con un parámetro)"); salto();
}
function multiplicar(num1, num2) {
    //devuelve el producto de dos números
    return num1 * num2;
}