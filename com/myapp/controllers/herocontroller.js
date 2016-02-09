(function(){
//	angular.module("app").controller("herocontroller",function($scope,datafactory){
	angular.module("app").controller("herocontroller",function($scope,dataservice,valuerecipe,constantrecipe,hero){
		
		$scope.data = dataservice.getData();
		
		$scope.message = valuerecipe.message;
		$scope.version = valuerecipe.version;

		$scope.constmessage = constantrecipe.message;
		$scope.constversion = constantrecipe.version;
		
		$scope.ht = hero.apt;
	});
}());
