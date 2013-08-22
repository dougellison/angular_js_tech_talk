'use strict';

/* Directives */


angular.module('myApp.directives', []).
  directive('directive1', [function(version) {
    return function(scope, elm, attrs) {
      elm.text("Directive 1 Test");
    };
  }]).
  directive('compile', [function() {
	return {
		compile: function($element, $attrs, $transclude) {
			$element.append('<div ng-click="sayHi()">Compile Directive</div>');
			return function(scope, elm, attrs){
				scope.sayHi = function() {
					alert('Hello there friendly people');
				}
			};
			
		}
	}
  }
  ]
  ).

  
  directive('many', [function() {
	return {
		scope:{},
		compile: function($element, $attrs, $transclude) {
			$element.append('<input ng-model="copyValue.copyMessage" />');
			return function(scope, elm, attrs){
				
			};
		}
	}
  }]).
  
  directive('copies', [function() {
	return {
		compile: function($element, $attrs, $transclude) {
			$element.append('<input ng-model="copyValue.copyMessage" />');
			return function(scope, elm, attrs){
				
				
			};
		}
	}
  }]).
  
  directive('fromparent', [function() {
  return {
		scope: {local: '=fromparent'},
		compile: function($element, $attrs, $transclude) {
			$element.append('<div ng-repeat="repeat in local">{{repeat}}</div>');
			return function(scope, elm, attrs){
				
				
			};
		}
  }}])
  
  
  
  
  
  
  
  
  
  ;
