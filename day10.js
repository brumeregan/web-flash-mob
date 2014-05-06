/**
 * Created by kerkins on 05.05.14.
 */
$(document).ready(function(){
    var animations=['shake',
                    'hop'];

    function getRandom(min, max){
        return Math.floor(Math.random()* (max-min +1)) + min;
    }

    $('.sushi').click(function(){
        var sushi = this;
        var animation = animations[getRandom(0,1)];

        $(sushi).addClass(animation);

        setTimeout(function (){
            $(sushi).removeClass(animation);
        }, 2100);
    });
});