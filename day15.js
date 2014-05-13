/**
 * Created by kerkins on 13.05.14.
 */
$(document).ready(function (){

    for(var i = 0; i < 10; i++){
        $("#main").append("<div class='colors'></div>");
//        $('.colors').css('background-color', colorBackground[i]);
    }

    function changingColors(){
        return '#' + Math.random().toString(16).slice(2, 8);
    }

    $('.colors').hover(function(){
            $(this).css('background-color', changingColors());
     $(this).toggleClass('coloring');
  },
        function(){
              $(this).toggleClass('coloring');
        });

$('.colors').on('click', function (){
    var animationsArray = ['crawl', 'dangle', 'jump', 'stretch', 'flip'];

    var animation = animationsArray[Math.floor(Math.random()*5)];

    $(this).addClass(animation);

    setTimeout(function(){
        $('.colors').removeClass(animation);
    }, 4000);
});

})