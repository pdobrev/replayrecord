if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['./scripts/game.js'], function (Game) {

    var Canvas = require('canvas'),
        fs = require('fs'),
        exec = require('child_process').exec,
        Image = Canvas.Image,
        canvas = new Canvas(300, 300),
        current = 0,
        base = '/home/mgechev/test/image',
        outputFile = '/home/mgechev/test/video.avi',
        ball = fs.readFileSync(__dirname + '/imgs/ball.png'),
        texture = new Image;

    texture.src = ball;
    var game = new Game({
        interval: 1,
        canvas: canvas,
        texture: texture,
        stepCallback: function (canvas) {
            fs.writeFileSync(base + current + '.png', canvas.toBuffer());
            current += 1;
        },
        completeCallback: function () {
            exec('ffmpeg -i ' + base + '%d.png -vcodec mpeg4 ' + outputFile);
        }
    });
    game.start();

});
