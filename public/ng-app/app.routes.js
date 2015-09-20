(function(module) {
	
	module.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				controller: 'HomeCtrl',
				controllerAs: 'home',
				templateUrl: 'ng-app/components/home/homeView.html'
			})
			.when('/home', {
				controller: 'HomeCtrl',
				controllerAs: 'home',
				templateUrl: 'ng-app/components/home/homeView.html'
			})
			.when('/about', {
				controller: 'AboutCtrl',
				controllerAs: 'about',
				templateUrl: 'ng-app/components/about/aboutView.html'
			}).otherwise('/')
	}]);

}(angular.module('app')));