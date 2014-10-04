'use strict';

angular
  .module('twentyfourtyeightApp', ['Game'])
  .controller('GameController', function(GameManager) {
  	this.game = GameManager;
  });
