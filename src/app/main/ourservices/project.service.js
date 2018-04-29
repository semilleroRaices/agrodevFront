(function ()
{
  'use strict';
  
  angular
    .module('fuse')
    .factory('ProjectService', ProjectService);
  
  /** @ngInject */
  function ProjectService(api, $q)
  {
    var service = {
      store       : store,
      update       : update,
      showBase : showBase
    };
    
    return service;
    //////////////////////
    function showBase() {
      
      return $q(function (resolve) {
        api.request('GET','projects_base', '',function (response) {
          resolve(response);
        });
      });
    }
    
    function store(params) {
      params.user = "Y";
      params.startDate = "2015-01-01";
      params.endDate = "2016-04-01";
      params.isBase = "N";
      params.isEvaluated = "Y";
      params.terminal = "Y";
      params.status = "Y";
      return $q(function (resolve) {
        api.request('POST','projects', params,function (response) {
          resolve(response);
        });
      });
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
