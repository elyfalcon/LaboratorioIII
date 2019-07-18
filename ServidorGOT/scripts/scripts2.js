var personajes=[];
window.addEventListener('load', asignarManejadores, false);

function asignarManejadores() {
   // document.getElementById("btnAgregar").addEventListener("click", traerPersonajes, false);
    traerPersonajes();
}

function armarTabla() {

var div=document.getElementById("info");
var header=document.createElement('tr');
//crea un elemento <table>
var header = document.createElement('tr');
var tabla = document.createElement('table');
//crea el encabezado
for (var i in personajes[0])
{
    var th = document.createElement('th');
    var texto = document.createTextNode(key);
    th.appendChild(texto);
    header.appendChild(th);
}
tabla.appendChild(header);
//creo celdas en la tabla
for (var fila in personajes) {
    //creo hileras en la tabla
    var tr = document.createElement('tr');

    for (var columna in personajes[fila]) {
        var th = document.createElement('td');
        var texto = document.createTextNode(personajes[fila][columna]);
        th.setAttribute('id', fila);
        th.addEventListener('click', cargarFormularioSeleccionado, false); //escuchador a la celda
        th.appendChild(texto);
        tr.appendChild(th);
    }

    tabla.appendChild(tr);
    div.appendChild(tabla);
}

}//fin armarTabla

