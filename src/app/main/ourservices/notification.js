(function ()
{
  'use strict';
  
  angular
    .module('fuse')
    .factory('NotificacionService', NotificacionService);
  
  /** @ngInject */
  function NotificacionService($mdDialog)
  {
    var service = {
      showBasic: showBasic,
      showError: showError
    };
    
    return service;
    //////////////////
    function showBasic(message) {
      alert(message)
    }
    
    function showError(message) {
      $mdDialog.show(
        $mdDialog.alert()
          .clickOutsideToClose(true)
          .parent(angular.element(document.body))
          .title('NO SE HA PODIDO REALIZAR SU PETICION')
          .textContent(message)
          .ariaLabel('ERROR DE SERVIDOR')
          .ok('Volver')
      );
    }
  }
}());
