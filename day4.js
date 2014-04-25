/**
 * Created by kerkins on 24.04.14.
 */
$(document).ready(function(){
var paint;
$(".color").click(function getColor(){
  paint =  $(this).css('background-color');
});
$('.row').click(function change(){
    $(this).css('background-color', paint);
});

})


