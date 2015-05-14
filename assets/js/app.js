(function(){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: 'Icosohedron',
      price: 3.74,
      description: 'a solid figure with twenty plane faces, especially equilateral triangular ones.',
      canPurchase: true,
      isSoldOut: false,
    },
    {
      name: 'Cube',
      price: 2.75,
      description: 'a six sided 3 dimensional square.',
      canPurchase: true,
      isSoldOut: false,
    }
  ];
})();
