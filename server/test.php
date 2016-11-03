<?php
include "./FootballData.php";
$api = new FootballData();
$test= $api->test();

//echo $playersWithTeam;    
echo json_encode($test) ;         


?>