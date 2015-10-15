(function(){
	'use strict'; //todo: what is this

	angular
		.module('statusApp', ['firebase', 'ngMaterial', 'angular-md5', 'ui.router'])
		.config(function($statProvider, $urlRouterProvider){

			//If a route other than status is requested, go to the auth route
			$urlRouterProvider.otherwise('/auth');

			$statProvider
				.state('auth', {
					url: '/auth',
					templateUrl: 'components/auth/authView.html',
					controller: 'AuthController as auth'
				})
				.state('status', {
					url: '/status', 
					templateUrl: 'components/status/statusView.html',
					controller: 'StatusController as status'
				});
		});
})();