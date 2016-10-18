<?php
include "./FootballData.php";
$api = new FootballData();
/*$soccerseason = $api->getSoccerseasonById(436);
                    foreach ($soccerseason->getFixturesByMatchday(8) as $fixture) {
                    
                        echo $fixture->homeTeamName; 
                 
                        echo $fixture->awayTeamName; 
                        echo $fixture->result->goalsHomeTeam; 
                        
                        echo $fixture->result->goalsAwayTeam; 
                        echo "<br>";
                    
                    }*/

$playersWithTeam= $api->getPlayersByTeam(66);

//echo $playersWithTeam;    
echo "players: ". json_encode($playersWithTeam) . '';         

?>