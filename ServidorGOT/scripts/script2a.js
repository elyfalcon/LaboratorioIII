var personajes=[];
window.addEventListener('load', asignarManejadores, false);

function asignarManejadores() {
   // document.getElementById("btnAgregar").addEventListener("click", traerPersonajes, false);
    traerPersonajes();
}

function armarTabla(Personajes)
{
    console.log(Personajes);
    var tabla = document.createElement('table');
    tabla.setAttribute('id','tablaPersonajes');
    var header= document.createElement('tr');
    header.setAttribute('id','tableHeader');
    for(atributos in personajes[0])
    {
        if(atributos == 'active'|| atributos == 'created_dttm')
        {
            continue;
        }
        var th = document.createElement('th');
        th.append(atributos);
        header.appendChild(th);
    }
    tabla.appendChild(header);

    for(pers of personajes)
    {
        var fila = document.createElement('tr');
        fila.addEventListener('click',crearFormulario);
        fila.setAttribute('class','tableRow');
        for(atributo in pers)
        {
            if(atributo == 'active'|| atributo == 'created_dttm')
            {
                continue;
            }
            var td = document.createElement('td');
            td.append(pers[atributo]);
            fila.appendChild(td);
        }
        tabla.appendChild(fila);
    }
    var boton = document.createElement('button');
    boton.setAttribute('id','botonAgregar');
    boton.setAttribute('type','button');
    boton.innerText = 'Agregar';
    boton.addEventListener('click',crearFormulario);
    document.body.appendChild(tabla);
    document.body.appendChild(boton);
}
function agregarNuevosAtributos(fila, header)
{
    var atributosNuevos = encontrarAtributosNuevos(fila,header.children);
    if(atributosNuevos.length != 0)
    {
        for(atributos of atributosNuevos)
        {
            var th = document.createElement('th');
            th.appendChild(document.createTextNode(atributos));
            header.appendChild(th);
        }
    }
}

function encontrarAtributosNuevos(fila, headerActual)
{
    var keys = Object.keys(fila);
    console.log(fila);
    var atributosNuevos = [];
    var flag=false;
    console.log(atributosObjeto);
    for(atributosObjeto in keys)
    {
            for(atributosHeader in headerActual)
        {
            if((atributosObjeto).toLowerCase() == (atributosHeader.innerText).toLowerCase())
            {
                flag = true;
                break;
            }
        }
        if(flag == false)
        {
            atributosNuevos.push(atributosObjeto);
        }
    }
    return atributosNuevos;
}



function agregarBoton(texto) {
    var armarTextoID = "btn" + texto;
    var btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'btn');
    btn.setAttribute('value', texto);
    btn.setAttribute('id', armarTextoID);
    return btn;

}

function crearFormulario()
{
    for(hijos in document.body.childNodes)
    {
        if(hijos.tagName == "FORM")
        {
            return -1;
        }
    }
    var header = document.getElementById('tableHeader');
    var form = document.createElement('form');
    var tabla = document.createElement('table');
    tabla.setAttribute('id','accionTabla');
    var i = 0;
    console.log(header.children);
    for(atributos in header.children)
    {
        var tr = document.createElement('tr');
        var label = document.createElement('label');
        label.setAttribute('class','labels');
        label.innerText = atributos.innerText+": ";
        var td = document.createElement('td');
        td.appendChild(label);
        tr.appendChild(td);
        var td = document.createElement('td');
        var input = document.createElement('input');
        input.setAttribute('class','inputs');
        if(atributos.innerText == 'id')
        {
            input.setAttribute('disabled','true');
        }
        td.appendChild(input);
        tr.appendChild(td);
        tabla.appendChild(tr);
        if(this.className == 'tableRow')
        {
            input.value = this.childNodes[i].innerText;               
            i++;
        }
    }

    if(this.className == 'tableRow')
    {
        var modificar = document.createElement('button');
        modificar.innerText='Modificar';
        modificar.setAttribute('type','button');
        modificar.addEventListener('click',modificarHeroe);
        var borrar = document.createElement('button');
        borrar.innerText='Borrar';
        borrar.setAttribute('type','button');
        borrar.addEventListener('click',borrarHeroe);
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.appendChild(modificar);
        tr.appendChild(td);
        td.appendChild(borrar);
        tr.appendChild(td);
        tabla.appendChild(tr);
    }

    if(this.id == 'botonAgregar')
    {
        var enviar = document.createElement('button');
        enviar.innerText='Enviar';
        enviar.setAttribute('type','button');
        enviar.addEventListener('click',enviarPersonaje);
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.appendChild(enviar);
        tr.appendChild(td);
        tabla.appendChild(tr);
    }
    var cancelar = document.createElement('button');
    cancelar.setAttribute('type','button');
    cancelar.innerText = 'Cancelar';
    cancelar.setAttribute('id','btnCancelar');
    cancelar.addEventListener('click',function()
    {
        var form = document.getElementsByTagName('form');
        document.body.removeChild(form[0]);
    });
    td.appendChild(cancelar);
    tr.appendChild(td);
    tabla.appendChild(tr);
    form.appendChild(tabla);
    document.body.appendChild(form);
}

