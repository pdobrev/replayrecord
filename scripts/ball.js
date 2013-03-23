if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(function () {
    var Ball = function () {

        this.image = undefined;

        this.position = {
            x: 0,
            y: 0
        };
    };

    return Ball;
});

