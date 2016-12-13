angular
  .module('app')
  .controller('Ctrl2', function() {
      // Capture this context here
      var vm = this;

      vm.obj = {
        msg: 'This is template 2'
      }

      // Your code here
    });
