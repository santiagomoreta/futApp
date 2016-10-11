'use strict';
routerApp.factory('futAppMainModel',[ '$http', function($http) {
	var API_TOKEN ="96eaca867de84513bd8e2555725b5478";
	var URL_GETTEAMS = "http://api.football-data.org/v1/competitions/436/teams";
	var URL_GETLEAGUETABLE ="http://api.football-data.org/v1/competitions/436/leagueTable";

	var futAppMainModel = {};


	futAppMainModel.getTeams= function(getTeams_IN) {
		var resultadoPeticion = $http.get(URL_GETTEAMS, {
			headers : {
				'Content-Type' : 'application/json',
				'X-Auth-Token': API_TOKEN
			}
		});

		return resultadoPeticion;
	};

	futAppMainModel.getLeagueTable= function(getLeagueTable_IN) {
		var resultadoPeticion = $http.get(URL_GETLEAGUETABLE, {
			headers : {
				'Content-Type' : 'application/json',
				'X-Auth-Token': API_TOKEN
			}
		});

		return resultadoPeticion;
	};


	return futAppMainModel;

}]);