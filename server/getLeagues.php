<?php
include "./FootballData.php";
$api = new FootballData();
$leagues= $api->getLeagues();

//echo $playersWithTeam;    
echo json_encode($leagues) ;         

?>