import angular from 'angular';
import homeModule from './home/home';

let componentModule = angular
    .module('component', [homeModule])
    .name;

export default componentModule
