(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

angular.module('sgb-screen-selection', ['megazord'])
    .controller('sgb-screen-selection-controller', ['$scope', '_router', '_screen', '_screenParams', '$stateParams', function ($scope, _router, _screen, _screenParams, $stateParams) {
        _screen.initialize($scope, _screenParams);

        //Add your controller logic here.
        $scope.data=$stateParams.data; 
        $scope.selected=[];
        $scope.getChecked = function (){
        $scope.selected=[];
	        for (var i=0;i<$scope.data.options.length;i++){
	        	if ($scope.data.options[i].checked===true){
	        		$scope.selected.push($scope.data.options[i]);
	        	}
	        }
	    }

	    $scope.checker = function (){
	    	data[0].checked=true;
	    }
	    $scope.changeChecked = function (option){
	    if ($scope._screenParams.type==="single"){
	    	for (var i=0;i<$scope.data.options.length;i++){
		       	$scope.data.options[i].checked=false;
	        }
	    	option.checked = !option.checked;
	    }
	    else
	    	option.checked = !option.checked;
    }
    }]);

},{}]},{},[1]);
