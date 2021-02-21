'use strict';

// Defino clase para rutas.
export default class Route {
    constructor(name,template,isDefaultRoute) {
        this.name = name,
        this.template = template,
        this.isDefaultRoute = isDefaultRoute
    }

    isActiveRoute(hashedPath) {
        return hashedPath.replace('#','') === this.name;
    }
}