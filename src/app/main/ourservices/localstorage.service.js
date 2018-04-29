(function ()
{
  'use strict';
  
  angular
    .module('fuse')
    .factory('LocalstorageService', LocalstorageService);
  
  /** @ngInject */
  function LocalstorageService($window)
  {
    
    return {
      set: function (key, value) {
        $window.localStorage.setItem(key,value);
      },
      get: function (key) {
        return $window.localStorage.getItem(key)
      }
    }
  }
}());
