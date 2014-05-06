/**
 * Created by kerkins on 06.05.14.
 */
$(document).ready(function(){
    $('.four').hide();
    $('#shake').click(function(){
        getRandom("first");
        getRandom("second");
    });



function getRandom(dice){
    var rolling = Math.floor(Math.random() * 6 + 1);

    var all = $('#' + dice + ' > .cube');
        all.hide();
        switch (rolling){
            case 1:
                $('#' + dice + ' > .four').show();
                break;
            case 2:
                $('#' + dice + ' > .one, #' + dice + ' > .seven').show();
                break;
            case 3:
                $('#' + dice + ' > .one, #' + dice + ' > .four, #' + dice + ' > .seven').show();
                break;
            case 4:
                $('#' + dice + ' > .one, #' + dice + ' > .three, #' + dice + ' > .five, #' + dice + ' > .seven').show();
                break;
            case 5:
                $('#' + dice + ' > .one, #' + dice + ' > .three , #' + dice + ' > .four , #' + dice + ' > .five , #' + dice + ' > .seven').show();
                break;
            case 6:
                all.show();
                $('#' + dice + ' > .four').hide();
                break;
        }
        return rolling;
}

});