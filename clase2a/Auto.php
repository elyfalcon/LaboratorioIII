<?php


class auto
{
	private $_color;
	private $_precio;
	private $_marca;
	private $_fecha;

	public function __construct($color,$precio,$marca,$fecha)
	{
		$this->_color=$color;
		$this->_precio=$precio;
		$this->_marca=$marca;
		$this->_fecha=$fecha;
	}
	public function AgregarImpuestos($impuesto)
	{
		$this->_precio = ($this->_precio + $impuesto);
	}
	public function MostrarAuto($auto)
	{
		$info= "<h1>Auto</h1>";
 		$info.="<br/>Color: ".$this->_color;
 		$info.="<br/>Precio: $ ".$this->_precio;
 		$info.="<br/>Marca: ".$this->_marca;
 		$info.="<br/>Fecha: ".$this->_fecha;
 		return $info;
	}

	public function Equals($auto1,$auto2)
	{
		$retorno=false;
		if($auto1->_marca == $auto2->_marca)
		{
			$retorno=true;
		}
	return $retorno;
	}


	public function Add($auto1,$auto2)
	{
		$suma=0;
		if((Auto::Equals($auto1,$auto2)) && ($auto1->_color == $auto2->_color))
			{
				$suma=$auto1->_precio + $auto2->_precio;
			}
			else{
				echo "Los autos no son iguales";
				return $suma;
			}

	}

	}

?>