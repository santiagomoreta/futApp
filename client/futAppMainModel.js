'use strict';
routerApp.factory('futAppMainModel',[ '$http', function($http) {
	var API_TOKEN ="96eaca867de84513bd8e2555725b5478";
	var URL_GETTEAMS = "../server/getTeamsForIdLeague.php";
	var URL_GETLEAGUETABLE ="../server/getPositionTableForIdLeague.php";
	var URL_GETLEAGUES ="../server/getLeagues.php";
	var URL_GETLASTFIXTURES = "../server/getLastFixtures.php"
	var URL_TEST = "../server/test.php";
	var futAppMainModel = {};



	futAppMainModel.getLeagues= function(getLeagues_IN) {
		var resultadoPeticion = $http.get(URL_GETLEAGUES, {
			headers : {
				'Content-Type' : 'application/json',
				'X-Auth-Token': API_TOKEN
			}
		});

		return resultadoPeticion;
	};
	futAppMainModel.getLastFixtures= function(getLastFixtures_IN) {
		var resultadoPeticion = $http.get(URL_GETLASTFIXTURES, {
			headers : {
				'Content-Type' : 'application/json',
				'X-Auth-Token': API_TOKEN
			}
		});

		return resultadoPeticion;
	};
	futAppMainModel.test= function(getLastFixtures_IN) {
		var resultadoPeticion = $http.get(URL_TEST, {

		});

		return resultadoPeticion;
	};


//----------------models ok ------------------------------

	/*futAppMainModel.getTeams= function(getTeams_IN) {
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
	};*/


	return futAppMainModel;

}]);