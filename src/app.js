import angular from "angular";
import appComponent from "./app.component";
import componentModule from "./componentes/component";

angular
    .module('app', [componentModule])
    .component('app', appComponent)
    .name;
