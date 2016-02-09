(function(){
	angular.module("app").provider("hero",function(){
		this.$get = function () {
			var appTitle = "Synechron Hero Application 2";
			return {
				apt : appTitle
			};
		};
	});
}());
