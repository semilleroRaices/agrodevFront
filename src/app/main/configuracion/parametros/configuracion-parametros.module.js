(function ()
{
    'use strict';

    angular
        .module('app.configuracion.parametros', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider)
    {
        // State
        $stateProvider
            .state('app.configuracion_parametros', {
                url    : '/configuracion/parametros',
                views  : {
                    'content@app': {
                        templateUrl: 'app/main/configuracion/parametros/parametros.html',
                        controller : 'ParametrosController as vm'
                    }
                }
            });
    }
})();