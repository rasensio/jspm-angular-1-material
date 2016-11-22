// app classes
import MainModule from '../main.module';
import ConsoleController from './console/console.controller';
import RouteProvider from './priv.routes';

MainModule.config(['$routeProvider', RouteProvider])
	.controller('ConsoleController', ConsoleController);