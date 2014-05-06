/**
 * Created by kerkins on 29.04.14.
 */
$(document).ready(function(){
$('img').click(function(){
    var current_shadow = $(this).css('box-shadow');
    var split_Current_Shadow = current_shadow.split('px');
    var blur = split_Current_Shadow[split_Current_Shadow.length - 3];

    var spread = split_Current_Shadow[split_Current_Shadow.length - 2];
    console.log(spread);
    var new_blur = parseInt(blur) + 1;
    var new_spread = parseInt(spread) + 2;
    console.log(new_blur);
    console.log(new_spread);

    $(this).css('box-shadow', 'rgba(-1, 1, 0, 0.35) 0px 0px ' + new_blur + 'px ' + new_spread + 'px');

});

    $('#second').click(function(){
        ;
    })
})