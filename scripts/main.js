define(['world'], function (World) {
    var stepSize = 1000 / 30;

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var gameLoop = setInterval(function () {
        if (World.hasMoreAnimation()) {
            World.step(stepSize);

            // drawing scene
            canvas.width = canvas.width;
            for (var i = 0; i < 2; i++) {
                ctx.drawImage(World.balls[i].image, World.balls[i].position.x, World.balls[i].position.y);
            }
        } else {
            clearInterval(gameLoop);
        }

    }, stepSize);

});

