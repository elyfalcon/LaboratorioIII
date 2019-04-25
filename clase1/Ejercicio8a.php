<?php
/*Ejercicio 8: */


$numero=0;
$i=20;
//$unidad = substr($numero, 1);
//$decena = substr($numero, 0, 1);//devuelve el primer caracter
$nombre_unidad="";
$nombre_decena="";

//echo $unidad;
//echo $decena;

for($i=20;$i<60;$i++)
{
	$numero=$i;
	$unidad = substr($numero, 1);
	//echo substr($numero,1)."<br>";
	$decena = substr($numero, 0, 1);
	//echo $decena;
switch ($decena) {
	case '2':
		$nombre_decena="veinti";
		break;
	case '3':
		$nombre_decena="treinta";
		break;
	
	case 4:
		$nombre_decena="cuarenta";
		break;
	case 5:
		$nombre_decena="cincuenta";
		break;

}
switch ($unidad) {
	case 1:
		$nombre_unidad="uno";
		break;
	case 2:
		$nombre_unidad="dos";
		break;
	case 3:
		$nombre_unidad="tres";
		break;
	case 4:
		$nombre_unidad="cuatro";
		break;
	case 5:
		$nombre_unidad="cinco";
		break;
	case 6:
		$nombre_unidad="seis";
		break;
	case 7:
		$nombre_unidad="siete";
		break;
	case 8:
		$nombre_unidad="ocho";
		break;
	case 9:
		$nombre_unidad="nueve";
		break;
	default:
		$nombre_unidad="cero";
		break;

	
}
//echo "el nombre de la unidad es ".$nombre_unidad;
if($nombre_unidad=="cero" && $nombre_decena=="veinti")
{
	print("veinte")."<br>";
}

if($nombre_unidad=="cero" && $nombre_decena=="treinta")
{
print("treinta")."<br>";

}
if($nombre_unidad=="cero" && $nombre_decena=="cuarenta")
{
	print("cuarenta")."<br>";

}
if($nombre_unidad=="cero" && $nombre_decena=="cincuenta")
{
	print("cincuenta")."<br>";

}
else if($nombre_unidad !="cero")
{
echo ($nombre_decena. " y ".$nombre_unidad)."<br>";;
}

}//cierra for
?>
