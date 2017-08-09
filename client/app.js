import angular from 'angular';
import 'angular-route';
import 'angular-file-upload';
import { MenuModule } from './menu/menu.module';
import { ImportModule } from './import/import.module';
import { Error404Module } from './404/404.module';

angular.element(document.body).ready(function () {
    angular.bootstrap(document.body, ['sif'])
});

angular.module('sif', [
    'ngRoute',
    'angularFileUpload',
    MenuModule.name,
    ImportModule.name,
    Error404Module.name
])
    .config(['$compileProvider', function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
        $compileProvider.commentDirectivesEnabled(false);
        $compileProvider.cssClassDirectivesEnabled(false);
    }])
    .config(['$locationProvider', function ($locationProvider) {
        $locationProvider
            .html5Mode(false)
            .hashPrefix('!');
    }])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/404', {
                template: '<error-404></error-404>'
            })
            .when('/import', {
                template: '<import></import>'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);