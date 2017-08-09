import * as angular from 'angular';
import { ImportComponent } from './import.component';
import ngThumb from './thumb.directive';

export const ImportModule = angular
    .module('sif.import', [])
    .directive('ngThumb', ngThumb)
    .component('import', ImportComponent);