function enviarPersonaje()
{
    var inputs = document.getElementsByClassName('inputs');
    var personaje = new personaje(/*getLastId()*/inputs[1].value,inputs[2].value,inputs[3].value,inputs[4].value,inputs[5].value);
    agregarPersona(personaje);
    var form = document.getElementsByTagName('form');
    document.body.removeChild(form[0]);
}

function getLastId()
{
    var lenght = personajes.length;
    return personajes[lenght-1].id+1;
}
    
function cargarInputs(caller,input, i)
{
    if(caller.className == 'tableRow')
    {
        input.value = caller.children[i].innerText;
    }
}
////////////////////////////////////
///////////////CONSTRUCTOR

function nuevoPersonaje(tieneID) {
    var persona = {};
    if (tieneID) {
        persona.id = document.getElementById('id').value;
    }
    persona.nombre = document.getElementById('nombre').value;
    persona.apellido = document.getElementById('apellido').value;
    persona.edad = document.getElementById('edad').value;

    //cambia para adaptar///////////////////////////////////////
    var resp = document.getElementById("stark").checked;
    var resp2 = document.getElementById("targaryen").checked;
    var resp3 = document.getElementById("lanister").checked;

    if (resp == true) {
        persona.casa = "stark";
    } else if (resp2 == true) {
        persona.casa = "targaryen";
    } else {
        persona.casa = "lanister";
    }

    var resp = document.getElementById('traidor').checked;
    if (resp) {
        persona.traidor = true;
    } else {
        persona.traidor = false;
    }
    return persona;
}
function agregarPersona() {

    var personaje = nuevoPersonaje(false);

    var info = document.getElementById('info');
    var spinner = document.getElementById('spinner');

    var personaRta;

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

        if (this.readyState == XMLHttpRequest.DONE) {
            if (this.status == 200) {
                personaRta = JSON.parse(xhr.responseText);

                for (var key in personaRta) // arma el formulario y lo completa
                {
                    crearFormulario(key, personaRta[key]); //crea de nuevo el formulario, reutiliza codigo
                }

                info.innerHTML = "";
                spinner.innerHTML = "";

                traerPersonas();

            } else {
                console.log("error: " + xhr.status);
            }

        } else {
            spinner.appendChild(ponerSpinner()); //mientras no responde positivo muestra manejador
        }

    };

    xhr.open('POST', 'http://localhost:3000/altaPersonaje', true); //abre la conexion( metodo , URL, que sea asincronico y no se quede esperando el retorno)

    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(personaje));

    // con POST LOS DATOS PASAR POR SEND
}






////////////////////////////////////

//Llamado a la funcion traerPersonajes de server.js
function traerPersonajes() {

    //var spinner = document.getElementById('spinner');
    
    var info = document.getElementById('info');
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {

            if(xhr.readyState==4) {
            console.log("estoy en el 4");
            console.log(xhr.readyState);
            console.log(xhr.status);
            if (this.status == 200) {
                info.innerHTML = "";
                console.log("entre al 200");
              var res=this.responseText;
                console.log(res);
                document.getElementById('spinner').style.display='none';  
                var personajes = JSON.parse(res);
              //  console.log("Personajes: " + personajes[1].id);

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