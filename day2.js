/**
 * Created by kerkins on 23.04.14.
 */
$(document).ready(function(){


    var i=0;

$('.click').click(function(){
    var computer = Math.random(1,0);
    i++;
    if(computer <=0.66){

        $('#underline').hide();
        $('#choose').append('<h1>Loser!</h1>');
        $(this).attr('src','images.jpeg');

        $(this).addClass("loser");
    }else{
        $('#underline').hide();
        $('#choose').append('<h2>You Win!</h2>');
        $(this).attr('src', "metal-ball2.jpg");
        $(this).addClass('winner');

    }

    console.log(i);
});



})