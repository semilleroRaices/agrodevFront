(function ()
{
  'use strict';
  
  angular
    .module('app.configuracion.confobjects', ['flow','ngFileUpload'])
    .config(config);
  
  /** @ngInject */
  function config($stateProvider, msApiProvider, $mdDateLocaleProvider)
  {
    // State
    $stateProvider
      .state('app.configuracion_confobjects', {
        url    : '/configuracion/confobjects',
        views  : {
          'content@app': {
            templateUrl: 'app/main/configuracion/confobjects/confobjects.html',
            controller : 'ConfobjectsController as vm'
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
