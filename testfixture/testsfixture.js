
(function(angular){

	angular
		.module('testmodule', ['angularts.ngdash'])
		.controller('testController', testController);
		
    //////////////////////////////////////////////////////////////////	
		
	testController.$inject = ['$scope', 'ngdash' ];	
	function testController($scope, ngdash){
		var self = this;
		
		var nullUndefined = [undefined, null, '', NaN, 'a', 12 ];
		var nullEmpty = [[], 0, {}];
		
		function validate(){
			self.nullUndefined = [];
			self.nullEmpty= [];
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
