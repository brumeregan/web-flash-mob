/**
 * Created by kerkins on 24.04.14.
 */
$(document).ready(function(){
function random_color(){
    function rand(){
        return Math.floor(Math.random()*256).toString(16)
    }
    return "#"+rand()+rand()+rand();
}


    $('#changeBackground').click(function(){
$('#changeColor').css('background-color', random_color());
    });
})