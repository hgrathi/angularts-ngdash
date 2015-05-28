ngdash
=========

Inject [Lo-Dash](http://lodash.com/) in angular way.

## Installing
Install via bower

```bower install ngdash```

Require it into your application (after Angular)

```<script src="ngdash.min.js"></script>```

Add the module as a dependency to your app

```js
var app = angular.module('app', ['tpl.ngdash']);
```

And inject it into your controller like so!

```js
var YourCtrl = app.controller('controller', function($scope, ngdash) {
  ngdash.indexOf(["a","b","c"], "a");
});
```

Remove global reference from window

```js
app.config(function(ngdashProvider){
  ngdashProvider.deleteGlobalReference();
})
```

Added extra function

```js
 ngdash.isNullOrUndefined()
 ngdash.isNullOrEmpty()
```
