(function () {
    'use strict';

    angular
        .module('app.configuracion.parametros')
        .controller('ParametrosController', ParametrosController);

    /** @ngInject */
    function ParametrosController() {
        var vm = this;

        // Data


        // Methods
        iniAppendGrid(vm);


    }
    function iniAppendGrid(vm) {
        $('#parametros').appendGrid({
            caption: 'I N V O L U C R A D O S',
            initRows: 1,
            hideButtons: {
                moveUp: true,
                moveDown: true,
                insert: true,
                remove: true
            },
            columns: [            
                { name: 'id', display: 'id', type: 'text', ctrlCss: { width: '300px' }, ctrlAttr: { 'disabled': 'disabled' } },                            
                { name: 'name', display: 'NOMBRE', type: 'text', ctrlCss: { width: '300px' }, ctrlAttr: { 'disabled': 'disabled' } },            
                { name: 'value', display: 'VALOR', type: 'text', ctrlCss: { width: '80px' } },
                { name: 'status', display: 'ESTADO', type: 'text', ctrlCss: { width: '80px' } }
            ]   
        });
        $('#parametros').appendGrid('hideColumn', 'id');
    
    }
})();
