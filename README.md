ngdash
=========

Inject [Lo-Dash](http://lodash.com/) in angular way.

[![Bower version](https://badge.fury.io/bo/ngdash.svg)](http://badge.fury.io/bo/ngdash)
[![Bower Dependency Status](https://www.versioneye.com/user/projects/556fcb39643934001e270000/badge.svg?style=flat)](https://www.versioneye.com/user/projects/556fcb39643934001e270000)
[![Build Status](https://travis-ci.org/hgrathi/angularts-ngdash.svg?branch=master)](https://travis-ci.org/hgrathi/angularts-ngdash)
[![node dependencies Staus](https://david-dm.org/hgrathi/angularts-ngdash.png)](https://david-dm.org/hgrathi/angualrts-ngdash)
[comment]:<[![node devDependency Status](https://david-dm.org/hgrathi/angularts-ngdash/dev-status.svg)](https://david-dm.org/hgrathi/angularts-ngdash#info=devDependencies)>
[![node dependencies Staus](https://img.shields.io/gratipay/hgrathi.svg)]()

## Installing
Install via bower

```bower install ngdash```

Require it into your application (after Angular)

```<script src="ngdash.min.js"></script>```

Add the module as a dependency to your app

```js
var app = angular.module('app', ['angularts.ngdash']);
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


### Development

``` npm run init```

it will install all the needed dependencies for development
