'use strict';
routerApp.factory('teamService', ['$q', 'teamModel',
    function( $q,futAppMainModel ){
      var futAppMainService = {};
 

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