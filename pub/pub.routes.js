/**
 * setup angular application
 */
export default ($routeProvider) => {

	$routeProvider.when('/', {
		templateUrl: 'pub/login/login.html',
		controller: 'LoginController'

	}).when('/logout', {
		templateUrl: 'partials/logout.html',
		controller: 'LoginController'

	}).otherwise({
		redirectTo: '/'
	});

}
