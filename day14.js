/**
 * Created by kerkins on 12.05.14.
 */
$(document).ready(function(){
    var advice = ["That's terrible! You should knock that off!",
                  "Seriously? Why don't you grow the hell up?!",
                  "Aren't you a little old for that crap?",
                  "You are bad and you should feel bad!",
                  "Gross. You are gross.",
                  "Are you going to suck all your life?",
                  "What? Who does that?!",
                  "I thought you were better than that.",
        "My disapproval is overwhelming.",
        " ಠ__ಠ ",
        "Are you freaking kidding me?",
        "NO! Bad!",
        "And when do you plan on becoming an adult?",
        "That is totally unacceptable.",
        "You should be utterly ashamed.",
        "Ugh! That's horrible!",
        "A kitten dies everytime you do that.",
        "I can't believe you are that disgusting."];


$('#submit').click(function(){

 var habit = $('#answer').val();
    if(habit == ''){
        habit = "You didn't fill the form";
    }
    else{
        habit =changingText(habit);
    }

    $('#quest').text(habit + '?');
    $('#advice').text(advice[Math.floor(Math.random()*18)]);


});

    function changingText(text){
        var startWithI = text.substr(0, 2).toUpperCase();
        var startWithMe = text.substr(0, 3).toUpperCase();
        var newText;


        if(startWithI == 'I'){
        newText = text.replace(/I /gi, "You ");
        }else if( startWithMe == "MY "){
            newText = text.replace(/My /gi, "Your ");
        } else {
            newText = "You " + text;

        }


        //what does it do?
        newText = newText.replace(/ I /gi, " you ");
        newText = newText.replace(/ my /gi, " your ");
        newText = newText.replace(/ me /gi, " you ");

        return newText;
    }

});