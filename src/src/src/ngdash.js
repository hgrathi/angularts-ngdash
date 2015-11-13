(function(angular) {

    'use strict';

    angular
        .module('angularts.ngdash', [])
        .provider('ngdash', ngdashProvider);

    //////////////////////////////////////////////////////////////////

    function ngdashProvider() {

        var dash = window._;

        var provider = {
            deleteGlobalReference: function() {
                delete window._;
            },
            $get: function() {
                return ngdashService(dash);
            }
        };

        return provider;
    }

    //////////////////////////////////////////////////////////////////

    function ngdashService(dash) {
        dash.isNullOrUndefined = function(value) {
            return isNullOrUndefined(dash, value);
        };
        dash.isNullOrEmpty = function(value) {
            return isNullOrEmpty(dash, value);
        };
        return dash;
    }

    //////////////////////////////////////////////////////////////////

    function isNullOrUndefined(dash, value) {
        if (dash.isUndefined(value)) {
            return true;
        }
        if (dash.isNull(value)) {
            return true;
        }
        return false;
    }

    function isNullOrEmpty(dash, value) {
        if (dash.isNullOrUndefined(value)) {
            return true;
        }
        if (dash.isFunction(value)) {
            return false;
        }
        if (dash.isString(value) && value === '') {
            return true;
        }
        if (dash.isBoolean(value)) {
            return false;
        }
        if (dash.isDate(value)) {
            return false;
        }
        if (dash.isNumber(value)) {
            return dash.isNaN(value);
        }
        if (dash.isArray(value)) {
            return value.length === 0;
        }
        if (dash.isPlainObject(value)) {
            for (var prop in value) {
                if (value.hasOwnProperty(prop)) {
                    return false;
                }
            }
            return true;
        }
        if (dash.isObject(value)) {
            return false;
        }
        return dash.isEmpty(value);
    };

})(window.angular);
