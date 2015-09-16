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