<?php
/*CALCULADORA programa que use $operador que pueda almacenar los simbolos matematicos dos 
*/
$operador = "/";
$op1=1;
$op2=5;

switch ($operador)
{
	case "+":
		echo "Suma : ".($op1+$op2);      
		break;
	case "-":
		if($op2 !=0){
		echo "Resta : ".($op1 - $op2);  
		}
		else
		echo "No se puede realizar ";
		break;
	case "*":
		echo "Mult : ".($op1 * $op2); 
		break;
	case "/":
		if($op2 !=0){
			echo "Division : ".($op1 / $op2);  
			}
		else
			echo "No se puede realizar ";
		break;

}
?>
