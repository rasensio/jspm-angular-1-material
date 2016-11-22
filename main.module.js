// css vendor
import 'bootstrap/css/bootstrap.css!';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css!';
import 'bootstrap-material-design/dist/css/ripples.css!';
import 'font-awesome/css/font-awesome.css!';

// js vendor
import angular from 'angular';
import 'angular-sanitize';
import 'angular-route';
import 'angular-cookies';
import 'jquery';
import 'bootstrap';
import 'bootstrap-material-design';
import 'ngalertify';

// declare app
const application = angular.module('application', [
		'ngCookies', 'ngRoute', 'ngSanitize', 'ngAlertify'
])

export default application;

// bootstrap the app
angular.element(document).ready(function () {
	$.material.init();
	return angular.bootstrap(document, [application.name]);
})


