import * as angular from 'angular';
import { MenuComponent } from './menu.component';

export const MenuModule = angular
    .module('sif.menu', [])
    .component('menu', MenuComponent);