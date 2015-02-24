var app = angular.module("myapp", []);

app.controller("personController", ["$scope", function($scope) {
	$scope.firstName = "John";
	$scope.lastName = "Doe";
}]);