<?php
include "./FootballData.php";
$api = new FootballData();
$positionTableWithIdLeague= $api->getPositionTableForIdLeague(436);

//echo $playersWithTeam;    
echo json_encode($positionTableWithIdLeague) ;         

?>