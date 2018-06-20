/* global angular */

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when('/',{
        templateUrl:'pages/main.html',
        controller: 'mainController'
    })

    .when('/second',{
        templateUrl:'pages/second.html',
        controller: 'secondController'
    })
    .otherwise({
        templateUrl: 'pages/test.html',
        controller: 'testController'
    })
    //$locationProvider.html5Mode(true);
});

myApp.controller('mainController', ['$scope', '$location' ,'$log' , function($scope,$location,$log)
{
    $scope.page = 'Manin';
    $log.log($location);
}]);

myApp.controller('secondController', ['$scope', '$location' ,'$log' , function($scope,$location,$log)
{
    $scope.page = 'Second';
    $log.log($location);
}]);

myApp.controller('testController', ['$scope', '$location' ,'$log' , function($scope,$location,$log)
{
    $scope.page = 'Test';
    $log.log($location);
}]);


/*
myApp.controller('myController', ['$scope','$filter',function($scope,$filter)
{
 $scope.testmodel = '';
 $scope.handle = "test value";
 $scope.char = 5;

 
 setTimeout(function(){
     $scope.$apply(function(){
    $scope.testmodel = "Reenter";
    })
 }, 3000)
}]);
*/