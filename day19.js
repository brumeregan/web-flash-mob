/**
 * Created by kerkins on 19.05.14.
 */
$(document).ready(function(){



    $("#submit").click(function(){
        var totalScore= getScore();
        var message;

        if(totalScore < 18*0.25){
            message = "You're definitely not an SF hipster.";
        } else if (totalScore < 18*0.5) {
            message = "You might be an SF hipster.";
        } else if (totalScore < 18*0.75) {
            message = "You're most likely an SF hipster.";
        } else {
            message = "You're a Super SF Hipster!";
        }
    });

    var your_score = "<div id='score'>You're score is ' + totalScore + '.</div>";
   message = '<div id="message">' + message + '</div>';

    $('#container').html(your_score + message);

    function getScore() {
        var score = 0;

        for (var i = 1; i < 6; i++) {
            var question = i;

            var answer = $('input[name=q' + i + ']:checked').val();

            if (answer) {
                score += parseInt(answer);
            }
        }
        return score;
    }
});

