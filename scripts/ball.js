define(function () {
    var Ball = function () {
        this.image = new Image();
        this.image.src = 'imgs/ball.png';

        this.position = {
            x: 0,
            y: 0
        };
    };

    return Ball;
});

