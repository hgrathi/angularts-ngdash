"use strict"

describe('angularts.ngdash module', function(){

    var ngdash;

    beforeEach(module('angularts.ngdash'))

    beforeEach(function() {
        inject(function(_ngdash_) {
            ngdash = _ngdash_;
        });
    });

    describe('ngdash service', function(){
        it('should be injectable', function(){
            expect(ngdash).toBeDefined();
        });

        it('should expose core lodash function', function(){
            expect(angular.isFunction(ngdash.take)).toBe(true);
        });

        it('should expose core lodash function', function(){
            expect(angular.isFunction(ngdash.isNullOrUndefined)).toBe(true);
        });
    });
});