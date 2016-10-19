<?php
include "./FootballData.php";
$api = new FootballData();
$teamWithIdLeague= $api->getTeamsForIdLeague(436);

//echo $playersWithTeam;    
echo json_encode($teamWithIdLeague) ;         

?>