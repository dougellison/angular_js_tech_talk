'use strict';

/* Controllers */

var controllers = angular.module('myApp.controllers', []);
controllers.controller('Directive', function($scope) {

$scope.copyValue = {};
$scope.copyValue.copyMessage = "Hey I'm a copy";

$scope.copies = [1,2,3]

$scope.parentValue = [1];	
	$scope.addNew = function() {
			$scope.parentValue.push((new Date).getTime());
	}
	
});



