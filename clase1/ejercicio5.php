<?php
/*Obtener el valor medio. dada 3 variables numericas de tipo entero ...*/
$a=5;
$b=1;
$c=5;

if($a <$b && $b<$c)
{
	
	echo "El valor de medio es: " . $b . "... <br>";

}
else
	if($b<$a && $a<$b)
	{
		echo "El valor de medio es: " . $a . "... <br>";
	}
	else
if($a<$c && $c<$b)
	{
		echo "El valor de medio es: " . $c . "... <br>";
	}
else
	echo "No hay valor medio";
?>