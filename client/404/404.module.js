import * as angular from 'angular';
import { Error404Component } from './404.component';

export const Error404Module = angular
    .module('sif.404', [])
    .component('error404', Error404Component);