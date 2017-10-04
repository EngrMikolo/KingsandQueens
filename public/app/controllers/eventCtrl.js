angular.module('eventCtrl', [])


.controller('EventController', function($scope,$location,dataService){

	var vm = this;

    vm.message="meassge from EventController";
    // var excos = dataService.LoadExecutives();
    dataService.loadEvents().then(function(data) {
    $scope.events = data.events;
});
 		
});


// class="panel-collapse collapse"