angular.module('homeCtrl', [])


.controller('HomeController', function($scope,$location, utilitiesService){

	var vm = this;
	$scope.isEmailSent = false;
	// $scope.sender.name="";
	// $scope.sender.email="";
	// $scope.message="";


    vm.message="message from HomeController";
		$scope.submitForm = function() {
				var from = $scope.sender.name;
				var subject = $scope.sender.email;
				var text = $scope.message + " - From " + from;
			if ($scope.contactForm.$valid) {

				utilitiesService.SendMail(from, subject, text).then(function(data){
	        	  $scope.isEmailSent = data;
	        	  console.log($scope.isEmailSent)
	        	  if($scope.isEmailSent)
	        	  {
		        	$scope.sender.name = "";
					$scope.sender.email = "";
					$scope.message = "";
	        	  }
	        });
			}

		};
});
