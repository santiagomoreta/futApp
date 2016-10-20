'use strict';
routerApp.factory('futAppMainService', ['$q', 'futAppMainModel',
    function( $q,futAppMainModel ){
      var futAppMainService = {};


       futAppMainService.getLeagues= function(getLeagues_IN)
        {
          var deferred = $q.defer();
          futAppMainModel.getLeagues(getLeagues_IN).success(function(data,status) {
            deferred.resolve(data);
           }).error(function(data, status) {
           deferred.reject(crearObjetoError(data, status));
           });
        return deferred.promise;

        }






      //----------------serives ok --------------------
      /*	futAppMainService.getTeams= function(getTeams_IN)
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

      	} */     

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