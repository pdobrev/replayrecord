if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./world.js'], function (World) {

    var Game = function (options) {
        this._stepSize = 1000 / 30,
        this._interval = options.interval || this._stepSize,
        this._canvas = options.canvas,
        this._ctx = this._canvas.getContext('2d'),
        this._stepCallback = options.stepCallback,
        this._completeCallback = options.completeCallback;
        this._gameLoop = -1;
        World.balls[0].image = options.texture;
        World.balls[1].image = options.texture;
    };

    Game.prototype.start = function () {
        var self = this;
        this._gameLoop = setInterval(function () {
            if (World.hasMoreAnimation()) {
                World.step(self._stepSize);

                // drawing scene
                self._canvas.width = self._canvas.width;
                for (var i = 0; i < 2; i++) {
                    self._ctx.drawImage(World.balls[i].image, World.balls[i].position.x, World.balls[i].position.y);
                }
                if (typeof self._stepCallback === 'function') {
                    self._stepCallback.call(null, self._canvas);
                }
            } else {
                clearInterval(self._gameLoop);
                if (typeof self._completeCallback === 'function') {
                    self._completeCallback.call(null, self._canvas);
                }
            }
        }, this._interval);
    };

    return Game;
});
