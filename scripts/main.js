if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./scripts/game.js'], function (Game) {

    var canvas = document.getElementById('canvas'),
        texture = new Image();

    texture.src = 'imgs/ball.png';
    texture.onload = function () {
        var game = new Game({
            canvas: canvas,
            texture: texture
        });
        game.start();
    };
});
