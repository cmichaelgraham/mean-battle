(function(module) {

	module
	.factory('NavService', 
		function($rootScope) {
			var navObj = {
				isNavigating: false
			};

			$rootScope.$on('$routeChangeStart', function(evt, cur, prev) {
				navObj.isNavigating = true;
			});

			$rootScope.$on('$routeChangeSuccess', function(evt, cur, prev) {
				navObj.isNavigating = false;
			});

			$rootScope.$on('$routeChangeError', function(evt, cur, prev, navErr) {
				navObj.isNavigating = false;
			});

			return navObj;
		});

}(angular.module('app')));