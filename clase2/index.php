<?php
 require "./producto.php";
 require "./conteiner.php";

 $Mic=new Conteiner(1000,"chico");
 $Mip=new Producto(1,"cuadernos","Rivadavia","Argentina",100);
 echo $Mic->Mostrar();
 echo $Mip->Mostrar();


 ?>
