/**
 * Created by kerkins on 23.04.14.
 */
$(document).ready(function(){

    var userChoice1 = document.getElementsByTagName('img')[0];
    var userChoice2 = document.getElementsByTagName('img')[1];
    var userChoice3 = document.getElementsByTagName('img')[2];

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
    var i=0;

$('.click').click(function(){
    var computer = Math.random(1,0);
    i++;
    if(computer <=0.66){

        $('#underline').hide();
        $('#choose').append('<h1>Loser!</h1>');

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