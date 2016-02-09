(function(){
	//angular.module("app").controller("moviescontroller",function($scope,$routeParams,datafactory){
	angular.module("app").controller("moviescontroller",function($scope,$routeParams,dataservice,valuerecipe,constantrecipe){
		$scope.data = dataservice.getData();
		
		$scope.movies = null;
		$scope.message = valuerecipe.message;
		$scope.version = valuerecipe.version;
		
		$scope.constmessage = constantrecipe.message;
		$scope.constversion = constantrecipe.version;
		
		$scope.selectedHero = $routeParams.hid;
		console.log($scope.selectedHero);
		function listMovies(){
			$scope.movies=$scope.data.heros[$scope.selectedHero-1].movieslist;
		}
		listMovies();
		
	});
}());
