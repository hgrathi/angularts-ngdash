
(function (angular) {

    'use strict';

    angular
	    .module('tpl.ngdash')
        .factory('ngdash', ngdash);

    //////////////////////////////////////////////////////////////////

    ngdash.$inject = ['$window'];
    
    function ngdash($window) {
        var dash = $window._;
        delete $window._;

        dash.isNullOrUndefined = function (value) {
            return (dash.isUndefined(value) || dash.isNull(value));
        }

        dash.isEmptyString = function (value) {
            if (dash.isNullOrUndefined(value)) return true;
            if (!dash.isString(value)) return false;
            return value === '';
        };

        return dash;
    }

})(window.angular);
