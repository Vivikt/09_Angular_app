(function(){
	angular.module("app").controller("moviescontroller",function($scope,$routeParams,datafactory){
		$scope.data = $scope.data = datafactory.hd;
		
		$scope.movies = null;
		
		$scope.selectedHero = $routeParams.hid;
		function listMovies(){
			$scope.movies=$scope.data.heros[$scope.selectedHero-1].movieslist;
		}
		listMovies();
		
	});
}());
