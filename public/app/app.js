angular.module('KingsandQueens', ['appRoutes', 'homeCtrl', 'galleryCtrl', 'historyCtrl', 'executiveCtrl', 'eventCtrl', 'choristersCtrl', 'choristersProfileCtrl', 'loadDataService', 'utilsService', 'angularTreeview'])

.run(function($rootScope) {
    $rootScope.isChoristerSelected = false;
})

.config(function($httpProvider){

	// $httpProvider.interceptors.push('AuthInterceptor'); 
});

// .run(function($rootScope, $location, $anchorScroll, $stateParams, $timeout) { 
//   $rootScope.$on('$stateChangeSuccess', function(newRoute, oldRoute) {
//     $timeout(function() { 
//       $location.hash($stateParams.scrollTo);
//       $anchorScroll();
//     }, 100);
//   });
// });