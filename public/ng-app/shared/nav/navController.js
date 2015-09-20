(function(module) {

	module
	.controller('NavCtrl', 
		function(NavService, $location) {

			this.message = 'nav-master';

			this.navSvc = NavService;

			this.isCurrentPath = function(path) {
				return $location.path() == path;
			}
			
		});

}(angular.module('app')));