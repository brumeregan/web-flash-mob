/**
 * Created by kerkins on 06.05.14.
 */
 $(document).ready(function(){
     $('.four').hide();

   var roll1 = $('#first');
     var roll2 = $('#second');

    $('#shake').click(function(){
        getRandomOne();
        getRandomTwo();
    });



function getRandomOne(){
 var rolling = Math.floor(Math.random() * 6 + 1);
alert(rolling);

var all = $('#first > .one,.two, .three, .four, .five, .six, .seven');
    if(rolling == 1){
        $( all).hide();
        $('#first > .four').show();
        return rolling;
    }
    if (rolling == 2){
        $(all).hide();
        $('#first > .one, .seven').show();
        return rolling;
    }
    if(rolling == 3){
        $(all).hide();
        $('#first > .one, .four, .seven').show();
        return rolling;
    }
    if(rolling == 4){
        $(all).hide();
        $('#first > .one, .three, .five, .seven').show();
        return rolling;
    }
    if(rolling == 5){
        $(all).hide();
        $('#first > .one, .three , .four , .five , .seven').show();
        return rolling;
    }
    else{
        $(all).show();
        $('#first > .four').hide();
        return rolling;
    }

}

     function getRandomTwo(){
         var rolling2 = Math.floor(Math.random() * 6 + 1);
alert(rolling2);

         var all = $('#second > .one,.two, .three, .four, .five, .six, .seven');
         if(rolling2 == 1){
             $( all).hide();
             $('#second > .four').show();
             return rolling2;
         }
         if (rolling2 == 2){
             $(all).hide();
             $('#second > .one, .seven').show();
             return rolling2;
         }
         if(rolling2 == 3){
             $(all).hide();
             $('#second > .one, .four, .seven').show();
             return rolling2;
         }
         if(rolling2 == 4){
             $(all).hide();
             $('#second > .one, .three, .five, .seven').show();
             return rolling2;
         }
         if(rolling2 == 5){
             $(all).hide();
             $('#second > .one, .three , .four , .five , .seven').show();
             return rolling2;
         }
         else{
             $(all).show();
             $('#second > .four').hide();
             return rolling2;
         }

     }
 });