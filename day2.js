/**
 * Created by kerkins on 23.04.14.
 */

var READY_STATUS = true;

$(document).ready(function(){



$('.click').click(function(){
    if(!READY_STATUS) return;
    var computer = Math.random();
    if(computer <=0.66){

        $('#underline').hide();
        $('#choose').append('<h2 class="status">Loser!</h2>');

        $(this).addClass("loser");
        var lose = $('#loses_amount')[0];
        lose.innerText = parseInt(lose.innerText) + 1;
        READY_STATUS = false;
    }else{
        $('#underline').hide();
        $('#choose').append('<h2 class="status">You Win!</h2>');
        $(this).attr('src', "metal-ball2.jpg");
        $(this).addClass('winner');
        var win = $('#wins_amount')[0];
        win.innerText = parseInt(win.innerText) + 1;
        READY_STATUS = false;
    }
});

});


function reset(){
    $('#underline').show();
    $('.click').attr('src', "1275328679_g-b_stern_pearl-at-9-10.jpg").removeClass('winner').removeClass('loser');
    $('.status').remove();
    READY_STATUS = true;
}
