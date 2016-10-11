/*'use strict';
routerApp.service('futAppMainService', function($scope,$http) {*/
//	$scope.teamsMenu=[];
//	var URL_TEAMS="http://api.football-data.org/v1/competitions/436/teams";
//		$http.get(URL_TEAMS).
//			then(function(response){		
//				$scope.teamsMenu=response.data.teams;
//				console.log($scope.teamsMenu);
//		});
//
//	var URL_LEAGUETABLE="http://api.football-data.org/v1/competitions/436/leagueTable";	
//			$http.get(URL_LEAGUETABLE).
//			then(function(response){		
//				$scope.leagueTable=response.data.standing;
//				console.log($scope.leagueTable);
//		});	
/*function futAppMainService()
{
	return {
		getTeams: function()
		{		
			$scope.teamsMenu=[];
			var URL_TEAMS="http://api.football-data.org/v1/competitions/436/teams";
			$http.get(URL_TEAMS).
			then(function(response){		
				$scope.teamsMenu=response.data.teams;
				console.log($scope.teamsMenu);
			});
			return $scope.teamsMenu;
		}
	}
}
    
});*/
'use strict';
routerApp.factory('futAppMainService', ['$q', 'futAppMainModel',
    function( $q,futAppMainModel ){
      var futAppMainService = {};

      	futAppMainService.getTeams= function(getTeams_IN)
      	{
      		var deferred = $q.defer();
        	futAppMainModel.getTeams(getTeams_IN).success(function(data,status) {
          	deferred.resolve(data);
       		 }).error(function(data, status) {
         	 deferred.reject(crearObjetoError(data, status));
       		 });
        return deferred.promise;

      	}

      	futAppMainService.getLeagueTable= function(getLeagueTable_IN)
      	{
      		var deferred = $q.defer();
        	futAppMainModel.getLeagueTable(getLeagueTable_IN).success(function(data,status) {
          	deferred.resolve(data);
       		 }).error(function(data, status) {
         	 deferred.reject(crearObjetoError(data, status));
       		 });
        return deferred.promise;

      	}      

	      function crearObjetoError(data, status){
	        var errorObj;
	        if(status === 500){
	          if((data.errorDescription !== undefined) && (data.errorDescription !== null)){
	            errorObj = {code:500, mensaje1:data.errorDescription, mensaje2:data.errorId, mensaje3:data.context};
	          }else{
	            errorObj = {code:status};
	          }
	        }else{
	          errorObj = {code:status};
	        }
	        return errorObj;
	      };

        return futAppMainService;
  }]);
//96eaca867de84513bd8e2555725b5478