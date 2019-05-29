function GeneraTabla()
{
    var body=document.getElementsByTagName("body")[0];
    //Crea un elemento table
    var tabla=document.createElement("table");
    var tblBody=document.createElement("tbody");
    var header = ["ID","NOMBRE","APELLIDO","EMAIL","SEXO"];
    var fila=document.createElement("tr");
    for(col of header)
    {
        let data = document.createElement('td');
        data.append(col);
        data.setAttribute('class','header');
        data.setAttribute("style","font-family: Arial;font-size: 14px; font-weight: bold;color: white;alignment:center")
        fila.appendChild(data);
    }
    tabla.appendChild(fila);
    //van las celdas
   // for(var i=0; i<5;i++)
    for(var persona of personas)
    {
        var fila=document.createElement("tr");
        fila.setAttribute('clas',"datosBody");
        
        for(var datos in persona)
        //for(var j=0;j<5;j++)
        {
            //creo los td (celdas)
            var celda=document.createElement("td");
            celda.setAttribute("style", "font-family: Verdana; font-size: 12px;color: #000000")
           // var textoCelda=document.createTextNode("celda en hilera "+i+",columna"+j);
           celda.append(persona[datos]);
           //celda.appendChild(textoCelda);
            fila.appendChild(celda);
        }
      tblBody.appendChild(fila);
    }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    //le doy borde a la tabla
    tabla.setAttribute("border","2");
    tabla.style.backgroundColor="green";
    
}