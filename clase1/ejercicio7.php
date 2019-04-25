<?php
/*EJERCICIO 7 Mostrar fecha actual del servidor (date)

*/


$fecha = date ("d-m-Y");
echo "Fecha" .$fecha;
$mes = explode("-",$fecha);
//echo "Mes" .$mes;
if($mes <=3 && $mes >=1)
{

	echo "Es verano";
}
if($mes >3 && $mes >=5)
{
	echo "Es otoño";
}
if($mes >5 && $mes <=9)
{
	echo "Es primavera";
}
else
	echo "Es verano";
?>