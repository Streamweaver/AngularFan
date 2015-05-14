(function(){
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){
    this.tab = 1;
    this.selectedTab = function(setTab) {
      this.tab = setTab;
    }
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    }
  });

  var gems = [
    {
      name: 'Icosohedron',
      price: 20.74,
      description: 'a solid figure with twenty plane faces, especially equilateral triangular ones.',
      canPurchase: true,
      isSoldOut: false,
      img: "http://icons.iconarchive.com/icons/iconcubic/dnd-dice/128/d20-icon.png",
    },
    {
      name: 'Cube',
      price: 6.75,
      description: 'a six sided 3 dimensional square.',
      canPurchase: true,
      isSoldOut: false,
      img: "http://icons.iconarchive.com/icons/iconcubic/dnd-dice/128/d6-icon.png",
    },
    {
      name: 'Tetrahedron',
      price: 4,
      description: 'a four sided pyramid looking thing.',
      canPurchase: true,
      isSoldOut: false,
      img: "http://icons.iconarchive.com/icons/iconcubic/dnd-dice/128/d4-icon.png",
    },
    {
      name: 'Octohedron',
      price: 8.23,
      description: 'an eight sided die.',
      canPurchase: true,
      isSoldOut: false,
      img: "",
    }
  ];

  app.filter('capitalize', function() {
    return function(input, scope) {
      if (input!=null)
      input = input.toLowerCase();
      return input.substring(0,1).toUpperCase()+input.substring(1);
    }
  });
})();
