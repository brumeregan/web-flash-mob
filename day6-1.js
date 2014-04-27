/**
 * Created by kerkins on 27.04.14.
 */
$(document).ready(function(){
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', "Saturday"];
    for(var i = 0;i<days.length;i++)
    {

        var d = addDay(days[i]);
        $('#top').children().addClass('days').append(d);

    }
})
function addDay(day){
    var div = document.createElement("div");

    div.id = day;
    div.innerText = day;
    return div;
}