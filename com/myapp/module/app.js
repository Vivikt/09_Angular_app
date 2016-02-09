(function(){
	angular.module("app",["ngRoute"])
	.config(function($routeProvider,constantrecipe){
		alert(constantrecipe.message);
		$routeProvider
		.when("/",{
			controller : "herocontroller",
			templateUrl : "com/myapp/views/heros.html"
		})
		.when("/movies/:hid?",{
			controller : "moviescontroller",
			templateUrl : "com/myapp/views/movies.html"
		});	
	});
}());
