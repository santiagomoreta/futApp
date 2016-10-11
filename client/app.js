'use strict';
var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'pages/partial-home.html',
            controller:'futAppMainController'
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
        
        // TEAM PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('team', {
            url: '/team',
            templateUrl: 'pages/team.html',
            controller: 'teamController',            
        });
        
});
