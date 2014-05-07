/**
 * Created by kerkins on 06.05.14.
 */
$(document).ready(function(){
 var computerChoice  = getRandom();
    var choice;
   var humanChoice;

   var timer;

    function getRandom(){
        random = Math.floor(Math.random()*3 + 1);
        return random;


        return random;
    }
    switch (random){
        case 1:
            choice = "1";
            break;
        case 2:
            choice = "2";
            break;
        case 3:
            choice = "3";
            break;
    }

$("#stone").click(function(){
    humanChoice = "1";
    computerChoice = getRandom();
    changePicture();

    game(computerChoice,humanChoice);

});
$("#scissors").click(function(){
    humanChoice = "2";
    computerChoice = getRandom();
    changePicture();
    game(computerChoice,humanChoice);

});
$("#paper").click(function(){
    humanChoice ="3";
    computerChoice = getRandom();
    changePicture();
    game(computerChoice,humanChoice);

});
function changePicture(){
    if(computerChoice ==1 ){
    $("#computerPart > img").html("<img src='rock.png'/>");
    } else if(computerChoice ==2 ){
        $("#computerPart > img").html("<img src='scissors.png'/>");
    }else if(computerChoice ==3 ){
        $("#computerPart > img").html("<img src='paper.png'/>");
    }
}

function game(x, y){
   if(x == y){
       $("#center > h2").html('<h2>Tie!</h2>');
   }else if(x == "1" && y == "2"){
       $("#center > h2").html('<h2>computer wins!</h2>');
   }else if(x == "1" && y == "3"){
       $("#center > h2").html("<h2>User wins!</h2>");
   }else if(x == "2" && y == "1"){
       $("#center > h2").html("<h2>User wins!</h2>");
   } else if(x == "3" && y == "1"){
       $("#center > h2").html("<h2>Computer wins</h2>");
   }else if(x == "2" && y == "3"){
       $("#center > h2").html("<h2>Computer Wins</h2>");
   } else if(x == "3" && y == "2"){
       $("#center > h2").html("<h2>User wins!</h2>");
   }


}

})