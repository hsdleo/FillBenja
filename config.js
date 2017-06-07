// create the module and name it scotchApp
var app = angular.module('app', ['ui.router']);
//var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

 $urlRouterProvider.otherwise('/');

 $stateProvider
     .state('fill', {
         url: '/',
         templateUrl: 'index.html',
         controller: 'fillController'
     })
     ;

});