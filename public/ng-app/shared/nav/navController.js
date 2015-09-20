(function(module) {

	module
	.controller('NavCtrl', 
		function(NavService) {
			this.message = 'nav-master';

			this.navSvc = NavService;
		});

}(angular.module('app')));