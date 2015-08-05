var app = angular.module('moonApp', ['ngRoute']); 

app.config(function($routeProvider){

	$routeProvider

		.when('/home', {
			templateUrl: "/views/home.html",
		}) 

		.when('/views/phase', {
			templateUrl: '/views/phase.html',
			controller: 'phaseCtrl'
		})

		.when('/views/birthday', {
			templateUrl: '/views/birthday.html',
			controller: 'birthdayCtrl'
		})

		.otherwise({
			redirectTo: '/home'
		})

})



	