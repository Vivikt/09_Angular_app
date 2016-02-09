(function(){
	angular.module("app").controller("herocontroller",function($scope,datafactory){
		
		$scope.data = datafactory.hd;

	});
}());
