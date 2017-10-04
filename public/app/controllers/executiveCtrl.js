angular.module('executiveCtrl', [])


.controller('ExecutiveController', function($scope,$location,dataService){

	    var vm = this;

	    vm.message="meassge from ExecutiveController";
	
	    dataService.loadExecutives().then(function(data) {
	    	data.sort(function(a,b){
	    			return a.AppearanceOrder - b.AppearanceOrder;
	    	});
	    $scope.executives = data;
	});
 		
});
