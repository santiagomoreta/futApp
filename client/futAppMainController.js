'use strict';

routerApp.controller('futAppMainController', ['$scope','$log','$state','$stateParams','futAppMainService',
	function($scope,$log,$state,$stateParams,futAppMainService){

      $scope.init = function(){
    
      
      };
      $scope.getTeams = function() {
      	var getTeams_IN=(436);
      	$scope.teamsMenuView=[];
        futAppMainService.getTeams(getTeams_IN).then(
            function(data) {
             $scope.teamsMenu=data.teams;
             angular.forEach($scope.teamsMenu,function(datos,index)
             {
             		datos.shortName=datos.shortName.replace(" ","_");
             });

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
      	var leagueTable_IN=(436);
      	futAppMainService.getLeagueTable(leagueTable_IN).then(
      		function (data){
      			$scope.leagueTable = data.standing;
      		}, function(error){

      		});
      } ;
      $scope.getTeams();
      $scope.getLeagueTable();
      //---------- goto team info -----------
      $scope.goToTeamInfo=function(team_out)
      {
      	alert(team_out.name);
       $state.go('team');
      }

}]);