describe('Game module', function() {
	describe('GameManager', function() {
		beforeEach(module('Game'));

		var gameManager;
		beforeEach(inject(function('GameManager') {
			gameManager = GameManager;
		}));

		var _gridService;
		beforeEach(module(function($provide) {
			_gridService = {
				anyCellsAvailabe = angular.noop,
				tileMatchesAvailable = angular.noop
			};

			$provide.value('GridService', _gridService);
		}));

		describe('.movesAvailable', function() {
			it('Should report true if there are cells available', function() {
				spyOn(_gridService, 'anyCellsAvailable').andReturn(true);
				spyOn(_gridService, 'tileMatchesAvailable').andReturn(false);
				expect(gameManager.movesAvailable()).toBeTruthy();
			});
			it('Should report true if there are matches available', function() {
				spyOn(_gridService, 'tileMatchesAvailable').andReturn(true);
				spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
				expect(gameManager.movesAvailable()).toBeTruthy();
			});
			it('Should report false if there are no cells nor matches available', function() {
				spyOn(_gridService, 'anyCellsAvailable').andReturn(false);
				spyOn(_gridService, 'tileMatchesAvailable').andReturn(false);
				expect(gameManager.movesAvailable()).toBeFalsy();
			});
		});
	});
});