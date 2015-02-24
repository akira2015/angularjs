var app = angular.module("myapp", []);

app.controller("namesController", ["$scope", function($scope) {
	$scope.names = [{
		name: 'Jani',
		country: 'Norway'
	}, {
		name: 'Hege',
		country: 'Sweden'
	}, {
		name: 'Kai',
		country: 'Denmark'
	}, {
		name: 'Akira',
		country: 'Thaland'
	}]
}]);