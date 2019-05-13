Producto.php
<?php

/**
 * 
 */
class Conteiner 
{
	private $_capacidad;
	private $_tamanio;
	private $_capacidadActual;
	public $ListaP=array();



 public function __construct($capacidad,$tamanio)
 {

 	$this->_capacidad=$capacidad;
 	$this->_tamanio=$tamanio;
 	$this->_capacidadActual=$capacidad;

 }
 public function setTamanio($tamanio)
 {
 	$tam;
 	switch ($tamanio) {
 		case 'chico':
 			$tam.=$this->_capacidad=1000;
 			break;
 		case 'mediano':
 			$tam.=$this->_capacidad=2500;
 			break;
 		case 'grande':
 			$tam.=$this->_capacidad=9000;
 			break;
 		
 		default:
 			# code...
 			break;
 	}
 	return $this->$tam;

 }

 public function  Mostrar()
 {

 	$info= "<h1>Informe</h1>";
 	$info.="<br/>Tamaño: ".$this->_tamanio;
 	$info.="<br/>Capacidad: ".$this->_capacidad;
 	return $info;
 //	echo $this->_capacidad."<br>";
 }

 public function AgregarProducto($Producto)
 {
 	$cant=count(ListaP); //numero de elementos del array
 	$esta=false;
 	if($cant==0) 
 		{
 			array_push(ListaP, $Producto);
 			$this->_capacidadActual=$this->_capacidadActual-($Producto->getKilos());

 		}
 		else
 			{
 				if($this->_capacidadActual-($Producto->getKilos()) >=0);
 				{
 					foreach ($ListaP as $prod) {
 					# code...
 						if($prod->getId() == $Producto->getId())
 							{
 								$esta=true;
 								$prod->setKilos($prod->getKilos() + $Producto->getKilos());
 								$this->_capacidadActual=$this->_capacidadActual-($Producto->getKilos());
 							}
 					}	
 						if($esta=false)
 							{
 								array_push(ListaP, $Producto);
 								$this->_capacidadActual=$this->_capacidadActual-($Producto->getKilos());
 							}	
 				}
 				else
 					{
 						echo "Sin espacio";
 					}

 			}
 }

public function MostrarProductos($ListaP)
{
	foreach ($ListaP as $prod) {
		# code...
		$info= "<h1>Listado de Productos</h1>";
 		$info.="<br/>Id: ".$prod->getId();
 		$info.="<br/>Cantidad de kilos: ".$prod->getKilos();
 		
	}
}

}



?>