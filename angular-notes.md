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

## Angular - First View

## Angular - Routing

## Angular - OData Service

## Angular - Custom Element (Directive)

## Angular
