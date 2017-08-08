import angular from 'angular';
import { MenuModule } from './menu/menu.module';

angular.element(document.body).ready(function () {
    angular.bootstrap(document.body, ['sif'])
});

angular.module('sif', [
    MenuModule.name
]);