// app classes
import MainModule from '../main.module';
import RouteProvider from './pub.routes';
import LoginController from './login/login.controller';

MainModule.config(['$routeProvider', RouteProvider])
	.controller('LoginController', LoginController);