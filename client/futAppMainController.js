/*'use strict';
routerApp.controller('futAppMainController', function($scope,$http) {*/
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

/*futAppMainController.$inject = ['futAppMainService'];
	function futAppMainController(AnswerService) {
		this.theAnswer = AnswerService.getAnswer();
	}

    
});*/

'use strict';

routerApp.controller('futAppMainController', ['$scope','$log','$state','$stateParams','futAppMainService',
	function($scope,$log,$state,$stateParams,futAppMainService){

      $scope.init = function(){
    
      
      };
      $scope.getTeams = function() {
      	var getTeams_IN={};
        futAppMainService.getTeams(getTeams_IN).then(
            function(data) {
             $scope.teamsMenu=data.teams;
            }, function(error) {
                $log.debug('Failed: ' + error.code);            
                var auxError = {};
                if ((error.code === 500) && (error.mensaje1 !== undefined) && (error.mensaje1 !== null)) {
                    auxError.mensaje1 = error.mensaje1;
                    auxError.mensaje2 = error.mensaje2;
                    auxError.mensaje3 = error.mensaje3;
                }
            });
      };

      $scope.getLeagueTable= function()
      {
      	var leagueTable_IN={};
      	futAppMainService.getLeagueTable(leagueTable_IN).then(
      		function (data){
      			$scope.leagueTable = data.standing;
      		}, function(error){

      		});
      } ;
      $scope.getTeams();
      $scope.getLeagueTable();

}]);