'use strict';

// Defino clase para el router.
// Contiene la logica del manejo de las rutas.
export default class Router {
    constructor(routes) {
        this.routes = routes;
        this.appRoot = document.getElementById('app');
    }
    init() {
        var routes = this.routes;
        (function(scope, routes) { 
            window.addEventListener('hashchange',function(e) {
                scope.hasChanged(scope, routes);
            });
        })(this, routes);
        this.hasChanged(this, routes);
    }
    hasChanged(scope,routes) {
        if (window.location.hash.length > 0) {
            for (var i = 0;i < routes.length; i++) {
                var route = routes[i];
                if (route.isActiveRoute(window.location.hash.substr(1))) {
                    scope.goToRoute(route.template);
                }
            }
        } else {
            for (var i = 0;i < routes.length; i++) {
                var route = routes[i];
                if(route.isDefaultRoute) {
                    scope.goToRoute(route.template);
                }
            }
        }
    }
    goToRoute(template) {
        (function(scope) { 
            var url = 'views/' + template;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    scope.appRoot.innerHTML = this.responseText;
                }
            };
            xhttp.open('GET', url, true);
            xhttp.send();
        })(this);
    }
}