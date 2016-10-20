'use strict';
var routerApp = angular.module('routerApp', ['ui.router','countTo']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html',
            controller:'futAppMainController'
        })
        
        // leagues 
        .state('league', {
            url: '/league',
            templateUrl: 'pages/league.html',
            controller: 'futAppMainController'

        })
         // players
        .state('player', {
            url: '/player',
            templateUrl: 'pages/player.html',
            controller: 'futAppMainController'

        })
         // fixtures
        .state('fixture', {
            url: '/fixture',
            templateUrl: 'pages/fixture.html',
            controller: 'futAppMainController'

        })       

        // SIGN ===
        .state('sign', {
            url: '/sign',
            controller:'signController'
        })
        
        // TEAM PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('team', {
            url: '/team/:idTeam',
            templateUrl: 'pages/team.html',
            controller: 'teamController',            
        });
        
});
