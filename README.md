ngdash
=========

This is a wrapper for the utility library [Lo-Dash](http://lodash.com/) for
Angular JS. One aim for this project is to ensure Lo-Dash doesn't have to be
left on the window, and we use Lo-Dash with Angular, in the normal depenedency
 injection manner.

## Installing
Install via bower

```bower install ngdash```

Require it into your application (after Angular)

```<script src="ngdash.min.js"></script>```

Add the module as a dependency to your app

```js
var app = angular.module('yourAwesomeApp', ['tpl.ngdash']);
```

And inject it into your controller like so!

```js
var YourCtrl = app.controller('yourController', function($scope, ngdash) {
  lodash.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
});
```