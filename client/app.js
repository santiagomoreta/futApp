var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/partial-home.html',
            controller:'homeController'
        })
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            templateUrl: 'pages/partial-home-list.html',
            controller: 'homeListController'

        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })

        // SIGN ===
        .state('sign', {
            url: '/sign',
            controller:'signController'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'pages/partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'pages/table-data.html',
                    controller: 'aboutController'
                }
            }
            
        });
        
});
routerApp.controller('homeController', function($scope,$http) {
	$scope.teamsMenu=[];
	var URL_TEAMS="http://api.football-data.org/v1/competitions/436/teams";
		$http.get(URL_TEAMS).
			then(function(response){		
				$scope.teamsMenu=response.data.teams;
				console.log($scope.teamsMenu);
		});

	var URL_LEAGUETABLE="http://api.football-data.org/v1/competitions/436/leagueTable";	
			$http.get(URL_LEAGUETABLE).
			then(function(response){		
				$scope.leagueTable=response.data.standing;
				console.log($scope.leagueTable);
		});	


    
});
routerApp.controller('homeListController', function($scope) {

    $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];

    
});

routerApp.controller('aboutController', function($scope) {
    
    $scope.message = 'test';
   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];
    
});
routerApp.controller('signController', function($scope) {

   alert("sign in");

    
});
