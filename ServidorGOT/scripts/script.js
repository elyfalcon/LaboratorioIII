var personajes=[];
window.addEventListener('load', asignarManejadores, false);

function asignarManejadores() {
   // document.getElementById("btnAgregar").addEventListener("click", traerPersonajes, false);
    traerPersonajes();
}

function armarTabla(personajes){
    var div = document.getElementById("info");

    var tabla = document.createElement("table");
    tabla.id = 'tablaGOT';
//

    var header=crearHeader();
    tabla.appendChild(header);
    document.body.appendChild(tabla);

}
function crearHeader()
{
    var header = document.createElement('tr');
    var div = document.getElementById("info");
    header.id = 'headerTabla';
    if(personajes.length==0)
    {
        datos = {

            id: 1,
            nombre: "Sansa",
            apellido: "Stark",
            edad: 15,
            casa: "stark",
            traidor: true,
        }
        personajes.push(datos);
    
    }
    else{
        for(atributos in personajes[0])
        {
        var th = document.createElement('th');
        th.append(atributos);
        header.appendChild(th);
         }
        }
        tabla.appendChild(header);
    return header;
}
function crearBody(tabla,header)
{
    for(heroe of personajes)
    {
       //agregarAtributos(heroe,header);
       var tr=document.createElement('tr');
       tr.className='tableRow';
       tr.addEventListener('click',crearFormulario);
    for(var col in personajes[fila])
        {
            var td=document.createElement('td');
           // var texto=document.createTextNode
            td.append(personajes[heroe,columna]);
            tr.appendChild(td);
        }   
        tabla.appendChild(tr);
 }
    div.appendChild(tabla);
}
//Llamado a la funcion traerPersonajes de server.js
function traerPersonajes() {

    //var spinner = document.getElementById('spinner');
    
    var info = document.getElementById('info');
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

       // if (this.readyState == XMLHttpRequest.DONE)
        if(xhr.readyState==4) {
            console.log("estoy en el 4");
            console.log(xhr.readyState);
            console.log(xhr.status);
            if (this.status == 200) {
              console.log("entre al 200");
                document.getElementById('spinner').style.display='none';  
                personajes = JSON.parse(xhr.responseText);
                console.log("personas " + personajes);

                armarTabla(personajes);
                //info.innerHTML = " ";
                //spinner.innerHTML = "";
                //armarListado();

            } else {
               // spinner.innerHTML = " ";
               document.getElementById('spinner').style.display='inline'; 
               console.log("error: " + xhr.status);
            }

        } else {
           // spinner.appendChild(ponerSpinner()); //mientras no responde positivo muestra manejador
           document.getElementById('spinner').style.display='inline';
        }

    };

    xhr.open('GET', 'http://localhost:3000/traerPersonajes', true); //abre la conexion( metodo , URL, que sea asincronico y no se quede esperando el retorno)
    xhr.send(); 
}