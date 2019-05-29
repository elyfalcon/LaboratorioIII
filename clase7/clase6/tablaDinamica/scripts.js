console.log(personas);
window.addEventListener('load',GenerarTabla);
window.addEventListener('load',function()
{
 var filas=document.getElementsByClassName("datosBody");
 for(fila of filas)
 {
     fila.addEventListener('click',seleccionarRegistros);
     fila.addEventListener('click',desSeleccionarFormulario);
 }

});
function GenerarTabla()
{
    var tabla = document.getElementById("Personas");
    
    var fila = document.createElement('tr');

    var header = ["ID ","FIRST_NAME ","LAST_NAME ","EMAIL ","GENDER "];

    for(col of header)
    {
        let data = document.createElement('td');
        data.append(col);
        data.setAttribute('class','header');
        fila.appendChild(data);
    }
    tabla.appendChild(fila);

    for(var Personas of data)
    {
        fila = document.createElement('tr');
        fila.setAttribute('class','datosBody');
        for(var datos in persona)
        {
            var tableData = document.createElement('td');
            
            tableData.append(personas[datos]);
            fila.appendChild(tableData);
        }
        tabla.appendChild(fila);
    }
}