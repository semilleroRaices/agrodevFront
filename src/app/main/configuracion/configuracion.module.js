(function ()
{
    'use strict';
    angular
        .module('app.configuracion', [
            'app.configuracion.parametros',
            'app.configuracion.confinicial'
        ])
        .config(config);

    /** @ngInject */
    function config(msNavigationServiceProvider)
    {
	
        // Navigation
        msNavigationServiceProvider.saveItem('configuracion', {
            title : 'CONFIGURACION',
            group : true,
            weight: 1
        });
        
        //Parametros
      msNavigationServiceProvider.saveItem('configuracion.parametros', {
        title: 'Parámetros',
        state: 'app.configuracion_parametros',
        icon: 'icon-cog-box',
        class: 'font-weight-600'
      });
      //CONFINICIAL
      msNavigationServiceProvider.saveItem('configuracion.confinicial', {
        title: 'ConfInicial',
        state: 'app.configuracion_confinicial',
        icon: 'icon-cog-box',
        class: 'font-weight-600'
      });
      

    }
})();
