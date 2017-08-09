import * as angular from 'angular';
import { ImportComponent } from './import.component';

export const ImportModule = angular
    .module('sif.import', [])
    .component('import', ImportComponent);