export default ($scope, $location, alertify, $http) => {

	$scope.login = () => {
		alertify.log('login OK for !' + $scope.user);

		location.href = '/priv'
	}
}
