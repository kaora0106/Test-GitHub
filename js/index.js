/*JAVASCRIPT*/
$(function(){
    $("#banner").find("img").fadeTo(800, 0, function(){
        $(this).attr("src", "images/b2.jpg").fadeTo(500, 1);	
    })
});