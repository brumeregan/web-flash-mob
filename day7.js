/**
 * Created by kerkins on 28.04.14.
 */
$(document).ready(function(){

    /*for(var i=0; i<5; i++){
        for(var j=0; j<10; j++){
            $('#main').append('<div class="divs"></div>');
        }
    }*/

   /* for(var i = 0; i < 5; i++)
        for(var j = 0; j < 10; j++)
        {
            $("#main").append(getDiv(i, j));
        }*/

for(var i=0; i<10; i++){
    $('#main').append("<tr></tr>");
    for(var j=0; j<10; j++){
        $('tbody').append("<td></td>");
    }
}
//random color
function color(){
    function rand(){
        return Math.floor(Math.random()*256).toString(16);
    }
    return "#"+rand()+rand()+rand();
}

$('td').hover(function(){
    $(this).css('background-color', color());
    $(this).toggleClass('coloring');

})

//изменение цвета overmouse
/*$('.divs').hover(function(){

    $(this).css('background-color', color()
);
    $(this).toggleClass('highlighter');

});*/

})

/*
function getDiv(x, y){
    var div = document.createElement("div");
    div.className="divs";
    div.id = x + "_" + y;
    return div;
}*/
