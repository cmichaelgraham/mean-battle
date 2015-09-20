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

### Add ng-view directive to main html

### Add Bootstrap menu bar to main html

### Get ngRoute

`bower install angular-route --save`

### Add ngRoute to HTML

### Configure routing in `app` module

### Highlight selected route

### Create spinner when route is loading

## Angular - Routing (ui.router)

## Angular - OData Service

## Angular - Custom Element (Directive)

## Angular - Security

## Angular - Logging & Diagnostics
