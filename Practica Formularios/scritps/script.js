var personajes=[];
var personajetomado=null;

window.addEventListener('load', asignarManejadores, false);

function asignarManejadores() {
 document.getElementById("btnAgregar").addEventListener("click", crearForm, false);
}

console.log=("antes del form");

 function crearForm(){
   var div = document.getElementById("info");
   div.innerHTML = "";
   var form = document.createElement("form");
    
   // div.appendChild(form);
    form.id='formGOT';
   
    var tabla = document.createElement('table');
    tabla.setAttribute('class', 'alta');
      var tr = document.createElement('tr');
      tr.appendChild(crearFormulario());
      tabla.appendChild(tr);

  form.appendChild(tabla);
 // form.appendChild(div);
  div.appendChild(form);

  div.appendChild(agregarSalto());
}
  function crearFormulario()
  {
    var div = document.getElementById("info");
   div.innerHTML = "";
   var form = document.createElement("form");
   var div = document.createElement('div');
   div.setAttribute('class', 'altaForm');
   //ver de agregar salto
   div.appendChild(agregarSalto());
  
   //div.appendChild(agregarSalto());
  /*var nombre=document.createElement('input');
   var lnombre=document.createElement('label');
   lnombre.innerHTML="Nombre: ";
   form.appendChild(lnombre);
   form.appendChild(nombre);
   nombre.id="nombre";
   nombre.type="text";
   nombre.name="nombre";
*/
   div.appendChild(crearTextInputs("nombre"));
   div.appendChild(agregarSalto());
   div.appendChild(crearTextInputs("apellido"));
   div.appendChild(agregarSalto());
   div.appendChild(crearTextInputs("edad"));
   div.appendChild(agregarSalto());
  
   //agrego las casas
   var tr = document.createElement('tr');
   tr.appendChild(crearRadioButtons("stark", true,  "casa"));
   div.appendChild(agregarSalto());
   tr.append(crearRadioButtons("targaryen", false, "casa"));
   tr.append(crearRadioButtons("lanister", false,  "casa"));
   div.appendChild(tr);


   return div;
  }

  function crearRadioButtons(nombre, estado,name) {
   var td = document.createElement('td');
   td.setAttribute('id', "nombre");
   var input = document.createElement('input');
   input.setAttribute("type", "radio");
   input.setAttribute("name", name);
   input.setAttribute("value", nombre);
   input.setAttribute("id", nombre);
   input.checked = estado;
   td.appendChild(input);
   td.appendChild(crearLabel(nombre));

   return td;
}



  function crearTextInputs(key)
  {
   var input = document.createElement('input');
   //var label = crearLabel(key);
   var x=document.createElement("label");
   var t=document.createTextNode(key);
   x.setAttribute("for",key);
   //x.setAttribute(innerHTML,key);
   //x.innerHTML=key;
   x.appendChild(t);
   input.setAttribute('type', "text");
   input.setAttribute('class', "campo");
   input.setAttribute('name', key);

   
   return x;

  }
  function crearLabel(key)
  {
   var x = document.createElement("LABEL");
   var t = document.createTextNode(key);
    x.setAttribute("for", "lb"+key);
   return x;
  }
  function agregarSalto() {
   //bajo un renglon
   var salto = document.createElement('p');
   return salto;

  }
    