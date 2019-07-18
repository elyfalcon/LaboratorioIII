var personajes=[];
window.addEventListener('load', asignarManejadores, false);

function asignarManejadores() {
   // document.getElementById("btnAgregar").addEventListener("click", traerPersonajes, false);
    traerPersonajes();
    document.getElementById('btnAgregar').addEventListener('click',crearForm);
}

function armarTabla(personajes) {

var div=document.getElementById("info");
//var header=document.createElement('tr');
//crea un elemento <table>
console.log("armar Tabla");
var header = document.createElement('tr');
header.id='headerT';
var tabla = document.createElement('table');
//crea el encabezado
if (personajes.length == 0)
    //si el array esta vacio, inventa uno 
    //para dar de base al formulario
    //dinamico, pero no lo guarda
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

for (var key in personajes[0])
{
    console.log("en el primer for de armar tbla");
    var th = document.createElement('th');
    var texto = document.createTextNode(key);
    th.appendChild(texto);
    header.appendChild(th);
}
tabla.appendChild(header);


//creo celdas en la tabla
for(var fila in personajes)
{
    console.log("en fila");
    var tr=document.createElement('tr');
   // tr.addEventListener('click', mostrarFormSeleccionado, false);
    for(var j=0;j<personajes[fila].length;j++)
    {
        console.log(personajes[fila]);
        var td=document.createElement('td');
        td.appendChild(document.createTextNode(personajes[fila][j]));
        tr.appendChild(td);
    }
   tabla.appendChild(tr);
}

   div.appendChild(tabla);
   var btnCancelar=crearElemento('button','btnAlta','Agregar Persoaje');
   btnCancelar.addEventListener('click', mostraAlta, false);
   div.appendChild(btnCancelar);
}

function crearElemento(elemento, identificador, texto,funcion) {
    item = document.createElement(elemento);
    item.id = identificador; 
    item.id='btnFrom';
    item.innerText = texto; 
    item.addEventListener('click',funcion);
    return item;
}


function mostrarFormSeleccionado()
{
    console.log("en mostrarform");
    id = this.firstChild.textContent;
    var div=document.getElementById('info');
    var flag;
  for(var fila in personajes){
      flag=false;
    if(personajes[fila]["id"] == id)
    {
        flag=true;
        newpersonaje={
            id:personaje[fila]['id'],
            nombre:personajes[fila]['nombre'],
            apellido:personajes[fila]['apellido'],
            edad:personajes[fila]['edad'],
            casa:personajes[fila]['casa'],
            traidor:traidor[fila]['traidor'],
        }
        var formulario = document.createElement('form');
        var tabla = document.createElement('table');
        for (var key in newpersonaje) {
            var tr = document.createElement('tr');
        }
        if(flag ==true)
        {
            tr.appendChild(crearFormulario);
        }
        tabla.appendChild('tr');
    }

  }
}
function crearForm()
{
    var form = document.createElement("form");
    var div = document.getElementById("info");
    div.appendChild(form);
    form.id='formGOT';
    console.log("crear form");
    //creo un fieldset
    var txtNombre = document.createElement("input");
    txtNombre.id='nombre';
    txtNombre.name='nombre';
    var textNombre=document.createTextNode('Nombre: ');
    var txtApellido = document.createElement("input");
    var textApellido=document.createTextNode('Apellido: ');
    var txtEdad = document.createElement("input");
    var textEdad=document.createTextNode('Edad:');
    txtNombre.appendChild(textNombre);
    txtApellido.appendChild(textApellido);
    txtEdad.appendChild(textEdad);
    var labNombre=document.createElement('label');
    var labApellido=document.createElement('label');
    var labEdad=document.createElement('label');
    labNombre.htmlFor="nombre";
    labNombre.innerHTML="Nombre: ";
    labNombre.appendChild(txtNombre);
    labApellido.htmlFor="apellido";
    labApellido.innerHTML="Apellido: ";
    labApellido.appendChild(txtApellido);
    labEdad.htmlFor="edad";
    labEdad.innerHTML="Edad: ";
    labEdad.appendChild(txtEdad);

    //creo los radiobotton
    var radioTargaryen = document.createElement("input");
    var radioStark = document.createElement("input");
    var radioLannister = document.createElement("input");
    radioTargaryen.setAttribute("type", "radio");
    radioTargaryen.setAttribute("name", "Casa");
    radioTargaryen.setAttribute("value", "Targaryen");

    var checkTraidor = document.createElement("input");
    var btnEnviar = document.createElement('button');
    btnEnviar.id = 'btnEnviar';
    btnEnviar.className = 'btnForm';
    btnEnviar.innerText = 'Enviar';
    btnEnviar.type = 'button';
    btnEnviar.addEventListener('click',agregarPersonaje);

    var btnCancelar = document.createElement("input");
    
    btnCancelar.setAttribute("type", "button");
    btnCancelar.setAttribute("value", "Cancelar");
    btnEnviar.setAttribute("type", "submit");
    btnEnviar.setAttribute("value", "Enviar");
    form.appendChild(txtApellido);
    form.appendChild(agregarSalto());
    form.appendChild(txtNombre);
    form.appendChild(agregarSalto());
    form.appendChild(txtEdad);
    form.appendChild(labNombre);
    form.appendChild(labApellido);
    form.appendChild(labEdad);
    radioStark.setAttribute("type", "radio");
    radioStark.setAttribute("name", "Casa");
    radioLannister.setAttribute("type", "radio");
    radioLannister.setAttribute("name", "Casa");
    radioStark.setAttribute("value", "Stark");
    radioLannister.setAttribute("value", "Lannister");
    btnCancelar.setAttribute("type", "button");
    btnCancelar.setAttribute("value", "Cancelar");
    
    form.appendChild(radioLannister);
    form.appendChild(radioStark);
    form.appendChild(radioTargaryen);
    form.appendChild(btnCancelar);
    form.appendChild(btnEnviar);
    div.appendChild(form);
}


function agregarPersonaje()
{

console.log("personaje nuevo");
    var form = document.getElementsByTagName("form")[0];
    var apellido = Nombre.nextElementSibling.nextElementSibling;
    var Nombre = form.firstElementChild.nextElementSibling;
    var edad = apellido.nextElementSibling.nextElementSibling.value;
    var casa;
//https://www.w3schools.com/jsref/prop_element_nextelementsibling.asp
}

function crearRadioButon(nombre,valor,estado)
{
    var radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');
   // var td = document.createElement('td');
    radioInput.setAttribute("name", nombre);
    radioInput.setAttribute("value", valor);
    radioInput.setAttribute("id", valor);
    if(estado==1)
    {
        radioInput.checked = true;
    }
}

function agregarSalto() {
    //bajo un renglon
    var salto = document.createElement('p');
    return salto;
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