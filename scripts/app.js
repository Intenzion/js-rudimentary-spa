'use strict';
import Route from './route.js';
import Router from './router.js';

(function() {
    // Inicializo codigo del cliente.
    init();
}());

// Funcion inicializadora. 
// Contiene las rutas a mostrar.
function init() {
    var router = new Router([
       new Route('home','home.html',true),
       new Route('articles','articles.html'),
       new Route('feedback','feedback.html') 
    ]);
    router.init();
}