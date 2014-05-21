/**
 * Created by kerkins on 20.05.14.
 */
$(document).ready(function(){
/*    var mouseX = 0, mouseY= 0;

$(document).on('mousemove', function(e){
        mouseX = e.pageX;
        mouseY = e.pageY;
    });*/
$(document).on('click', function(e){
    var random = randomInt(1, 30);


        var div= $("<div class='spots'" + random + "></div>");

        div.css({
            backgroundColor: randomColor(),
            top: e.pageY,
            left: e.pageX,
            height: random + 'px',
            width: random + 'px'});
        div.appendTo("body");


    setTimeout(function(){
        div.fadeOut('slow');
    }, 5000);
    });

    function randomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function randomColor(){
        return "#" + Math.random().toString(16).slice(2, 8);
    }

});