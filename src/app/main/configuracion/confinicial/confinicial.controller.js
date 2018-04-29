(function () {
    'use strict';

    angular
        .module('app.configuracion.confinicial')
        .controller('ConfinicialController', ConfinicialController);

    /** @ngInject */
    function ConfinicialController(api, $http, FileuploadService, TextForms, ProjectService, LocalstorageService) {
      var vm = this;
      
      //Variables
      vm.textforms = TextForms;
      vm.economicSectors = [
        {id:'Agropecuario', name:'Agropecuario'}
      ];
      
      //Metodo principal para almacenar cada Step o Formulario
      vm.storeForm = function(form, msWizard){
        
        switch (form) {
          case 'formParams':
            storeParams(msWizard);
            break;
          case 'formProject':
            storeProject(msWizard);
            break;
          case 'formBaseprojects':
            storeBaseprojects(msWizard);
            break;
          case 'formObjects1':
            storeObjects1(msWizard);
                break;
        }
      };
      
      //Servicios de almacenamiento para cada Form
      function storeParams(msWizard){
        // ProjectService.store()
        //   .then(function (response) {
            msWizard.nextStep()
          // });
      }
      
      function storeProject(msWizard){
        //almacenando proyecto
        ProjectService.store(vm.formProject)
          .then(function (response) {
            LocalstorageService.set('project_id', response.data.data.clave);
            console.log(LocalstorageService.get('project_id'));
            switch (response.status){
              //Almacenando PDf de proyecto
              case 201:
                FileuploadService.uploadSingle(vm.file, response.data.data.clave)
                  .then(function (response) {
                    msWizard.nextStep()
                  });
                break;
            }gu
            // msWizard.nextStep()
          });
      }
  
      function storeBaseprojects(msWizard){
        //Almacenando PDF proyectos base
        FileuploadService.uploadMultiple(vm.files)
          .then(function (response) {
            ProjectService.showBase().then(function (response) {
              console.log(response)
            })
            // msWizard.nextStep()
          });
      }
  
      function storeObjects1(msWizard){
        //Almacenando PDF proyectos base
        (vm.files)
          .then(function (response) {
            console.log(response)
            // msWizard.nextStep()
          });
      }
      
      
      
      
      
      vm.tester = function(){
        
        $http({
          method: 'GET',
          url: 'http://127.0.0.1:8000/tester',
          // data: {"xd":"aloha"},
          // dataType: 'json',
          // headers: {
          //   "Content-Type":"application/json;charset=utf-8"
          // }
        }).then(function (e) {
          console.log(e);
        })
      };
  
      //Funciones para subida de archivos pdf
      vm.uploadFile = function () {
        console.log(vm.files);
        // FileuploadService.uploadSingle(vm.formProject)
        //   .then(function (response) {
        //     console.log(response)
        //     // msWizard.nextStep()
        //   });
        // vm.file = file;
        
        // FileuploadService.uploadSingle(file, false);
      };
  
      vm.uploadFiles = function (files) {
        vm.files = files;
        FileuploadService.uploadMultiple(files);
      };
      
    }
})();
