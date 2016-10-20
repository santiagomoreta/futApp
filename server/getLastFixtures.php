<?php
include "./FootballData.php";
$api = new FootballData();
$lastFixtures= $api->getLastFixtures(440);

//echo $playersWithTeam;    
echo json_encode($lastFixtures) ;         

?>