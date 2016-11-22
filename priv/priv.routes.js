/**
 * setup angular application
 */

export default ($routeProvider) => {

	$routeProvider.when('/', {
		templateUrl: 'console/console.html',
		controller: 'ConsoleController'

	}).when('/logout', {
		templateUrl: 'partials/logout.html',
		controller: 'LoginController'

	}).otherwise({
		redirectTo: '/'
	});

}
