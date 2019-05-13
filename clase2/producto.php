<?php
class Producto
{
private $_id;
private $_nombre;
private $_importador;
private $_pais;
private $_kilos;
public $ListaP=array();

//Constructor

public function __construct($id,$nombre,$importador,$pais,$kilos)
{
 $this->_id=$id;
 $this->_nombre=$nombre;
 $this->_importador=$importador;
 $this->_pais=$pais;
 $this->_kilos=$kilos;

}
//getters y setters

public function getId()
{
	return $this->_id;
}
public function getKilos()
{
	return $this->_kilos;
}
public function setKilos($kilos)
{
	$this->_kilos=$kilos;
}
//Metodos

public function Mostrar()
{
	$info="<h1> Informacion de Producto</h1>";
	$info.="Id Producto: ".$this->_id;
	$info.="<br/> Nombre: ".$this->_nombre;
	$info.="<br/>Pais: ".$this->_pais;
	$info.="<br/>Importador: ".$this->_importador;
	$info.="<br/>Kilos: ".$this->_kilos;
	/*
	echo "Id producto: ".$this->_id."<br>";
	echo "Nombre : ".$this->_nombre."<br>";
	//echo "Importador: ".$this->_importador"<br>";
	echo "pais: ".$this->_pais."<br>";
	echo "Kilos: ".$this->_kilos."<br>";*/
	return $info;

}


}

