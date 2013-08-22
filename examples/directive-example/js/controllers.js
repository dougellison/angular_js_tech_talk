'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', []);
controllers.controller('Databinding', function($scope) {

$scope.copyValue = {};
$scope.copyValue.copyMessage = "Hey I'm a copy";

$scope.copies = [1,2,3]
	
	
});



