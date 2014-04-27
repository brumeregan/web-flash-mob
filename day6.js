/**
 * Created by Korvin on 25.04.14.
 */
$(document).ready(
    function init(){
    var calendar = $("#calendar");
    var upper = $("#upper");
    var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    for (var i=0; i < days.length; i++)
    {
        var d = addDay(days[i]);
        upper.append(d);
    }

    var day_name = days[getCurrentDay()];
    var day = $("#"+day_name);
    day.addClass("selected_day");
    $("#bottom").addClass("selected_bottom");

});
function getCurrentDay(){
    var date = new Date();
    return date.getDay();
}
function addDay(day){
    var div = document.createElement("div");
    div.className = "day";
    div.id = day;
    div.innerText = day;
    return div;
}
