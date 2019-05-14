<?php
 require "./Auto.php";
 $date = new DateTime();
 $date = new DateTime('2018, May 12');

 $Mic=new Auto("rojo",450000,"Audi","2018-07-15");

 $auto1=new Auto("verde",600000,"Renault","2019-01-23");
 $auto2=new Auto("verde",700000,"Renault","2018-01-23");
 //$Mic=new Auto("rojo",450000,"Audi",$date);
 
 echo $Mic->MostrarAuto(Auto);

 
 $igual=(Auto:: Equals($auto1,$auto2));
 echo "los autos son: ".$igual;


 $imp=1500;

 //$auto1->AgregarImpuesto($imp);

 echo $auto1->MostrarAuto($auto1);
  echo $auto2->MostrarAuto($auto1);
  echo $info= "<h1>Agregar Auto</h1>";
 // echo "<br>Agrego el precio del  Auto 1 y Auto 2: ".Auto::Add($auto1, $auto2);
  echo $info.="<br/>Agrego el auto1 y auto2: ".Auto::Add($auto1, $auto2);
 // echo "<br>Agrego el precio del  Auto 1 y Auto 2: ".Auto::Add($auto1, $auto2);