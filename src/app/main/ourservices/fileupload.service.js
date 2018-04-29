(function ()
{
  'use strict';
  
  angular
    .module('fuse')
    .factory('FileuploadService', FileuploadService);
  
  /** @ngInject */
  function FileuploadService(Upload, $timeout, $rootScope, api, $q, NotificacionService)
  {
    var service = {
      uploadSingle       : uploadSingle,
      uploadMultiple : uploadMultiple
    };
    
    return service;
    
    function uploadSingle(file, clave) {
      
      var req ={};
      req.route = file;
      req.user = '1';
      req.terminal = 'pc';
      req.status = '1';
  
      return $q(function (resolve) {
        Upload.upload({
          url: 'http://127.0.0.1:8000/projects/'+clave+'/project_files',
          // file: file,
          data: req
        }).then(function (resp) {
          switch (resp.status){
            case 201:
              resolve(resp);
              // if(preview){
              //   var file64 = new Blob([resp.data.base64], {type: 'application/pdf'});
              //   var fileURL = URL.createObjectURL(file);
              //   document.querySelector("iframe").src = fileURL;
              // }
              // console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
              break;
            default:
              console.error("No se ha podido subir el Archivo");
              break;
          }
        }, function (resp) {
          console.log('Error status: ' + resp.status);
          NotificacionService.showError("No se ha podido realizar el guardado de la informacion!")
        }, function (evt) {
          // var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          // console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
      });
      
      
    }
    
    function uploadMultiple(files) {
      var req ={};
      req.route = files;
      req.user = '1';
      req.terminal = 'pc';
      req.status = '1';
      $rootScope.titulo = "Subiando Archivos";
      return $q(function (resolve) {
        Upload.upload({
          url: 'http://127.0.0.1:8000/projects/0/project_files',
          data: req
        }).then(function (response) {
          $timeout(function () {
            switch (response.status){
              case 201:
                resolve(response);
                break;
              default:
                console.error("No se ha podido subir el Archivo");
                break;
            }
          });
        }, function (response) {
          if (response.status > 0) {
            NotificacionService.showError("No se ha podido guardar los Archivos!")
          }
        }, function (evt) {
          $rootScope.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
      });
    }
    
  }
}());
