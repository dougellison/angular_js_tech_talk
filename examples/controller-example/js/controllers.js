'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', []);
controllers.controller('Controller1', function($scope) {

	$scope.helloMessageOne = "Hello from Controller 1";
	
})


controllers.controller('Controller2', function($scope) {

	$scope.helloMessageOne = "Hello from Controller 2";
	
})


controllers.controller('Controller1Child', function($scope) {

	
	
})



