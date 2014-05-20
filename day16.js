/**
 * Created by kerkins on 13.05.14.
 */
$(document).ready(function (){
    makeCircles(30);

    var mouseX = 0, mouseY = 0;

    $(document).on('mousemove', function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });



    for (var i = 0; i < 30; i++) {
        moveDiv("#spot"+i, randomInt(8, 50));
    }
    function randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function makeCircles(num){
        for (var i =0; i < num; i++){
            var size = randomInt(3, 65);
            var color = randColor();

            $('#div').append('<div class="spot" id="spot' + i +'"></div>');
            $('#spot'+i).css(
                {backgroundColor: color,
                height: size,
                width: size}
            );
        }
    }

    function moveDiv(elm, speed) {
        var xp = 0, yp = 0;
        var loop = setInterval(function () {
            xp += (mouseX - xp) / speed;
            yp += (mouseY - yp) / speed;

            $(elm).css({left:xp, top:yp});

        }, 30);
    }

    function randColor(){
        return '#' + Math.random().toString(16).slice(2, 8);
    }
});