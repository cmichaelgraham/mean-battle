# mean-battle
who puts the `a` in mean?

## what is this?
there are so many frameworks, and so little time.

this repository shows building some primitive applications using [Angular](https://angularjs.org/) and [Aurelia](http://aurelia.io/)

## The Contenders

### [Angular Notes](angular-notes.md)

### [Aurelia Notes](aurelia-notes.md)

## Setting up the `mean-battle` repository

### prepare repository `package.json`
`npm init` (mostly used the defaults)

create index-angular.html
create index-aurelia.html

### install the express webserver
`npm install express --save`

### create server.js (see [starter](http://expressjs.com/starter/hello-world.html))

```javascript
var express = require('express');
var app = express();
	app.get('/', function (req, res) {
  res.send('Hello World!');
});
	var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
```

### run the expressjs webserver
`node server.js`

point browser at localhost:3000
(you will see: `Hello World!`

### add static route to `public` folder
`app.use(express.static('public'));`

### use nodemon
`npm install -g nodemon`

this allows you to see changes in `server.js` and other content without stopping and starting expressjs

so now to start expressjs, run nodemon
`nodemon server.js`

### Initialize bower
`bower init` (mostly take the defaults)

### create `.bowerrc` file
we want the bower content to be in the public folder

```javascript
{
	"directory": "public/bower_components"
}
```

### install bootstrap (and jquery)
`bower install bootstrap --save`

### create main `index.html` file

```html
<!DOCTYPE html>
<html lang="en">
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
			<h1 class="text-center">mean battle</h1>
			<p class="text-center">who put the <code>a</code> in <code>mean</code>?</p>
		</div>

  	<div class="container">
			<div class="page-header">
				<h1>The Contenders</h1>
			</div>
			<div class="list-group">
				<a class="button list-group-item" href="index-aurelia.html" target="_blank" class="button">Aurelia</a>
				<a class="button list-group-item" href="index-angular.html" target="_blank" class="button">Angular</a>
			</div>
		</div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
   	<script src="bower_components/jquery/dist/jquery.min.js"></script>

    <!-- Include all compiled plugins (below), or include individual files as needed -->
		<script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
  </body>
</html>
```

### view `index.html` in browser

![image](https://cloud.githubusercontent.com/assets/10272832/9904907/bc5b5e3a-5c3e-11e5-852b-46093f58d2f9.png)

