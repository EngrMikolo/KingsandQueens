
angular.module('appRoutes', ['ngAnimate', 'ui.router'])



.config(function($stateProvider, $urlRouterProvider, $locationProvider){

	$stateProvider

		.state('home',{
			// abstract: true,
			url:        "/home",
			templateUrl: 'app/views/home.html',
			controller: 'HomeController',
			controllerAs: 'home'
			// reloadOnSearch: false
		})

		.state('gallery',{

			url:        "/gallery",
			templateUrl: 'app/views/gallery.html',
			controller: 'GalleryController',
			controllerAs: 'gallery'
			// reloadOnSearch: false
		})

		.state('history',{

			url:        "/history",
			templateUrl: 'app/views/history.html',
			controller: 'HistoryController',
			controllerAs: 'history'
			// reloadOnSearch: false
		})

		.state('choristers',{

			url:        "/choristers",
			templateUrl: 'app/views/choristers.html',
			controller: 'ChoristersController',
			controllerAs: 'choristers'
			// reloadOnSearch: false
		})

		.state('choristers.profile',{

			url:        "/:id",
			templateUrl: 'app/views/choristers.profile.html',
			controller: 'ChoristersProfileController',
			controllerAs: 'choristersprofile'
			// reloadOnSearch: false
		})

    $urlRouterProvider.otherwise('/home');
		// $locationProvider.html5Mode(true);
}) ;