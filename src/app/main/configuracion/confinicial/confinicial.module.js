(function ()
{
  'use strict';
  
  angular
    .module('app.configuracion.confinicial', ['flow','ngFileUpload'])
    .config(config);
  
  /** @ngInject */
  function config($stateProvider, msApiProvider, $mdDateLocaleProvider)
  {
    // State
    $stateProvider
      .state('app.configuracion_confinicial', {
        url    : '/configuracion/confinicial',
        views  : {
          'content@app': {
            templateUrl: 'app/main/configuracion/confinicial/confinicial.html',
            controller : 'ConfinicialController as vm'
          }
        },
        resolve: {
          TextForms: function (msApi)
          {
            return msApi.resolve('textforms@get');
          }
        }
        
      });
  
    // $mdDateLocaleProvider.formatDate = function(date) {
    //   return moment(date).format('YYYY-MM-DD');
    // };
    msApiProvider.register('textforms', ['app/data/textforms/textforms.json']);
  }
})();
