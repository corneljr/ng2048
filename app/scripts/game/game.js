angular
	.module('Game', ['Grid'])
	.service('GameManager', function(GridService) {
		this.newGame = function() {};
		this.move = function() {};
		this.updateScore = function(newScore) {};
		this.movesAvailable = function() {
			return GridService.anyCellsAvailable() || GridService.tileMatchesAvailable();
		};
	});