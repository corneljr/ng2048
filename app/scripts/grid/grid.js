angular
	.module('Grid', [])
	.service('GridService', function() {
		this.grid = [];
		this.tiles = [];
		this.size = 4;
	});