<?php
//include_once(dirname(__FILE__).'config.php');
//include 'config.php';
//include "$_SERVER[DOCUMENT_ROOT]/config.php";
include './models/Soccerseason.php';
include './models/Team.php';

/**
 * This service class encapsulates football-data.org's RESTful API.
 *
 * @author Daniel Freitag <daniel@football-data.org>
 * @date 04.11.2015
 * 
 */
class FootballData {
    
    public $config;
    public $baseUri;
    public $reqPrefs = array();
        
    public function __construct() {
        $baseUri_ = 'http://api.football-data.org/v1/';
        $authToken = '96eaca867de84513bd8e2555725b5478';
        //$this->config = parse_ini_file('config.ini', true);

	// some lame hint for the impatient
	/*if($this->config['authToken'] == 'YOUR_AUTH_TOKEN' || !isset($this->config['authToken'])) {
		exit('Get your API-Key first and edit config.ini');
	}*/
        
        $this->baseUri = $baseUri_; 
        
        $this->reqPrefs['http']['method'] = 'GET';
        $this->reqPrefs['http']['header'] = 'X-Auth-Token: ' . $authToken;
    }
    
    /**
     * Function returns a specific soccer season identified by an id.
     * 
     * @param Integer $id
     * @return \Soccerseason object
     */        
    public function getSoccerseasonById($id) {
        $resource = 'soccerseasons/' . $id;
        $response = file_get_contents($this->baseUri . $resource, false, 
                                      stream_context_create($this->reqPrefs));
        $result = json_decode($response);
        
        return new Soccerseason($result);
    }
    
    /**
     * Function returns all available fixtures for a given date range.
     * 
     * @param DateString 'Y-m-d' $start
     * @param DateString 'Y-m-d' $end
     * @return array of fixture objects
     */    
    public function getFixturesForDateRange($start, $end) {
        $resource = 'fixtures/?timeFrameStart=' . $start . '&timeFrameEnd=' . $end;

        $response = file_get_contents($this->baseUri . $resource, false, 
                                      stream_context_create($this->reqPrefs));
        
        return json_decode($response);
    }
    
    /**
     * Function returns one unique fixture identified by a given id.
     * 
     * @param int $id
     * @return stdObject fixture
     */
    public function getFixtureById($id) {
        $resource = 'fixtures/' . $id;
        $response = file_get_contents($this->baseUri . $resource, false, 
                                      stream_context_create($this->reqPrefs));
        
        return json_decode($response);
    }
    
    /**
     * Function returns one unique team identified by a given id.
     * 
     * @param int $id
     * @return stdObject team
     */    
    public function getTeamById($id) {
        $resource = 'teams/' . $id;
        $response = file_get_contents($this->baseUri . $resource, false, 
                                      stream_context_create($this->reqPrefs));
        
        $result = json_decode($response);
        
        return new Team($result);
    }
    
    /**
     * Function returns all teams matching a given keyword.
     * 
     * @param string $keyword
     * @return list of team objects
     */    
    public function searchTeam($keyword) {
        $resource = 'teams/?name=' . $keyword;
        $response = file_get_contents($this->baseUri . $resource, false, 
                                      stream_context_create($this->reqPrefs));
        
        return json_decode($response);
    } 
    //----------------------------------------------------- me ------------   
    /**
     * Function returns all players of the Team Id
     * 
     * @param id $idTeam
     * @return list of players objects
     */    
    public function getPlayersByTeam($idTeam) {
        $resource = '/teams/'.$idTeam.'/players';
        $response = file_get_contents($this->baseUri . $resource, false, 
                                      stream_context_create($this->reqPrefs));
        
        return json_decode($response);
    } 
    /**
     * Function returns all teams of the League Id
     * 
     * @param int $idLeague
     * @return list of team objects
     */    
    public function getTeamsForIdLeague($idLeague) {
        $resource = '/competitions/'.$idLeague.'/teams';        
        $response = file_get_contents($this->baseUri . $resource, false, 
                                      stream_context_create($this->reqPrefs));
        
        return json_decode($response);
    }     
        /**
     * Function returns the position table  of the League Id
     * 
     * @param int $idLeague
     * @return position table of teams objects
     */    
    public function getPositionTableForIdLeague($idLeague) {
        $resource = '/competitions/'.$idLeague.'/leagueTable';     
        $response = file_get_contents($this->baseUri . $resource, false, 
                                      stream_context_create($this->reqPrefs));
        
        return json_decode($response);
    }
    /**
     * Function returns the all leagues
     * 
     * @param none
     * @return all leagues objects
     */    
    public function getLeagues() {
        $resource = '/competitions/';     
        $response = file_get_contents($this->baseUri . $resource, false, 
                                      stream_context_create($this->reqPrefs));
        
        return json_decode($response);
    }    
}
