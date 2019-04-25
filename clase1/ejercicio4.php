<?php
/*Ejercicio 4
Sumar numeros,un programa que sume todos los numeros enteros desde 1 mientras la suma no supere 1000. Mostrar los numeros sumados y al finalizar el proceso indicar cuantos numeros se sumaron */
$resultado=0;
$i=0;
$suma=0;
do
{
	$i++;
	$suma=$suma + $i;
	//echo ("$suma");
	if($suma <1000)
   	{
    	echo "<br>".$i;
  	}


}while($suma <= 1000)
?>