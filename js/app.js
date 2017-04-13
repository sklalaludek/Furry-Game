var Game = require('./game.js');

document.addEventListener("DOMContentLoaded", function() {
    var newGame = new Game();

    newGame.showCoin();
    newGame.showFurry();
    newGame.startGame();

    document.addEventListener('keydown', function(event) {
            newGame.turnFurry(event);
    });

});
