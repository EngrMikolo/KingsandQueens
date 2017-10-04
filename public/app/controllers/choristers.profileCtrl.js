angular.module('choristersProfileCtrl', [])


.controller('ChoristersProfileController', function($scope, $rootScope, dataService, $state, $stateParams){

	var vm = this;
	$rootScope.isChoristerSelected = true;
    vm.message="messge from ChoristersProfileController";

	   dataService.getChoristerbyId(parseInt($stateParams.id)).then(function(data){
	        	$scope.chorister = data;
	        });


	     
	});
    
