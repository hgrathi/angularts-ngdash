"use strict"

describe('angularts.ngdash module', function(){

    var ngdash;

    beforeEach(module('angularts.ngdash'))

    beforeEach(function() {
        inject(function(_ngdash_) {
            ngdash = _ngdash_;
        });
    });

    describe('ngdash:isNullOrUndefined function', function(){
        it('should be injectable', function(){
            expect(ngdash).toBeDefined();
        });

        it('should identify null values', function(){
            var x = null;
            expect(ngdash.isNullOrUndefined(x)).toBe(true);
        });

        it('should identify undefined values', function(){
            var x;
            expect(ngdash.isNullOrUndefined(x)).toBe(true);
        });

        it('should identify emptry string values', function(){
            var x = '';
            expect(ngdash.isNullOrUndefined(x)).toBe(false);
        });

        it('should identify NaN values', function(){
            var x = NaN;
            expect(ngdash.isNullOrUndefined(x)).toBe(false);
        });

        it('should identify object values', function(){
            var x = {};
            expect(ngdash.isNullOrUndefined(x)).toBe(false);
        });

        it('should identify function values', function(){
            var x = function(){};
            expect(ngdash.isNullOrUndefined(x)).toBe(false);
        });
    });

    describe('ngdash:isNullOrEmpty function', function(){
        it('should identify emptry string values', function(){
            var x = '';
            expect(ngdash.isNullOrEmpty(x)).toBe(true);
        });

        it('should identify NaN values', function(){
            var x = NaN;
            expect(ngdash.isNullOrEmpty(x)).toBe(true);
        });

        it('should identify emptry string values', function(){
            var x = 'a';
            expect(ngdash.isNullOrEmpty(x)).toBe(false);
        });

        it('should identify NaN values', function(){
            var x = 0;
            expect(ngdash.isNullOrEmpty(x)).toBe(false);
        });

        it('should identify object values', function(){
            var x = {};
            expect(ngdash.isNullOrEmpty(x)).toBe(true);
        });

        it('should identify object values', function(){
            var x = {'a' : 2};
            expect(ngdash.isNullOrEmpty(x)).toBe(false);
        });

        it('should identify array values', function(){
            var x = [];
            expect(ngdash.isNullOrEmpty(x)).toBe(true);
        });

        it('should identify array values', function(){
            var x = ['a'];
            expect(ngdash.isNullOrEmpty(x)).toBe(false);
        });

        it('should identify function values', function(){
            var x = function(){};
            expect(ngdash.isNullOrEmpty(x)).toBe(false);
        });
    });
});
