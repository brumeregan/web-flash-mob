/**
 * Created by kerkins on 23.04.14.
 */

var READY_STATUS = true;

$(document).ready(function(){

    //var userChoice1 = document.getElementsByTagName('img')[0];
    //var userChoice2 = document.getElementsByTagName('img')[1];
    //var userChoice3 = document.getElementsByTagName('img')[2];


//    var userChoice = function(){
//
//if(userChoice1){
//    userChoice ="first";
//}else if(userChoice2){
//    userChoice="second";
//}else{
//    userChoice3="third";
//}
//    };


//    var computerChoice = Math.random(0, 1);
//    if(computerChoice<=0.33){
//        computerChoice="first";
//    }
//    else if(computerChoice<=0.66){
//        computerChoice="second";
//    }else{
//        computerChoice="third";
//    }
//
//
//var compare = function(choice1, choice2){
//    if(choice1===choice2){
//        alert ("WIN!");
//    }
//    else{
//        alert ("loser!");
//    }
//};


$('.click').click(function(){
    if(!READY_STATUS) return;
    var computer = Math.random();
    if(computer <=0.66){

        $('#underline').hide();
        $('#choose').append('<h1 class="status">Loser!</h1>');

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
