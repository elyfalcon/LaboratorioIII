var btnAlta;
var divFrm;
var frmAlta;
var divInfo;
var btnCancelar;
var personajes;
personajes = {
    id: 2000,
    nombre: "Sansa",
    apellido: "Stark",
    edad: 15,
    casa: "stark",
    traidor: true,
}
window.addEventListener('load', asignarManejadores, false);

function asignarManejadores() {
   // document.getElementById("btnAgregar").addEventListener("click", traerPersonajes, false);
    traerPersonajes();
    document.getElementById('btnAgregar').addEventListener('click',crearFormulario);
}
function actualizarTabla(personajes) 
{
    var tabla = document.createElement('table');
    tabla.id = "tablaLista";
    var header = document.createElement('tr');
    var theader = document.createElement('thead');
    theader.id = 'theader';
    var atributos = [];
    for(atributo in personajes[0])
    {
        
        atributos.push(atributo);
        var th = document.createElement('th');
        th.appendChild(document.createTextNode(atributo));
        header.appendChild(th);
    }
    theader.appendChild(header);
    tabla.appendChild(theader);

    var tbody = document.createElement('tbody');
    tbody.id = 'bodyTabla';
    for(persona of personajes)
    {
        var tr = document.createElement('tr');
        for(atributo of atributos)
        {
            
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(persona[atributo]));
            tr.appendChild(td);
        }
        tr.id = 'tableRow';
        tr.addEventListener('click',crearFormulario);
        tbody.appendChild(tr);
    }
    tabla.appendChild(tbody);
    document.body.appendChild(tabla);
}

function consultarFormExistente()
{
    for(hijos of document.body.children)
    {
        if(hijos.className == 'frmAlta')
        {
            return 0;
        }
    }
}

function crearFormulario()
{
    if(consultarFormExistente()==0)
    {
        return -1;
    }
    var formulario = document.createElement('form');
    formulario.className = 'frmAlta';
    var tabla = document.createElement('table');
    var header = document.getElementById('theader');
    var i = 0;
   // console.log(header.children[0].children.length);
    for(i = 0; i< personajes.length; i++)
    {
        console.log(header.children[0].children[i].innerText);
       
        var tr = document.createElement('tr');
        var label = document.createElement('label');
        label.className = 'labelForm';
        label.innerText = header.children[0].children[i].innerText;
        var td = document.createElement('td');
        td.appendChild(label);
        tr.appendChild(td);
        var input = document.createElement('input');
        input.className = 'inputForm';
        if(this.id == 'tableRow')
        {
            input.value = this.children[i].innerText;
        }
        if(header.children[0].children[i].innerText == 'id')
        {
            input.disabled = true;
        }
        if(header.children[0].children[i].innerText == 'nombre')
        {
            input.type = 'nombre';
        }
        var td = document.createElement('td');
        td.appendChild(input);
        tr.appendChild(td);
        tabla.appendChild(tr);
    }
    agregarRadioButtons(tabla,this);
    agregarBotonesRow(tabla,this);
    agregarBotonEnviar(tabla,this);
    formulario.appendChild(tabla);
    document.body.appendChild(formulario);
}

function agregarBotonEnviar(tabla,caller)
{
    if(caller.id == 'btnAlta')
    {
        var tr = document.createElement('tr');
        var Enviar = document.createElement('button');
        Enviar.innerText = 'Dar de Alta';
        Enviar.type = 'button';
        Enviar.className = 'btnForm';
        Enviar.addEventListener('click',altaPersona);
        var td = document.createElement('td');
        td.appendChild(Enviar);
        tr.appendChild(td);
        agregarBotonCancelar(tabla,tr);
        tabla.appendChild(tr);
    }
}

function agregarBotonesRow(tabla, caller)
{
    if(caller.id == 'tableRow')
    {
        var tr = document.createElement('tr');
        var modificar = document.createElement('button');
        modificar.innerText = 'Modificar';
        modificar.type = 'button';
        modificar.className = 'btnForm';
        modificar.addEventListener('click',modificacionPersona);
        var td = document.createElement('td');
        td.appendChild(modificar);
        tr.appendChild(td);
        var Eliminar = document.createElement('button');
        Eliminar.innerText = 'Eliminar';
        Eliminar.type = 'button';
        Eliminar.className = 'btnForm';
        Eliminar.addEventListener('click',eliminacionPersona);
        var td = document.createElement('td');    
        td.appendChild(Eliminar);
        tr.appendChild(td);
        agregarBotonCancelar(tabla,tr);
        tabla.appendChild(tr);
    }
}

function agregarBotonCancelar(tabla,tr)
{
    var Cancelar = document.createElement('button');
    Cancelar.innerText = 'Cancelar';
    Cancelar.type = 'button';
    Cancelar.className = 'btnForm';
    Cancelar.addEventListener('click',cerrarForm);
    var td = document.createElement('td');
    td.appendChild(Cancelar);
    tr.appendChild(td);
}

function agregarRadioButtons(table,caller)
{
    var tr = document.createElement('tr');    
    var label = document.createElement('label');
    label.className = 'labelForm';
    label.innerText = "No es traidor";
    tr.appendChild(label);
    var input = document.createElement('input');
    input.type = 'radio';
    input.id = 'Female';
    input.name = 'condicion';
    input.className = 'inputForm';
    var td = document.createElement('td');
    tr.appendChild(input);
    cargarRadioButtons(caller,input);
    var label = document.createElement('label');
    label.className = 'labelForm';
    label.innerText = "Traidor";
    tr.appendChild(label);
    var input = document.createElement('input');
    input.type = 'radio';
    input.id = 'Male';
    input.className = 'inputForm';
    input.name = 'condicion';
    cargarRadioButtons(caller,input);    
    var td = document.createElement('td');
    tr.appendChild(input);
    table.appendChild(tr);
}

function cargarRadioButtons(caller,input)
{
    if(caller.id == 'tableRow')
    {
        var validacion = caller.children[4].innerText=='Traidor';        
        if(validacion == true && input.id == 'Traidor')
        {
            input.defaultChecked = true;            
        }
        else if(validacion == false && input.id == 'No es traidor')
        {
            input.defaultChecked = true;            
        }
    }
}

function cerrarForm()
{
    document.body.removeChild(document.getElementsByClassName('frmAlta')[0]);
}




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