[1mdiff --git a/README.md b/README.md[m
[1mindex f03642e..b98dd9f 100644[m
[1m--- a/README.md[m
[1m+++ b/README.md[m
[36m@@ -3,8 +3,12 @@[m [mngdash[m
 [m
 Inject [Lo-Dash](http://lodash.com/) in angular way.[m
 [m
[32m+[m[32m[![Bower version](https://badge.fury.io/bo/ngdash.svg)](http://badge.fury.io/bo/ngdash)[m
 [![Build Status](https://travis-ci.org/hgrathi/angularts-ngdash.svg?branch=master)](https://travis-ci.org/hgrathi/angularts-ngdash)[m
[31m-[![Dependency Status](https://gemnasium.com/hgrathi/angularts-ngdash.svg)](https://gemnasium.com/hgrathi/angularts-ngdash)[m
[32m+[m[32m[![Bower Dependency Status](https://www.versioneye.com/user/projects/556fcb39643934001e270000/badge.svg?style=flat)](https://www.versioneye.com/user/projects/556fcb39643934001e270000)[m
[32m+[m[32m[![node dependencies Staus](https://david-dm.org/hgrathi/angularts-ngdash.png)](https://david-dm.org/hgrathi/angualrts-ngdash)[m
[32m+[m[32m[![node devDependency Status](https://david-dm.org/hgrathi/angularts-ngdash/dev-status.svg)](https://david-dm.org/hgrathi/angularts-ngdash#info=devDependencies)[m
[32m+[m[32m<img src="//img.shields.io/gratipay/hgrathi.svg">[m
 [m
 ## Installing[m
 Install via bower[m
[1mdiff --git a/package.json b/package.json[m
[1mindex d501802..e813d66 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -7,7 +7,7 @@[m
     "test": "gulp test",[m
     "postinstall": "./node_modules/bower/bin/bower install",[m
     "_update": "npm install && npm prune && bower install && bower prune",[m
[31m-    "_init": "npm install -g gulp bower karma karma-cli phantomjs && npm run update"[m
[32m+[m[32m    "_init": "npm install -g gulp bower karma karma-cli phantomjs next-update && npm run update"[m
   },[m
   "cacheDirectories": [[m
     "node_modules",[m
[36m@@ -30,7 +30,7 @@[m
   "devDependencies": {[m
     "bower": "~1.4.1",[m
     "del": "~1.2.0",[m
[31m-    "gulp": "~3.8.11",[m
[32m+[m[32m    "gulp": "^3.8.11",[m
     "gulp-bump": "^0.3.1",[m
     "gulp-concat": "~2.5.2",[m
     "gulp-git": "^1.2.4",[m
