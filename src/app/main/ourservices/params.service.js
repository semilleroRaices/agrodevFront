(function ()
{
  'use strict';
  
  angular
    .module('fuse')
    .factory('ParamService', ParamService);
  
  /** @ngInject */
  function ParamService(api, $q)
  {
    var service = {
      store       : store,
      update       : update
    };
    
    return service;
    //////////////////
    function store(params) {
      return "ok"
      // return $q(function (resolve) {
        // api.request('GET','tester', params,function (response) {
        //   resolve(response);
        // });
      // });
    }
  
    function update(params) {
      return $q(function (resolve) {
        api.request('GET','tester', params,function (response) {
          resolve(response);
        });
      });
    }
  
  }
}());
