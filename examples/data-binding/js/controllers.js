'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', []);
controllers.controller('Databinding', function($scope) {
	$scope.helloWorld = "Hello there People";
	
	$scope.helloMessage = "Type and I will update";
	
	$scope.options = ['Option1', 'Option2'];
	
	
});



