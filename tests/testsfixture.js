
(function(angular, undefined){

	angular
		.module('testmodule', ['tpl.ngdash'])
		.controller('testController', testController);
		
    //////////////////////////////////////////////////////////////////	
		
	testController.$inject = ['$scope', 'ngdash', ];	
	function testController(ngdash){
		var self = this;
		
		var nullUndefined = [undefined, null, '', NaN, 'a', 12 ];
		var nullEmpty = [[], 0, {}];
		
		function validate(){
			angular.forEach(nullUndefined, function(item){
				self.nullUndefined.push({
					value: item,
					result: ngdash.isNullOrUndefined(item)
				});
			});
			angular.forEach(nullEmpty, function(item){
				self.nullEmpty.push({
					value: item,
					result: ngdash.isNullOrEmpty(item)
				});
			});
		}
		validate();
	}
	
})(window.angular);
