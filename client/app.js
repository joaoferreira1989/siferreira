import angular from 'angular';

angular.element(document.body).ready(function () {
    angular.bootstrap(document.body, ['sif'])
});

angular.module('sif', []);