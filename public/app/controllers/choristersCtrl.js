angular.module('choristersCtrl', [])


.controller('ChoristersController', function($scope, $rootScope, dataService, $state, $stateParams){

	var vm = this;

    vm.message="message from ChoristersController";

    	$rootScope.isChoristerSelected = false;

	    dataService.loadChoristers().then(function(data) {
			    $scope.choristers = data.members;

			    $scope.sopranos=[];
			    $scope.altos=[];
			    $scope.tenors=[];
			    $scope.basses=[];

			    for (var i = 0; i < $scope.choristers.length; i++) {

			    	if($scope.choristers[i].Part == "Soprano"){

			    		$scope.sopranos[$scope.sopranos.length] = {
			    			id : $scope.choristers[i].id,
			    			label : $scope.choristers[i].FirstName + " "+ $scope.choristers[i].LastName
			    		};
			    		continue;
			    	}

					if($scope.choristers[i].Part == "Alto"){
						$scope.altos[$scope.altos.length] = {
			    			id : $scope.choristers[i].id,
			    			label : $scope.choristers[i].FirstName + " "+ $scope.choristers[i].LastName
			    		};
			    		continue;
					}

					 if($scope.choristers[i].Part == "Tenor"){
						$scope.tenors[$scope.tenors.length] = {
			    			id : $scope.choristers[i].id,
			    			label : $scope.choristers[i].FirstName + " "+ $scope.choristers[i].LastName
			    		};
			    		continue;
			  	    }

					if($scope.choristers[i].Part == "Bass"){
						$scope.basses[$scope.basses.length] = {
			    			id : $scope.choristers[i].id,
			    			label : $scope.choristers[i].FirstName + " "+ $scope.choristers[i].LastName
			    		};
			    		continue;	
			  	    }
			
			    }


						});




    
});