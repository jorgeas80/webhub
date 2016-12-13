angular
  .module('app')
  .controller('Ctrl1', function ($scope, $interval, images_happy, images_sad) {
    // Capture this context here
    var vm = this;

    vm.msg = '';
    vm.text_classes = 'text-center'

    // store the interval promise in this variable
    var promise;

    // Initial values. This should be in ngOnInit in case of components
    vm.items = [];
    vm.result = 'init';

    // starts the interval
    vm.start = function () {

      vm.result = 'running';
      vm.img = '';

      // store the interval promise
      promise = $interval(setRandomizedCollection, 100);
    };

    // stops the interval
    vm.stop = function () {

      $interval.cancel(promise);

      if (vm.items.allValuesSame()) {
        vm.result = 'win';
        vm.img = images_happy[Math.floor(Math.random() * images_happy.length)];
        vm.msg = '¡HAS GANADO! :-D';
        vm.text_classes = 'text-center text-success';
      }

      else {
        vm.result = 'lose';
        vm.img = images_sad[Math.floor(Math.random() * images_sad.length)];
        vm.msg = '¡HAS PERDIDO! :-(';
        vm.text_classes = 'text-center text-danger';
      }
    };

    // stops the interval when the scope is destroyed,
    // this usually happens when a route is changed and 
    // the ItemsController vm gets destroyed. The
    // destruction of the ItemsController scope does not
    // guarantee the stopping of any intervals, you must
    // be responsible of stopping it when the scope is
    // is destroyed.
    $scope.$on('$destroy', function () {
      vm.stop();
    });

    function setRandomizedCollection() {

      var possibleValues = ['img/tragaperras_manzana.png', 'img/tragaperras_naranja.png', 'img/tragaperras_uvas.png'];
      
      // empties the items array
      vm.items.length = 0;
      var n = 3;
      while(n--) {
        vm.items.push(possibleValues[Math.floor(Math.random() * possibleValues.length)])
      }

    }
  });
