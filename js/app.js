    document.addEventListener("DOMContentLoaded", function() {
        var Game = require('./game.js');

        var newGame = new Game();

        newGame.showFurry();
        newGame.showCoin();
        newGame.startGame();

        document.addEventListener('keydown', function(event) {
                newGame.turnFurry(event);
        });

        /*var playAgain = document.querySelector('button');
        playAgain.addEventListener('click', function() {
            var overBoard = document.getElementById('over');
            overBoard.classList.add('invisible');

            var newGame = new Game();

            newGame.showFurry();
            newGame.showCoin();
            newGame.startGame();

            document.addEventListener('keydown', function(event) {
                    newGame.turnFurry(event);
            });
        });*/
});
