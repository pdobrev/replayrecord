define(['ball'], function (Ball) {
    var World = {};
    
    World.balls = [];
    World.balls[0] = new Ball();
    World.balls[1] = new Ball();

    World.currentTimestamp = 0;
    World.width = 250;
    World.height = 250;
    World.animationTime = 5000;

    World.step = function (step) {
        if (this.currentTimestamp < this.animationTime) {
            var xPos = this.currentTimestamp / this.animationTime * this.width;

            this.balls[0].position.x = xPos;
            this.balls[0].position.y = Math.sin(2 * Math.PI / this.width * 2 * xPos) * this.height / 2 + this.height / 2;

            this.balls[1].position.x = xPos;
            this.balls[1].position.y = Math.cos(2 * Math.PI / this.width * 2 * xPos) * this.height / 2 + this.height / 2;
        }
        this.currentTimestamp += step;
    };


    World.hasMoreAnimation = function () {
        return (this.currentTimestamp < this.animationTime);
    };

    return World;
});

