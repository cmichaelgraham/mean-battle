# Angular Notes

This is a long document :)

## Angular - Hello World

### Install Angular
bower install angular --save

### Create `index-angular.html`

```html
<!DOCTYPE html>
<html lang="en" ng-app>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>MEAN Battle</title>

    <!-- Bootstrap -->
		<link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="text-center">mean battle - angular</h1>
      <p class="text-center">who put the <code>a</code> in <code>mean</code>?</p>
    </div>

    <div class="container">
      <div class="page-header">
        <h1>Angular Hello World</h1>
      </div>
      <div class="list-group">
        <input ng-model="name" placeholder="Type world...">  Hello {{name}}
      </div>
    </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Angular includes -->
    <script src="bower_components/angular/angular.js"></script>
  </body>
</html>
```

![image](https://cloud.githubusercontent.com/assets/10272832/9904477/41411bf2-5c3b-11e5-93b3-7ad8281f2c06.png)

## Angular - First View

Notes:
* important to include the main module name in the `ng-app="app"` attribute
* have to include the home controller js file
* `ng-include` pulls in the view and must be after the controller script tag in the html

![image](https://cloud.githubusercontent.com/assets/10272832/9910380/1bacf860-5c5a-11e5-9243-b0c5bc3f3988.png)

Notes:
* `controller as` syntax is very cool
  * it creates a property on the `$scope` with the provided name
  * this is how you can use the name within the html template
  * it also sets the `this` pointer in the controller so you don't have to groc the $scope invention

![image](https://cloud.githubusercontent.com/assets/10272832/9910405/3c2f658c-5c5a-11e5-915d-513334dc27d2.png)

![image](https://cloud.githubusercontent.com/assets/10272832/9910427/5175d1c4-5c5a-11e5-8eef-2c2fcfec34ad.png)

## Angular - Routing (ngRoute)

### Setup directory structure

![image](https://cloud.githubusercontent.com/assets/10272832/9979069/21a02c04-5f13-11e5-8899-b2c4339bc513.png)

### Get ngRoute

```bash
bower install angular-route --save
```

### Add script tags to include angular and app `.js` files

```html
		<!-- Angular includes -->
		<script src="bower_components/angular/angular.js"></script>
		<script src="bower_components/angular-route/angular-route.js"></script>

		<!-- App includes -->
		<script src="ng-app/app.module.js"></script>
		<script src="ng-app/app.routes.js"></script>
		<script src="ng-app/components/home/homeController.js"></script>
		<script src="ng-app/components/about/aboutController.js"></script>
```

### Add ng-view directive to main html

```html
	<div ng-view></div>
```

### Add Bootstrap menu bar to main html

```html
  <div class="navbar navbar-default" role="navigation">
		<div class="navbar-header">
			    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		        <span class="sr-only">Toggle Navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		    </button>
		    <a class="navbar-brand" href="#">
		        <i class="fa fa-home"></i>
		        <span>mean-ng</span>
		    </a>
		</div>
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		    <ul class="nav navbar-nav">
		        <li>
		            <a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1.in" href="#home">home</a>
		        </li>
		        <li>
		            <a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1.in" href="#employee-list">employee list</a>
		        </li>
		        <li>
		            <a data-toggle="collapse" data-target="#bs-example-navbar-collapse-1.in" href="#about">about</a>
		        </li>
		    </ul>

		    <ul class="nav navbar-nav navbar-right">
		        <li class="loader" if.bind="router.isNavigating">
		            <i class="fa fa-spinner fa-spin fa-2x"></i>
		        </li>
		    </ul>
		</div>
	</div>
```

### Configure routing in `app` module

```javascript
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
```

### Create spinner when route is loading

Install `Font-Awesome`

```bash
bower install font-awesome --save
```

![image](https://cloud.githubusercontent.com/assets/10272832/9980057/fa4f5f28-5f47-11e5-9d2a-dddf3acc770a.png)

Add link elements in `index-angular.html`

```html
		<!-- Font-Awesome -->
		<link rel="stylesheet" href="bower_components/font-awesome/css/font-awesome.css">

		<!-- App Styles -->
		<link rel="stylesheet" href="styles/styles.css">
```

Add `loader` style to `styles.css`

```css
.navbar-nav li.loader {
    margin: 12px 24px 0 6px;
}
```

Add `navController`

```javascript
(function(module) {

	module
	.controller('NavCtrl', 
		function(NavService) {
			this.message = 'nav-master';

			this.navSvc = NavService;
		});

}(angular.module('app')));
```

Add `navService`

```javascript
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
```

Add navService and navController script elements to `index-angular.html`

```html
		<!-- App includes -->
		<script src="ng-app/app.module.js"></script>
		<script src="ng-app/app.routes.js"></script>
		<script src="ng-app/shared/nav/navService.js"></script>
		<script src="ng-app/shared/nav/navController.js"></script>
		<script src="ng-app/components/home/homeController.js"></script>
		<script src="ng-app/components/about/aboutController.js"></script>
```

Add spinner to bootstrap `nav` in `index-angular.html`

```html
		    <ul class="nav navbar-nav navbar-right">
		        <li class="loader" ng-show="nav.navSvc.isNavigating">
		            <i class="fa fa-spinner fa-spin fa-2x"></i>
		        </li>
		    </ul>
```

Add two second delay when navigating to `about` in `app.routes.js`

```javascript
			.when('/about', {
				controller: 'AboutCtrl',
				controllerAs: 'about',
				templateUrl: 'ng-app/components/about/aboutView.html',
				resolve: {
					simDelay: function($q, $timeout) {
						var deferred = $q.defer();
						$timeout(function() {
							deferred.resolve("simDelay done.");
						}, 2000);
						return deferred.promise;
					}
				}
```

... And Voila :)

![image](https://cloud.githubusercontent.com/assets/10272832/9980220/8e53146c-5f4d-11e5-9aed-12523092e2c8.png)

### Highlight selected route

Add method to navController

```javascript
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
```

Add `ng-class` directive to nav items

```html
		    <ul class="nav navbar-nav">
		        <li ng-class="{ active: nav.isCurrentPath('/home') }">
		            <a 
		            	data-toggle="collapse" 
		            	data-target="#bs-example-navbar-collapse-1.in" 
		            	href="#home">home</a>
		        </li>
		        <li ng-class="{ active: nav.isCurrentPath('/employee-list') }">
		            <a 
		            	data-toggle="collapse" 
		            	data-target="#bs-example-navbar-collapse-1.in" 
		            	href="#employee-list">employee list</a>
		        </li>
		        <li ng-class="{ active: nav.isCurrentPath('/about') }">
		            <a 
		            	data-toggle="collapse" 
		            	data-target="#bs-example-navbar-collapse-1.in" 
		            	href="#about">about</a>
		        </li>
		    </ul>
```

...And Voila...

![image](https://cloud.githubusercontent.com/assets/10272832/9980406/79c8df2e-5f55-11e5-9b4d-a03d4b21d160.png)

## Angular - Routing (ui.router)

## Angular - OData Service

## Angular - Custom Element (Directive)

## Angular - Security

## Angular - Logging & Diagnostics
